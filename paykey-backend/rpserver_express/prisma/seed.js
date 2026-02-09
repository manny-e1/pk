// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Mulai Seeding database dari JSON...');

  // Path ke file JSON
  const dataPath = path.join(__dirname, 'seed-data.json');

  // Cek apakah file ada
  if (!fs.existsSync(dataPath)) {
      console.error(`❌ File seed data tidak ditemukan di: ${dataPath}`);
      console.error('   Jalankan "node extract-seed.js" terlebih dahulu untuk membuat file ini.');
      process.exit(1);
  }

  // Baca file JSON
  const rawData = fs.readFileSync(dataPath, 'utf-8');
  const seedData = JSON.parse(rawData);

  // 1. Seed Amount Limits
  if (seedData.amountLimits && seedData.amountLimits.length > 0) {
      console.log(`   - Seeding ${seedData.amountLimits.length} Amount Limits...`);
      await prisma.amountLimit.createMany({
        data: seedData.amountLimits,
        skipDuplicates: true, // Penting agar tidak error jika dijalankan berulang
      });
  }

  // 2. Seed Risk Rules
  if (seedData.riskRules && seedData.riskRules.length > 0) {
      console.log(`   - Seeding ${seedData.riskRules.length} Risk Rules...`);
      await prisma.riskRule.createMany({
        data: seedData.riskRules,
        skipDuplicates: true,
      });
  }

  // 3. Seed Auth Policies
  if (seedData.authPolicies && seedData.authPolicies.length > 0) {
      console.log(`   - Seeding ${seedData.authPolicies.length} Auth Policies...`);
      await prisma.authPolicy.createMany({
        data: seedData.authPolicies,
        skipDuplicates: true,
      });
  }

  console.log('✅ Seeding completed.');
}

main()
  .catch((e) => {
      console.error(e);
      process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());