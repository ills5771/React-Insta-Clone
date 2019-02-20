import React from "react";

const ConditionalRender = MainPage => Login =>
  class extends React.Component {
    state = {
      loggedIn: false
    };

    componentDidMount = () => {
      if (window.localStorage.getItem("username", "password")) {
        this.setState(prevState => ({ loggedIn: !prevState.loggedIn }));
      }
    };

    render() {
      return this.state.loggedIn ? <MainPage /> : <Login />;
    }
  };
export default ConditionalRender;
