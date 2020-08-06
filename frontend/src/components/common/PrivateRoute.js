import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { css } from "@emotion/core";
import RingLoader from "react-spinners/RingLoader";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  // Can be a string as well. Need to ensure each key-value pair ends with ;
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    color: silver;
    loading: true;
  `;
  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          if (auth.isLoading) {
            return (
              <div className="sweet-loading">
                <RingLoader
                  css={override}
                  height={30}
                  width={30}
                  size={100}
                  color={"silver"}
                  loading={auth.isLoading}
                />
              </div>
            );
          } else if (!auth.isAuthenticated) {
            return <Redirect to="/login" />;
          } else {
            return <Component {...props} />;
          }
        }}
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(PrivateRoute);
