/**
 * Author: Paul Okenne
 * File:
 */
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

export const APP_ICON: string = "baby";

export default (props: { size?: number }) => (
  <FontAwesome5
    name={APP_ICON}
    size={props.size ? props.size : 100}
    color="black"
  />
);
