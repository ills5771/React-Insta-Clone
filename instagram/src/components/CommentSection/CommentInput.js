import React from "react";
import styled from "styled-components";

const Input = styled.input`
  font-size: 14px;
  width: 100%;
  border: none;
  height: 30px;
`;

const CommentInput = props => {
  return (
    <form onSubmit={props.addComment}>
      <Input
        name="text"
        value={props.text}
        onChange={props.handleChanges}
        type="text"
        placeholder="Add a comment..."
      />
    </form>
  );
};

export default CommentInput;
