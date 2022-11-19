import React, { useState } from "react";
import Map from "react-map-gl";
import { getCenter } from 'geolib';

const MapboxMap = ({ data }) => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });

  const coordinates = data.map(result => ({
    longitude: result.long,
    latitude: result.lat
  }));

  // The latitude and longitude of the center of locations coordinates
  const center = getCenter(coordinates);

  console.log(center);
  
 
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
