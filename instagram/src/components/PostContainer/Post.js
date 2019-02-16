import React from "react";

const Post = props => {
  return (
    <div className="post">
      <div className="post-user">
        <span>
          <img src={props.thumbnailUrl} alt="user thumbnail" />
        </span>
        <span>{props.username}</span>
      </div>
      <img className="post-photo" src={props.imageUrl} alt="post photo" />
    </div>
  );
};

export default Post;
