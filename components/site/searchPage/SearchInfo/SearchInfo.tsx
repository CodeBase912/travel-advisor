import React from "react";
import classNames from "classnames";
// Import MaterialUI Components
import { Box, Button } from "@mui/material";
// Import Custom React Components
import SearchWidget from "./SearchWidget";
import PlacesList from "./PlacesList";
import MobileList from "./MobileList";
import ViewMapToggler from "./ViewMapToggler";

const SearchInfo: React.FC = () => {
  return (
    <Box component={"section"} className="md:p-2 lg:w-98 lg:x-shadow z-10">
      {/* Search Details Container */}
      <Box
        className={classNames(
          "md:flex left-0 p-2 w-full relative lg:p-0 shadow-none"
        )}
      >
        <SearchWidget />
        <ViewMapToggler />
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
