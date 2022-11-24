import React from "react";

interface iconProps {
  fill?: string;
  styles?: React.CSSProperties;
}

function SearchIcon({ fill, styles }: iconProps) {
  return (
    <svg version="1.0" viewBox="0 0 752 752" fill={fill} style={styles}>
      <g
        transform="translate(-300.000000,1050.000000) scale(0.18,-0.18)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M3245 5530 c-621 -54 -1133 -524 -1240 -1140 -22 -125 -22 -345 0
    -470 84 -486 431 -897 895 -1064 406 -147 866 -92 1222 145 l73 48 527 -527
    528 -527 137 138 138 137 -528 528 -527 527 35 50 c46 64 137 243 164 324 122
    359 97 739 -72 1076 -251 502 -790 803 -1352 755z m292 -405 c211 -40 376
    -126 524 -274 126 -127 214 -278 260 -451 20 -72 23 -110 23 -245 0 -135 -3
    -173 -23 -245 -46 -173 -134 -324 -260 -451 -127 -126 -278 -214 -451 -260
    -72 -20 -110 -23 -245 -23 -135 0 -173 3 -245 23 -436 117 -740 508 -740 951
    0 381 212 721 555 892 172 86 412 119 602 83z"
        />
      </g>
    </svg>
  );
}

export default SearchIcon;
