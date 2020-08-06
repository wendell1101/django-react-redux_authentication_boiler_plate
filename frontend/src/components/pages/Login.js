import React, { Component } from "react";
import "../../css/Register.css";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/authAction";
import PropTypes from "prop-types";

export class Login extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
  };
  state = {
    username: "",
    password: "",
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const user = {
      username,
      password,
    };
    this.props.login(username, password);
    this.setState({ username: "", password: "" });
  };
  render() {
    const { username, password } = this.state;
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <div className="row justify-content-center align-items-center register-container">
        <div className="col-md-5 p-3 border border-secondary">
          <h3 className="text-white border-bottom pb-2">Login Here</h3>
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
                  <i className="fa fa-lock"></i>{" "}
                </span>
              </div>
              <input
                className="form-control"
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">
                Login{" "}
              </button>
            </div>
            <p className="text-center">
              Don't have an account? <Link to="/register">Register Here</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
const mapDispatchToProps = {
  login,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
