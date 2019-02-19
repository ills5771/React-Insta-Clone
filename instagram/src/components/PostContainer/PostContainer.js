import React from "react";
import Post from "./Post";
import Comment from "../CommentSection/Comment";
import LikesSection from "./LikesSection";
import CommentInput from "../CommentSection/CommentInput";
import styled from "styled-components";
import PropTypes from "prop-types";

const PostWrapper = styled.div`
  margin: 3% 15%;
`;
const PostsContainer = styled.div`
  width: 700px;
  border: 1px solid lightGray;
`;
const CommentSection = styled.section`
  padding: 2%;
`;

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      text: "",
      likes: props.likes
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
      text: this.state.text
    };
    this.setState({
      comments: [...this.state.comments, newComment],
      text: ""
    });
  };
  likesIncrement = ev => {
    ev.preventDefault();
    this.setState({
      likes: this.state.likes + 1
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
          <CommentSection>
            <LikesSection
              likesIncrement={this.likesIncrement}
              likes={this.state.likes}
            />
            {this.state.comments.map(comment => (
              <Comment comment={comment} />
            ))}{" "}
            <CommentInput
              text={this.state.text}
              handleChanges={this.handleChanges}
              addComment={this.addComment}
            />
          </CommentSection>
        </PostsContainer>
      </PostWrapper>
    );
  }
}
PostsContainer.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};
export default PostContainer;
