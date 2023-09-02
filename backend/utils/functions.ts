import { Course } from "@prisma/client";
import { FECourse } from "../routers/users";

export function setFeSelectedCourses(selectedCourses: Course[]) : FECourse[] {
    let feCourses: FECourse[] = [];
    selectedCourses.forEach((course) => {
        feCourses.push({...course, frame:course.year})
    })

    return feCourses;
}