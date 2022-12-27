import React, { ReactNode, useState } from "react";
import Route from "mock/Route";
import ListElement from "./ListElement";

interface ListProps {
  routes: Route[];
  elemOnClick: (e: any) => void;
}

function List({ routes, elemOnClick }: ListProps) {
  const [activeId, setActiveId] = useState(undefined);

  return (
    <ul style={{ padding: 0, marginTop: 0 }}>
      {routes.map((route) => {
        return (
          <div
            onClick={() => {
              setActiveId(route.routeId);
            }}
          >
            <ListElement
              route={route}
              isActive={activeId === route.routeId}
              onClick={elemOnClick}
            />
          </div>
        );
      })}
    </ul>
  );
}

export default List;
