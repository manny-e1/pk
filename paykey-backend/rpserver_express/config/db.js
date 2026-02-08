// backend-express/config/db.js
require('dotenv').config(); 
const { PrismaClient } = require('@prisma/client');

// Init Prisma Client (Tanpa argumen apapun)
// Prisma akan otomatis membaca konfigurasi dari hasil generate sebelumnya
const prisma = new PrismaClient();

module.exports = prisma;