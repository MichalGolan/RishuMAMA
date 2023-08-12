
import cors from 'cors';
import express, {NextFunction, Request, Response} from 'express';
import {userRouter} from "./routers/users";
import {coursesRouter} from "./routers/courses";
import { errorHandler } from './middlewares/error.middleware';
import * as path from 'path'
const app = express();

app.use(express.json());
app.use(cors());

//routers
app.use('/users', userRouter);

app.use('/courses', coursesRouter);

app.get('*', (req, res) => {
  console.log('sending file');
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


const port = process.env.PORT || "3000";

app.listen(port, () => {
  console.log(`Server Running at ${port} 🚀`);
});

app.use(errorHandler);
