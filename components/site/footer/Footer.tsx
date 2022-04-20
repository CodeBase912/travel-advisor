import React from "react";
import Image from "next/image";
import Link from "next/link";
// Import MaterialUI Components
import { Box, Button, IconButton, Typography } from "@mui/material";
// Import Custom React Components
import Logo from "../Logo";
import { footerLinks } from "./footer-links";
// Import Logo
import LogoWhite from "../../../public/static/Logo_white.svg";
import GooglePlayStoreLogo from "../../../public/static/google-play 1.png";
import AppleAppStoreLogo from "../../../public/static/apple (2) 1.png";
import { Icons } from "../../common/icons";

const Footer: React.FC = () => {
  return (
    <footer className="p-3 lg:px-5 md:pt-11 bg-secondary text-white">
      <Box className="lg:flex xl:px-8 max-w-8xl m-auto">
        {/* Logo & Links Wrapper */}
        <Box className="md:flex w-full">
          {/* Logo & Slogan Wrapper */}
          <div className="flex flex-col items-start sm:items-center md:items-start my-5 md:my-0 space-y-2">
            <Logo size="xl" responsive />
            {/* Slogan */}
            <Typography
              component="p"
              className="font-thin text-xs w-44 sm:text-center md:text-left"
            >
              {"Discover your next destination. Take control of your journey"}
            </Typography>
          </div>
          {/* Footer Links Wrapper */}
          <Box className="grid gap-3 grid-temp-cols sm:place-items-center md:place-items-stretch md:grid-cols-3 lg:flex lg:justify-around w-full">
            {footerLinks.map((footerLink, footerLinkIndex) => {
              return (
                <Box key={`footer-link-group-${footerLinkIndex}`}>
                  <Typography
                    component="p"
                    variant="h6"
                    className="text-lg mb-2"
                  >
                    {footerLink.linkGroupHeader}
                  </Typography>
                  {footerLink.linksArray.map((link, linkIndex) => {
                    return (
                      <Link href={link.link} key={`footer-link-${linkIndex}`}>
                        <a>
                          <Typography
                            component="p"
                            className="font-thin text-white text-opacity-70 hover:text-opacity-100"
                          >
                            {link.title}
                          </Typography>
                        </a>
                      </Link>
                    );
                  })}
                </Box>
              );
            })}
          </Box>
        </Box>
        {/* Social Media & Other App s Links Wrapper */}
        <Box className="my-8 flex flex-col sm:items-center md:mt-3 lg:mt-0 lg:items-start m-auto">
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
          {/* Other Apps Links Header */}
          <Typography
            component="p"
            className="font-thin whitespace-nowrap mb-2"
          >
            Discover our apps
          </Typography>
          {/* Other Apps Links Wrapper */}
          <Box className="flex flex-wrap md:flex-nowrap gap-3">
            {/* Google Play Link */}
            <Button
              className="p-0 rounded-full bg-black hover:bg-black active:bg-opacity-60 min-w-40"
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
                  <span className="text-xs">{"Get it on "}</span>
                  <span className="whitespace-nowrap">{"Google Play"}</span>
                </Typography>
              </Box>
            </Button>
            {/* Apple Store Link */}
            <Button
              className="p-0 rounded-full bg-black hover:bg-black active:bg-opacity-60 min-w-40"
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
        <Typography component="p" className="font-thin text-xs xs:text-sm">
          {`${new Date().getFullYear()} © Xplore`}
        </Typography>
        <Typography
          component="p"
          className="font-thin text-xxs xs:text-xs sm:text-sm"
        >{`All rights reserved`}</Typography>
      </Box>
    </footer>
  );
};

export default Footer;
