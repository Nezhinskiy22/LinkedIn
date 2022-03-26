import { GET_ARTICLES, SET_LOADING_STATUS } from "../actions/actionType.js";

export const initState = {
  articles: [],
  loading: false,
};

const articleReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ARTICLES: {
      return {
        ...state,
        articles: action.payload,
      };
    }
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
