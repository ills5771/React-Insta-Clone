import React from "react";

const LikesSection = props => {
  return (
    <div style={{}} className="likes-section">
      <div style={{ display: "flex" }} className="comment-icons">
        <div style={{ marginRight: "2%" }}>
          {" "}
          <i onClick={props.likesIncrement} className="far fa-heart fa-lg" />
        </div>
        <div>
          {" "}
          <i className="far fa-comment fa-lg" />
        </div>
      </div>
      <h4>{props.likes} likes</h4>
    </div>
  );
};

export default LikesSection;
