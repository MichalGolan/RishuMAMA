import { useQuery } from "@tanstack/react-query";
import {getSemesters, Semester} from "../api/courses";

export function useGetSemestersQuery(){
    return useQuery({
        queryKey: ['semesters'],
        queryFn: async () => {
            const response = await getSemesters();
            return response.data.result;
            // return ['A'] as Semester[];
        }
    })
}
