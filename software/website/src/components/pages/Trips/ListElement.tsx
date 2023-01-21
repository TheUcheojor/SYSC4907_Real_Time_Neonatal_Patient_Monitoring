import { ColorEnum } from "constants/ColorEnum";
import { RouteFieldEnum } from "constants/DatapointFieldEnum";
import Route from "models/Route";
import React, { useState } from "react";
import { toDateString, toClockString } from "util/StringUtil";

const statsLabelsStyles = {
  fontSize: "10px",
  margin: 0,
  color: ColorEnum.White
};

interface listElementProps {
  route: Route;
  isActive: boolean;
  onClick?: (e: any) => void;
}

function ListElement({ route, isActive, onClick }: listElementProps) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      id={route[RouteFieldEnum.route_id]}
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
        backgroundColor: isHover ? "#2a2a2a" : "black",
        border: isActive ? "3px solid #8AB4F8" : "3px solid transparent",
        borderRadius: "6px",
        width: "328px",
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={(e) => onClick(e)}
    >
      <div>
        <div
          style={{
            paddingTop: "5px",
            paddingLeft: "10px",
            color: "white",
          }}
        >
          {toDateString(route[RouteFieldEnum.start_time_s])}
        </div>
        <div>
          <span
            style={{
              paddingLeft: "14px",
              color: "white",
              fontSize: "12px",
            }}
          >
            {toClockString(
              route[RouteFieldEnum.start_time_s],
              route[RouteFieldEnum.end_time_s]
            )}
          </span>
        </div>
      </div>
      <div style={{ marginLeft: "auto", marginRight: "5px" }}>
        <p style={statsLabelsStyles}>
          Avg vibration: {route[RouteFieldEnum.avg_vibration]}
        </p>
        <p style={statsLabelsStyles}>
          Total exposure: {route[RouteFieldEnum.total_vibration_exposure]}
        </p>
      </div>
    </div>
  );
}

export default ListElement;
