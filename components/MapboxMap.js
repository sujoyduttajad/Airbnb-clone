import React, { useMemo, useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import Thumb from '../images/thumbtack-icon.svg'

const MapboxMap = ({ data }) => {
  const coordinates = data.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  const markers = useMemo(() => data.map(result => (
    <Marker
      key={result.id}
      longitude={result.long}
      latitude={result.lat}
      offsetLeft={-20}
      offsetTop={-10}
    >
      <img src={Thumb} alt="Thumb-pin" />
    </Marker>
  )), [data]);

  return (
    <Map
      mapStyle="mapbox://styles/sujoy11/clagxis0m000b15nn826z74bn"
      mapboxAccessToken={process.env.mapbox_key}
      onMove={(evt) => setViewport(evt.viewState)}
      {...viewport}
    >
      {markers}
    </Map>
  );
};

export default MapboxMap;
