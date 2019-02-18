import React from "react";

const CommentSection = props => {
  return (
    <div className="comment-section">
      <div className="comments">
        <span>{props.comment.username}</span>
        <span>{props.comment.text}</span>
      </div>
    </div>
  );
};

export default CommentSection;
