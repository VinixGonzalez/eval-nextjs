import React from "react";

interface SVGProps {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  fillList?: Array<string>;
  className?: string;
}

export function CheckGreen({
  width = "20",
  height = "20",
  viewBox = "0 0 20 20",
  className,
  fill,
  fillList = ["#00d7a9", "#d9f9f2"],
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
          id="Group_45050"
          data-name="Group 45050"
          transform="translate(-1049 -302)"
        >
          <circle
            id="Ellipse_552"
            data-name="Ellipse 552"
            cx="10"
            cy="10"
            r="10"
            transform="translate(1049 302)"
            fill={fillList[0]}
          />
          <g
            id="Layer_1"
            data-name="Layer 1"
            transform="translate(1054.833 308.667)"
          >
            <g
              id="check_circle"
              data-name="check circle"
              transform="translate(0 0)"
            >
              <path
                id="Path_6178"
                data-name="Path 6178"
                d="M25.59,22.376l-4.835,4.9a.878.878,0,0,1-1.265,0L16.9,24.659a.917.917,0,0,1,0-1.285.889.889,0,0,1,1.269,0l1.957,1.981,4.2-4.253a.888.888,0,0,1,1.217.042A.916.916,0,0,1,25.59,22.376Z"
                transform="translate(-16.637 -20.882)"
                fill={fillList[1]}
              />
            </g>
          </g>
        </g>
      </svg>
    </>
  );
}
