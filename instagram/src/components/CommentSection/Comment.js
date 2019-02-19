import React from "react";
import PropTypes from "prop-types";

const Comment = props => {
  return (
    <div className="comment-section">
      <div className="comments">
        <span style={{ fontWeight: "bold", marginRight: "1%" }}>
          {props.comment.username}
        </span>
        <span>{props.comment.text}</span>
      </div>
    </div>
  );
};
Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;
