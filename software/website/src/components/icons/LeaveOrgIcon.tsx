import React from "react";

interface iconProps {
  fill: string;
  styles?: React.CSSProperties;
}

function LeaveOrgIcon({ fill, styles }: iconProps) {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      width="752px"
      height="752px"
      viewBox="0 0 752 752"
      enable-background="new 0 0 752 752"
      style={styles}
      fill={fill}
    >
      {" "}
      <image
        id="image0"
        width="752"
        height="752"
        x="0"
        y="0"
        href="data:image/png;base64,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
AAAASUVORK5CYII="
      />
    </svg>
  );
}

export default LeaveOrgIcon;
