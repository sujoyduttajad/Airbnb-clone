import React from "react";
import Map from "react-map-gl";

const MapboxMap = () => {
  return (
    <Map
      mapStyle="mapbox://styles/sujoy11/clagxis0m000b15nn826z74bn"
      mapboxAccessToken={process.env.MAPBOX_KEY}
    ></Map>
  );
};

export default MapboxMap;
