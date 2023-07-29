import {Router} from "express";
import {prismaClient} from "../prisma/client";
import { Department, Year, Semester } from "@prisma/client";
import { ApiResponse } from "../utils/response";

export const coursesRouter = Router();

coursesRouter.get("/departments", async (req, res, next) => {
    try {
        const distinctDepartmentsCourses = await prismaClient.course.findMany({
          distinct: ['department'],
          select: {
            department: true,
          },
        });
        
        const response: ApiResponse<Department[]> = {
            result: distinctDepartmentsCourses.map((course) => course.department)
        };

        return res.json(response);
    } catch (e) {
        next(e);
    }
  });

  coursesRouter.get("/frames", async (req, res) => {
    try {
      const distinctYears = await prismaClient.course.findMany({
        distinct: ['year'],
        select: {
          year: true,
        },
      });

      const response: ApiResponse<Year[]> = {
        result: distinctYears.map((course) => course.year)
      };

      return res.json(response);
    } catch (e) {

    }
  });
  coursesRouter.get("/semesters", async (req, res) => {
    try {
        const distinctSemesters = await prismaClient.course.findMany({
          distinct: ['semester'],
          select: {
            semester: true,
          },
        });
        const response: ApiResponse<Semester[]> = {
          result: distinctSemesters.map((course) => course.semester)
        };
  
        return res.json(response);
    } catch (e) {

    }
  });

