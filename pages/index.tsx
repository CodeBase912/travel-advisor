import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// Import MUI Components
import { Box } from "@mui/material";
// Import Custom React Components
import Header from "../components/site/header/Header";
// import Footer from "../components/site/header/Footer";

const Home: NextPage = () => {
  return (
    <Box>
      <Header />
      <main className="h-80">Hello world</main>
      {/* <Footer /> */}
    </Box>
  );
};

export default Home;
