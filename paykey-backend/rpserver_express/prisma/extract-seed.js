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
        const rawAmountLimits = await prisma.amountLimit.findMany();
        const amountLimits = cleanData(rawAmountLimits);
        console.log(`📦 Ditemukan ${amountLimits.length} Amount Limits`);
        const rawRiskRules = await prisma.riskRule.findMany();
        const riskRules = cleanData(rawRiskRules);
        console.log(`📦 Ditemukan ${riskRules.length} Risk Rules`);

        const rawAuthPolicies = await prisma.authPolicy.findMany();
        const authPolicies = cleanData(rawAuthPolicies);
        console.log(`📦 Ditemukan ${authPolicies.length} Auth Policies`);

        const raWrp = await prisma.rp.findMany();
        const rp = cleanData(raWrp);
        console.log(`📦 Ditemukan ${rp.length} RP Entries`);

        const seedData = {
            amountLimits,
            riskRules,
            authPolicies,
            rp
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