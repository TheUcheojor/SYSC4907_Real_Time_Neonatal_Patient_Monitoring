import React, { memo } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  PolylineF,
} from "@react-google-maps/api";
import { ColorEnum } from "constants/ColorEnum";
import CSS from "csstype";
import RouteMeasurementDataPoint from "mock/RouteMeasurementDataPoint";
import { DatapointFieldEnum } from "constants/DatapointFieldEnum";
import { MeasurandThresholdDefaultEnum } from "constants/MeasurandThresholdEnum";

function TestMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDSQo-ic930dhxZgw83RHfVZcEc2U_6cEA",
    libraries: ["geometry", "drawing"],
  });
  console.log("MAP RENDER");

  return (
    isLoaded && (
      <GoogleMap
        center={{
          lat: 45,
          lng: -78,
        }}
        zoom={17}
        options={{
          disableDefaultUI: true,
          clickableIcons: false,
          zoomControl: true,
        }}
        mapContainerStyle={{ height: "200px", width: "200px" }}
      >
        <MarkerF
          label="S"
          position={{
            lat: 45,
            lng: -78,
          }}
        />
      </GoogleMap>
    )
  );
}

export default memo(TestMap);
