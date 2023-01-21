import React, { useRef, memo } from "react";
import Chart from "components/visualization/Chart";
import { DatapointFieldEnum } from "constants/DatapointFieldEnum";
import CSS from "csstype";
import { toTitleCase } from "util/StringUtil";
import Map from "components/visualization/Map";
import RouteMeasurementDataPoint from "models/RouteMeasurementDataPoint";

const mapStyles: CSS.Properties = {
  height: "calc(100vh - 430px)",
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
        lat: data.activePayload[0].payload[DatapointFieldEnum.latitude],
        lng: data.activePayload[0].payload[DatapointFieldEnum.longitude],
      });
      map.current.setZoom(20);
    }
  };

  const setMapRef = (mapRef) => {
    map.current = mapRef;
  };

  function getContent() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          ...style,
        }}
      >
        <span
          style={{ marginBottom: "5px", textAlign: "center", fontWeight: 700, marginTop: "5px" }}
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
