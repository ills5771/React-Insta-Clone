import React from "react";

const LikesSection = props => {
  return (
    <div className="likes-section">
      <div className="comment-icons">
        <span>heart</span>
        <span>comment</span>
      </div>
      {props.likes}
    </div>
  );
};

export default LikesSection;
