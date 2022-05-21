import React, { useContext } from "react";
import classNames from "classnames";
import { SearchContext } from "../../../contexts/searchContext/SearchState";
import SpringComp from "./filters/Spring";
import { Box, Typography, useMediaQuery } from "@mui/material";
import SelectInput from "../forms/inputs/SelectInput";
import filterOptions from "../../../contexts/searchContext/filter-options";

type Props = {};

const SearchWidget: React.FC<Props> = () => {
  const { searchState, updateSelectedCategory, updateSelectedRating } =
    useContext(SearchContext);
  const isMobile = useMediaQuery("(max-width: 768px)");

  // ----------------------------------------------------------
  //  Handle onChange Events for the SelectInput Components
  // ----------------------------------------------------------

  const onCategoryChange: React.EventHandler<any> = (e) => {
    console.log("New Value: ", e.target.value);
    updateSelectedCategory(e.target.value);
  };

  const onRatingChange: React.EventHandler<any> = (e) => {
    console.log("New Value: ", e.target.value);
    updateSelectedRating(e.target.value);
  };

  const searchFilters = (
    <Box className="flex flex-col justify-end w-full">
      {/* Search Results Header */}
      <Typography
        component="p"
        variant="h6"
        className={classNames(
          "text-lg pl-0 pr-10 md:pr-0 lg:px-3 lg:pt-3 md:flex"
        )}
      >
        {`Filter search results`}
      </Typography>
      {/* Filters Container */}
      <Box
        className={classNames(
          "flex items-start justify-start md:flex-row gap-3 pt-3 px-0 m-0 w-full max-w-sm",
          {
            // hidden: showFilters,
          }
        )}
      >
        <SelectInput
          label="Category"
          value={searchState.selectedCategory}
          defaultValue={searchState.selectedCategory}
          options={filterOptions.categoryOptions}
          onChange={onCategoryChange}
        />
        <SelectInput
          label="Rating"
          value={searchState.selectedRating}
          defaultValue={searchState.selectedRating}
          options={filterOptions.ratingsOptions}
          onChange={onRatingChange}
        />
      </Box>
    </Box>
  );

  return isMobile ? (
    <SpringComp
      className={classNames(
        "flex md:relative items-end shadow-lg shadow-gray-200 bg-white px-4 pt-4 md:px-0 md:pt-0",
        {
          "shadow-none": !searchState.showMap,
        }
      )}
      className_actionBtn={classNames(
        "absolute flex justify-center items-center top-[15px] w-[40px] h-[40px] right-2 ml-auto rounded-full md:hidden",
        "bg-white text-primary text-[16px] hover:bg-white shadow-lg shadow-gray-400",
        {
          "shadow-none": !searchState.showMap,
        }
      )}
    >
      {searchFilters}
    </SpringComp>
  ) : (
    searchFilters
  );
};

export default SearchWidget;
