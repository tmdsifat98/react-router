import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const PostDetails = () => {
  const singlepost = useLoaderData();
  const navigate = useNavigate();
  const { title, body } = singlepost;
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <button onClick={() => navigate(-1)} className="btn btn-warning">
        Back
      </button>
    </div>
  );
};

export default PostDetails;
