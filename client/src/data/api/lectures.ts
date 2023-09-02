import {Course, Semester} from "./courses"
import {ApiResponse} from "./utils";
import {httpClient} from "../../http/axios";

export type Lecture = { 
    id: number,
    startTime: string, //HH:mm
    endTime: string, //HH:mm
    day: DayOfWeek,
    lecutrer: String,
    group: number,
    isLecture: Boolean,
    practices: number[],
    courseId: number,
  }

type DBLecture = {
  id: number,
  startTime: string, //HH:mm
  endTime: string, //HH:mm
  day: string,
  lecutrer: String,
  group: number,
  isLecture: Boolean,
  practices: number[],
  courseId: number,
}

function stringToDay(day: string) {
    switch (day) {
        case "SUNDAY": return DayOfWeek.SUNDAY;
        case "MONDAY": return DayOfWeek.MONDAY;
        case "TUESDAY": return DayOfWeek.TUESDAY;
        case "WEDNESDAY": return DayOfWeek.WEDNESDAY;
        case "THURSDAY": return DayOfWeek.THURSDAY;
        case "FRIDAY": return DayOfWeek.FRIDAY;
        case "SATURDAY": return DayOfWeek.SATURDAY;
        default: return DayOfWeek.SUNDAY;
    }
}
export function DBLectureToFELecture(lecture: DBLecture) : Lecture {
return {
    ...lecture,
    day: stringToDay(lecture.day),
}
}

export enum DayOfWeek {
    SUNDAY,
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
  }

export function getLectures(ids: number[]) {
    type GetLecturesResponse = ApiResponse<DBLecture[]>;

    const data = {
        courseIds: ids
    }

    return httpClient.post<GetLecturesResponse>("/lectures", data);
}

export function fixLectureTimeToWeekViewDate(timeString: string, weekday: DayOfWeek) {
    let todayDate = new Date();
    let todayDayOfWeek = todayDate.getDay();

    const offset = weekday - todayDayOfWeek;

    const fixedDate = new Date();
    fixedDate.setDate(todayDate.getDate() + offset);
    const fixedStr = fixedDate.toISOString().replace(/T.*$/, '');

    return new Date(fixedStr + `T${timeString}:00.000`);
}