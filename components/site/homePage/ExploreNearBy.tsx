import React from "react";
import Image from "next/image";
// Import MaterialUI Components
import { Box, Typography } from "@mui/material";
// Import Images
import NearByImg from "../../../public/static/luca-bravo-O453M2Liufs-unsplash.jpg";

const ExploreNearBy = () => {
  return (
    <Box className="pb-2 px-2">
      <h2 className="font-bold text-3xl py-3">{"Explore Nearby"}</h2>
      {/* Nearby Places Wrapper */}
      <Box
        className="grid items-center gap-5"
        sx={{
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        }}
      >
        <Box className="group flex items-center w-max cursor-pointer">
          {/* Image Wrapper */}
          <div className="relative w-10 h-10 mr-2 rounded-lg overflow-hidden group-hover:scale-110 transition">
            <Image src={NearByImg} layout="fill" objectFit="cover" />
          </div>
          {/* Text Wrapper */}
          <Box>
            <p className="text-xs">NeigbourGoods Market</p>
            <p className="text-xs text-gray-400">15 minutes away</p>
          </Box>
        </Box>
        <Box className="group flex items-center w-max cursor-pointer">
          {/* Image Wrapper */}
          <Box className="relative w-10 h-10 mr-2 rounded-lg overflow-hidden group-hover:scale-110 transition">
            <Image src={NearByImg} layout="fill" objectFit="cover" />
          </Box>
          {/* Text Wrapper */}
          <Box>
            <p className="text-xs">Mandela Bridge</p>
            <p className="text-xs text-gray-400">20 minutes away</p>
          </Box>
        </Box>
        <Box className="group flex items-center w-max cursor-pointer">
          {/* Image Wrapper */}
          <Box className="relative w-10 h-10 mr-2 rounded-lg overflow-hidden group-hover:scale-110 transition">
            <Image src={NearByImg} layout="fill" objectFit="cover" />
          </Box>
          {/* Text Wrapper */}
          <Box>
            <p className="text-xs">Nelson Mandela Square</p>
            <p className="text-xs text-gray-400">20 minutes away</p>
          </Box>
        </Box>
        <Box className="group flex items-center w-max cursor-pointer">
          {/* Image Wrapper */}
          <Box className="relative w-10 h-10 mr-2 rounded-lg overflow-hidden group-hover:scale-110 transition">
            <Image src={NearByImg} layout="fill" objectFit="cover" />
          </Box>
          {/* Text Wrapper */}
          <Box>
            <p className="text-xs">Ghandi Square</p>
            <p className="text-xs text-gray-400">22 minutes away</p>
          </Box>
        </Box>
        <Box className="group flex items-center w-max cursor-pointer">
          {/* Image Wrapper */}
          <Box className="relative w-10 h-10 mr-2 rounded-lg overflow-hidden group-hover:scale-110 transition">
            <Image src={NearByImg} layout="fill" objectFit="cover" />
          </Box>
          {/* Text Wrapper */}
          <Box>
            <p className="text-xs">Maboneng</p>
            <p className="text-xs text-gray-400">35 minutes away</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ExploreNearBy;
