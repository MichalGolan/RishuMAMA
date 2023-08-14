import {Course, Semester} from "./courses"
import {ApiResponse} from "./utils";
import {httpClient} from "../../http/axios";

export type Lecture = { 
    id: number,
    startTime: string, //HH:mm
    endTime: string, //HH:mm
    day: DayOfWeek,
    lecutrer: String,
    isLecture: Boolean,
    practices: number[],
    courseId: number,
  }

  
enum DayOfWeek {
    SUNDAY,
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
  }

export function getLectures(ids: number[]) {
    type GetLecturesResponse = ApiResponse<Lecture[]>;

    const data = {
        courseIds: ids
    }

    console.log("POST /lectures in FE", ids);

    return httpClient.post<GetLecturesResponse>("/lectures", data);
}

export function fixLectureTimeToWeekViewDate(timeString: string, weekday: DayOfWeek) {
    let todayDate = new Date();
    let todayDayOfWeek = todayDate.getDay();
    const weekdayFixed = weekday as DayOfWeek;
    let type2 = typeof(weekdayFixed);
    //TODO Bug: weekday is arriving as *string*, hence can't do the subtraction!
    const offset = weekdayFixed - todayDayOfWeek;
    const fixedDate = new Date();
    const [ h, m ] = timeString.split(":");
    fixedDate.setDate(todayDate.getDate() + offset);
    fixedDate.setHours(Number(h),Number(m))
    //const fixedStr = fixedDate.toISOString().replace(/T.*$/, '');
    // let fixedDate = new Date();
    // let fixedStr;
    //
    // if(todayDayOfWeek === weekday){
    //     fixedStr = todayDate.toISOString().replace(/T.*$/, '');
    // } else  {
    //     fixedDate.setDate(todayDate.getDate() + (weekday.valueOf() - todayDayOfWeek));
    //     fixedStr = fixedDate.toISOString().replace(/T.*$/, '');
    // }

    //return new Date(fixedStr + `T${timeString}:00.000-00:00`);
    return fixedDate;
}

/*
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
    /*{
        id: createEventId(),
        title: 'Michal event',
        start: todayStr + 'T13:15:00',
        end:  todayStr + 'T15:00:00',

* */