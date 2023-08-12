import { Course } from "./courses"

export type Lecture = { 
    id: number,
    startTime: string, //HH:mm 
    endTime: string, //HH:mm 
    day: DayOfWeek,
    lecutrer: String,
    isLecture: Boolean,
    practices: number[],
    course: Course,  
  }

  
enum DayOfWeek {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
  }