import React from "react";
import { Link } from "react-router";

const User = ({ singleUser }) => {
  const { name, email, id } = singleUser;
  return (
    <div className="border-2 border-red-600 m-2 p-4 w-96 rounded-xl">
      <h2>Name: {name}</h2>
      <h3>Email: {email}</h3>
      <Link to={`/users/${id}`}>
        <button className="btn btn-outline btn-secondary">Details</button>
      </Link>
    </div>
  );
};

export default User;
