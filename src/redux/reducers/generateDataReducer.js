import { actionTypes } from "../actions/actionsTypes";

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.GENERATE_DATA:
      return [...action.images];
    default:
      return state;
  }
};
