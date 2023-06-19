import React from "react";

interface SVGProps {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  fillList?: Array<string>;
  className?: string;
}

export function EyeClosed({
  height = "15.828",
  width = "21",
  viewBox = "0 0 21 15.828",
  className,
  fill,
  fillList = ["#f1e8fb", "#591ee5"],
}: SVGProps) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox={viewBox}
      >
        <g
          id="Group_45402"
          data-name="Group 45402"
          transform="translate(-887 -601.586)"
        >
          <g
            id="Group_45401"
            data-name="Group 45401"
            transform="translate(232 2)"
          >
            <path
              id="visibility"
              d="M20.391,5.017C18.582,3.142,14.9,0,10.493,0S2.436,3.115.634,4.973a2.162,2.162,0,0,0,0,3.054C2.436,9.885,6.114,13,10.493,13s8.089-3.142,9.9-5.017a2.106,2.106,0,0,0,0-2.967Z"
              transform="translate(654.998 601)"
              fill={fillList[0]}
            />
          </g>
          <path
            id="Path_52724"
            data-name="Path 52724"
            d="M-20387.059-21384.119l13-13"
            transform="translate(21278.059 22000.119)"
            fill="none"
            stroke={fillList[1]}
            stroke-linecap="round"
            stroke-width="2"
          />
        </g>
      </svg>
    </>
  );
}
