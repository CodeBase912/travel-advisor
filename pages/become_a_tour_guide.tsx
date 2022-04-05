import type { NextPage } from "next";
import React from "react";
// Import MaterialUI COmponents
import { Box } from "@mui/material";
import Header from "../components/site/header/Header";

const TourGuideSIgnUp: NextPage = () => {
  return (
    <Box>
      <Header />
      <Box className="mt-20">become_a_tour_guide</Box>
    </Box>
  );
};

export default TourGuideSIgnUp;
