import React from "react";
import Post from "./Post";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  return (
    <div style={{ margin: "3% 15%" }} className="post-wrapper">
      <div className="post-container">
        <Post
          username={props.username}
          thumbnailUrl={props.thumbnailUrl}
          imageUrl={props.imageUrl}
        />
        <CommentSection />
      </div>
    </div>
  );
};
export default PostContainer;
