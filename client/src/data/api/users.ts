import {httpClient} from "../../http/axios";
import { ApiResponse } from "./utils";

export type User = {
  name: string;
  email: string;
  password: string;
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
