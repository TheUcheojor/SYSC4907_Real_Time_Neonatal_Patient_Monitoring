import React, { useState, useEffect, memo } from "react";
import Chart from "components/Chart";
import { DatapointFieldEnum } from "constants/DatapointFieldEnum";
import RouteMeasurementDataPoint from "mock/RouteMeasurementDataPoint";
import { toTitleCase } from "utility/StringUtil";
import CSS from "csstype";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  PolylineF,
} from "@react-google-maps/api";
import { Libraries } from "@react-google-maps/api/src/utils/make-load-script-url";
import { ColorEnum } from "constants/ColorEnum";
import { MeasurandThresholdDefaultEnum } from "constants/MeasurandThresholdEnum";

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

const mapStyles = {
  height: "calc(100vh - 430px)",
  width: "410px",
  borderRadius: "6px",
  marginTop: "10px",
};

interface modalProps {
  data: RouteMeasurementDataPoint[];
  measurand: DatapointFieldEnum;
  style?: CSS.Properties;
}

function MapWithChart({ data, measurand, style }: modalProps) {
  const [map, setMap] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDSQo-ic930dhxZgw83RHfVZcEc2U_6cEA",
    libraries: libraries,
  });

  const onLoad = React.useCallback((_map) => {
    setMap(_map);
  }, []);

  console.log("MWC RENDER");

  useEffect(() => {
    if (map) {
      const bounds = new google.maps.LatLngBounds({
        lat: data[0].coordinates[1],
        lng: data[0].coordinates[0],
      });
      data.forEach((dp) => {
        bounds.extend({ lat: dp.coordinates[1], lng: dp.coordinates[0] });
      });
      map.fitBounds(bounds);
    }
  }, [data, map]);

  const chartClickHandler = (data: any) => {
    map.panTo({
      lat: data.activePayload[0].payload.coordinates[1],
      lng: data.activePayload[0].payload.coordinates[0],
    });
    map.setZoom(20);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      <span
        style={{ marginBottom: "10px", textAlign: "center", fontWeight: 700 }}
      >
        {toTitleCase(measurand)}
      </span>
      <Chart data={data} measurand={measurand} onClick={chartClickHandler} />
      {isLoaded && data !== undefined && (
        <GoogleMap
          mapContainerStyle={mapStyles}
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
      )}
    </div>
  );
}

export default memo(MapWithChart);
