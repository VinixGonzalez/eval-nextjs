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

export function Print({
  height = "24",
  viewBox = "0 0 24 24",
  width = "24",
  title,
  className,
  fill,
  fillList = ["#591ee5", "#f1e8fb", "#591ee5"],
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
          id="Group_44949"
          data-name="Group 44949"
          transform="translate(-598 -713)"
        >
          <rect
            id="Rectangle_3783"
            data-name="Rectangle 3783"
            width="6"
            height="12"
            rx="2"
            transform="translate(616 713) rotate(90)"
            fill={fillList[0]}
          />
          <path
            id="Path_51578"
            data-name="Path 51578"
            d="M12693-6102h-2a3,3,0,0,1-3-3v-7a3,3,0,0,1,3-3h18a3,3,0,0,1,3,3v7a3.005,3.005,0,0,1-3,3h-1v-3a2,2,0,0,0-2-2h-12a2,2,0,0,0-2,2v3Z"
            transform="translate(-12090 6832)"
            fill={fillList[1]}
          />
          <rect
            id="Rectangle_3784"
            data-name="Rectangle 3784"
            width="7"
            height="12"
            rx="1"
            transform="translate(616 727) rotate(90)"
            fill={fillList[2]}
          />
        </g>
      </svg>
    </div>
  );
}
