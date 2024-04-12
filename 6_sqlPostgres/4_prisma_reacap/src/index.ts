import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertuser(
  username: string,
  password: string,
  firstname: string,
  lastname: string
) {
const response= await  prisma.user.create({
    data: {
      username,
      password,
      firstname,
      lastname,
    },
  });
  console.log(response)
}
insertuser("first", "hfdjsam", "John", "doe");
