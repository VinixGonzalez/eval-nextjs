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

export function Share({
  height = "24",
  viewBox = "0 0 24 24",
  width = "24",
  className,
  title,
  fill,
  fillList = ["#f1e8fb", "#f1e8fb", "#591ee5", "#591ee5", "#591ee5"],
}: SVGProps) {
  return (
    <div title={title}>
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={viewBox}
      >
        <g
          id="Group_44953"
          data-name="Group 44953"
          transform="translate(-860 -356)"
        >
          <rect
            id="Rectangle_3796"
            data-name="Rectangle 3796"
            width="1.407"
            height="12.66"
            rx="0.703"
            transform="translate(863.311 366.362) rotate(-120)"
            fill={fillList[0]}
          />
          <rect
            id="Rectangle_3797"
            data-name="Rectangle 3797"
            width="1.407"
            height="12.66"
            rx="0.703"
            transform="translate(862.607 365.444) rotate(-60)"
            fill={fillList[1]}
          />
          <circle
            id="Ellipse_577"
            data-name="Ellipse 577"
            cx="3"
            cy="3"
            r="3"
            transform="translate(871 356)"
            fill={fillList[2]}
          />
          <circle
            id="Ellipse_578"
            data-name="Ellipse 578"
            cx="3"
            cy="3"
            r="3"
            transform="translate(871 368)"
            fill={fillList[3]}
          />
          <circle
            id="Ellipse_579"
            data-name="Ellipse 579"
            cx="3"
            cy="3"
            r="3"
            transform="translate(860 362)"
            fill={fillList[4]}
          />
        </g>
      </svg>
    </div>
  );
}
