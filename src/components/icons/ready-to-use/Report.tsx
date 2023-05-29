import React from "react";

interface SVGProps {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  fillList?: Array<string>;
  className?: string;
}

export function Report({
  height = "24",
  viewBox = "0 0 24 24",
  width = "24",
  className,
  fill,
  fillList = ["#fff", "#591ee5", "#591ee5", "#591ee5"],
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
          id="Group_43779"
          data-name="Group 43779"
          transform="translate(-786 -686)"
        >
          <path
            id="Path_51515"
            data-name="Path 51515"
            d="M21,24H3a3,3,0,0,1-3-3V3A3,3,0,0,1,3,0H15l9,9V21a3,3,0,0,1-3,3"
            transform="translate(786 686)"
            fill={fillList[0]}
          />
          <path
            id="Path_51516"
            data-name="Path 51516"
            d="M21,9H14.25A2.25,2.25,0,0,1,12,6.75V0Z"
            transform="translate(789 686)"
            fill={fillList[1]}
          />
          <rect
            id="Rectangle_66"
            data-name="Rectangle 66"
            width="3"
            height="9"
            rx="1.5"
            transform="translate(800 702) rotate(90)"
            fill={fillList[2]}
          />
          <rect
            id="Rectangle_67"
            data-name="Rectangle 67"
            width="3"
            height="14"
            rx="1.5"
            transform="translate(805 697) rotate(90)"
            fill={fillList[3]}
          />
        </g>
      </svg>
    </>
  );
}
