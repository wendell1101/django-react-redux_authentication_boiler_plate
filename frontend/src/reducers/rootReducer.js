import { combineReducers } from "redux";
import postReducer from "./postReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import messageReducer from "./messageReducer";

const rootReducer = combineReducers({
  posts: postReducer,
  auth: authReducer,
  errors: errorReducer,
  messages: messageReducer,
});
export default rootReducer;
