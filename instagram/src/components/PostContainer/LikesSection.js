import React from "react";

const LikesSection = props => {
  return (
    <div style={{}} className="likes-section">
      <div className="comment-icons">
        <span>heart</span>
        <span>comment</span>
      </div>
      {props.likes} likes
    </div>
  );
};

export default LikesSection;
