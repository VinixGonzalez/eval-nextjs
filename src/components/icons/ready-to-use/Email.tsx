import React from "react";

interface SVGProps {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  fillList?: Array<string>;
  className?: string;
}

export function Email({
  height = "24",
  viewBox = "0 0 24 18",
  width = "18",
  className,
  fill,
  fillList = ["#f1e8fb", "#591ee5"],
}: SVGProps) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={viewBox}
        className={className}
      >
        <g
          id="Group_41089"
          data-name="Group 41089"
          transform="translate(-379 -536)"
        >
          <rect
            id="Rectangle_91"
            data-name="Rectangle 91"
            width="18"
            height="24"
            rx="3"
            transform="translate(403 536) rotate(90)"
            fill={fillList[0]}
          />
          <path
            id="Path_6170"
            data-name="Path 6170"
            d="M378.56,1485.681l6.5,3,6.5-3"
            transform="translate(6 -944)"
            fill="none"
            stroke={fillList[1]}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </>
  );
}
