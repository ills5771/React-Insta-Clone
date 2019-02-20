import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";
import dummyData from "../../dummy-data";
import PostContainer from "../PostContainer/PostContainer";

class MainPage extends Component {
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
      <div className="main-page">
        <SearchBar filterSearch={this.filterSearch} />

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

export default MainPage;
