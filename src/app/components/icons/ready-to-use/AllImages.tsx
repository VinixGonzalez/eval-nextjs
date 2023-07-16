import React from "react";

interface SVGProps {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  fillList?: Array<string>;
  className?: string;
}

export function ImageThumb({
  height = "93",
  viewBox = "0 0 93 93",
  width = "93",
  className,
  fill,
  fillList = ["#f1e8fb", "#591ee5", "#591ee5"],
}: SVGProps) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="23"
        viewBox="0 0 23 23"
      >
        <g
          id="Group_45109"
          data-name="Group 45109"
          transform="translate(-139 -589)"
        >
          <rect
            id="Rectangle_65"
            data-name="Rectangle 65"
            width="23"
            height="23"
            rx="3"
            transform="translate(162 589) rotate(90)"
            fill="#f1e8fb"
          />
        </g>
      </svg>
    </>
  );
}
