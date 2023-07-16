import React from "react";

interface SVGProps {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  fillList?: Array<string>;
  className?: string;
}

export function Update({
  height = "22",
  width = "22",
  viewBox = "0 0 22 22",
  className,
}: SVGProps) {
  return (
    <>
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={viewBox}
      >
        <g
          id="Group_44171"
          data-name="Group 44171"
          transform="translate(-620.88 -871.5)"
        >
          <path
            id="ic_dropmenu"
            d="M154.545,182.111l8.5-8,8.5,8"
            transform="translate(468.455 698.889)"
            fill="none"
            stroke="#591ee5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <path
            id="ic_dropmenu-2"
            data-name="ic_dropmenu"
            d="M154.545,182.111l8.5-8,8.5,8"
            transform="translate(468.455 708.889)"
            fill="none"
            stroke="#f1e8fb"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
        </g>
      </svg>
    </>
  );
}
