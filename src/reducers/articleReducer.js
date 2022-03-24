import { SET_LOADING_STATUS } from "../actions/actionType.js";

export const initState = {
  loading: false,
};

const articleReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_LOADING_STATUS:
      return {
        ...setTimeout,
        loading: action.status,
      };
    default:
      return state;
  }
};

export default articleReducer;
