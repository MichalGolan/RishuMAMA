import {getLectures, Lecture} from "../api/lectures";
import {useQuery} from "@tanstack/react-query";

// type Lecture = {
//   id: string,
//   courseId: number,
//   start: Date,
//   end: Date
// }
//
// const coursesActiveLectures: Array<Lecture> = [{
//
//     id: '1',
//     courseId: 1,
//     start: new Date('2023-08-13T18:15:00'),
//     end: new Date('2023-08-13T19:15:00'),
//   },
//   {
//     id: '2',
//     courseId: 1,
//     start: new Date('2023-08-13T18:15:00'),
//     end: new Date('2023-08-13T19:15:00'),
//   },
//   {
//     id: '3',
//     courseId: 2,
//     start: new Date('2023-08-13T18:15:00'),
//     end: new Date('2023-08-13T19:15:00'),
//   },
//   {
//     id: '4',
//     courseId: 2,
//     start: new Date('2023-08-13T18:15:00'),
//     end: new Date('2023-08-13T19:15:00'),
//   },
// ];

export function useGetActiveCoursesLecturesQuery(ids: Array<number>) {
  return useQuery({
    queryKey: ['active-courses-lectures'],
    queryFn: async () => {
      const response = await getLectures(ids);
      return response.data.result;
    },
  })
  //return coursesActiveLectures.filter((lecture) => ids.includes(lecture.courseId));
}
