import React from "react";
import Post from "./Post";

const PostContainer = props => {
  return (
    <div className="post-wrapper">
      <div className="post-container">
        <Post
          username={props.username}
          thumbnailUrl={props.thumbnailUrl}
          imageUrl={props.imageUrl}
        />
      </div>
    </div>
  );
};
export default PostContainer;
