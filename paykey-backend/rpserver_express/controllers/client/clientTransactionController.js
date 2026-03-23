const prisma = require("../../config/db");
const javaClient = require("../../services/JavaAuthClient");
const { createRichAuthLog } = require("../../utils/richLogger");
const { customAlphabet } = require("nanoid");
const { getNetworkInfo } = require("../../utils/geoIpService");

const RiskEngine = require("../../utils/riskEngine");
const PolicyEngine = require("../../utils/authPolicies");

const generatePaymentId = () =>
  `PAY_TX_${customAlphabet("0123456789ABCDEF", 10)()}`;

function getEventDescription(status) {
  switch (status) {
    case "APPROVED":
      return "Payment Risk Approved";
    case "BLOCKED":
      return "Payment Denied";
    case "CHALLENGED":
      return "Approval Requested";
    default:
      return "Payment Initiated";
  }
}

exports.initiateTransaction = async (req, res) => {
  const {
    mobile,
    cifNumber,
    amount,
    currency,
    beneficiaryAccount,
    merchantName,
    description,
    type,
    telemetry,
    userId,
  } = req.body;

  try {
    if (!mobile || !cifNumber || !amount || !currency) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    let user = null;
    if (userId) {
      user = await prisma.user.findUnique({ where: { id: userId } });
    } else {
      user = await prisma.user.findUnique({
        where: { mobile: mobile.toLowerCase() },
      });
    }

    if (!user || user.cifNumber !== cifNumber) {
      return res.status(401).json({ error: "User not found or CIF mismatch" });
    }
    if (!mobile || !cifNumber || !amount || !currency) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    if (user.status === "suspended") {
      await createRichAuthLog(req, user, {
        eventType: "Transaction Blocked",
        status: "FAILED",
        authMethod: "TRANSACTION",
        message: "Transaction blocked due to suspended account",
        data: {
          amount: Number(amount),
          tags: [{ label: "Account Suspended", class: "error" }],
        },
      });
      return res
        .status(403)
        .json({ error: "Account Suspended: Transactions are blocked." });
    }
    const channel = req.apiClient ? req.apiClient.channel : "MOBILE";
    const rawIp =
      req.headers["cf-connecting-ip"] ||
      req.headers["x-forwarded-for"] ||
      req.socket.remoteAddress ||
      req.ip;
    const ipAddress = rawIp ? rawIp.split(",")[0].trim() : "127.0.0.1";

    const segment =
      user.companyName || user.role === "ADMIN" ? "CORPORATE" : "CONSUMER";
    const netInfo = getNetworkInfo(ipAddress);
    let countryCode = netInfo.country || "UN";

    const riskContext = {
      userId: user.id,
      email: user.email,
      userSegment: segment,
      channel: channel,
      amount: Number(amount),
      currency: currency.toUpperCase(),
      ipAddress: ipAddress,
      countryCode: countryCode,
      deviceId: telemetry?.device_model || "unknown",
      beneficiaryAccount: beneficiaryAccount || null,
      merchantName: merchantName || null,
      telemetry: telemetry || {},
    };

    const riskResult = await RiskEngine.calculateRisk(riskContext);
    console.log(
      `[TRX INIT] User: ${user.email} | Trx: ${currency} ${amount} | Risk Score: ${riskResult.score}`,
    );

    const policyResult = await PolicyEngine.evaluateAuthPolicy({
      segment: segment,
      channel: channel,
      action: "TRANSACTION",
      riskScore: riskResult.score,
    });

    const policyDecision = policyResult.decision;
    const transactionDraft = {
      amount,
      currency,
      beneficiaryAccount,
      merchantName,
      description,
      type,
    };
    const trackingId = generatePaymentId();
    let responseMessage = "Transaction Auto-Approved";

    const lockoutTime = new Date(
      Date.now() - policyDecision.metadata.lockoutDuration * 1000,
    );
    const failedAttempts = await prisma.authLog.count({
      where: {
        email: user.email,
        status: "FAILED",
        createdAt: { gte: lockoutTime },
      },
    });

    if (failedAttempts >= policyDecision.metadata.maxAttempts) {
      policyDecision.status = "BLOCKED";
      responseMessage = `Security Lockout: Too many failed attempts. Please try again later.`;
      riskResult.score = 100;
      riskResult.factors.push({
        label: "Brute-Force Lockout",
        class: "critical",
      });
    }

    const isNewDevice = riskResult.factors.some(
      (f) =>
        (typeof f === "object" && f.label === "New Device") ||
        f === "New Device",
    );

    if (
      policyDecision.status !== "BLOCKED" &&
      policyDecision.metadata.knownDeviceRequired &&
      isNewDevice
    ) {
      policyDecision.status = "BLOCKED";
      responseMessage = `Security Policy Block: Transactions are not allowed from unrecognized devices.`;
      riskResult.score = 100;
      riskResult.factors.push({
        label: "Untrusted Device Blocked",
        class: "critical",
      });
    }

    if (policyDecision.status !== "BLOCKED") {
      if (
        riskResult.score >= 100 ||
        riskResult.isBlockedByAmount ||
        policyDecision.status === "REJECTED"
      ) {
        policyDecision.status = "BLOCKED";
        responseMessage = "Transaction Blocked: Critical Risk or Exceeds Limit";
      } else {
        const policyMethods = policyDecision.allowedMethods || [];
        const amountMethods = riskResult.amountMandatedMethods || [];
        let chainedMethods = [];

        if (amountMethods.length > 0) chainedMethods.push(...amountMethods);
        if (policyMethods.length > 0) chainedMethods.push(...policyMethods);

        if (chainedMethods.length > 0) {
          policyDecision.status = "CHALLENGED";
          responseMessage = "Multi-Step Authentication Required";
          policyDecision.allowedMethods = chainedMethods;
        }
      }
    }

    const factorTags = (riskResult.factors || []).map((f) => {
      if (typeof f === "object" && f.label)
        return { label: String(f.label), class: f.class || "warning" };
      return { label: String(f), class: "warning" };
    });

    const policyTags = (policyDecision.tags || []).map((t) => {
      if (typeof t === "object" && t.label)
        return { label: String(t.label), class: t.class || "info" };
      return { label: String(t), class: "info" };
    });

    const levelColor =
      riskResult.level === "CRITICAL" || riskResult.level === "HIGH"
        ? "critical"
        : riskResult.level === "MEDIUM"
          ? "warning"
          : "success";

    const scoreColor =
      riskResult.score >= 70
        ? "critical"
        : riskResult.score >= 30
          ? "warning"
          : "success";

    const combinedTags = [
      { label: `${amount} ${currency.toUpperCase()}`, class: "info" },
      { label: `Level: ${riskResult.level}`, class: levelColor },
      { label: `Score: ${riskResult.score}`, class: scoreColor },
      ...factorTags,
      ...policyTags,
    ];

    const baseLogData = {
      paymentId: trackingId,
      telemetry: telemetry || {},
      amount: Number(amount),
      currency: currency.toUpperCase(),
      merchant: merchantName || beneficiaryAccount || "Unknown",
      tags: combinedTags,
      factors: riskResult.breakdown,
      riskScore: riskResult.score,
    };

    const finalEventType = getEventDescription(policyDecision.status);

    if (policyDecision.status === "APPROVED") {
      await createRichAuthLog(req, user, {
        eventType: finalEventType,
        status: "APPROVED",
        message: responseMessage,
        data: baseLogData,
      });
      return res.json({
        status: "ready_to_execute",
        transactionId: trackingId,
        riskScore: riskResult.score,
        data: transactionDraft,
      });
    } else if (policyDecision.status === "CHALLENGED") {
      const challengeRes = await javaClient.getUnifiedChallenge();
      await createRichAuthLog(req, user, {
        eventType: finalEventType,
        status: "CHALLENGED",
        message: responseMessage,
        data: {
          ...baseLogData,
          requestedMethods: policyDecision.allowedMethods,
        },
      });
      return res.json({
      status: "challenge_required",
      transactionId: trackingId,
      riskScore: riskResult.score,
      challenge: challengeRes.challenge || challengeRes,
      allowedMethods: policyDecision.allowedMethods,
      requirements: policyDecision.requirements,
      policySettings: {
        userVerification: policyDecision.metadata?.userVerification || 'preferred',
        txnSigning: policyDecision.metadata?.txnSigning || false,
        knownDeviceRequired: policyDecision.metadata?.knownDevice || false,
        maxAttempts: policyDecision.metadata?.maxAttempts || 3,
        lockoutDuration: policyDecision.metadata?.lockoutDuration || 60,
        totalTimeout: policyDecision.metadata?.totalTimeout || 120
      },
      message: "Multi-Step Authentication Required",
    });
    } else {
      await createRichAuthLog(req, user, {
        eventType: finalEventType,
        status: "BLOCKED",
        message: responseMessage,
        data: baseLogData,
      });
      return res
        .status(403)
        .json({ error: responseMessage, riskScore: riskResult.score });
    }
  } catch (err) {
    console.error("Init Trx Error:", err);
    res.status(500).json({ error: "Transaction Initialization Failed" });
  }
};


