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

userRouter.get("/", async (req, res) => {
  const users = await prismaClient.user.findMany()
  res.json(users);
});

userRouter.get("/user", async (req, res) => {
  let { email, password } = req.query;
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
      return res.json({
        error: "here"
      })
    }
    
  } catch (e) {
    return res.json({
      error: e
    })
  }
});

userRouter.post("/user", async (req, res) => {
  let { email, name, password } = req.body;
  try {
    const emailIsUsed = await prismaClient.user.findFirst({
      select: {
        email: true,
      },
      where: {
        email: email as string,
      },
    });
    if (emailIsUsed) {
      return res.json({
        message: `User already exist: ${emailIsUsed.email}`
      })
    } else if (email && name && password) {
      const newUser = await prismaClient.user.create({
        data: {
          email: email as string,
          name: name as string,
          password: password as string,
          selectedCoursesIds: ""
        },
      });
      const user: User = {email: email, name: name, password: password}
      const response: ApiResponse<User> = {
        result: user
      };
      return res.json(response);
    }
/*
      return res.json({
        message: `User added: ${newUser}`
      })
*/
  } catch (e) {
    return res.json({
      error: e
    })
  }
});

userRouter.post("/user-courses", async (req, res) => {
  let { selectedCoursesIds, userEmail } = req.body;
  console.log(`email: ${userEmail} selected ${selectedCoursesIds}`)
  const selectedCoursesString: string = JSON.stringify(selectedCoursesIds);
  try {
    const updatedUser = await prismaClient.user.update({
      where: { email: userEmail },
      data: {
        selectedCoursesIds: selectedCoursesString
      },
      
      });
      console.log(`${updatedUser} and ${updatedUser.email}`);
      return res.json({
        message: "selected courses updated successdully"
      })

    } catch (e) {
      console.log("error")
      return res.json({
        error: e
      })
    }
  return res.json({
    error: "im in backend!"
  })
});

/*
const updatedUser: User = await prisma.updateUser({
  data: {
    role: 'ADMIN',
  },
  where: {
    id: 'cjli512bd005g0a233s1ogbgy',
  },
})
*/