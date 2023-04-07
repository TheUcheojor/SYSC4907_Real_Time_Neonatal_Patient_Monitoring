import React, { memo, useEffect, useRef } from "react";
import {
  GoogleMap,
  MarkerF,
  PolylineF,
  LoadScript,
} from "@react-google-maps/api";
import CSS from "csstype";
import RouteMeasurementDataPoint from "models/RouteMeasurementDataPoint";
import { DatapointFieldEnum } from "constants/DatapointFieldEnum";
import { Libraries } from "@react-google-maps/api/src/utils/make-load-script-url";
import { getMapColor } from "util/ColorUtil";

const libraries: Libraries = ["geometry", "drawing"];

interface MapProps {
  data: RouteMeasurementDataPoint[];
  measurand: DatapointFieldEnum;
  style?: CSS.Properties;
  setMapRef?: (map) => void;
}

function GoogleMapWrapper({ data, setMapRef, measurand, style }: MapProps) {
  console.log("MAP RENDER");
  const map = useRef(undefined);

  function fitMapToBounds() {
    if (map.current) {
      const bounds = new google.maps.LatLngBounds();
      data.forEach((dp) => {
        bounds.extend({
          lat: dp[DatapointFieldEnum.latitude],
          lng: dp[DatapointFieldEnum.longitude],
        });
      });
      map.current.fitBounds(bounds);
    }
  }

  useEffect(() => {
    fitMapToBounds();
  }, [data]);

  const onLoad = React.useCallback((_map) => {
    setMapRef(_map);
    map.current = _map;
    fitMapToBounds();
  }, []);

  return (
    data !== undefined && (
      <LoadScript
        googleMapsApiKey="AIzaSyDSQo-ic930dhxZgw83RHfVZcEc2U_6cEA"
        libraries={libraries}
      >
        <GoogleMap
          mapContainerStyle={style}
          center={{
            lat: data[0][DatapointFieldEnum.latitude],
            lng: data[0][DatapointFieldEnum.longitude],
          }}
          zoom={17}
          options={{
            disableDefaultUI: true,
            clickableIcons: false,
            zoomControl: true,
          }}
          onLoad={onLoad}
        >
          <MarkerF
            label="S"
            position={{
              lat: data[0][DatapointFieldEnum.latitude],
              lng: data[0][DatapointFieldEnum.longitude],
            }}
          />
          <MarkerF
            label="F"
            position={{
              lat: data[data.length - 1][DatapointFieldEnum.latitude],
              lng: data[data.length - 1][DatapointFieldEnum.longitude],
            }}
          />
          {data.map((dp, i) => {
            if (i !== data.length - 1) {
              return (
                <PolylineF
                  path={[
                    {
                      lat: dp[DatapointFieldEnum.latitude],
                      lng: dp[DatapointFieldEnum.longitude],
                    },
                    {
                      lat: data[i + 1][DatapointFieldEnum.latitude],
                      lng: data[i + 1][DatapointFieldEnum.longitude],
                    },
                  ]}
                  options={{
                    geodesic: true,
                    strokeColor: getMapColor(dp[measurand], measurand),
                    strokeWeight: 8,
                    strokeOpacity: 0.6,
                  }}
                />
              );
            }
          })}
        </GoogleMap>
      </LoadScript>
    )
  );
}

export default memo(GoogleMapWrapper);
