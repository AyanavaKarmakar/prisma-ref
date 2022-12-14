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
  /**
   * ? query to create a new post
   * ! By default, Prisma only returns scalar fields
   * ! in the result objects of a query.
   */
  // const user = await prisma.user.create({
  //   data: {
  //     name: "UserName",
  //     email: "username@gmail.com",
  //     posts: {
  //       create: {
  //         title: "Hello World!",
  //         content: "Lorem Ipsum",
  //         published: true,
  //       },
  //     },
  //   },
  // });
  // console.log(user);
  /**
   * ? query to view post records
   */
  const userWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });

  console.log(userWithPosts);
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
