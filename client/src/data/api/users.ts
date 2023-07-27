import {httpClient} from "../../http/axios";

export type User = {
  id: string;
  name: number;
};

export function getAllUsers() {
  return httpClient.get<User[]>("/all-users");
}

