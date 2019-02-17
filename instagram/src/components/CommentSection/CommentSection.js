import React from "react";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="comment-section">
        <div className="comments">
          <span>{this.props.commentUsername}</span>
          <span>{this.props.commentText}</span>
        </div>
      </div>
    );
  }
}
export default CommentSection;
