import React, { useState, useEffect, memo } from "react";
import Chart from "components/Chart";
import { DatapointFieldEnum } from "constants/DatapointFieldEnum";
import RouteMeasurementDataPoint from "models/RouteMeasurementDataPoint";
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
import LoadingIcon from "./icons/LoadingIcon";

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
  routeId: number;
  measurand: DatapointFieldEnum;
  style?: CSS.Properties;
}

function MapWithChart({ routeId, measurand, style }: modalProps) {
  const [map, setMap] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [datapoints, setDatapoints] = useState([]);

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
    setIsLoading(true);
    fetch(`http://localhost:3001/dps/${routeId}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setDatapoints(result);
          setIsLoading(false);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoading(false);
        }
      );

    // if (map) {
    //   const bounds = new google.maps.LatLngBounds({
    //     lat: datapoints[0].coordinates[1],
    //     lng: datapoints[0].coordinates[0],
    //   });
    //   datapoints.forEach((dp) => {
    //     bounds.extend({ lat: dp.coordinates[1], lng: dp.coordinates[0] });
    //   });
    //   map.fitBounds(bounds);
    // }
  }, [ routeId]);

  const chartClickHandler = (data: any) => {
    map.panTo({
      lat: data.activePayload[0].payload.coordinates[1],
      lng: data.activePayload[0].payload.coordinates[0],
    });
    map.setZoom(20);
  };

  function getContent() {
    if (isLoading) {
      return <LoadingIcon />;
    }

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
        <Chart
          data={datapoints}
          measurand={measurand}
          onClick={chartClickHandler}
        />
        {isLoaded && datapoints !== undefined && (
          <GoogleMap
            mapContainerStyle={mapStyles}
            center={{
              lat: datapoints[0].coordinates[1],
              lng: datapoints[0].coordinates[0],
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
                lat: datapoints[0].coordinates[1],
                lng: datapoints[0].coordinates[0],
              }}
            />
            <MarkerF
              label="F"
              position={{
                lat: datapoints[datapoints.length - 1].coordinates[1],
                lng: datapoints[datapoints.length - 1].coordinates[0],
              }}
            />
            {datapoints.map((dp, i) => {
              if (i !== datapoints.length - 1) {
                return (
                  <PolylineF
                    path={[
                      {
                        lat: dp.coordinates[1],
                        lng: dp.coordinates[0],
                      },
                      {
                        lat: datapoints[i + 1].coordinates[1],
                        lng: datapoints[i + 1].coordinates[0],
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

  return getContent();
}

export default memo(MapWithChart);
