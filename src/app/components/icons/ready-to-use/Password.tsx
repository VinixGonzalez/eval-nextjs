import React from "react";

interface SVGProps {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  fillList?: Array<string>;
  className?: string;
}

export function Password({
  width = "18",
  height = "24",
  viewBox = "0 0 18 24",
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
          id="Group_1789"
          data-name="Group 1789"
          transform="translate(-376 -608)"
        >
          <path
            id="lock"
            d="M15.4,7.866H15V4.437A4.419,4.419,0,0,0,10.6,0H7.4A4.419,4.419,0,0,0,3,4.437V7.866H2.6A2.615,2.615,0,0,0,0,10.487v9.277A4.222,4.222,0,0,0,4.2,24h9.6A4.222,4.222,0,0,0,18,19.765V10.487A2.615,2.615,0,0,0,15.4,7.866Zm-2.8-.2H5.4V4.437a2.008,2.008,0,0,1,2-2.017h3.2a2.008,2.008,0,0,1,2,2.017Z"
            transform="translate(376 608)"
            fill={fillList[0]}
          />
          <path
            id="Path_6168"
            data-name="Path 6168"
            d="M4.582,36.319A1.429,1.429,0,1,0,2.554,34.3L.418,36.451a1.429,1.429,0,1,0,2.028,2.015Z"
            transform="translate(357.504 599.575) rotate(-45)"
            fill={fillList[1]}
          />
        </g>
      </svg>
    </>
  );
}
