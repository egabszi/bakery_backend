import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const dessert = await prisma.dessert.findMany()
    console.log(dessert);
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })