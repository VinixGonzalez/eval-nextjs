import React from "react";

interface SVGProps {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  fillList?: Array<string>;
  className?: string;
  title?: string;
}

export function Search({
  height = "25",
  viewBox = "0 0 25 25",
  width = "25",
  className,
  title,
  fill,
  fillList = ["#f1e8fb", "#591ee5"],
}: SVGProps) {
  return (
    <div title={title}>
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox={viewBox}
      >
        <g
          id="Group_1772"
          data-name="Group 1772"
          transform="translate(-152 -586.319)"
        >
          <rect
            id="Rectangle_61"
            data-name="Rectangle 61"
            width="4"
            height="13"
            rx="2"
            transform="translate(164.979 602.127) rotate(-45)"
            fill={fillList[0]}
          />
          <path
            id="Subtraction_9"
            data-name="Subtraction 9"
            d="M10,19.988A9.994,9.994,0,1,1,20,9.994,10.009,10.009,0,0,1,10,19.988ZM10,4.721A5.277,5.277,0,1,0,15.278,10,5.284,5.284,0,0,0,10,4.721Z"
            transform="translate(152 586.319)"
            fill={fillList[1]}
          />
        </g>
      </svg>
    </div>
  );
}
