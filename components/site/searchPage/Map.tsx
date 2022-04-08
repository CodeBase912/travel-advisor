import React, { useState, useEffect, useContext } from "react";
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
  const { state, updateMapCoords, updateUserCoords } =
    useContext(SearchContext);
  const [getCoordsErrorMessage, setGetCoordsErrorMessage] = useState("");

  const defaultLocation = { lat: 51.507351, lng: -0.127758 }; // London, UK

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (userLocation) => {
        // User posiiton successfully retrieved
        console.log("Coordinates: ", userLocation);

        // Update Search Context Variables
        // updateUserCoords({
        //   lat: userLocation.coords.latitude,
        //   lng: userLocation.coords.longitude,
        // });
        updateMapCoords({
          lat: userLocation.coords.latitude,
          lng: userLocation.coords.longitude,
        });
      },
      (err: GeolocationPositionError) => {
        // User position not retrieved
        console.log("Get coordinates error: ", err);

        // Handle errors
        if (err?.code === 1) {
          // User denied geolocation permission
          setGetCoordsErrorMessage(
            "Please allows access to your location to get data relevant to your location"
          );

          // Set default location
          updateMapCoords(defaultLocation);
        } else if (err?.code === 2) {
          // User Position unavailable
          // Set default location
          updateMapCoords(defaultLocation);
        }
      }
    );
  }, []);

  useEffect(() => {}, [state.userCoords, state.mapCoords]);

  return (
    <Box
      component={"section"}
      className={classNames("flex-1 w-full", {
        hidden: !state.isDesktop && showMap === false, // Enable toggle show/hide map on mobile devices
      })}
    >
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.NEXT_PUBLIC_API_KEY
            ? process.env.NEXT_PUBLIC_API_KEY
            : "",
        }}
        defaultCenter={defaultLocation}
        center={state.mapCoords}
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
