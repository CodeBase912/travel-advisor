import React, { useContext, useEffect } from "react";
import classNames from "classnames";
// Import MaterialUI Components
import { Box, Button } from "@mui/material";
// Import Custom React Components
import SearchWidget from "./SearchWidget";
import PlacesList from "./PlacesList";
import MobileList from "./MobileList";
import ViewMapToggler from "./ViewMapToggler";
import { SearchContext } from "../../../../contexts/searchContext/SearchState";
import { getMapData, options } from "../../../../utility/map";
import { sampleData } from "../../../../utility/sampleData";

const SearchInfo: React.FC = () => {
  const { searchState, updateSearchResult } = useContext(SearchContext);
  // Get mapData
  useEffect(() => {
    const updateMapDataState = async () => {
      const result = await getMapData("restaurants", options);
      console.log(result);
      // Update Map Data State here

      return result;
    };

    let count = 0;
    const searchResultsList =
      sampleData.AppPresentation_queryAppListV2[0].sections.filter((item) => {
        if (item.__typename === "AppPresentation_AdPlaceholderNative") {
          count++;
        }
        if (item.__typename == "AppPresentation_SingleCard") {
          return item;
        }
      });

    const mapCarousel = sampleData.AppPresentation_queryAppListV2[0]
      .mapSections[1].content
      ? sampleData.AppPresentation_queryAppListV2[0].mapSections[1].content
      : [];

    // console.log("searchResultsList: ", searchResultsList);
    // console.log("mapCarousel: ", mapCarousel);
    // console.log("updateSearchResult: ", updateSearchResult);

    if (!searchState.result)
      updateSearchResult({
        list: searchResultsList,
        mapCarousel,
        activeItemID: parseInt(mapCarousel[0].saveId.id),
      });
    console.log("searchState: ", searchState);
  }, [searchState.result]);
  return (
    <Box
      component={"section"}
      className="md:p-2 lg:w-98 lg:x-shadow z-10 lg:h-full flex flex-col"
    >
      {/* Search Details Container */}
      <Box
        className={classNames(
          "md:flex left-0 p-2 w-full md:relative lg:p-0 shadow-none",
          { absolute: searchState.showMap },
          { relative: !searchState.showMap }
        )}
      >
        <SearchWidget />
        <ViewMapToggler />
      </Box>

      {/* Search Results Container - need to refactor these into one component */}
      {/* Results List for large screen devices, i.e. tablets, laptops & desktops */}
      <PlacesList />
      {/* Results List for Mobile devices */}
      <MobileList />
    </Box>
  );
};

export default SearchInfo;
