import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGIN_FAIL,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "./types";
import axios from "axios";
import { returnErrors } from "./messages";
//Check token & load user
export const loadUser = () => (dispatch, getState) => {
  //User Loading
  dispatch({
    type: USER_LOADING,
  });
  axios
    .get("http://localhost:8000/api/auth/user/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

//Login User
export const login = (username, password) => (dispatch, getState) => {
  //Request body
  const body = JSON.stringify({ username, password });
  axios
    .post("http://localhost:8000/api/auth/login/", body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

//Register User
export const register = ({ username, email, password }) => (
  dispatch,
  getState
) => {
  //Request body
  const body = JSON.stringify({ username, email, password });
  axios
    .post(
      "http://localhost:8000/api/auth/register/",
      body,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

//Logout User
export const logout = () => (dispatch, getState) => {
  //get Token from the state
  axios
    .post("http://localhost:8000/api/auth/logout/", null, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

//set up config with token
export const tokenConfig = (getState) => {
  //get Token from the state
  const token = getState().auth.token;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  // if token , add to config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  return config;
};
