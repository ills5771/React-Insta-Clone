import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { Route } from "react-router-dom";
import Login from "./components/Login/Login";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filtered: []
    };
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
    });
  }
  filterSearch = ev => {
    const posts = this.state.posts.filter(post => {
      if (post.username.includes(ev.target.value)) {
        return post;
      }
    });
    this.setState({ filtered: posts });
  };
  filteredPosts;
  render() {
    return (
      <div className="App">
        <SearchBar filterSearch={this.filterSearch} />
        {/* <Route path="/login" component={Login} /> */}
        <div>
          {this.state.posts.map(post => (
            <PostContainer
              username={post.username}
              thumbnailUrl={post.thumbnailUrl}
              imageUrl={post.imageUrl}
              comments={post.comments}
              likes={post.likes}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
