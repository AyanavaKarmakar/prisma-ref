import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 ** Write Prisma Client queries here
 */
async function main() {
  // ? query for creating a new user
  const user = await prisma.user.create({
    data: {
      name: "John",
      email: "johndoe@gmail.com",
    },
  });

  console.log(user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
