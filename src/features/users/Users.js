import React from "react";
import { useSelector } from "react-redux"

function Users() {
  const users = useSelector((state) => state.users)
  return (
    <div>
      <p>{`Total Users: ${users.length}`}</p>
      <ul>
        {
          users.map(({username, hometown}) => <li key={username}>{username}</li>)
        }
      </ul>
    </div>
  );
}

export default Users;
