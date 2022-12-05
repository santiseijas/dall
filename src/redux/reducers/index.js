import { combineReducers } from "redux";
import generateData from "./generateDataReducer";

const rootReducer = combineReducers({
  generateData,
});

export default rootReducer;
