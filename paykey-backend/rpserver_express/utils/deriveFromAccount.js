/**
 * Normalizes source account details from request body into an object:
 * { name, number, bank }
 */
function deriveFromAccount(body) {
	if (!body || typeof body !== "object") return null;

	// If caller already sent JSON, accept it (and lightly sanitize).
	if (body.fromAccount && typeof body.fromAccount === "object") {
		const name =
			body.fromAccount.name != null ? String(body.fromAccount.name).trim() : "";
		const number =
			body.fromAccount.number != null
				? String(body.fromAccount.number).trim()
				: "";
		const bank =
			body.fromAccount.bank != null ? String(body.fromAccount.bank).trim() : "";
		const out = {
			name: name || null,
			number: number || null,
			bank: bank || null,
		};
		if (!out.name && !out.number && !out.bank) return null;
		return out;
	}

	// Backward-compatible flat fields.
	const name =
		body.fromAccountName != null ? String(body.fromAccountName).trim() : "";
	const label =
		body.fromAccountLabel != null ? String(body.fromAccountLabel).trim() : "";
	const displayName = name || label;
	const number =
		body.fromAccountNumber != null
			? String(body.fromAccountNumber).trim()
			: "";
	const bank =
		body.payerBank != null
			? String(body.payerBank).trim()
			: body.fromBank != null
				? String(body.fromBank).trim()
				: "";

	const out = {
		name: displayName || null,
		number: number || null,
		bank: bank || null,
	};
	if (!out.name && !out.number && !out.bank) return null;
	return out;
}

module.exports = { deriveFromAccount };
