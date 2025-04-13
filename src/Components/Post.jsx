import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    const {title,id}=post
    return (
        <div  className='border-2 p-2 m-2 w-[700px]'>
            <h1>{title}</h1>
            <Link to={`/posts/${id}`}><button className="btn btn-accent my-2">Show post</button></Link>
        </div>
    );
};

export default Post;