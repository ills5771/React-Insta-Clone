import React from "react";
import Post from "./Post";
import CommentSection from "../CommentSection/CommentSection";
import LikesSection from "./LikesSection";
import CommentInput from "../CommentSection/CommentInput";
import styled from "styled-components";

const PostWrapper = styled.div`
  margin: 3% 15%;
`;
const PostsContainer = styled.div`
  width: 700px;
  border: 1px solid lightGray;
`;

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      commentText: ""
    };
  }

  handleChanges = ev => {
    ev.preventDefault();
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };
  addComment = ev => {
    ev.preventDefault();
    const newComment = {
      username: "ills5771",
      text: this.state.commentText
    };
    this.setState({
      comments: [...this.state.comments, newComment],
      commentText: ""
    });
  };

  render() {
    console.log(this.state);
    return (
      <PostWrapper className="post-wrapper">
        <PostsContainer className="post-container">
          <Post
            username={this.props.username}
            thumbnailUrl={this.props.thumbnailUrl}
            imageUrl={this.props.imageUrl}
          />
          <section style={{ padding: "2%" }}>
            <LikesSection likes={this.props.likes} />
            {this.props.comments.map(comment => (
              <CommentSection comment={comment} />
            ))}{" "}
            <CommentInput
              commentText={this.state.commentText}
              handleChanges={this.handleChanges}
              addComment={this.addComment}
            />
          </section>
        </PostsContainer>
      </PostWrapper>
    );
  }
}

export default PostContainer;
