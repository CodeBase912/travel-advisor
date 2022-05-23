import React, { useEffect } from "react";
import { NextPage } from "next";
// Import Context & State Variables
import SearchStateProvider from "../contexts/searchContext/SearchState";
// Import Custom React Components
import Header from "../components/site/header/Header";
import SearchInfo from "../components/site/searchPage/SearchInfo/SearchInfo";
import Map from "../components/site/searchPage/Map";
import { options, getMapData } from "../utility/map";

const Search: NextPage = () => {
  // Get mapData
  useEffect(() => {
    const updateMapDataState = async () => {
      const result = await getMapData("restaurants", options);
      console.log(result);
      // Update Map Data State here

      return result;
    };
    updateMapDataState();
  }, []);
  return (
    <SearchStateProvider>
      <Header />
      <main className="relative flex flex-col h-screen w-screen pt-14 lg:flex-row m-auto">
        {/* Render Search Info */}
        <SearchInfo />

        {/* Render Map */}
        <Map />
      </main>
    </SearchStateProvider>
  );
};

export default Search;
