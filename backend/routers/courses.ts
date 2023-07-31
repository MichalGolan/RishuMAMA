import {Router} from "express";
import {prismaClient} from "../prisma/client";
import {Department, Year, Semester, Course} from "@prisma/client";
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

coursesRouter.get("/filtered", async (req, res) => {

    let { department, semester, frame } = req.query;

    try {
        const filteredCourses = await prismaClient.course.findMany({
            where: {
                semester: getSemesterDB(semester as string),
                year: getYearDB(frame as string),
                department: getDepartmentDB(department as string)
            },
        });
        const response: ApiResponse<Course[]> = {
            result: filteredCourses
        };

        return res.json(response);
    } catch (e) {

    }
});


function getDepartmentDB(dep: string): Department {
    const mapping: Record<string, Department> = {
        "COMPUTER_SCIENCE": Department.COMPUTER_SCIENCE,
        "PSYCHOLOGY": Department.PSYCHOLOGY
    };

    return mapping[dep] || Department.COMPUTER_SCIENCE;
}


function getYearDB(frame: string): Year {
    const mapping: Record<string, Year> = {
        "A": Year.A,
        "B": Year.B,
        "C": Year.C,
        "OPTIONAL_COURSES": Year.OPTIONAL_COURSES
    };

    return mapping[frame] || Year.OPTIONAL_COURSES;
}

function getSemesterDB(sem: string): Semester {
    const mapping: Record<string, Semester> = {
        "A": Semester.A,
        "B": Semester.B,
        "SUMMER": Semester.SUMMER
    };

    return mapping[sem] || Semester.A;
}