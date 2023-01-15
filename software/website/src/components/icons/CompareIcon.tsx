import React, { useState } from "react";

interface iconProps {
  style: React.CSSProperties;
  bgColor: string;
  bgColorHover: string;
  onClick: () => void;
}

function CompareIcon({ style, onClick, bgColor, bgColorHover }: iconProps) {
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
        style={{
          width: "50px"
        }}
      >
        <path d="M373 259c-34.3 28.1-46.6 38.6-46.8 40.4-.3 2 6.4 7.8 45.9 40.1 25.5 20.8 47.3 38 48.6 38.3 4.9.9 5.3-.5 5.3-21.4V337h74.6c49.5 0 75.2-.3 76.5-1 1.8-1 1.9-2.5 1.9-35.8 0-25.7-.3-35.1-1.2-36s-19.3-1.2-76.5-1.2H426v-19.8c0-20.7-.3-22.2-4.4-22.2-1.2 0-21.5 15.9-48.6 38zm-45.8 116.2c-.9.9-1.2 6.8-1.2 20.5V415h-73.9c-45.7 0-75 .4-76.5 1l-2.6 1v34.8c0 25.7.3 35.1 1.2 36s19.3 1.2 76.5 1.2H326v19.8c0 20.7.3 22.2 4.4 22.2 1.9 0 92.9-73.3 94.8-76.4.4-.6.8-1.9.8-2.8 0-2.3-92.5-77.8-95.4-77.8-1.2 0-2.7.5-3.4 1.2z" />
      </svg>
    </div>
  );
}

export default CompareIcon;
