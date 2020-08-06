import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../../actions/authAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Header extends React.Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    console.log(user);
    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <NavLink className="nav-link" to="/">
            Dashboard <span className="sr-only">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <span className="nav-link">
            <strong>{user ? user.username : null}</strong>
          </span>
        </li>

        <li
          className="nav-item"
          onClick={() => {
            this.props.logout();
          }}
        >
          <NavLink className="nav-link" to="/logout">
            Logout
          </NavLink>
        </li>
      </ul>
    );
    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <NavLink className="nav-link" to="/">
            Dashboard <span className="sr-only">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/register">
            Register
          </NavLink>
        </li>
      </ul>
    );
    return (
      <nav className="navbar navbar-expand-sm ">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Blog
          </NavLink>
          <button
            className="navbar-toggler  text-white border"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = {
  logout,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
