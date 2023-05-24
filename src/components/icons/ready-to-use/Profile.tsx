import React from "react";

interface SVGProps {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  fillList?: Array<string>;
  className?: string;
}

export function Profile({
  height = "24",
  width = "23",
  viewBox = "0 0 23 24",
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
        <g id="account" transform="translate(0.118)">
          <path
            id="Path_6145"
            data-name="Path 6145"
            d="M22.932,39.143c-1.253-4.515-5.979-7.7-11.418-7.7S1.349,34.628.1,39.143A2.356,2.356,0,0,0,.69,41.4a3.436,3.436,0,0,0,2.522,1.038H19.806A3.424,3.424,0,0,0,22.328,41.4,2.354,2.354,0,0,0,22.932,39.143Z"
            transform="translate(-0.13 -18.439)"
            fill={fillList[0]}
          />
          <path
            id="Path_6146"
            data-name="Path 6146"
            d="M16.77,11a5.5,5.5,0,1,0-5.5-5.5A5.5,5.5,0,0,0,16.77,11Z"
            transform="translate(-5.388 0)"
            fill={fillList[1]}
          />
        </g>
      </svg>
    </>
  );
}
