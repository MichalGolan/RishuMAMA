const { PrismaClient } = require("@prisma/client");
const express = require("express");
const cors = require("cors");

const prisma = new PrismaClient();

const app = express();

app.use(express.json());
app.use(cors());

app.post("/user", async (req, res) => {
  const user = await prisma.user.create({ data: req.body });
  res.json(user);
});

app.get("/user", async (req, res) => {
  const user = await prisma.user.findFirst(
    {where:{
    id: req.session.userId
  }}
  );
  res.json(user);
});


app.get("/all-users", async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users);
});


const port = process.env.PORT || "3000";

app.listen(port, () => {
  console.log(`Server Running at ${port} 🚀`);
});