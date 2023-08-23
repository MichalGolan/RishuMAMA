import {postUserCourseSelection} from "../api/users";
import {useQuery} from "@tanstack/react-query";

export function usePostUserCourseSelectionQuery(selectedCoursesIds: Array<number>, userEmail: string) {
    return useQuery({
      queryKey: ['update-user-selection'],
      queryFn: async () => {
        const response = await postUserCourseSelection(selectedCoursesIds, userEmail);
        return response.data.result;
      },
      refetchOnWindowFocus: false,
        enabled: false // disable this query from automatically running
    })
}