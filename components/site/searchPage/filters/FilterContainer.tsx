import React, { useContext, useEffect, useRef } from "react";
import classNames from "classnames";
// Import Context & State Variables
import { SearchContext } from "../../../../contexts/searchContext/SearchState";
// Import MaterialUI Components
import { Box, Typography, Button } from "@mui/material";
// Import Custom React Components
import SelectInput from "../../forms/inputs/SelectInput";
import filterOptions from "./filter-options";
import SpringComp from "./Spring";

type Props = {
  showMap: boolean;
  setShowMap: React.Dispatch<React.SetStateAction<boolean>>;
};

const FilterContainer: React.FC<Props> = ({ showMap, setShowMap }) => {
  const { state, updateSelectedCategory, updateSelectedRating } =
    useContext(SearchContext);

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

  // ----------------------------------------------------------
  //  Render Component
  // ----------------------------------------------------------

  return (
    <Box
      component={"section"}
      className="relative md:p-2 lg:w-98 lg:x-shadow z-10"
    >
      <Box
        className={classNames(
          "md:flex left-0 p-2 w-full relative lg:p-0 shadow-none"
        )}
      >
        {/* Filters Container */}
        <SpringComp
          className={classNames(
            "flex md:relative items-end shadow-lg shadow-gray-200 bg-white px-4 pt-4 md:px-0 md:pt-0",
            {
              "shadow-none": !showMap,
            }
          )}
          className_actionBtn={classNames(
            "absolute flex justify-center items-center top-[15px] w-[40px] h-[40px] right-2 ml-auto rounded-full md:hidden",
            "bg-white text-primary text-[16px] hover:bg-white shadow-lg shadow-gray-400",
            {
              "shadow-none": !showMap,
            }
          )}
        >
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
                value={state.selectedCategory}
                defaultValue={state.selectedCategory}
                options={filterOptions.categoryOptions}
                onChange={onCategoryChange}
              />
              <SelectInput
                label="Rating"
                value={state.selectedRating}
                defaultValue={state.selectedRating}
                options={filterOptions.ratingsOptions}
                onChange={onRatingChange}
              />
            </Box>
            {/* Drag Handle Bar - (Mobile View Only) */}
            <Box className="md:hidden !h-2 w-20 mt-5 mb-1 rounded-full bg-gray-500 m-auto"></Box>
          </Box>
        </SpringComp>

        {/* Map/List View Toggler Container - (Mobile View Only) */}
        <Box className="flex justify-start md:justify-end md:items-end w-full pb-1 lg:hidden p-3 top-3 left-2 md:relative md:top-0 md:left-0">
          <Button
            className={classNames("rounded-full mr-3", {
              "bg-primary hover:bg-primary text-white h-fit shadow-lg shadow-gray-400 md:shadow-none":
                showMap,
            })}
            onClick={() => {
              setShowMap(true);
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
                "bg-primary hover:bg-primary text-white": !showMap,
              },
              {
                "bg-white border-0 hover:border-0 md:border-2 md:hover:border-2 hover:bg-slate-50 text-primary shadow-lg shadow-gray-400 md:shadow-none":
                  showMap,
              }
            )}
            onClick={() => {
              setShowMap(false);
            }}
            variant="outlined"
            disableRipple
          >
            {"View List"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FilterContainer;
