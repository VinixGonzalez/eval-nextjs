import React from "react";

interface SVGProps {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  fillList?: Array<string>;
  className?: string;
}

export function Info({
  width = "24",
  height = "24",
  viewBox = "0 0 24 24",
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
          id="Group_40648"
          data-name="Group 40648"
          transform="translate(-662.077 -368.193)"
        >
          <g
            id="Ellipse_543"
            data-name="Ellipse 543"
            transform="translate(662.077 368.193)"
          >
            <circle
              id="Ellipse_560"
              data-name="Ellipse 560"
              cx="12"
              cy="12"
              r="12"
              transform="translate(0 0)"
              fill={fillList[0]}
            />
          </g>
          <g
            id="Line_170"
            data-name="Line 170"
            transform="translate(672.877 372.993)"
          >
            <path
              id="Path_49055"
              data-name="Path 49055"
              d="M672.077,381.193a1.068,1.068,0,0,1-1-1.125v-6.75a1.007,1.007,0,1,1,2,0v6.75A1.068,1.068,0,0,1,672.077,381.193Z"
              transform="translate(-670.877 -371.993)"
              fill={fillList[1]}
            />
          </g>
          <g
            id="Ellipse_560-2"
            data-name="Ellipse 560"
            transform="translate(672.877 383.793)"
          >
            <circle
              id="Ellipse_561"
              data-name="Ellipse 561"
              cx="1"
              cy="1"
              r="1"
              transform="translate(0.2 0.4)"
              fill={fillList[2]}
            />
          </g>
        </g>
      </svg>
    </>
  );
}
