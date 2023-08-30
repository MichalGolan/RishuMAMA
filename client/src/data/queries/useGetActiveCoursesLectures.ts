import {DBLectureToFELecture, getLectures, Lecture} from "../api/lectures";
import {useQuery} from "@tanstack/react-query";

export function useGetActiveCoursesLecturesQuery(ids: Array<number>) {
  return useQuery({
    queryKey: ['active-courses-lectures'],
    queryFn: async () => {
      const response = await getLectures(ids);
      return response.data.result?.map(DBLectureToFELecture);
    },
  })
}
