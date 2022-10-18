import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 ** Write Prisma Client queries here
 */
async function main() {
  /**
   * ? query for creating a new user
   */
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Alice",
  //     email: "alice@gmail.com",
  //   },
  // });
  // console.log(user);
  /**
   * ? query to retrieve all user records
   */
  // const users = await prisma.user.findMany();
  // console.log(users);
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
