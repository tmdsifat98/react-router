import React from "react";
import { useLoaderData } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, email, username } = user;
  return (
    <div className="border-2 border-red-600 w-[600px] text-2xl p-4 m-3">
      <h1>Name:{name}</h1>
      <p>Username: {username}</p>
      <p>Email: {email} </p>
    </div>
  );
};

export default UserDetails;
