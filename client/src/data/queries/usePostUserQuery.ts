import {postUser} from "../api/users";
import {useQuery} from "@tanstack/react-query";

export function usePostUserQuery(email:string, name: string, password: string) {
    return useQuery({
      queryKey: ['add-user'],
      queryFn: async () => {
        const response = await postUser(email, name, password);
        return response.data.result;
      },
      refetchOnWindowFocus: false,
        enabled: false // disable this query from automatically running
    })
}