import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// Import MUI Components
import { Box, Button, Typography } from "@mui/material";
// Import Custom React Components
import Header from "../components/site/header/Header";
import ExploreNearBy from "../components/site/homePage/ExploreNearBy";
import GoAnyWhere from "../components/site/homePage/GoAnyWhere";
import Footer from "../components/site/Footer";
// Import Images
import HeroImage from "../public/static/stefan-stefancik-0wMmxNB6Xzc-unsplash.jpg";
import FarrisWheelImg from "../public/static/jake-weirick-hieOkhzGyCE-unsplash.jpg";

const Home: NextPage = () => {
  return (
    <Box>
      <Header />
      <main className="max-w-8xl m-auto mt-14">
        {/* Hero Section */}
        <Box className="relative flex flex-col items-center justify-center w-full h-60p md:h-70p min-h-50">
          <Image
            src={HeroImage}
            layout="fill"
            objectFit="cover"
            priority={true}
          />
          <Box className="absolute w-full h-full bg-black bg-opacity-30 flex flex-col items-center justify-center space-y-5">
            <Typography component={"h2"} className="text-white font-thin">
              {"Not sure where to go? Perfect."}
            </Typography>
            <Button
              className="bg-primary rounded-full active:bg-primary-dark"
              variant="contained"
              disableElevation
              disableRipple
            >
              {"Explore more"}
            </Button>
          </Box>
        </Box>
        <Box className="py-2 lg:p-5">
          {/* Explore Nearby Places */}
          <ExploreNearBy />
          {/* Go Anywhere */}
          <Box className="pb-2">
            <GoAnyWhere />
          </Box>
          {/* Bottom Hero */}
          <Box className="py-10 px-3 sm:px-5 md:px-10">
            <Box className="relative rounded-lg overflow-hidden flex flex-col items-center justify-center w-full h-60 max-h-60 md:h-70p min-h-50">
              <Image src={FarrisWheelImg} layout="fill" objectFit="cover" />
              <Box className="absolute w-full h-full bg-black sm:bg-opacity-30 bg-opacity-40 flex flex-col items-center md:space-y-2">
                <Typography
                  component={"h2"}
                  className="text-white text-right w-full pt-10 pr-3 md:pr-10 lg:pr-20 lg:text-xl font-thin"
                >
                  {"Find beautiful places to explore."}
                </Typography>
                <Typography
                  component={"h2"}
                  className="text-white text-right w-full pr-3 md:pr-10 lg:pr-20 lg:text-xl  font-thin"
                >
                  {"All in one app"}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Footer */}
      </main>
      <Footer />
    </Box>
  );
};

export default Home;
