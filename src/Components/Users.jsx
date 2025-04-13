import React, { use } from "react";
import User from "./User";

const Users = ({ userPromise }) => {
  const usersData = use(userPromise);
  return (
    <div>
      {usersData.map((singleUser) => (
        <User key={singleUser.id} singleUser={singleUser}></User>
      ))}
    </div>
  );
};

export default Users;
