import React, { useState } from "react";
import { route1, route2 } from "mock/mockTrip";
import CompareIcon from "components/icons/CompareIcon";
import { DatapointFieldEnum } from "constants/DatapointFieldEnum";
import { queryTripDatapoints } from "interface/TripsInterface";
import List from "components/List";
import MapWithChart from "components/MapWithChart";
import { elapsedDurationInHoursAndMinutes } from "utility/StringUtil";

const routes = [route1, route2];

const pStyles = {
  fontWeight: 700,
  marginLeft: "10px",
  color: "#FFF",
  width: "100%",
  display: "block",
  paddingTop: "5px",
  paddingBottom: "5px",
};

function TripsPage() {
  const [activeRoute, setActiveRoute] = useState(undefined);

  function onClick(e) {
    console.log(e);
    setActiveRoute(routes.find((route) => route.routeId === e.currentTarget.id));
  }

  return (
    <div style={{ marginLeft: "10px", marginTop: "10px", display: "flex" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ color: "#000", fontWeight: 700 }}>Trips</p>
        <List routes={routes} elemOnClick={onClick} />
      </div>
      {activeRoute && (
        <div style={{ marginLeft: "10px" }}>
          <div
            style={{
              width: "410px",
              height: "fit-content",
              backgroundColor: "#000",
              borderRadius: "6px",
            }}
          >
            <span style={pStyles}>Owner: {activeRoute.ownerId}</span>
            <span style={pStyles}>
              Duration:{" "}
              {elapsedDurationInHoursAndMinutes(
                activeRoute.startTime,
                activeRoute.endTime
              )}
            </span>
            <span style={pStyles}>
              Total exposure: {activeRoute.totalVibrationExposure}
            </span>
          </div>
          <div style={{ marginTop: "10px" }}>
            <MapWithChart
              measurand={DatapointFieldEnum.vibration}
              data={queryTripDatapoints(parseInt(activeRoute.routeId))}
            />
          </div>
        </div>
      )}
      <CompareIcon style={{ marginLeft: "auto", marginRight: "5px" }} />
    </div>
  );
}

export default TripsPage;
