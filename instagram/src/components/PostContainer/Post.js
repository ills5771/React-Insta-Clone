import React from "react";

const Post = props => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "700px",
        border: "1px solid lightGray"
      }}
      className="post"
    >
      <div style={{ display: "flex", padding: "2%" }} className="post-user">
        <span>
          <img
            style={{ width: "30px", borderRadius: "20px", marginRight: "9px" }}
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
