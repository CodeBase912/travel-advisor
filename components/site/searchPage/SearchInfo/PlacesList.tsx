import React, { useContext, useEffect } from "react";
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
  useEffect(() => {}, [searchState.result]);
  return (
    <Box
      className={classNames(
        "p-2",
        // { hidden: isDesktop === false && searchState.showMap === true },
        { "pt-16 md:pt-2 overflow-y-scroll space-y-8": isDesktop === true },
        {
          "overflow-y-scroll space-y-8":
            isDesktop === false && searchState.showMap === false,
        },
        {
          "absolute bottom-2 left-0 flex w-screen overflow-x-scroll space-x-3 no-scrollbar":
            isDesktop === false && searchState.showMap === true,
        }
      )}
      // sx={{
      //   height: "calc(100% - 91px)",
      // }}
    >
      {/* PlacesList */}
      {/* List Items */}
      {searchState.result?.list
        ? searchState.result?.list.map(({ singleCardContent }, itemIndex) => {
            let imgSrc: string = singleCardContent.cardPhoto.sizes.urlTemplate;
            imgSrc = imgSrc.replace("{width}", "300");
            imgSrc = imgSrc.replace("{height}", "300");
            // console.log("imgSrc", imgSrc);

            const title: string = singleCardContent.cardTitle.string;
            const primaryInfo: string = singleCardContent.primaryInfo?.text;
            const secondaryInfo: string = singleCardContent.secondaryInfo?.text;
            const rating: number = singleCardContent.bubbleRating.rating;
            const numberOfReviews: string =
              singleCardContent.bubbleRating.numberReviews.string;
            return (
              <Box
                key={`place-item-${singleCardContent.saveId.id}`}
                id={singleCardContent.saveId.id}
                className={classNames(
                  {
                    "flex flex-col rounded-lg overflow-hidden border border-gray-400 cursor-pointer":
                      isDesktop === true,
                  },
                  {
                    "flex flex-col rounded-lg overflow-hidden border border-gray-400 cursor-pointer":
                      isDesktop === false && searchState.showMap === false,
                  },
                  {
                    "flex flex-col justify-end relative overflow-hidden rounded-lg cursor-pointer w-[50vw] min-w-[250px] max-w-xs h-48 shadow-lg shadow-gray-800":
                      isDesktop === false && searchState.showMap === true,
                  }
                )}
              >
                {/* Image Wrapper */}
                <Box
                  className={classNames(
                    {
                      "relative object-contain w-full min-w-28 h-48":
                        isDesktop === true,
                    },
                    {
                      "relative object-contain w-full min-w-28 h-48":
                        isDesktop === false && searchState.showMap === false,
                    },
                    {
                      "absolute overflow-hidden object-contain w-full min-w-28 h-full -z-[1]":
                        isDesktop === false && searchState.showMap === true,
                    }
                  )}

                  // position: fixed;
                  // height: 100vh;
                  // width: 100vw;
                  // overflow: hidden;
                  // z-index: -1;
                >
                  <Image src={imgSrc} layout="fill" objectFit="cover" />
                </Box>
                {/* Content Wrapper */}
                <Box
                  className={classNames(
                    {
                      "py-2 px-5 w-full space-y-3": isDesktop === true,
                    },
                    {
                      "py-2 px-5 w-full space-y-3":
                        isDesktop === false && searchState.showMap === false,
                    },
                    {
                      "z-10 pt-20 bg-gradient-to-b from-transparent to-black text-white p-2":
                        isDesktop === false && searchState.showMap === true,
                    }
                  )}
                >
                  <div className="flex justify-between items-center w-full">
                    <Typography
                      component="p"
                      className={classNames(
                        "font-bold",
                        { "text-lg": isDesktop === true },
                        {
                          "text-sm":
                            isDesktop === false && searchState.showMap === true,
                        }
                      )}
                    >
                      {title.substring(3).trim()}
                    </Typography>
                    <IconButton
                      disableRipple
                      className="p-2 text-sm text-primary active:bg-primary-dark active:bg-opacity-20"
                    >
                      {Icons.heartSolid}
                    </IconButton>
                  </div>
                  {/* Rating */}
                  <div className="flex items-center space-x-2">
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
                    <Typography component="p" className="text-sm font thin">
                      {`(${numberOfReviews} reviews)`}
                    </Typography>
                  </div>
                  {/* Address */}
                  {((isDesktop === false && searchState.showMap === false) ||
                    isDesktop === true) && (
                    <div className="flex justify-between items-center">
                      <div className="w-[20px] h-[20px] mr-2">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 544 450.266"
                        >
                          <path
                            id="Path_1"
                            data-name="Path 1"
                            d="M144,450.266a31.893,31.893,0,0,1-30.9-40.2A164.672,164.672,0,0,1,0,253.667a27.435,27.435,0,0,1,27.43-27.4H516.6a27.442,27.442,0,0,1,27.4,27.4,164.671,164.671,0,0,1-113.1,156.4,31.9,31.9,0,0,1-30.9,40.2ZM360.125,192.717a91.516,91.516,0,0,0-8.075-31.954l-8.979-20.106c-12.512-28.01-11.513-56.417,2.888-82.152L372.09,11.789a18.939,18.939,0,0,1,6.277-6.438C383.784,1.8,390.429,0,398.116,0c0,0,1.293.013,1.94.038L441.63,1.521,412.186,54.153c-15.725,28.055-16.832,59.009-3.2,89.517l9.563,21.343a96.9,96.9,0,0,1,7.841,27.7Zm-116,0a91.514,91.514,0,0,0-8.074-31.954l-8.98-20.106c-12.512-28.01-11.513-56.417,2.888-82.152L256.09,11.789a18.942,18.942,0,0,1,6.278-6.438C267.785,1.8,274.429,0,282.117,0c0,0,1.292.013,1.939.038L325.63,1.521,296.186,54.153c-15.724,28.055-16.832,59.009-3.2,89.517l9.563,21.343a96.9,96.9,0,0,1,7.841,27.7Zm-116,0a91.514,91.514,0,0,0-8.074-31.954l-8.98-20.106c-12.511-28.01-11.513-56.417,2.888-82.152L140.09,11.789a18.95,18.95,0,0,1,6.278-6.438C151.785,1.8,158.429,0,166.117,0c0,0,1.292.013,1.939.038L209.63,1.521,180.185,54.153c-15.724,28.055-16.832,59.009-3.2,89.517l9.563,21.343a96.9,96.9,0,0,1,7.841,27.7Z"
                          />
                        </svg>
                      </div>
                      <Typography component="p" className="text-sm text-right">
                        {primaryInfo}
                      </Typography>
                    </div>
                  )}
                  {/* Open Status */}
                  <div className="flex justify-between items-center">
                    <div className="text-xl mr-2">{Icons.clock}</div>
                    <Typography
                      component="p"
                      className={`text-sm text-right font-bold ${
                        secondaryInfo === "Open now" && "text-green-600"
                      }`}
                    >
                      {secondaryInfo ? secondaryInfo : "Hours not available"}
                    </Typography>
                  </div>
                </Box>
              </Box>
            );
          })
        : "No results found"}
    </Box>
  );
};

export default PlacesList;
