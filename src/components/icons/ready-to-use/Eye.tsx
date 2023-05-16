import React from "react";

interface SVGProps {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  fillList?: Array<string>;
  className?: string;
}

export function Eye({
  height = "13",
  viewBox = "0 0 21 13",
  width = "21",
  className,
  fill,
  fillList = ["#f1e8fb", "#591ee5"],
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
          id="Group_44987"
          data-name="Group 44987"
          transform="translate(-655 -601)"
        >
          <path
            id="visibility"
            d="M20.391,5.017C18.582,3.142,14.9,0,10.493,0S2.436,3.115.634,4.973a2.162,2.162,0,0,0,0,3.054C2.436,9.885,6.114,13,10.493,13s8.089-3.142,9.9-5.017a2.106,2.106,0,0,0,0-2.967Z"
            transform="translate(654.998 601)"
            fill={fillList[0]}
          />
          <circle
            id="Ellipse_542"
            data-name="Ellipse 542"
            cx="2.5"
            cy="2.5"
            r="2.5"
            transform="translate(663 605)"
            fill={fillList[1]}
          />
        </g>
      </svg>
    </>
  );
}
