import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const UserSpan = styled.span`
  font-weight: bold;
  margin-right: 1%;
`;

const Comment = props => {
  return (
    <div className="comment-section">
      <div className="comments">
        <UserSpan>{props.comment.username}</UserSpan>
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
