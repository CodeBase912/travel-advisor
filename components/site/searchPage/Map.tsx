import React, { useContext } from "react";
import classNames from "classnames";
// Import Google Maps Libraries
import GoogleMapReact from "google-map-react";
// Import Context & State Variables
import { SearchContext } from "../../../contexts/searchContext/SearchState";
// Import MaterialUI Components
import { Paper, Rating, Box, Typography, Button } from "@mui/material";

type Props = {
  showMap: boolean;
};

const Map: React.FC<Props> = ({ showMap }) => {
  const { isDesktop } = useContext(SearchContext);
  const coordinates = { lat: 0, lng: 0 };

  return (
    <Box
      component={"section"}
      className={classNames("flex-1 w-full", {
        hidden: !isDesktop && showMap === false, // Enable toggle show/hide map on mobile devices
      })}
    >
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_API_KEY
            ? process.env.NEXT_PUBLIC_API_KEY
            : "",
        }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={15}
        // margin={[50, 50, 50, 50]}
        // options={""}
        // onChange={() => {}}
        // onChildClick={() => {}}
      ></GoogleMapReact>
    </Box>
  );
};

export default Map;
