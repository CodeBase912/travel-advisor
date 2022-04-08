import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
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

type Props = {
  showMap: boolean;
  setShowMap: React.Dispatch<React.SetStateAction<boolean>>;
};

const FilterContainer: React.FC<Props> = ({ showMap, setShowMap }) => {
  const { state, updateSearchQuery } = useContext(SearchContext);
  const router = useRouter();
  const [categoryOption, setCategoryOption] = useState("attractions");
  const [ratingOption, setRatingOption] = useState("0");

  useEffect(() => {
    if (router.query) {
      updateSearchQuery(router.query as never);
    }
  }, []);

  console.log("Search query: ", state.searchQuery);

  const categoryOptions = [
    { value: "attractions", displayText: "Attractions" },
    { value: "restaurants", displayText: "Restaurants" },
    { value: "hotels", displayText: "Hotels" },
  ];

  const ratingOptions = [
    { value: "0", displayText: "All" },
    { value: "3", displayText: "Above 3.0" },
    { value: "4", displayText: "Above 4.0" },
    { value: "4.5", displayText: "Above 4.5" },
  ];

  const onCategoryChange: React.EventHandler<any> = (e) => {
    console.log("New Value: ", e.target.value);
    setCategoryOption(e.target.value);
  };

  const onRatingChange: React.EventHandler<any> = (e) => {
    console.log("New Value: ", e.target.value);
    setRatingOption(e.target.value);
  };

  return (
    <Box component={"section"} className="p-2 lg:w-98">
      <Typography
        component="p"
        variant="h6"
        className="text-lg lg:px-3 lg:pt-3"
      >
        {router.query?.n
          ? `Showing results for "${router.query.n}"`
          : "Attractions, Restaurants & Hotels around you"}
      </Typography>
      <Box className="flex flex-col justify-between md:flex-row md:items-center lg:px-3">
        <Box className="flex gap-3 py-3 w-full max-w-sm">
          <SelectInput
            label="Category"
            value={categoryOption}
            defaultValue={categoryOption}
            options={categoryOptions}
            onChange={onCategoryChange}
          />
          <SelectInput
            label="Rating"
            value={ratingOption}
            defaultValue={ratingOption}
            options={ratingOptions}
            onChange={onRatingChange}
          />
        </Box>
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
    </Box>
  );
};

export default FilterContainer;
