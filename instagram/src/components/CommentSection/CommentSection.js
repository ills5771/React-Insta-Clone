import React from "react";
import PropTypes from "prop-types";

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
CommentSection.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default CommentSection;
