import { useQuery } from "@tanstack/react-query";
import {Frame, getFrames} from "../api/courses";

export function useGetFramesQuery(){
    return useQuery({
        queryKey: ['frames'],
        queryFn: async () => {
            const response = await getFrames();
            return response.data.result;
            // return ['A'] as Frame[];
        }
    })
}
