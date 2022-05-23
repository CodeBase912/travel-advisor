import React, { useContext } from "react";
import { Box, Button } from "@mui/material";
import classNames from "classnames";
import { SearchContext } from "../../../../contexts/searchContext/SearchState";

const ViewMapToggler = () => {
  const { searchState, updateShowMap } = useContext(SearchContext);
  return (
    <Box className="flex justify-start md:justify-end md:items-end w-full pb-1 lg:hidden p-3 top-3 left-2 md:relative md:top-0 md:left-0">
      {/* View Map Button */}
      <Button
        className={classNames("rounded-full mr-3", {
          "bg-primary hover:bg-primary text-white h-fit shadow-lg shadow-gray-400 md:shadow-none":
            searchState.showMap === true,
        })}
        onClick={() => {
          updateShowMap(true);
        }}
        variant="outlined"
        disableRipple
      >
        {"View Map"}
      </Button>

      {/* View List Button */}
      <Button
        className={classNames(
          "rounded-full h-fit",
          {
            "bg-primary hover:bg-primary text-white":
              searchState.showMap === false,
          },
          {
            "bg-white border-0 hover:border-0 md:border-2 md:hover:border-2 hover:bg-slate-50 text-primary shadow-lg shadow-gray-400 md:shadow-none":
              searchState.showMap === true,
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
  );
};

export default ViewMapToggler;
