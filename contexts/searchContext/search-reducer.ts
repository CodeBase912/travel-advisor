// Import Types
import { SearchState, Action } from "./search-context-types";
// Import Reducer Actions
import {
  UPDATE_SEARCH_TERM,
  UPDATE_SELECTED_CATEGORY,
  UPDATE_SELECTED_RATING,
  UPDATE_MAP_COORDS,
  UPDATE_USER_COORDS,
  UPDATE_SHOW_MAP,
} from "./search-context-actions";

const searchReducer: (state: SearchState, action: Action) => SearchState = (
  state,
  action
) => {
  switch (action.type) {
    case UPDATE_SEARCH_TERM:
      return { ...state, searchQuery: action.payload };
    case UPDATE_SELECTED_CATEGORY:
      return { ...state, selectedCategory: action.payload };
    case UPDATE_SELECTED_RATING:
      return { ...state, selectedRating: action.payload };
    case UPDATE_MAP_COORDS:
      return { ...state, mapCoords: action.payload };
    case UPDATE_USER_COORDS:
      return { ...state, userCoords: action.payload };
    case UPDATE_SHOW_MAP:
      return { ...state, showMap: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
