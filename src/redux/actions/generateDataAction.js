import { actionTypes } from "./actionsTypes";

export const generateData = (data) => {
  return {
    type: actionTypes.GENERATE_DATA,
    data,
  };
};
