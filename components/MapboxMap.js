import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import { ThumbIcon } from "./SocialIcons";

const MapboxMap = ({ data }) => {
  const coordinates = data.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <Map
      mapStyle="mapbox://styles/sujoy11/clagxis0m000b15nn826z74bn"
      mapboxAccessToken={process.env.mapbox_key}
      onMove={(evt) => setViewport(evt.viewState)}
      style={{width: 600, height: "100%"}}
      {...viewport}
    >
      {data.map((result) => (
        <div key={result.id} className="">
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p className="cursor-pointer text-2xl m-0 animate-bounce">
              <ThumbIcon />
            </p>
          </Marker>
        </div>
      ))}
    </Map>
  );
};

export default MapboxMap;
