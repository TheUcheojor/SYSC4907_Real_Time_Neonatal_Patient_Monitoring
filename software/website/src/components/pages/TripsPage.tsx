import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  CircleF,
  MarkerF,
} from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const coords = [
  { lat: 45.387, lng: -75.69641 },
  { lat: 45.3871, lng: -75.69643 },
  { lat: 45.3869, lng: -75.6964 },
  { lat: 45.3867, lng: -75.69639 },
  { lat: 45.3872, lng: -75.69645 },
];

const circleOptions = {
  strokeOpacity: 0.9,
  strokeWeight: 2,
  fillOpacity: 0.8,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 3,
  zIndex: 1,
};

function TripsPage() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDSQo-ic930dhxZgw83RHfVZcEc2U_6cEA",
    libraries: ["geometry", "drawing"],
  });

  return (
    isLoaded && (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={coords[0]}
        zoom={18}
      >
        <MarkerF label="S" position={coords[3]} />
        <MarkerF label="F" position={coords[4]} />
        <CircleF
          center={coords[0]}
          options={{
            strokeColor: "#FF0000",
            fillColor: "#FF0000",
            ...circleOptions,
          }}
        />
        <CircleF
          center={coords[1]}
          options={{
            strokeColor: "#f5d742",
            fillColor: "#f5d742",
            ...circleOptions,
          }}
        />
        <CircleF
          center={coords[2]}
          options={{
            strokeColor: "#00FF00",
            fillColor: "#00FF00",
            ...circleOptions,
          }}
        />
      </GoogleMap>
    )
  );
}

export default TripsPage;
