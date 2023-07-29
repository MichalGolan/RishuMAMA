import { useQuery } from "@tanstack/react-query";
import { getDepartments } from "../api/courses";

export function useGetDepartmentsQuery(){
    return useQuery({
        queryKey: ['departments'],
        queryFn: async () => {
            const response = await getDepartments();
            return response.data.result;
        }
    })
}