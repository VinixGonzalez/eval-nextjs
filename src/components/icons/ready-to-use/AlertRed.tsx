import React from "react";

interface SVGProps {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  fillList?: Array<string>;
  className?: string;
}

export function AlertRed({
  width = "20",
  height = "20",
  viewBox = "0 0 20 20",
  className,
  fill,
  fillList = ["#be1e2d", "#f1e8fb", "#f1e8fb"],
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
          id="Group_45052"
          data-name="Group 45052"
          transform="translate(-526 -816)"
        >
          <circle
            id="Ellipse_560"
            data-name="Ellipse 560"
            cx="10"
            cy="10"
            r="10"
            transform="translate(526 816)"
            fill={fillList[0]}
          />
          <path
            id="Path_49055"
            data-name="Path 49055"
            d="M672.077,380.193a1,1,0,0,1-1-1v-6a1,1,0,0,1,2,0v6A1,1,0,0,1,672.077,380.193Z"
            transform="translate(-136.077 447.807)"
            fill={fillList[1]}
          />
          <circle
            id="Ellipse_561"
            data-name="Ellipse 561"
            cx="1"
            cy="1"
            r="1"
            transform="translate(535 829)"
            fill={fillList[2]}
          />
        </g>
      </svg>
    </>
  );
}
