import React, { useState } from "react";
import { NextPage } from "next";
// Import Context & State Variables
import SearchState from "../contexts/searchContext/SearchState";
// Import Custom React Components
import Header from "../components/site/header/Header";
import FilterContainer from "../components/site/searchPage/filters/FilterContainer";
import Map from "../components/site/searchPage/Map";

const Search: NextPage = () => {
  const [showMap, setShowMap] = useState(true);

  return (
    <SearchState>
      <Header />
      <main className="flex flex-col h-screen w-screen pt-14 lg:flex-row max-w-8xl m-auto">
        {/* Search Filters */}
        <FilterContainer showMap={showMap} setShowMap={setShowMap} />

        {/* Map */}
        <Map showMap={showMap} />
      </main>
    </SearchState>
  );
};

export default Search;
