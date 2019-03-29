import React, { Component } from "react";
import PropTypes from "prop-types";

class Login extends Component {
  render() {
    return (
      <nav className="login">
        <h2>Login</h2>
        <p>Sign in to manage your Todo's</p>
        <button
          className="google"
          onClick={() => this.props.authenticate("Google")}
        >
          Login in with google
        </button>
        <button
          className="facebook"
          onClick={() => this.props.authenticate("Facebook")}
        >
          Login in with Faecbook
        </button>
      </nav>
    );
  }
}

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default Login;
