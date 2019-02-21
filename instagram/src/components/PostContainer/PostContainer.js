import React from "react";
import Post from "./Post";
import Comment from "../CommentSection/Comment";
import LikesSection from "./LikesSection";
import CommentInput from "../CommentSection/CommentInput";
import styled from "styled-components";
import PropTypes from "prop-types";
import moment from "moment";

const time = moment()
  .startOf("hour")
  .fromNow();

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
const Timestamp = styled.span`
  opacity: 0.6;
  font-size: 13px;
`;

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      text: "",
      likes: props.likes,
      time: time
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
      username: window.localStorage.getItem("username"),
      text: this.state.text
    };
    this.setState({
      comments: [...this.state.comments, newComment],
      time: this.state.time,
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
    return (
      <PostWrapper>
        <PostsContainer>
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
            <Timestamp>{this.state.time}</Timestamp>
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
