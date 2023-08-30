import { httpClient } from "../../http/axios";
import { Course } from "./courses";
import { ApiResponse } from "./utils";

export type User = {
  name: string;
  email: string;
  selectedCourses: Course[];
};

export function getAllUsers() {
  return httpClient.get<User[]>("/all-users");
}

export function getUser(email:String, password: String) {
  const params = {
    email: email,
    password: password
  }

  type GetUserResponse = ApiResponse<User>;
  return httpClient.get<GetUserResponse>(
    "/users/user",
    {
      params: params
    } 
  );
}

export function postUser(email: string, name: string, password: string) {
  const data = {
    email: email,
    name: name,
    password: password
  }
  type GetUserResponse = ApiResponse<User>;
  return httpClient.post<GetUserResponse>(
    "/users/user", data);
}

export function postUserCourseSelection(selectedCoursesIds: Array<number>, userEmail: string) {
  const data = { selectedCoursesIds: selectedCoursesIds, userEmail: userEmail }
  type GetUserResponse = ApiResponse<User>;
  return httpClient.post<GetUserResponse>(
    "/users/user-courses", data);
}