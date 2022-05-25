import React, { useContext, useEffect } from "react";
import classNames from "classnames";
// Import MaterialUI Components
import { Box, Button } from "@mui/material";
// Import Custom React Components
import SearchWidget from "./SearchWidget";
import PlacesList from "./PlacesList";
import ViewMapToggler from "./ViewMapToggler";
import { SearchContext } from "../../../../contexts/searchContext/SearchState";
import { getMapData, options } from "../../../../utility/map";
import { sampleData } from "../../../../utility/sampleData";

const SearchInfo: React.FC = () => {
  const { searchState, isDesktop, updateSearchResult } =
    useContext(SearchContext);
  // Get mapData
  useEffect(() => {
    const updateMapDataState = async () => {
      const result = await getMapData("restaurants", options);
      console.log(result);
      // Update Map Data State here

      return result;
    };

    const searchResultsList =
      sampleData.AppPresentation_queryAppListV2[0].sections.filter(
        (item) => item.__typename == "AppPresentation_SingleCard"
      );

    if (!searchState.result)
      updateSearchResult({
        list: searchResultsList,
        activeItemID: parseInt(
          searchResultsList[0].singleCardContent?.saveId.id
            ? searchResultsList[0].singleCardContent.saveId.id
            : "0"
        ),
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

      {/* Search Results Container */}
      <PlacesList />
    </Box>
  );
};

export default SearchInfo;
