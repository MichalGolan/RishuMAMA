import React from 'react';
import axios from 'axios';

export default class UsersList extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/all-users`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
      .catch((error) => console.log(`error: ${error}`));
      
  }

  render() {
    return (
      <ul>
        {
          this.state.users
            .map(user =>
              <li key={user.id}>{user.name}</li>
            )
        }
      </ul>
    )
  }

  /*
return (
      <ul>
        {
          this.state.users
            .map(user =>
              <li key={user.id}>{user.name}</li>
            )
        }
      </ul>
    )
  */
}