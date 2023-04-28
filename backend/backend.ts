
import cors from 'cors';
import express, {NextFunction, Request, Response} from 'express';
import {userRouter} from "./routers/users";

const app = express();

app.use(express.json());
app.use(cors());

app.use('/users', userRouter);

const port = process.env.PORT || "3000";

app.listen(port, () => {
  console.log(`Server Running at ${port} 🚀`);
});

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    message: "general error",
  });
});
