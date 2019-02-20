import React from "react";

const ConditionalRender = PostContainer => Login => props => {
  if (localStorage.getItem("user")) {
    return <PostContainer />;
  }
  return <Login />;
};
export default ConditionalRender;
