import React, { memo, useEffect, useRef } from "react";
import {
  GoogleMap,
  MarkerF,
  PolylineF,
  LoadScript,
} from "@react-google-maps/api";
import { ColorEnum } from "constants/ColorEnum";
import CSS from "csstype";
import RouteMeasurementDataPoint from "models/RouteMeasurementDataPoint";
import { DatapointFieldEnum } from "constants/DatapointFieldEnum";
import { MeasurandThresholdDefaultEnum } from "constants/MeasurandThresholdEnum";
import { Libraries } from "@react-google-maps/api/src/utils/make-load-script-url";

function getColor(value: any, measurand: DatapointFieldEnum): string {
  if (
    MeasurandThresholdDefaultEnum[`${measurand}Alert`] === undefined ||
    MeasurandThresholdDefaultEnum[`${measurand}Warning`] === undefined
  )
    return ColorEnum.Grey;

  if (value >= MeasurandThresholdDefaultEnum[`${measurand}Alert`]) {
    return ColorEnum.Red;
  } else if (value >= MeasurandThresholdDefaultEnum[`${measurand}Warning`]) {
    return ColorEnum.Yellow;
  } else {
    return ColorEnum.Green;
  }
}

const libraries: Libraries = ["geometry", "drawing"];

interface MapProps {
  data: RouteMeasurementDataPoint[];
  measurand: DatapointFieldEnum;
  style?: CSS.Properties;
  setMapRef: (map) => void;
}

function Map({ data, setMapRef, measurand, style }: MapProps) {
  console.log("MAP RENDER");
  const map = useRef(undefined);

  function fitMapToBounds() {
    if (map.current) {
      const bounds = new google.maps.LatLngBounds();
      data.forEach((dp) => {
        bounds.extend({ lat: dp.coordinates[1], lng: dp.coordinates[0] });
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
            lat: data[0].coordinates[1],
            lng: data[0].coordinates[0],
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
                    strokeColor: getColor(dp[measurand], measurand),
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

export default memo(Map);
