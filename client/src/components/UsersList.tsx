import {useEffect, useState} from 'react';
import {getAllUsers, User} from "../data/api/users";

function useUsers() {
  const [users, setUsers] = useState<Array<User>>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllUsers()
      .then(res => {
        const users = res.data;
        setUsers(users);
      }).catch((error) => console.log(`error: ${error}`))
      .finally(() => setIsLoading(false));

  }, []);

  return {
    users,
    isLoading,
  };
}
/*
export function UsersList() {
  const {users, isLoading} = useUsers();

  return (isLoading ? <p>im loading....</p> :
      (<ul>
        {
          users?.map(user =>
              <li key={user.id}>{user.name}</li>
            )
        }
      </ul>)
  );

}
*/