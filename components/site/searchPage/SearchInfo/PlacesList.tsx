import React, { useContext } from "react";
import classNames from "classnames";
// Import MaterialUI COmponents
import { Box, IconButton, Rating, Typography } from "@mui/material";
// Import Images
import placeImg from "../../../../public/static/luca-bravo-O453M2Liufs-unsplash.jpg";
import Image from "next/image";
import { Icons } from "../../../common/icons";
import { SearchContext } from "../../../../contexts/searchContext/SearchState";

const PlacesList: React.FC = () => {
  const { searchState, isDesktop } = useContext(SearchContext);

  return (
    <Box
      className={classNames(
        "p-2",
        { hidden: isDesktop === false },
        { "pt-16 md:pt-2": isDesktop === true }
      )}
    >
      {/* PlacesList */}
      {/* List Items */}
      <Box className="flex flex-col rounded-lg overflow-hidden shadow-lg cursor-pointer">
        {/* Image Wrapper */}
        <Box className="relative object-contain w-full min-w-28 h-48">
          <Image src={placeImg} layout="fill" objectFit="cover" />
        </Box>
        {/* Content Wrapper */}
        <Box className="py-2 px-5 w-full space-y-1">
          <div className="flex justify-between items-center w-full">
            <Typography component="p" className="font-bold">
              {"Some where random"}
            </Typography>
            <IconButton
              disableRipple
              className="p-2 text-sm text-primary active:bg-primary-dark active:bg-opacity-20"
            >
              {Icons.heartSolid}
            </IconButton>
          </div>
          {/* Rating */}
          <div className="flex space-x-2">
            <Rating
              sx={{
                ".MuiRating-icon": {
                  fontSize: "16px",
                },
              }}
              name="half-rating-read"
              value={4.5}
              precision={0.5}
              size="small"
              readOnly
            />
            <Typography component="p" className="text-xs font thin">
              {"(203 reviews)"}
            </Typography>
          </div>
          {/* Address */}
          <div className="flex justify-between items-center">
            <Typography component="p" className="text-xs mr-2">
              {Icons.marker}
            </Typography>
            <Typography component="p" className="text-xs font-thin text-right">
              {"123 Example street, Johannesburg, South Africa"}
            </Typography>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default PlacesList;
