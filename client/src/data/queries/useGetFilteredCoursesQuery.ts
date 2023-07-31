import { useQuery } from "@tanstack/react-query";
import {Department, Frame, getFiltered, Semester} from "../api/courses";

export function useGetFilteredCoursesQuery(department: string, frame: string, semester: string){
    return useQuery({
        queryKey: ['filteredCourses'],
        queryFn: async () => {
            const response = await getFiltered(department, frame, semester);
            return response.data.result;
        },
        refetchOnWindowFocus: false,
        enabled: false // disable this query from automatically running
    })
}