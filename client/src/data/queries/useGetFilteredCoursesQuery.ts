import { useQuery } from "@tanstack/react-query";
import {Course, Department, Frame, getFiltered, Semester} from "../api/courses";

export function useGetFilteredCoursesQuery(department: string, frame: string, semester: string){
    return useQuery({
        queryKey: ['filteredCourses'],
        queryFn: async () => {
            // const response = await getFiltered(department, frame, semester);
            // return response.data.result;
            const courses: Array<Course> = [
              {
                id: 1,
                name: "Course 1",
                department: "COMPUTER_SCIENCE",
                frame: "A",
                semester: "A"

            },
                {
                    id: 2,
                    name: "Course 2",
                    department: "COMPUTER_SCIENCE",
                    frame: "A",
                    semester: "A"

                }
            ]
            return courses;
        },
        refetchOnWindowFocus: false,
        enabled: false // disable this query from automatically running
    })
}
