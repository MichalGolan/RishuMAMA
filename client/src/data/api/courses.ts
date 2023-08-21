import {httpClient} from "../../http/axios";
import { ApiResponse } from "./utils";

export type Department = "COMPUTER_SCIENCE" | "PSYCHOLOGY";
export function getDepartments() {
  type GetDepartmentsResponse = ApiResponse<Department[]>;
  return httpClient.get<GetDepartmentsResponse>("/courses/departments");
}

export type Frame = "A" | "B" | "C" | "OPTIONAL_COURSES"
export function getFrames() {
  type GetFramesResponse = ApiResponse<Frame[]>;
  return httpClient.get<GetFramesResponse>("/courses/frames");
}

export type Semester = "A" | "B" | "SUMMER"
export function getSemesters() {
  type GetYearsResponse = ApiResponse<Semester[]>;
  return httpClient.get<GetYearsResponse>("/courses/semesters");
}

export type Course = {
  id: number,
  name: string,
  department: string,
  frame: string,
  semester: string
}

export type CourseLight = {
  id: number,
  name: string,
  isChecked: boolean,
  color: string
}

/*export type CourseData = {
  id: number,
  isChecked: boolean
}
*/
export function getFiltered(department: string, frame: string, semester: string) {

  const params = {
    semester: semester,
    frame: frame,
    department: department
  }

  type GetFilteredResponse = ApiResponse<Course[]>;
  return httpClient.get<GetFilteredResponse>(
      "/courses/filtered",
      {
        params: params
      }
  );
}

