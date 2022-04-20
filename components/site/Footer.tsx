import React from "react";
import Image from "next/image";
import Link from "next/link";
// Import MaterialUI Components
import { Box, Button, IconButton, Typography } from "@mui/material";
// Import Custom React Components
import Logo from "./Logo";
// Import Logo
import LogoWhite from "../../public/static/Logo_white.svg";
import GooglePlayStoreLogo from "../../public/static/google-play 1.png";
import AppleAppStoreLogo from "../../public/static/apple (2) 1.png";
import { Icons } from "../common/icons";

const Footer: React.FC = () => {
  return (
    <footer className="p-3 lg:px-5 md:pt-11 bg-secondary text-white">
      <Box className="lg:flex max-w-8xl m-auto">
        {/* Logo Wrapper */}
        <Box className="md:flex w-full">
          <div className="flex flex-col items-start my-5 md:my-0">
            <Logo size="xl" responsive />

            <Typography component="p" className="font-thin text-xs w-44">
              {"Discover your next destination. Take control of your journey"}
            </Typography>
          </div>
          {/* Footer Links Wrapper */}
          <Box className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:flex lg:justify-around w-full">
            <Box>
              <Link href="/">
                <a>
                  <Typography
                    component="p"
                    variant="h6"
                    className="text-lg mb-2"
                  >
                    {"Features"}
                  </Typography>
                </a>
              </Link>
              <Link href="/become_a_tour_guide">
                <a>
                  <Typography component="p" className="font-thin">
                    {"Become a tour guide"}
                  </Typography>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Typography component="p" className="font-thin">
                    {"Curate your journey"}
                  </Typography>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Typography component="p" className="font-thin">
                    {"Discover other Xplorers"}
                  </Typography>
                </a>
              </Link>
            </Box>

            <Box>
              <Link href="/">
                <a>
                  <Typography
                    component="p"
                    variant="h6"
                    className="text-lg mb-2"
                  >
                    {"About Xplore"}
                  </Typography>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Typography component="p" className="font-thin">
                    {"FAQ"}
                  </Typography>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Typography component="p" className="font-thin">
                    {"About Us"}
                  </Typography>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Typography component="p" className="font-thin">
                    {"Terms & Conditions"}
                  </Typography>
                </a>
              </Link>
            </Box>

            <Box>
              <Link href="/">
                <a>
                  <Typography
                    component="p"
                    variant="h6"
                    className="text-lg mb-2"
                  >
                    {"Support"}
                  </Typography>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Typography component="p" className="font-thin">
                    {"Contact Us"}
                  </Typography>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Typography component="p" className="font-thin">
                    {"Terms of Use"}
                  </Typography>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <Typography component="p" className="font-thin">
                    {"Privacy Policy"}
                  </Typography>
                </a>
              </Link>
            </Box>
          </Box>
        </Box>
        {/* Social Media & Other App s Links */}
        <Box className="my-8 flex flex-col md:items-center md:mt-3 lg:mt-0 lg:items-start m-auto">
          {/* Social Media Links */}
          <Box className="flex space-x-3 mb-8 md:mb-3">
            <IconButton
              disableRipple
              className="bg-primary w-8 h-8 flex items-center justify-center p-2 text-sm text-white active:bg-primary-dark"
            >
              {Icons.social.facebook}
            </IconButton>
            <IconButton
              disableRipple
              className="bg-primary w-8 h-8 flex items-center justify-center p-2 text-sm text-white active:bg-primary-dark"
            >
              {Icons.social.instagram}
            </IconButton>
            <IconButton
              disableRipple
              className="bg-primary w-8 h-8 flex items-center justify-center p-2 text-sm text-white active:bg-primary-dark"
            >
              {Icons.social.twitter}
            </IconButton>
          </Box>
          <Typography
            component="p"
            className="font-thin whitespace-nowrap mb-2"
          >
            Discover our apps
          </Typography>
          {/* Other Apps links */}
          <Box className="flex">
            <Button
              className="mr-3 p-0 rounded-full bg-black hover:bg-black active:bg-opacity-60"
              color="secondary"
              disableRipple
            >
              <Box className="flex items-center p-3 px-5 rounded-full space-x-3 w-40">
                <div className="relative w-8 h-8 object-contain">
                  <Image
                    src={GooglePlayStoreLogo}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <Typography
                  component="p"
                  className="font-thin uppercase text-white text-xs text-left"
                >
                  Get it on Google Play
                </Typography>
              </Box>
            </Button>
            <Button
              className="mr-3 p-0 rounded-full bg-black hover:bg-black active:bg-opacity-60"
              color="secondary"
              disableRipple
            >
              <Box className="flex items-center p-3 px-5 rounded-full space-x-3 w-40">
                <div className="relative w-8 h-8 object-contain">
                  <Image
                    src={AppleAppStoreLogo}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <Typography
                  component="p"
                  className="felx flex-col font-thin uppercase text-white text-xs text-left"
                >
                  <span className="text-xxs">{"Available on the "}</span>
                  <span className="whitespace-nowrap">{"Apple Store"}</span>
                </Typography>
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Copyright Wrapper */}
      <Box className="w-full sm:flex sm:space-x-3 sm:items-center sm:justify-center text-center mt-5">
        <Typography component="p" className="font-thin text-sm">
          {`${new Date().getFullYear()} © Xplore`}
        </Typography>
        <Typography
          component="p"
          className="font-thin text-xs sm:text-sm"
        >{`All rights reserved`}</Typography>
      </Box>
    </footer>
  );
};

export default Footer;
