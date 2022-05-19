import React, {
  RefObject,
  MutableRefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
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
  IconButton,
} from "@mui/material";
import LocationOulinedIcon from "@mui/icons-material/LocationCityOutlined";
// Import Custom React Components
import SelectInput from "../../forms/inputs/SelectInput";
import filterOptions from "./filter-options";
import PlacesList from "../PlacesList";
import { Icons } from "../../../common/icons";
import SpringComp from "./Spring";

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
  const [showFilters, setShowFilters] = useState(false);
  const searchResultsRef = useRef(null);

  useEffect(() => {
    console.log("searchResultsRef: ", searchResultsRef);
    //@ts-ignore
    console.log("Height: ", searchResultsRef.current.offsetHeight);
    console.log("state: ", state);
  }, [searchResultsRef?.current]);

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
          "absolute md:relative left-0 p-2 w-full lg:relative lg:p-0 shadow-none",
          "transition-position ease-in-out duration-500"
          // {
          //   "relative top-0": !showFilters,
          // }
        )}
      >
        {/* Search Results Header */}
        <Typography
          component="p"
          variant="h6"
          className={classNames(
            "text-lg hidden pr-10 md:pr-0 lg:px-3 lg:pt-3 md:flex"
          )}
          ref={searchResultsRef}
        >
          {state.searchQuery
            ? `Showing results for "${state.searchQuery}"`
            : "Attractions, Restaurants & Hotels near you"}
        </Typography>
        <Box className="relative flex flex-col w-full justify-between md:flex-row md:items-center lg:px-3">
          <SpringComp
            className={classNames(
              "flex flex-col justify-end shadow-lg shadow-gray-200 bg-white px-4 pt-4 md:hidden",
              {
                "shadow-none": !showMap,
              }
            )}
            className_actionBtn={classNames(
              "absolute flex justify-center items-center z-[102] top-[10px] w-[40px] h-[40px] right-2 ml-auto rounded-full md:hidden",
              "bg-white text-primary text-[16px] hover:bg-white shadow-lg shadow-gray-400",
              {
                "shadow-none": !showMap,
              },
              {
                "text-[20px] shadow-none": showFilters,
              }
            )}
            isOpen={showFilters}
            setIsOpen={setShowFilters}
          >
            {/* Search Results Header */}
            <Typography
              component="p"
              variant="h6"
              className={classNames(
                "text-lg pl-0 pr-10 md:pr-0 lg:px-3 lg:pt-3 md:flex"
              )}
              ref={searchResultsRef}
            >
              {`Filter search results ${
                state.searchQuery ? `for "` + state.searchQuery + `"` : ``
              }`}
            </Typography>
            {/* Filters Wrapper */}
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
            <Box className="!h-2 w-20 mt-5 mb-1 rounded-full bg-gray-500 m-auto"></Box>
          </SpringComp>

          {/* Filters Wrapper */}
          <Box
            className={classNames(
              "hidden md:flex items-start justify-start md:flex-row gap-3 pt-3 px-0 m-0 w-full max-w-sm",
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

          {/* Map/List View Toggler Container */}
          <Box className="flex justify-start md:justify-end w-[95vw] pb-1 lg:hidden p-3 top-3 left-2 md:relative md:top-0 md:left-0">
            <Button
              className={classNames("rounded-full mr-3", {
                "bg-primary hover:bg-primary text-white shadow-lg shadow-gray-400 md:shadow-none":
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
                "rounded-full",
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
      {/* <IconButton
        className={classNames(
          "absolute top-[10px] w-[40px] h-[40px] right-2 ml-auto rounded-full md:hidden",
          "bg-white text-primary text-[16px] hover:bg-white shadow-lg shadow-gray-400",
          {
            "shadow-none": !showMap,
          },
          {
            "text-[20px] shadow-none": showFilters,
          }
        )}
        disableRipple
        title="Show search filters"
        onClick={() => setShowFilters(!showFilters)}
      >
        {showFilters ? Icons.close : Icons.filter}
      </IconButton> */}

      {/* List */}
      <PlacesList showList={showList} />
    </Box>
  );
};

export default FilterContainer;
