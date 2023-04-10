const { PrismaClient } = require("@prisma/client");
const express = require("express");
const prisma = new PrismaClient();

const app = express();

app.use(express.json());

app.post("/user", async (req, res) => {
  const user = await prisma.user.create({ data: req.body });
  res.json(user);
});

app.get("/user", async (req, res) => {
  const user = await prisma.user.findFirst();
  res.json(user);
});

const port = process.env.PORT || "3000";

app.listen(port, () => {
  console.log(`Server Running at ${port} 🚀`);
});