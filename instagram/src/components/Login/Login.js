import React from "react";
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
      <form className="login">
        <span>
          <img
            className="igCursive2"
            alt="insta cursive2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
          />
        </span>
        <input
          className="input-user"
          type="text"
          placeholder="Username"
          name="username"
          onChange={this.handleInput}
        />

        <input
          className="input-pass"
          type="text"
          placeholder="Password"
          name="password"
          onChange={this.handleInput}
        />
        <button onClick={this.handleLogin}>Log In</button>
      </form>
    );
  }
}

export default Login;
