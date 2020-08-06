import React, { Component } from "react";
import "../../css/Register.css";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/authAction";
import PropTypes from "prop-types";

const Logout = () => {
  return (
    <div className="row justify-content-center align-items-center register-container">
      <div className="col-md-5 p-3 border border-secondary">
        <h3 className="text-white pb-2">You have been logged out.</h3>
        <Link to="/login">Login Again</Link>
      </div>
    </div>
  );
};

export default Logout;
