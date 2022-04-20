import React, { useState } from "react";
import { NextPage } from "next";
// Import Context & State Variables
import SearchState from "../contexts/searchContext/SearchState";
// Import MaterialUI Components
import { useMediaQuery } from "@mui/material";
// Import Custom React Components
import Header from "../components/site/header/Header";
import FilterContainer from "../components/site/searchPage/filters/FilterContainer";
import Map from "../components/site/searchPage/Map";
import PlacesList from "../components/site/searchPage/PlacesList";

const Search: NextPage = () => {
  const [showMap, setShowMap] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  console.log({ isDesktop });

  return (
    <SearchState>
      <Header />
      <main className="flex flex-col h-screen w-screen pt-14 lg:flex-row max-w-8xl m-auto">
        {/* Search Filters */}
        <FilterContainer
          showMap={showMap}
          showList={isDesktop}
          setShowMap={setShowMap}
        />

        {/* Map */}
        <Map showMap={isDesktop ? true : showMap} />

        {/* List */}
        <PlacesList showList={isDesktop ? false : !showMap} />
      </main>
    </SearchState>
  );
};

export default Search;
