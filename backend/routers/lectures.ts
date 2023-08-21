import {Router} from "express";
import {prismaClient} from "../prisma/client";
import {ApiResponse} from "../utils/response";
import {Lecture} from "@prisma/client";

export const lectureRouter = Router();

lectureRouter.get("/", async (req, res) => {
    return res.json({
        message: "hello get /lectures",
    })
})

lectureRouter.post("/", async (req, res) => {
    let courseIds = req.body.courseIds;

    try {
        const activeLectures = await prismaClient.lecture.findMany({
            where: {
                courseId: { in: courseIds }
            },
        });
        const response: ApiResponse<Lecture[]> = {
            result: activeLectures
        };

        return res.json(response);
    } catch (e) {

    }
});