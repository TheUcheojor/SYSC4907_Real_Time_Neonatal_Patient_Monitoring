import React, { useState, useEffect, memo } from "react";
import { DatapointFieldEnum } from "constants/DatapointFieldEnum";
import CSS from "csstype";
import MapWithChart from "components/visualization/MapWithChart";
import LoadingIcon from "components/icons/LoadingIcon";
import { getFetchHeaderWithAuth } from "util/AuthUtil";
import { SERVER_HOST, SERVER_PORT } from "constants/SystemConfiguration";

interface mwcNetProps {
  routeId: number;
  measurand: DatapointFieldEnum;
  style?: CSS.Properties;
  onLogout: () => void;
}

function MapWithChartNet({ onLogout, routeId, measurand, style }: mwcNetProps) {
  const [datapoints, setDatapoints] = useState(undefined);
  const [netError, setNetError] = useState(undefined);
  console.log("MWCN RENDER");

  useEffect(() => {
    setDatapoints(undefined);
    fetch(
      `${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}/routeMeasurementDataPoints/${routeId}`,
      {
        headers: getFetchHeaderWithAuth(),
      }
    )
      .then((res) => {
        if (res.status === 401) {
          onLogout();
        } else {
          return res.json();
        }
      })
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
