import React from "react";

const Post = props => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", width: "700px" }}
      className="post"
    >
      <div style={{ display: "flex" }} className="post-user">
        <span>
          <img
            style={{ width: "30px", borderRadius: "20px", marginRight: "7px" }}
            className="user-photo"
            src={props.thumbnailUrl}
            alt="user thumbnail"
          />
        </span>
        <span style={{ fontWeight: "bold" }}>{props.username}</span>
      </div>
      <img
        style={{}}
        className="post-photo"
        src={props.imageUrl}
        alt="post photo"
      />
    </div>
  );
};

export default Post;
