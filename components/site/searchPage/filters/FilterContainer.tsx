import React, { useContext } from "react";
import classNames from "classnames";
// Import Context & State Variables
import SearchState, {
  SearchContext,
} from "../../../../contexts/searchContext/SearchState";
// Import MaterialUI Components
import {
  Paper,
  useMediaQuery,
  Rating,
  Box,
  Typography,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  Button,
} from "@mui/material";
import LocationOulinedIcon from "@mui/icons-material/LocationCityOutlined";
// Import Custom React Components
import SelectInput from "../../forms/inputs/SelectInput";
import filterOptions from "./filter-options";
import PlacesList from "../PlacesList";

type Props = {
  showMap: boolean;
  showList: boolean;
  setShowMap: React.Dispatch<React.SetStateAction<boolean>>;
};

const FilterContainer: React.FC<Props> = ({
  showMap,
  showList,
  setShowMap,
}) => {
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
    <Box component={"section"} className="p-2 lg:w-98">
      {/* Filter Container Header */}
      <Typography
        component="p"
        variant="h6"
        className="text-lg lg:px-3 lg:pt-3"
      >
        {state.searchQuery
          ? `Showing results for "${state.searchQuery}"`
          : "Attractions, Restaurants & Hotels around you"}
      </Typography>

      <Box className="flex flex-col justify-between md:flex-row md:items-center lg:px-3">
        {/* Filters Wrapper */}
        <Box className="flex gap-3 py-3 w-full max-w-sm">
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

        {/* Map/List View Toggler Container */}
        <Box className="space-x-3 pb-1 lg:hidden">
          <Button
            className={classNames("rounded-full", {
              "bg-primary hover:bg-primary text-white": showMap,
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
            className={classNames("rounded-full", {
              "bg-primary hover:bg-primary text-white": !showMap,
            })}
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

      {/* List */}
      <PlacesList showList={showList} />
    </Box>
  );
};

export default FilterContainer;
