const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // 1. Seed Amount Limits (Sesuai ThresholdTable.tsx)
  await prisma.amountLimit.createMany({
    data: [
      { segment: 'DEFAULT', currency: 'MYR', minAmount: 10, maxAmount: 5000, dailyLimit: 10000 },
      { segment: 'VIP', currency: 'MYR', minAmount: 100, maxAmount: 50000, dailyLimit: 100000 },
      { segment: 'NEW_USER', currency: 'MYR', minAmount: 5, maxAmount: 1000, dailyLimit: 2000 },
    ],
    skipDuplicates: true,
  });

  // 2. Seed Risk Rules (Sesuai RiskTable.tsx)
  await prisma.riskRule.createMany({
    data: [
      { ruleCode: 'VELOCITY_CHECK', name: 'Velocity Check (5 mins)', description: 'Multiple transactions in short time', weight: 30 },
      { ruleCode: 'NEW_DEVICE', name: 'New Device Detected', description: 'Device never seen before', weight: 50 },
      { ruleCode: 'FOREIGN_IP', name: 'Foreign IP Address', description: 'IP from different country', weight: 20 },
      { ruleCode: 'LARGE_AMOUNT', name: 'Large Amount (> 5k)', description: 'Transaction value deviation', weight: 40 },
    ],
    skipDuplicates: true,
  });

  // 3. Seed Auth Policies (Sesuai Auth Policies Page)
  await prisma.authPolicy.createMany({
    data: [
      { name: 'Critical Risk Block', condition: 'RISK_SCORE >= 80', action: 'BLOCK', priority: 1 },
      { name: 'High Risk Challenge', condition: 'RISK_SCORE >= 50', action: 'CHALLENGE', priority: 2 },
      { name: 'New Device Verify', condition: 'RULE_HIT:NEW_DEVICE', action: 'CHALLENGE', priority: 3 },
      { name: 'Standard Allow', condition: 'DEFAULT', action: 'ALLOW', priority: 99 },
    ],
    skipDuplicates: true,
  });

  console.log('Seeding completed.');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());