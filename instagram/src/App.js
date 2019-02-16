import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";

import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.posts.map(post => (
          <PostContainer
            username={post.username}
            thumbnailUrl={post.thumbnailUrl}
            imageUrl={post.imageUrl}
            comments={post.comments}
            // comment={post.comments.text}
          />
        ))}
      </div>
    );
  }
}

export default App;
