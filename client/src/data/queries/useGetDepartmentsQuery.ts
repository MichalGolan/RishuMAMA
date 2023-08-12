import { useQuery } from "@tanstack/react-query";
import {Department, getDepartments} from "../api/courses";

export function useGetDepartmentsQuery(){
    return useQuery({
        queryKey: ['departments'],
        queryFn: async () => {
            // const response = await getDepartments();
            // return response.data.result;
            return ['COMPUTER_SCIENCE'] as Department[];
        }
    })
}
