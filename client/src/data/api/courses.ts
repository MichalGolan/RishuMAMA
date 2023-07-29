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

