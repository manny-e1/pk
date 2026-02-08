const PAYKEY_SERVER = process.env.PAYKEY_SERVER_URL || 'http://localhost:8080';
const BASIC_USER = 'admin';
const BASIC_PASS = 'adminpass';
const BASIC_AUTH = 'Basic ' + Buffer.from(`${BASIC_USER}:${BASIC_PASS}`).toString('base64');

module.exports = { PAYKEY_SERVER, BASIC_AUTH };