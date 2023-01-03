import React, { useState, useEffect, memo } from "react";
import { DatapointFieldEnum } from "constants/DatapointFieldEnum";
import CSS from "csstype";
import MapWithChart from "./MapWithChart";
import LoadingIcon from "./icons/LoadingIcon";

interface mwcNetProps {
  routeId: number;
  measurand: DatapointFieldEnum;
  style?: CSS.Properties;
}

function MapWithChartNet({ routeId, measurand, style }: mwcNetProps) {
  const [datapoints, setDatapoints] = useState(undefined);
  const [netError, setNetError] = useState(undefined);
  console.log("MWCN RENDER");

  useEffect(() => {
    setDatapoints(undefined);
    fetch(`http://localhost:3001/routeMeasurementDataPoints/${routeId}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setDatapoints(result);
        },
        (error) => {
          setNetError(error);
        }
      );
  }, [routeId]);

  function getContent() {
    if (datapoints === undefined) {
      return (
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LoadingIcon />
        </div>
      );
    }

    return (
      <MapWithChart
        datapoints={datapoints}
        measurand={measurand}
        style={style}
      />
    );
  }

  return getContent();
}

export default MapWithChartNet;
