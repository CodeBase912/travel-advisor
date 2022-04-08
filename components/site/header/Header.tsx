import React from "react";
import Image from "next/image";
// Import MaterialUI Components
import { Box, Typography } from "@mui/material";
// Import Custom React Components
import SearchBar from "../../common/searchBar/SearchBar";
// Import Logo
import Logo from "../../../public/static/Logo.svg";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="fixed w-full top-0 z-50 p-2 lg:px-5 bg-white shadow-md flex justify-center items-center">
      {/* Header Content Wrapepr */}
      <Box className="max-w-8xl w-full flex sm:grid sm:grid-cols-2 items-center">
        {/* Logo Wrapper */}
        <Box className="relative flex items-center w-24 h-8 mr-5">
          <Link href="/">
            <a className="relative flex items-center w-24 h-8">
              <Image
                src={Logo}
                layout="fill"
                objectFit="contain"
                objectPosition="left"
                priority
              />
            </a>
          </Link>
        </Box>

        {/* Search Bar Wrapper */}
        <Box className="flex justify-end items-center w-full">
          <SearchBar />
        </Box>
      </Box>
    </header>
  );
};

export default Header;
