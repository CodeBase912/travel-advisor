import React from "react";
import Image from "next/image";
// Import MaterialUI Components
import { Box, Typography } from "@mui/material";
// Import Images
import TentImg from "../../../public/static/romain-gal-r14k9jzw2VE-unsplash.jpg";
import BoyWithBagImg from "../../../public/static/dhehaivan-UDYE-agPbj4-unsplash.jpg";
import BoatImg from "../../../public/static/luca-bravo-O453M2Liufs-unsplash.jpg";

const GoAnyWhere = () => {
  return (
    <div>
      <h2 className="font-bold text-3xl pt-3 px-2">{"Go Anywhere"}</h2>
      {/* Categories */}
      <Box className="flex items-center gap-5 pl-3 py-5 pb-3 overflow-x-auto overflow-y-hidden w-full no-scrollbar">
        <Box className="group hover:scale-105 hover:shadow-2xl transition duration-300 cursor-pointer w-full min-w-40 rounded-lg overflow-hidden shadow-lg">
          <Box className="relative h-60 w-full">
            <Image
              src={TentImg}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-125 transition duration-300"
            />
          </Box>

          <Box className="text-black py-5 px-3">
            <Typography component="p" className="text-sm">
              {"See Attractions"}
            </Typography>
            <Typography component="p" className="text-sm font-thin">
              {"140 near you"}
            </Typography>
          </Box>
        </Box>
        <Box className="group hover:scale-105 hover:shadow-2xl transition duration-300 cursor-pointer w-full min-w-40 rounded-lg overflow-hidden shadow-lg">
          <Box className="relative h-60 w-full">
            <Image
              src={BoyWithBagImg}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-125 transition duration-300"
            />
          </Box>

          <Box className="text-black py-5 px-3">
            <Typography component="p" className="text-sm">
              {"Restaurants"}
            </Typography>
            <Typography component="p" className="text-sm font-thin">
              {"120 near you"}
            </Typography>
          </Box>
        </Box>
        <Box className="group hover:scale-105 hover:shadow-2xl transition duration-300 cursor-pointer w-full min-w-40 rounded-lg overflow-hidden shadow-lg">
          <Box className="relative h-60 w-full">
            <Image
              src={BoatImg}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-125 transition duration-300"
            />
          </Box>
          <Box className="text-black py-5 px-3">
            <Typography component="p" className="text-sm">
              {"Hotels"}
            </Typography>
            <Typography component="p" className="text-sm font-thin">
              {"112 near you"}
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default GoAnyWhere;
