import React, { useState } from "react";
import Map from "react-map-gl";

const MapboxMap = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });

  return (
    <Map
      mapStyle="mapbox://styles/sujoy11/clagxis0m000b15nn826z74bn"
      mapboxAccessToken={process.env.mapbox_key}
      onMove={evt => setViewport(evt.viewState)}
      {...viewport}
    ></Map>
  );
};

export default MapboxMap;
