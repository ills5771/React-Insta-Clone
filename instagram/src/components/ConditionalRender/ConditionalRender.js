import React from "react";

const ConditionalRender = MainPage => Login => props => {
  if (localStorage.getItem("username")) {
    return <MainPage />;
  }
  return <Login />;
};
export default ConditionalRender;
