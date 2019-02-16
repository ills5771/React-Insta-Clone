import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";

import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    };
  }

  render() {
    // console.log(state)
    return (
      <div className="App">
        <SearchBar />
        {this.state.dummyData.map(post => (
          <PostContainer
            username={post.username}
            thumbnailUrl={post.thumbnailUrl}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>
    );
  }
}

export default App;
