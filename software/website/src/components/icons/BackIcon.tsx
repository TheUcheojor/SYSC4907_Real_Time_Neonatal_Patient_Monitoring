import React, { useState } from "react";

interface iconProps {
  onClick: () => void;
}

function BackIcon({ onClick }: iconProps) {
  const [backHover, setBackHover] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        marginTop: "15px",
        alignItems: "center",
        height: "fit-content",
        width: "fit-content",
      }}
      onMouseEnter={() => setBackHover(true)}
      onMouseLeave={() => setBackHover(false)}
      onClick={onClick}
    >
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="752"
        height="752"
        viewBox="170 170 400 400"
        fill={backHover ? "#2a2a2a" : "#000"}
        style={{
          width: "40px",
          height: "40px",
          cursor: "pointer",
        }}
      >
        <path d="M422.5 250.9c-5.6 2.7-115.8 113.2-118 118.3-1.9 4.7-1.9 8.9 0 13.6 1.1 2.6 19 21.1 58.3 60.5 31.2 31.3 57.9 57.5 59.4 58.3 3.2 1.7 10.5 1.8 14.5.3 6.4-2.4 12.3-10.9 12.3-17.9 0-1.9-.9-5.3-1.9-7.5-1.3-2.7-17.7-19.7-49.5-51.5-26.2-26.1-47.6-47.9-47.6-48.5 0-.5 21.3-22.3 47.4-48.5 49.5-49.5 51.6-51.9 51.6-60 0-1.9-.9-5.3-1.9-7.5-4.5-9.8-15.2-14-24.6-9.6z" />
      </svg>
      <div
        style={{
          display: "inline-block",
          width: "2px",
          height: "30px",
          borderRadius: "6px",
          backgroundColor: "#969696",
        }}
      ></div>
    </div>
  );
}

export default BackIcon;
