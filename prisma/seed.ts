import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create default users
  await prisma.user.createMany({
    data: [
      { id: 'user1', name: 'Harsh' },
      { id: 'user2', name: 'Priyanshu' },
    ],
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 