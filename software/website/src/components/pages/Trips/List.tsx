import React from "react";
import Route from "models/Route";
import ListElement from "components/pages/Trips/ListElement";
import { RouteFieldEnum } from "constants/DatapointFieldEnum";

interface ListProps {
  routes: Route[];
  elemOnClick: (e: any) => void;
  activeRoutes: Route[];
  elemDeleteOnClick: (e: any, route: Route) => void;
}

function List({
  routes,
  elemOnClick,
  activeRoutes,
  elemDeleteOnClick,
}: ListProps) {
  return (
    <ul style={{ padding: 0, marginTop: 0 }}>
      {routes.map((route) => {
        return (
          <ListElement
            key={route[RouteFieldEnum.route_id]}
            route={route}
            isActive={activeRoutes.some(
              (elem) =>
                elem[RouteFieldEnum.route_id] === route[RouteFieldEnum.route_id]
            )}
            onClick={elemOnClick}
            onDeleteOnClick={elemDeleteOnClick}
          />
        );
      })}
    </ul>
  );
}

export default List;
