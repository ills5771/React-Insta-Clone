import React, { Component } from "react";
import Login from "./components/Login/Login";
import ConditionalRender from "./components/ConditionalRender/ConditionalRender";
import "./App.css";
import MainPage from "./components/PostContainer/MainPage";

const ToShow = ConditionalRender(MainPage)(Login);

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToShow />
      </div>
    );
  }
}

export default App;
