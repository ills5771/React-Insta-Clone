import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";
import dummyData from "../../dummy-data";
import Posts from "../PostContainer/Posts";
import styled from "styled-components";

const MainContainer = styled.div``;

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
      <MainContainer>
        <SearchBar filterSearch={this.filterSearch} />

        <div>
          <Posts
            posts={
              this.state.filtered.length > 0
                ? this.state.filtered
                : this.state.posts
            }
          />
        </div>
      </MainContainer>
    );
  }
}

export default MainPage;
