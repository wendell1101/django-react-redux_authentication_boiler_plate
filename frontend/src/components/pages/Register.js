import React, { Component } from "react";
import "../../css/Register.css";
import { Link, Redirect } from "react-router-dom";
import { register } from "../../actions/authAction";
import { connect } from "react-redux";
import { createMessage } from "../../actions/messages";
import PropTypes from "prop-types";

export class Register extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };
  state = {
    username: "",
    email: "",
    password1: "",
    password2: "",
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password1, password2 } = this.state;
    const newUser = {
      username,
      email,
      password: password1,
    };
    if (password1 !== password2) {
      this.props.createMessage({
        passwordNotMatch: "Passwords did not match. Please try again.",
      });
      this.setState({
        password2: "",
      });
    }
    this.props.register(newUser);
  };

  render() {
    const { auth } = this.props;
    if (auth.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, email, password1, password2 } = this.state;
    return (
      <div className="row justify-content-center align-items-center register-container">
        <div className="col-md-5 p-3 border border-secondary">
          <h3 className="text-white border-bottom pb-2">Register Here</h3>
          <form className="p-3" onSubmit={this.onSubmit}>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-user"></i>{" "}
                </span>
              </div>
              <input
                name="username"
                className="form-control"
                placeholder="Username"
                type="text"
                value={username}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-envelope"></i>{" "}
                </span>
              </div>
              <input
                name="email"
                className="form-control"
                placeholder="Email address"
                type="email"
                value={email}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-lock"></i>{" "}
                </span>
              </div>
              <input
                className="form-control"
                placeholder="Create password"
                type="password"
                name="password1"
                value={password1}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-lock"></i>{" "}
                </span>
              </div>
              <input
                className="form-control"
                placeholder="Repeat password"
                type="password"
                name="password2"
                value={password2}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">
                Create Account
              </button>
            </div>
            <p className="text-center">
              Have an account? <Link to="/login">Log In</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = {
  register,
  createMessage,
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
