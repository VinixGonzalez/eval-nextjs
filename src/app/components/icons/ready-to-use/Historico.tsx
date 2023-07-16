import React from "react";

interface SVGProps {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  fillList?: Array<string>;
  className?: string;
}

export function Historico({
  width = "21",
  height = "18",
  viewBox = "0 0 21 18",
  className,
  fill,
  fillList = ["#f1e8fb", "#591ee5"],
}: SVGProps) {
  return (
    <>
      <svg
        className={className}
        width={width}
        height={height}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="Group_45100"
          data-name="Group 45100"
          transform="translate(-654 -657)"
        >
          <path
            id="Path_6212"
            data-name="Path 6212"
            d="M11.989,0A8.942,8.942,0,0,0,3.077,8.427l-1.09-1.1A1.053,1.053,0,0,0,.536,8.8l3.12,3.143a1.051,1.051,0,0,0,1.462,0L8.234,8.813A1.035,1.035,0,0,0,6.772,7.349L5.142,8.978V8.943a6.857,6.857,0,1,1,2.868,5.59,1.035,1.035,0,0,0-1.2,1.686A8.938,8.938,0,1,0,11.989,0Z"
            transform="translate(653.64 657)"
            fill={fillList[0]}
          />
          <path
            id="Path_6213"
            data-name="Path 6213"
            d="M31.4,13.39a.857.857,0,0,0-.866.834v4.428a.844.844,0,0,0,.424.723l1.879,1.059a.859.859,0,0,0,1.245-.507.826.826,0,0,0-.394-.937l-1.443-.819V14.223A.857.857,0,0,0,31.4,13.39Z"
            transform="translate(634.202 648.082)"
            fill={fillList[1]}
          />
        </g>
      </svg>
    </>
  );
}
