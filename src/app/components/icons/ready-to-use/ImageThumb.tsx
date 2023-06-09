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
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={viewBox}
      >
        <g
          id="Group_45085"
          data-name="Group 45085"
          transform="translate(-554 -223)"
        >
          <circle
            id="Ellipse_581"
            data-name="Ellipse 581"
            cx="46.5"
            cy="46.5"
            r="46.5"
            transform="translate(554 223)"
            fill={fillList[0]}
          />
          <circle
            id="Ellipse_541"
            data-name="Ellipse 541"
            cx="4.5"
            cy="4.5"
            r="4.5"
            transform="translate(581 255)"
            fill={fillList[1]}
          />
          <path
            id="Path_6221"
            data-name="Path 6221"
            d="M2.54-894.129A2.7,2.7,0,0,1,0-896.967a2.949,2.949,0,0,1,1.049-2.3q.059-.07.126-.139l7.816-7.922a3.95,3.95,0,0,1,2.837-1.2,3.948,3.948,0,0,1,2.835,1.2l4.069,4.128,9.466-9.609A3.944,3.944,0,0,1,31.03-914a3.954,3.954,0,0,1,2.837,1.193l13.211,13.4c.04.041.078.082.114.124a2.945,2.945,0,0,1,1.067,2.313,2.7,2.7,0,0,1-2.54,2.838Z"
            transform="translate(578.355 1177.621)"
            fill={fillList[2]}
          />
        </g>
      </svg>
    </>
  );
}
