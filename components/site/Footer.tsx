import React from "react";
import Image from "next/image";
import Link from "next/link";
// Import MaterialUI Components
import { Box, Typography } from "@mui/material";
// Import Logo
import LogoWhite from "../../public/static/Logo_white.svg";

const Footer: React.FC = () => {
  return (
    <footer className="p-3 bg-primary text-white">
      {/* Logo Wrapper */}
      <Box className="flex sm:justify-center my-5">
        <Link href="/">
          <a className="relative flex items-center w-24 h-10">
            <Image
              src={LogoWhite}
              layout="fill"
              objectFit="contain"
              objectPosition="left"
            />
          </a>
        </Link>
      </Box>
      {/* Footer Links Wrapper */}
      <Box className="grid gap-3 sm:place-items-center sm:text-center grid-cols-2 md:grid-cols-3 lg:flex lg:justify-around lg:max-w-5xl m-auto">
        <Box>
          <Link href="/">
            <a>
              <Typography component="p" variant="h6" className="text-lg mb-2">
                {"Our Services"}
              </Typography>
            </a>
          </Link>
          <Link href="/">
            <a>
              <Typography component="p" className="font-thin">
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
        </Box>

        <Box>
          <Link href="/">
            <a>
              <Typography component="p" variant="h6" className="text-lg mb-2">
                {"About Us"}
              </Typography>
            </a>
          </Link>
          <Link href="/">
            <a>
              <Typography component="p" className="font-thin">
                {"Blog"}
              </Typography>
            </a>
          </Link>
          <Link href="/">
            <a>
              <Typography component="p" className="font-thin">
                {"Our Mission"}
              </Typography>
            </a>
          </Link>
          <Link href="/">
            <a>
              <Typography component="p" className="font-thin">
                {"Community"}
              </Typography>
            </a>
          </Link>
        </Box>

        <Box>
          <Link href="/">
            <a>
              <Typography component="p" variant="h6" className="text-lg mb-2">
                {"Legal"}
              </Typography>
            </a>
          </Link>
          <Link href="/">
            <a>
              <Typography component="p" className="font-thin">
                {"Terms & Condiitons"}
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
          <Link href="/">
            <a>
              <Typography component="p" className="font-thin">
                {"Settings"}
              </Typography>
            </a>
          </Link>
        </Box>
      </Box>

      {/* Copyright Wrapper */}
      <Box className="w-full text-center my-8">
        <Typography component="p" className="font-thin text-sm">
          {`${new Date().getFullYear()} © Whereto`}
        </Typography>
        <Typography
          component="p"
          className="font-thin text-xs"
        >{`All rights reserved`}</Typography>
      </Box>
    </footer>
  );
};

export default Footer;
