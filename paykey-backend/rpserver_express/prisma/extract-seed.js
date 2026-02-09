const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

function cleanData(dataArray) {
    return dataArray.map(item => {
        const { id, createdAt, updatedAt, ...rest } = item;
        return rest;
    });
}

async function main() {
    console.log('🔄 Mulai mengambil data dari database...');

    try {
        // 1. Ambil Amount Limits
        const rawAmountLimits = await prisma.amountLimit.findMany();
        const amountLimits = cleanData(rawAmountLimits);
        console.log(`📦 Ditemukan ${amountLimits.length} Amount Limits`);
        // 2. Ambil Risk Rules
        const rawRiskRules = await prisma.riskRule.findMany();
        const riskRules = cleanData(rawRiskRules);
        console.log(`📦 Ditemukan ${riskRules.length} Risk Rules`);

        // 3. Ambil Auth Policies
        const rawAuthPolicies = await prisma.authPolicy.findMany();
        const authPolicies = cleanData(rawAuthPolicies);
        console.log(`📦 Ditemukan ${authPolicies.length} Auth Policies`);

        // 4. Susun Data
        const seedData = {
            amountLimits,
            riskRules,
            authPolicies
        };

        const outputPath = path.join(__dirname, 'seed-data.json');
        fs.writeFileSync(outputPath, JSON.stringify(seedData, null, 2));
        
        console.log(`✅ Sukses! Data tersimpan di: ${outputPath}`);

    } catch (error) {
        console.error("❌ Gagal mengambil data:", error);
    } finally {
        await prisma.$disconnect();
    }
}

main();