import React, { useState, createContext, useReducer } from "react";
// Import MaterialUI Hooks
import { useMediaQuery } from "@mui/material";
// Import Reducer
import searchReducer from "./search-reducer";
// Import Search Context Actions
import {
  UPDATE_SEARCH_TERM,
  UPDATE_SELECTED_CATEGORY,
  UPDATE_SELECTED_RATING,
} from "./search-context-actions";
// Import Types
import { SearchState } from "./search-context-types";
// Import Filter Options
import filterOptions from "../../components/site/searchPage/filters/filter-options";

type SearchContextType = {
  state: SearchState;
  updateSearchQuery: (query: string) => void;
  updateSelectedCategory: (category: string) => void;
  updateSelectedRating: (category: string) => void;
};

// @ts-ignore
export const SearchContext = createContext<SearchContextType>({});

const SearchState: React.FC = ({ children }) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const initialState: SearchState = {
    isDesktop,
    searchQuery: "",
    selectedCategory: filterOptions.categoryOptions[0].value,
    selectedRating: filterOptions.ratingsOptions[0].value,
  };
  const [state, dispatch] = useReducer(searchReducer, initialState);

  // Update Search Query
  const updateSearchQuery = (query: string) => {
    dispatch({ type: UPDATE_SEARCH_TERM, payload: query });
  };

  // Update Search Query
  const updateSelectedCategory = (category: string) => {
    dispatch({ type: UPDATE_SELECTED_CATEGORY, payload: category });
  };

  // Update Search Query
  const updateSelectedRating = (rating: string) => {
    dispatch({ type: UPDATE_SELECTED_RATING, payload: rating });
  };

  return (
    <SearchContext.Provider
      value={{
        state,
        updateSearchQuery,
        updateSelectedCategory,
        updateSelectedRating,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchState;
