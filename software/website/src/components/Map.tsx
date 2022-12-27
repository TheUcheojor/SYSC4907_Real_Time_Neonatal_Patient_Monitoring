import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  PolylineF,
} from "@react-google-maps/api";
import { ColorEnum } from "constants/ColorEnum";
import CSS from "csstype";
import RouteMeasurementDataPoint from "mock/RouteMeasurementDataPoint";

function getColor(velocity: number): string {
  if (velocity > 26) {
    return ColorEnum.Red;
  } else if (velocity > 24) {
    return ColorEnum.Yellow;
  } else {
    return ColorEnum.Green;
  }
}

interface MapProps {
  data: RouteMeasurementDataPoint[];
  focusLat: number;
  focusLon: number;
  zoomLevel?: number;
  style: CSS.Properties;
}

function Map({ data, focusLat, focusLon, style }: MapProps) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDSQo-ic930dhxZgw83RHfVZcEc2U_6cEA",
    libraries: ["geometry", "drawing"],
  });
  console.log("MAP RENDER", focusLat, focusLon);

  return (
    isLoaded &&
    data !== undefined && (
      <GoogleMap
        mapContainerStyle={style}
        center={{
          lat: focusLat,
          lng: focusLon,
        }}
        zoom={17}
        options={{
          disableDefaultUI: true,
        }}
      >
        <MarkerF
          label="S"
          position={{
            lat: data[0].coordinates[1],
            lng: data[0].coordinates[0],
          }}
        />
        <MarkerF
          label="F"
          position={{
            lat: data[data.length - 1].coordinates[1],
            lng: data[data.length - 1].coordinates[0],
          }}
        />
        {data.map((dp, i) => {
          if (i !== data.length - 1) {
            return (
              <PolylineF
                path={[
                  {
                    lat: dp.coordinates[1],
                    lng: dp.coordinates[0],
                  },
                  {
                    lat: data[i + 1].coordinates[1],
                    lng: data[i + 1].coordinates[0],
                  },
                ]}
                options={{
                  geodesic: true,
                  strokeColor: getColor(dp.temperature),
                  strokeWeight: 8,
                  strokeOpacity: 0.6,
                }}
              />
            );
          }
        })}
      </GoogleMap>
    )
  );
}

export default Map;
