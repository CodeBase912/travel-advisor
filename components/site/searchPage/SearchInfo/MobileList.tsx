import React, { useContext } from "react";
import classNames from "classnames";
import { Box, Typography, IconButton, Rating } from "@mui/material";
import Image from "next/image";
import placeImg from "../../../../public/static/luca-bravo-O453M2Liufs-unsplash.jpg";

import { Icons } from "../../../common/icons";
import { SearchContext } from "../../../../contexts/searchContext/SearchState";

const MobileList: React.FC = () => {
  const { searchState, isDesktop } = useContext(SearchContext);
  return (
    <Box
      className={classNames(
        "p-2 ",
        { hidden: isDesktop === true },
        { "absolute bottom-2 left-0": searchState.showMap === true }
      )}
    >
      {/* MobileList */}
      {/* List Items */}
      <Box className="flex flex-col rounded-lg overflow-hidden shadow-lg shadow-gray-800 cursor-pointer">
        {/* Image Wrapper */}
        <Box className="">
          <Box className="relative object-contain w-[50vw] min-w-[200px] max-w-xs h-48">
            <Image src={placeImg} layout="fill" objectFit="cover" />
            <Box className="absolute bottom-0 pt-20 bg-gradient-to-b from-transparent to-black w-full text-white bg-opacity-50 pl-2 pb-2">
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
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MobileList;
