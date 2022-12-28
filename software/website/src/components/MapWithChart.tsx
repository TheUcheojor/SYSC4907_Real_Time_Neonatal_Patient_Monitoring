import React, { useState, useEffect, useRef, memo } from "react";
import Chart from "components/Chart";
import { DatapointFieldEnum } from "constants/DatapointFieldEnum";
import CSS from "csstype";
import { toTitleCase } from "utility/StringUtil";
import LoadingIcon from "./icons/LoadingIcon";
import Map from "components/Map";
import RouteMeasurementDataPoint from "models/RouteMeasurementDataPoint";

const mapStyles: CSS.Properties = {
  height: "calc(100vh - 430px)",
  width: "410px",
  borderRadius: "6px",
  marginTop: "10px",
};

interface mwcProps {
  datapoints: RouteMeasurementDataPoint[];
  measurand: DatapointFieldEnum;
  style?: CSS.Properties;
}

function MapWithChart({ datapoints, measurand, style }: mwcProps) {
  const map = useRef(undefined);

  console.log("MWC RENDER");

  const chartClickHandler = (data: any) => {
    if (map.current) {
      map.current.panTo({
        lat: data.activePayload[0].payload.coordinates[1],
        lng: data.activePayload[0].payload.coordinates[0],
      });
      map.current.setZoom(20);
    }
  };

  const setMapRef = (mapRef) => {
    map.current = mapRef;
  };

  function getContent() {
    if (datapoints === undefined) {
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
        <Map
          setMapRef={setMapRef}
          style={mapStyles}
          data={datapoints}
          measurand={measurand}
        ></Map>
      </div>
    );
  }

  return getContent();
}

export default memo(MapWithChart);
