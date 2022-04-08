// Import Types
import { SearchState, Action } from "./search-context-types";
// Import Reducer Actions
import { UPDATE_SEARCH_TERM } from "./search-context-actions";

const searchReducer: (state: SearchState, action: Action) => SearchState = (
  state,
  action
) => {
  switch (action.type) {
    case UPDATE_SEARCH_TERM:
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
