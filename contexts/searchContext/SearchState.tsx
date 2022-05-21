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
  UPDATE_MAP_COORDS,
  UPDATE_USER_COORDS,
  UPDATE_SHOW_MAP,
} from "./search-context-actions";
// Import Types
import { SearchState } from "./search-context-types";
// Import Filter Options
import filterOptions from "./filter-options";

type SearchContextType = {
  searchState: SearchState;
  isDesktop: boolean;
  updateShowMap: (showMapState: boolean) => void;
  updateSearchQuery: (query: string) => void;
  updateSelectedCategory: (category: string) => void;
  updateSelectedRating: (rating: string) => void;
  updateMapCoords: (coords: { lat: number; lng: number }) => void;
  updateUserCoords: (coords: { lat: number; lng: number }) => void;
};

// @ts-ignore
export const SearchContext = createContext<SearchContextType>({});

const SearchStateProvider: React.FC = ({ children }) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const initialState: SearchState = {
    showMap: true,
    searchQuery: "",
    selectedCategory: filterOptions.categoryOptions[0].value,
    selectedRating: filterOptions.ratingsOptions[0].value,
    mapCoords: { lat: 0, lng: 0 },
    userCoords: { lat: 0, lng: 0 },
  };
  const [state, dispatch] = useReducer(searchReducer, initialState);

  // Update Show Map
  const updateShowMap = (showMapState: boolean) => {
    dispatch({ type: UPDATE_SHOW_MAP, payload: showMapState });
  };

  // Update Search Query
  const updateSearchQuery = (query: string) => {
    dispatch({ type: UPDATE_SEARCH_TERM, payload: query });
  };

  // Update Selected Category
  const updateSelectedCategory = (category: string) => {
    dispatch({ type: UPDATE_SELECTED_CATEGORY, payload: category });
  };

  // Update Selected Rating
  const updateSelectedRating = (rating: string) => {
    dispatch({ type: UPDATE_SELECTED_RATING, payload: rating });
  };

  // Update Map Coordinates
  const updateMapCoords = (coords: { lat: number; lng: number }) => {
    dispatch({ type: UPDATE_MAP_COORDS, payload: coords });
  };

  // Update User Coordinates
  const updateUserCoords = (coords: { lat: number; lng: number }) => {
    dispatch({ type: UPDATE_USER_COORDS, payload: coords });
  };

  return (
    <SearchContext.Provider
      value={{
        searchState: state,
        isDesktop,
        updateShowMap,
        updateSearchQuery,
        updateSelectedCategory,
        updateSelectedRating,
        updateMapCoords,
        updateUserCoords,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchStateProvider;
