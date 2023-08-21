import {Router} from "express";
import {prismaClient} from "../prisma/client";

export const userRouter = Router();

userRouter.post("/", async (req, res) => {
  const user = await prismaClient.user.create({data: req.body});
  res.json(user);
});

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

userRouter.get("/", async (req, res) => {
  const users = await prismaClient.user.findMany()
  res.json(users);
});


