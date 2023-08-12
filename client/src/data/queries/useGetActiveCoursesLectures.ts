import {EventInput} from "@fullcalendar/core";
import {Course, CourseLight} from "../api/courses";

type Lecture = {
  id: string,
  courseId: number,
  start: Date,
  end: Date
}
const coursesActiveLectures: Array<Lecture> = [{

    id: '1',
    courseId: 1,
    start: new Date('2023-08-11T18:15:00'),
    end: new Date('2023-08-11T19:15:00'),
  },
  {
    id: '2',
    courseId: 1,
    start: new Date('2023-08-10T18:15:00'),
    end: new Date('2023-08-10T19:15:00'),
  },
  {
    id: '3',
    courseId: 2,
    start: new Date('2023-08-11T18:15:00'),
    end: new Date('2023-08-11T19:15:00'),
  },
  {
    id: '4',
    courseId: 2,
    start: new Date('2023-08-10T18:15:00'),
    end: new Date('2023-08-10T19:15:00'),
  },
];

export function useGetActiveCoursesLectures(ids: Array<number>): Array<Lecture> {
  return coursesActiveLectures.filter((lecture) => ids.includes(lecture.courseId));
}
