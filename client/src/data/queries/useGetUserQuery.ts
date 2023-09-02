import {User, getUser} from "../api/users";
import {useQuery} from "@tanstack/react-query";

export function useGetUserQuery(email:String, password: String) {
    return useQuery({
      queryKey: ['user'],
      queryFn: async () => {
        const response = await getUser(email, password);
        return response.data.result;
      },
      refetchOnWindowFocus: false,
        enabled: false // disable this query from automatically running
    })
  }