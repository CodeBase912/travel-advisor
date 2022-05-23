import React, { useContext, useEffect } from "react";
import classNames from "classnames";
import { Box, Typography, IconButton, Rating } from "@mui/material";
import Image from "next/image";
import placeImg from "../../../../public/static/luca-bravo-O453M2Liufs-unsplash.jpg";

import { Icons } from "../../../common/icons";
import { SearchContext } from "../../../../contexts/searchContext/SearchState";

const MobileList: React.FC = () => {
  const { searchState, isDesktop } = useContext(SearchContext);
  useEffect(() => {}, [searchState.result]);
  return (
    <Box
      className={classNames(
        { "hidden p-2": isDesktop === true },
        { "absolute bottom-2 left-0": searchState.showMap === true }
      )}
    >
      {/* MobileList */}
      {/* List Items */}
      <Box
        className={classNames("flex cursor-pointer", {
          "flex-col": searchState.showMap === false,
        })}
      >
        {/* Image Wrapper */}
        <Box
          className={classNames("", {
            "flex w-screen no-scrollbar space-x-3 overflow-scroll pr-2":
              searchState.showMap,
          })}
        >
          {searchState.result?.list &&
            searchState.result?.mapCarousel.map((item, itemIndex) => {
              let imgSrc: string = item.cardPhoto.sizes.urlTemplate;
              imgSrc = imgSrc.replace("{width}", "300");
              imgSrc = imgSrc.replace("{height}", "300");
              // console.log("imgSrc", imgSrc);

              const title: string = item.cardTitle.string;
              const primaryInfo: string = item.primaryInfo?.text;
              const secondaryInfo: string = item.secondaryInfo?.text;
              const rating: number = item.bubbleRating.rating;
              const numberOfReviews: string =
                item.bubbleRating.numberReviews.string;
              return (
                <Box
                  className={classNames(
                    "relative object-contain w-[50vw] min-w-[250px] max-w-xs h-48 overflow-hidden rounded-lg shadow-lg shadow-gray-800",
                    { "ml-2": searchState.showMap }
                  )}
                >
                  <Image src={imgSrc} layout="fill" objectFit="cover" />
                  <Box className="absolute bottom-0 pt-20 bg-gradient-to-b from-transparent to-black w-full text-white bg-opacity-50 pl-2 pb-2">
                    <div className="flex justify-between items-center w-full">
                      <Typography component="p" className="font-bold">
                        {title}
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
                        value={rating}
                        precision={0.5}
                        size="small"
                        readOnly
                      />
                      <Typography component="p" className="text-xs font thin">
                        {`(${numberOfReviews} reviews)`}
                      </Typography>
                    </div>
                    {/* Open Status */}
                    {secondaryInfo && (
                      <div className="flex justify-start items-center mt-1">
                        <div className="text-sm mr-2">{Icons.clock}</div>
                        <Typography
                          component="p"
                          className={`text-xs text-right font-bold ${
                            secondaryInfo === "Open now" && "text-green-600"
                          }`}
                        >
                          {secondaryInfo}
                        </Typography>
                      </div>
                    )}
                  </Box>
                </Box>
              );
            })}
        </Box>
      </Box>
    </Box>
  );
};

export default MobileList;
