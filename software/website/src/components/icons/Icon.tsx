import React from "react";

function Icon({ image, fill, styles }) {
  return (
    <img src={image} color={fill} style={styles} alt="Icon"/>
  );
}

export default Icon;
