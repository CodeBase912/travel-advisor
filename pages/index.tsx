import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// Import MUI Components
import { Box, Button, Typography } from "@mui/material";
// Import Custom React Components
import Header from "../components/site/header/Header";
import ExploreNearBy from "../components/site/homePage/ExploreNearBy";
// import Footer from "../components/site/header/Footer";
// Import Images
import HeroImage from "../public/static/stefan-stefancik-0wMmxNB6Xzc-unsplash.jpg";

const Home: NextPage = () => {
  return (
    <Box>
      <Header />
      <main className="h-80 max-w-8xl m-auto">
        {/* Hero Section */}
        <Box className="relative flex flex-col items-center justify-center w-full h-60p md:h-70p min-h-50">
          <Image src={HeroImage} layout="fill" objectFit="cover" />
          <Box className="absolute w-full h-full bg-black bg-opacity-30 flex flex-col items-center justify-center space-y-5">
            <Typography component={"h2"} className="text-white font-thin">
              {"Not sure where to go? Perfect."}
            </Typography>
            <Button
              sx={{
                borderRadius: "50px",
              }}
              variant="contained"
              disableElevation
              disableRipple
            >
              {"Explore more"}
            </Button>
          </Box>
        </Box>
        <Box className="p-2">
          {/* Explore Nearby Places */}
          <ExploreNearBy />
          {/* Go Anywhere */}
          <Box className="pb-2">
            <h2 className="font-bold text-3xl py-3">{"Go Anywhere"}</h2>
          </Box>
          {/* Bottom Hero */}
          <Box>
            {/* <h2 className="font-bold text-3xl py-3">{"bottom Hero"}</h2> */}
          </Box>
        </Box>

        {/* Footer */}
      </main>
      {/* <Footer /> */}
    </Box>
  );
};

export default Home;
