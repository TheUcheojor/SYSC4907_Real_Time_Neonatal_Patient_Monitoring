import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  PolylineF,
} from "@react-google-maps/api";
import { ColorEnum } from "constants/ColorEnum";

import RouteMeasurementDataPoint from "mock/RouteMeasurementDataPoint";

interface ModalProps {
  data: RouteMeasurementDataPoint[];
  focusLat: number;
  focusLon: number;
  zoomLevel: number;
}

function getColor(velocity: number): string {
  if (velocity > 26) {
    return ColorEnum.Red;
  } else if (velocity > 24) {
    return ColorEnum.Yellow;
  } else {
    return ColorEnum.Green;
  }
}

function Map({ data, focusLat, focusLon, zoomLevel }: ModalProps) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDSQo-ic930dhxZgw83RHfVZcEc2U_6cEA",
    libraries: ["geometry", "drawing"],
  });

  let map;

  return (
    isLoaded &&
    data !== undefined && (
      <div style={{ marginLeft: "10px", marginTop: "10px" }}>
        <GoogleMap
          mapContainerStyle={{
            width: "400px",
            height: "400px",
          }}
          center={{
            lat: focusLat,
            lng: focusLon,
          }}
          ref={(_map) => (map = _map)}
          zoom={zoomLevel}
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
      </div>
    )
  );
}

export default Map;
