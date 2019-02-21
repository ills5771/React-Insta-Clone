import React from "react";
import styled from "styled-components";

const CommentIcons = styled.div`
  display: flex;
`;
const HeartIcon = styled.div`
  margin-right: 2%;
`;
const LikesContainer = styled.div``;

const LikesSection = props => {
  return (
    <LikesContainer>
      <CommentIcons>
        <HeartIcon>
          {" "}
          <i onClick={props.likesIncrement} className="far fa-heart fa-lg" />
        </HeartIcon>
        <div>
          {" "}
          <i className="far fa-comment fa-lg" />
        </div>
      </CommentIcons>
      <h4>{props.likes} likes</h4>
    </LikesContainer>
  );
};

export default LikesSection;
