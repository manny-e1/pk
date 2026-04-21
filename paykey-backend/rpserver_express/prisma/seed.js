const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Mulai Seeding database dari JSON...');

  const dataPath = path.join(__dirname, 'seed-data.json');

  if (!fs.existsSync(dataPath)) {
      console.error(`❌ File seed data tidak ditemukan di: ${dataPath}`);
      console.error('   Jalankan "node extract-seed.js" terlebih dahulu untuk membuat file ini.');
      process.exit(1);
  }

  const rawData = fs.readFileSync(dataPath, 'utf-8');
  const seedData = JSON.parse(rawData);

  if (seedData.amountLimits && seedData.amountLimits.length > 0) {
      console.log(`   - Seeding ${seedData.amountLimits.length} Amount Limits...`);
      await prisma.amountLimit.createMany({
        data: seedData.amountLimits,
        skipDuplicates: true,
      });
  }

  if (seedData.riskRules && seedData.riskRules.length > 0) {
      console.log(`   - Seeding ${seedData.riskRules.length} Risk Rules...`);
      await prisma.riskRule.createMany({
        data: seedData.riskRules,
        skipDuplicates: true,
      });
  }

  if (seedData.authPolicies && seedData.authPolicies.length > 0) {
      console.log(`   - Seeding ${seedData.authPolicies.length} Auth Policies...`);
      await prisma.authPolicy.createMany({
        data: seedData.authPolicies,
        skipDuplicates: true,
      });
  }

  if (seedData.rp && seedData.rp.length > 0) {
      console.log(`   - Seeding ${seedData.rp.length} RP Entries...`);
      await prisma.rp.createMany({
        data: seedData.rp,
        skipDuplicates: true,
      });
  }

  if (seedData.apiClients && seedData.apiClients.length > 0) {
      console.log(`   - Seeding ${seedData.apiClients.length} api clients Entries...`);
      await prisma.apiClient.createMany({
        data: seedData.apiClients,
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