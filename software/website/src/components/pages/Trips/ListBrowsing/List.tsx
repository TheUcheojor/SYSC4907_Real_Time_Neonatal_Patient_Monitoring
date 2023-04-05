import React, { useState } from "react";
import Route from "models/Route";
import ListElement from "components/pages/Trips/ListBrowsing/ListElement";
import { ColorEnum } from "constants/ColorEnum";
import CancelIcon from "components/icons/CancelIcon";

interface ListProps {
  routes: Route[];
  elemOnClick: (e: any) => void;
  activeRoutes: Route[];
  elemDeleteOnClick: (route: Route) => void;
}

function List({
  routes,
  elemOnClick,
  activeRoutes,
  elemDeleteOnClick,
}: ListProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [isEditHovering, setIsEditHovering] = useState(false);

  return (
    <ul style={{ padding: 0, marginTop: 0, marginBottom: 0, width: "333px" }}>
      <button
        onMouseEnter={() => setIsEditHovering(true)}
        onMouseLeave={() => setIsEditHovering(false)}
        onClick={() => setIsEditing(!isEditing)}
        style={{
          width: "fit-content",
          height: "20px",
          fontSize: "14px",
          backgroundColor: isEditHovering ? "#DAF7FD" : ColorEnum.White,
          color: ColorEnum.Link,
          marginTop: "2px",
          marginBottom: "2px",
        }}
      >
        {isEditing ? "Cancel" : "Edit"}
      </button>
      {routes.map((route) => {
        return (
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <ListElement
              key={route.route_id}
              route={route}
              isActive={activeRoutes.some(
                (elem) => elem.route_id === route.route_id
              )}
              onClick={elemOnClick}
            />
            {isEditing ? (
              <CancelIcon
                bgColor={ColorEnum.LightRed}
                bgColorHover={ColorEnum.LighterRed}
                onClick={() => elemDeleteOnClick(route)}
                style={{ marginLeft: "5px", width: "20px", height: "20px" }}
              />
            ) : (
              ""
            )}
          </div>
        );
      })}
    </ul>
  );
}

export default List;
