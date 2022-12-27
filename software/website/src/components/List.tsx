import React from "react";
import Route from "mock/Route";
import ListElement from "./ListElement";

interface ListProps {
  routes: Route[];
  elemOnClick: (e: any) => void;
  activeRoutes: Route[];
}

function List({ routes, elemOnClick, activeRoutes }: ListProps) {
  return (
    <ul style={{ padding: 0, marginTop: 0 }}>
      {routes.map((route) => {
        return (
          <ListElement
            route={route}
            isActive={activeRoutes.some(
              (elem) => elem.routeId === route.routeId
            )}
            onClick={elemOnClick}
          />
        );
      })}
    </ul>
  );
}

export default List;
