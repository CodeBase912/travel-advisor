import React, { useEffect, useState } from "react";
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
import MobileList from "../components/site/searchPage/MobileList";

const Search: NextPage = () => {
  const [showMap, setShowMap] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  // useEffect(() => {
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //       "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  //       "X-RapidAPI-Key": "bfcbc48c45msh0cce2d2e33932a8p1c16e8jsnde532229b5eb",
  //     },
  //     body: '{"geoId":293928,"partySize":2,"reservationTime":"2022-03-07T20:00","sort":"POPULARITY","sortOrder":"desc","filters":[{"id":"establishment","value":["10591"]}],"boundingBox":{"northEastCorner":{"latitude":12.248278039408776,"longitude":109.1981618106365},"southWestCorner":{"latitude":12.243407232845051,"longitude":109.1921640560031}},"updateToken":""}',
  //   };

  //   fetch(
  //     "https://travel-advisor.p.rapidapi.com/restaurants/v2/list?currency=USD&units=km&lang=en_US",
  //     options
  //   )
  //     .then((response) => response.json())
  //     .then((response) => console.log(response))
  //     .catch((err) => console.error(err));
  // }, []);

  console.log({ isDesktop });

  return (
    <SearchState>
      <Header />
      <main className="relative flex flex-col h-screen w-screen pt-14 lg:flex-row m-auto">
        {/* Search Filters */}
        <FilterContainer
          showMap={showMap}
          showList={isDesktop}
          setShowMap={setShowMap}
        />

        {/* Map */}
        <Map showMap={isDesktop ? true : showMap} />

        {/* List */}
        <MobileList showList={isDesktop ? false : showMap} />
        <PlacesList
          showList={isDesktop ? false : !showMap}
          isDesktop={isDesktop}
        />
      </main>
    </SearchState>
  );
};

export default Search;
