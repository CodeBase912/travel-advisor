import React, { useState, createContext, useReducer } from "react";
// Import MaterialUI Hooks
import { useMediaQuery } from "@mui/material";
// Import Reducer
import searchReducer from "./search-reducer";
// Import Search Context Actions
import { UPDATE_SEARCH_TERM } from "./search-context-actions";
// Import Types
import { SearchState } from "./search-context-types";

type SearchContextType = {
  state: SearchState;
  updateSearchQuery: (query: string) => void;
};

// @ts-ignore
export const SearchContext = createContext<SearchContextType>({});

const SearchState: React.FC = ({ children }) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const initialState = {
    isDesktop,
    searchQuery: "",
  };
  const [state, dispatch] = useReducer(searchReducer, initialState);

  // Update Search Query
  const updateSearchQuery = (query: string) => {
    dispatch({ type: UPDATE_SEARCH_TERM, payload: query });
  };

  return (
    <SearchContext.Provider value={{ state, updateSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchState;
