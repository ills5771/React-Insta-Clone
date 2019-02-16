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
          <div>
            {this.props.commentUsername}
            {this.props.commentText}
          </div>
        </div>
      </div>
    );
  }
}
export default CommentSection;
