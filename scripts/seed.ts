const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
        data: [
            { name: "Famous People" },
            { name: "Actors & TV Personalities" },
            { name: "Musicians" },
            { name: "Athletes" },
            { name: "Politicians" },
            { name: "Writers" },
            { name: "Artists" },
            { name: "Scientists" },
            { name: "Historical Figures" },
            { name: "Business People" },
            { name: "Streamers" },
            { name: "Gamers" },
        ],

    });

  } catch (error) {
    console.error("Error seeding default categories", error);
  } finally {
    await db.$disconnect();
  }
}

main();