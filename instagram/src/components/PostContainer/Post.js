import React from "react";
import styled from "styled-components";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
`;
const PostUser = styled.div`
  display: flex;
  padding: 2%;
`;

const PostImg = styled.img`
  width: 30px;
  border-radius: 20px;
  margin-right: 9px;
`;

const SpanUser = styled.span`
  font-weight: bold;
`;

const Post = props => {
  return (
    <PostContainer>
      <PostUser>
        <span>
          <PostImg src={props.thumbnailUrl} alt="user thumbnail" />
        </span>
        <SpanUser>{props.username}</SpanUser>
      </PostUser>
      <img src={props.imageUrl} alt="post photo" />
    </PostContainer>
  );
};

export default Post;
