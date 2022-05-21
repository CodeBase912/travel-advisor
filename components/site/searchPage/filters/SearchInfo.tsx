import React, { useContext, useEffect, useRef } from "react";
import classNames from "classnames";
// Import Context & searchState Variables
import { SearchContext } from "../../../../contexts/searchContext/SearchState";
// Import MaterialUI Components
import { Box, Typography, Button } from "@mui/material";
// Import Custom React Components
import SelectInput from "../../forms/inputs/SelectInput";
import filterOptions from "../../../../contexts/searchContext/filter-options";
import SpringComp from "./Spring";
import SearchWidget from "../SearchWidget";
import PlacesList from "../PlacesList";
import MobileList from "../MobileList";

const SearchInfo: React.FC = () => {
  const { searchState, updateShowMap } = useContext(SearchContext);

  return (
    <Box component={"section"} className="md:p-2 lg:w-98 lg:x-shadow z-10">
      {/* Search Details Container */}
      <Box
        className={classNames(
          "md:flex left-0 p-2 w-full relative lg:p-0 shadow-none"
        )}
      >
        <SearchWidget />
        {/* Map/List View Toggler Container - (Mobile View Only) */}
        <Box className="flex justify-start md:justify-end md:items-end w-full pb-1 lg:hidden p-3 top-3 left-2 md:relative md:top-0 md:left-0">
          <Button
            className={classNames("rounded-full mr-3", {
              "bg-primary hover:bg-primary text-white h-fit shadow-lg shadow-gray-400 md:shadow-none":
                searchState.showMap,
            })}
            onClick={() => {
              updateShowMap(true);
            }}
            variant="outlined"
            disableRipple
          >
            {"View Map"}
          </Button>
          <Button
            className={classNames(
              "rounded-full h-fit",
              {
                "bg-primary hover:bg-primary text-white": !searchState.showMap,
              },
              {
                "bg-white border-0 hover:border-0 md:border-2 md:hover:border-2 hover:bg-slate-50 text-primary shadow-lg shadow-gray-400 md:shadow-none":
                  searchState.showMap,
              }
            )}
            onClick={() => {
              updateShowMap(false);
            }}
            variant="outlined"
            disableRipple
          >
            {"View List"}
          </Button>
        </Box>
      </Box>

      {/* Search Results Container */}
      {/* PlacesList for large screen devices, i.e. tablets, laptops & desktops */}
      <PlacesList />
      {/* MobileList - PlacesList for Mobile devices */}
      <MobileList />
    </Box>
  );
};

export default SearchInfo;
