import React, { createContext } from "react";
// Import MaterialUI Hooks
import { useMediaQuery } from "@mui/material";

type SearchContextType = {
  isDesktop: boolean;
};

// @ts-ignore
export const SearchContext = createContext<SearchContextType>({});

const SearchState: React.FC = ({ children }) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <SearchContext.Provider value={{ isDesktop }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchState;
