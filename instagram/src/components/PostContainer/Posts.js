import React from "react";
import PostContainer from "./PostContainer";
import "./PostContainer.css";

const Posts = props => {
  return (
    <div className="posts-container">
      {props.posts.map(post => (
        <PostContainer
          username={post.username}
          thumbnailUrl={post.thumbnailUrl}
          imageUrl={post.imageUrl}
          comments={post.comments}
          likes={post.likes}
        />
      ))}
    </div>
  );
};

export default Posts;
