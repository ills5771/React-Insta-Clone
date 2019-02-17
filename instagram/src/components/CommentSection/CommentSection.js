import React from "react";

// class CommentSection extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
const CommentSection = props => {
  return (
    <div className="comment-section">
      <div className="comments">
        <span>{props.commentUsername}</span>
        <span>{props.commentText}</span>
      </div>
    </div>
  );
};

export default CommentSection;
