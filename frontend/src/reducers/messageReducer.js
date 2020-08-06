import { CREATE_MESSAGE } from "../actions/types";

const initState = {};
const errorReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_MESSAGE:
      return (state = action.payload);
    default:
      return state;
  }
};
export default errorReducer;