exports.executeTransaction = async (req, res) => {
  const {
    mobile,
    cifNumber,
    amount,
    currency,
    beneficiaryAccount,
    merchantName,
    description,
    type,
    status,
    riskScore,
    riskLevel,
    deviceId,
    userId,
  } = req.body;

  if (deviceId) {
    const userKey = await prisma.userKey.findFirst({
      where: {
        OR: [
          { credentialId: deviceId },
          { id: isNaN(deviceId) ? undefined : parseInt(deviceId) },
        ],
      },
    });

    if (userKey) {
      const keyStatus = (userKey.status || "").toLowerCase();
      if (keyStatus === "suspended" || keyStatus === "revoked") {
        return res
          .status(403)
          .json({ error: `Transaction blocked: Device is ${keyStatus}` });
      }
    }
  }

  try {

    const user = await prisma.user.findUnique({
      where: { id: userId }, 
    });

    if (!user || user.cifNumber !== cifNumber) {
      return res.status(401).json({ error: "User not found or CIF mismatch" });
    }

    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
    const recentLogs = await prisma.authLog.findMany({
      where: {
        email: user.email,
        status: "CHALLENGED",
        createdAt: { gte: fiveMinutesAgo },
      },
      orderBy: { createdAt: "desc" },
      take: 1,
    });

    let finalTransactionId = generatePaymentId();

    const newTrx = await prisma.transaction.create({
      data: {
        id: finalTransactionId,
        transactionNo: finalTransactionId,
        userId: user.id,
        type: type || "TRANSFER",
        amount: Number(amount),
        currency: currency || "MYR",
        toAccount: beneficiaryAccount || merchantName || "Unknown",
        merchantName: merchantName || null,
        description:
          description || `Trx to ${beneficiaryAccount || merchantName}`,
        status: status || "SUCCESS",
        authResult: "SUCCESS",
        riskScore: riskScore || 0,
        riskLevel: riskLevel || "LOW",
        timestamp: new Date(),
      },
    });

    if (recentLogs.length > 0) {
      const targetLog = recentLogs[0];
      let jsonColumn = "data";
      if (targetLog.riskTags !== undefined) jsonColumn = "riskTags";
      else if (targetLog.metadata !== undefined) jsonColumn = "metadata";

      const existingJson =
        typeof targetLog[jsonColumn] === "object" ? targetLog[jsonColumn] : {};
      const oldTags = existingJson.tags || [];

      const newTags = [
        ...oldTags.map((t) =>
          t.class === "warning" ? { ...t, class: "info" } : t,
        ),
        { label: "Step-Up Verified", class: "success" },
      ];

      await prisma.authLog.update({
        where: { id: targetLog.id },
        data: {
          status: status === "SUCCESS" ? "SUCCESS" : "FAILED",
          eventType: "Payment Risk Approved",
          [jsonColumn]: {
            ...existingJson,
            paymentId: finalTransactionId,
            transactionNo: finalTransactionId,
            tags: newTags,
            message: "Transaction executed and verified successfully",
            riskScore: riskScore || existingJson.riskScore || 0,
          },
        },
      });
    } else {
      const tagColor =
        riskScore >= 70 ? "critical" : riskScore >= 30 ? "warning" : "info";
      await createRichAuthLog(req, user, {
        eventType: "Payment Risk Approved",
        status: status || "SUCCESS",
        message: "Transaction executed smoothly",
        data: {
          paymentId: newTrx.id,
          transactionNo: newTrx.transactionNo,
          merchant: merchantName || beneficiaryAccount,
          amount: Number(amount),
          currency: currency,
          riskScore: riskScore || 0,
          tags: [
            { label: `${amount} ${currency.toUpperCase()}`, class: "success" },
            { label: `Score: ${riskScore || 0}`, class: tagColor },
          ],
        },
      });
    }

    res.json({
      success: true,
      message: "Transaction Record Saved and Log Updated",
      data: {
        transactionId: newTrx.id,
        transactionNo: newTrx.transactionNo,
        recordedStatus: newTrx.status,
      },
    });
  } catch (err) {
    console.error("Execute Transaction Error:", err);
    res.status(500).json({ error: "Failed to record transaction history" });
  }
};
