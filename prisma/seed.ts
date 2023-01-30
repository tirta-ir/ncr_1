// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const post1 = await prisma.article.upsert({
    where: {ncrNo: 'b'},
    update: {},
    create: {
      ncrNo: 'b',
      auditNo: 'b',
      issuedAt: 'c',
      respon: 'd',
      auditType: 'e',
      conditionRef: 'f',
      level: 1,
      problem: true,
      due: 'xx',
      condition: 'xx',
      originator: 'xx',
      send:'xx',
      accBy:'xx',
      accDate:'xx',
    },
  });

  console.log({ post1 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });