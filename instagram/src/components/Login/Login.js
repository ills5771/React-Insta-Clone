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
        <input
          style={{ height: "25px", backgroundColor: "#FAFAFA", width: "75%" }}
          className="input-user"
          type="text"
          placeholder="Username"
          name="username"
          onChange={this.handleInput}
        />

        <input
          style={{ height: "25px", backgroundColor: "#FAFAFA", width: "75%" }}
          className="input-pass"
          type="text"
          placeholder="Password"
          name="password"
          onChange={this.handleInput}
        />
        <button
          style={{
            height: "25px",
            backgroundColor: "#C3DFFA",
            color: "white",
            width: "77%",
            borderRadius: "3px"
          }}
          onClick={this.handleLogin}
        >
          Log In
        </button>
      </Form>
    );
  }
}

export default Login;
