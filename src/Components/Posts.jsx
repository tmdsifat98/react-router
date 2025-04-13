import React, { use } from 'react';
import Post from './Post';

const Posts = ({postPromise}) => {
    const posts=use(postPromise)
    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}></Post>)}
        </div>
    );
};

export default Posts;
