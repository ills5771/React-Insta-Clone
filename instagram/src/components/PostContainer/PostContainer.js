import React from "react";
import Post from "./Post";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  return (
    <div style={{ margin: "3% 15%" }} className="post-wrapper">
      <div
        style={{ border: "1px solid lightGray", width: "700px" }}
        className="post-container"
      >
        <Post
          username={props.username}
          thumbnailUrl={props.thumbnailUrl}
          imageUrl={props.imageUrl}
        />
        {props.comments.map(comment => (
          <CommentSection
            //   commentUser={props.comments.username}
            commentUsername={comment.username}
            commentText={comment.text}
          />
        ))}
      </div>
    </div>
  );
};
export default PostContainer;
