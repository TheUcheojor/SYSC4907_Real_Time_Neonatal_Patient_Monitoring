import React, { useState, useEffect } from "react";
import { DatapointFieldEnum } from "constants/DatapointFieldEnum";
import CSS from "csstype";
import MapWithChart from "./MapWithChart";

interface mwcNetProps {
  routeId: number;
  measurand: DatapointFieldEnum;
  style?: CSS.Properties;
}

function MapWithChartNet({ routeId, measurand, style }: mwcNetProps) {
  const [datapoints, setDatapoints] = useState(undefined);
  const [netError, setNetError] = useState(undefined);

  useEffect(() => {
    fetch(`http://localhost:3001/dps/${routeId}`)
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

  return (
    <MapWithChart datapoints={datapoints} measurand={measurand} style={style} />
  );
}

export default MapWithChartNet;
