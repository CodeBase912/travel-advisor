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
      <Box className="flex items-center gap-5 pl-3 py-5 pb-3 overflow-x-auto overflow-y-hidden w-full">
        <Box className="group hover:scale-105 transition w-full min-w-40">
          <Box className="relative h-80 w-full rounded-lg overflow-hidden">
            <Image
              src={TentImg}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-125 transition duration-300"
            />
          </Box>
          <Typography component="p" className="text-black text-lg">
            {"See Attractions"}
          </Typography>
        </Box>
        <Box className="group hover:scale-105 transition w-full min-w-40">
          <Box className="relative h-80 w-full rounded-lg overflow-hidden">
            <Image
              src={BoyWithBagImg}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-125 transition duration-300"
            />
          </Box>

          <Typography component="p" className="text-black text-lg">
            {"Restuarants"}
          </Typography>
        </Box>
        <Box className="group hover:scale-105 transition w-full min-w-40 mr-2 md:mr-5">
          <Box className="relative h-80 w-full rounded-lg overflow-hidden">
            <Image
              src={BoatImg}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-125 transition duration-300"
            />
          </Box>
          <Typography component="p" className="text-black text-lg">
            {"Hotels"}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default GoAnyWhere;
