import React, { useRef, useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";


const MapboxMap = ({ data }) => {
  const [selectedLocation, setSelectedLocation] = useState({});

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

  const mapRef = useRef();

  return (
    <Map
      ref={mapRef}
      mapStyle="mapbox://styles/sujoy11/clagxis0m000b15nn826z74bn"
      mapboxAccessToken={process.env.mapbox_key}
      onMove={(evt) => setViewport(evt.viewState)}
      style={{ width: 600, height: "100%", cursor: "auto" }}
      dragPan={true}
      boxZoom={true}
      {...viewport}
    >
      {data.map((result) => (
        <div key={result.lat}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl m-0 animate-bounce"
              aria-label="push-pin"
            >
              📌
              {/* Popup renders onClick of the Marker */}
              {selectedLocation.long === result.long ? (
                <Popup
                  closeOnClick={true}
                  latitude={result.lat}
                  longitude={result.long}
                  anchor="center"
                  onClose={() => setSelectedLocation({})}
                >
                  {result.title}
                </Popup>
              ) : (
                false
              )}
            </p>
          </Marker>
        </div>
      ))}
    </Map>
  );
};

export default MapboxMap;
