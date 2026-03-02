
const { customAlphabet } = require('nanoid');
const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nanoid = customAlphabet(alphabet, 12);
const generateUserId = () => `USR_${nanoid()}`;
module.exports = { generateUserId };