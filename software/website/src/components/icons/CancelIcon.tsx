import React, { useState } from "react";

interface iconProps {
  style?: React.CSSProperties;
  bgColor: string;
  bgColorHover: string;
  onClick: () => void;
}

function CancelIcon({ style, onClick, bgColor, bgColorHover }: iconProps) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={onClick}
      style={{
        width: "50px",
        height: "50px",
        backgroundColor: isHover ? bgColorHover : bgColor,
        borderRadius: "6px",
        cursor: "pointer",
        ...style,
      }}
    >
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="75 75 600 700"
        fill={"#FFF"}
      >
        <path d="M361.5 139.6c-35.9 3.6-61.7 10.4-88.1 23.3-25.1 12.2-42.4 24.3-61.7 43.1-20.9 20.2-34.7 39.1-47.7 65.1-11.7 23.6-19.3 48.9-23.1 76.9-1.9 14-1.7 46.9.5 61 4 26.5 10.7 48.5 22 71.5 35.4 72 102.3 119.4 184.6 130.6 14 1.9 46.9 1.7 61-.5 26.5-4 48.5-10.7 71.5-22 48-23.6 84.6-60.1 108-108 11.4-23.2 18.1-45 22.1-71.6 2.2-14.1 2.4-47 .5-61-6.3-46.4-22.9-85.8-51-121-36.5-45.8-91.3-77-150.2-85.5-10.3-1.5-40.7-2.7-48.4-1.9zm34.6 54.5c20.3 2 41.1 7.7 58.4 15.8 10.5 5 24.2 13.1 30.8 18.3l3.9 3.1-128.9 128.9-128.8 128.9-2.8-3.3c-1.6-1.8-5.4-7.4-8.4-12.3-46.6-74.6-32-175.9 33.6-234.1 38.3-33.9 90.6-50.6 142.2-45.3zM530 273.2c20.2 32.5 31 68.8 31 104.3-.2 100.5-83 183.3-183.5 183.5-38.6 0-79.5-13.3-114-37.2-.9-.7 258-260.8 259.5-260.8.3 0 3.4 4.6 7 10.2z" />
      </svg>
    </div>
  );
}

export default CancelIcon;
