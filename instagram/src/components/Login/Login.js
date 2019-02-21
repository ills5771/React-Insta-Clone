import React from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 325px;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 300px;
  margin: 15% 35%;
`;
const Input = styled.input`
  height: 25px;
  background-color: #fafafa;
  width: 75%;
`;
const Button = styled.button`
  height: 25px;
  background-color: #c3dffa;
  color: white;
  width: 77%;
  border-radius: 3px;
`;

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLogin = () => {
    window.localStorage.setItem("username", this.state.username);
    window.localStorage.setItem("password", this.state.password);
    window.location.reload();
  };

  render() {
    return (
      <Form>
        <span>
          <img
            style={{ width: "200px" }}
            className="igCursive2"
            alt="insta cursive2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
          />
        </span>
        <Input
          className="input-user"
          type="text"
          placeholder="Username"
          name="username"
          onChange={this.handleInput}
        />

        <Input
          className="input-pass"
          type="text"
          placeholder="Password"
          name="password"
          onChange={this.handleInput}
        />
        <Button onClick={this.handleLogin}>Log In</Button>
      </Form>
    );
  }
}

export default Login;
