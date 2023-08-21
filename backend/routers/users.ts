import {Router} from "express";
import {prismaClient} from "../prisma/client";
import { ApiResponse } from "../utils/response";

export const userRouter = Router();
export type User = {
  email:string,

  name: string,
  password: string
}

userRouter.post("/", async (req, res) => {
  const user = await prismaClient.user.create({data: req.body});
  res.json(user);
});
/*
userRouter.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  const user = await prismaClient.user.findFirst(
    {
      where: {
        id: userId
      }
    }
  );
  res.json(user);
});
*/
userRouter.get("/", async (req, res) => {
  const users = await prismaClient.user.findMany()
  res.json(users);
});

userRouter.get("/user", async (req, res) => {
  let { email, password } = req.query;
  console.log(`email ${email} name ${name} password ${password}`);
  try {
    const data = await prismaClient.user.findFirst({
      select: {
        name: true,
        email: true,
        password: true,
        
      },
      where: {
        email: email as string,
        password: password as string
      },
    });
    if (data && data.name) {
      const user: User = {name:data.name, email:data.email, password:data.password}
      const response: ApiResponse<User> = {
        result: user
      };
      return res.json(response);
      
    } else {
      // handle not signed user
    }
    
  } catch (e) {

  }
});