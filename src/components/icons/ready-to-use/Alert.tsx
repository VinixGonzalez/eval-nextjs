import React from "react";

interface SVGProps {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  fillList?: Array<string>;
  className?: string;
}

export function Alert({
  height = "26",
  viewBox = "0 0 19 26",
  width = "19",
  className,
  fill,
  fillList = ["#a289be", "#a289be", "#a289be", "#a289be"],
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
          id="Group_1769"
          data-name="Group 1769"
          transform="translate(-152.044 -362.838)"
        >
          <path
            id="Path_6144"
            data-name="Path 6144"
            d="M1807.228,506.3h0a1.95,1.95,0,0,0-1.762,2.269l.5,4.831h2.521l.5-4.831A1.95,1.95,0,0,0,1807.228,506.3Z"
            transform="translate(-1645.802 -143.459)"
            fill={fillList[0]}
          />
          <circle
            id="Ellipse_511"
            data-name="Ellipse 511"
            cx="3.461"
            cy="3.461"
            r="3.461"
            transform="translate(158.083 381.917)"
            fill={fillList[1]}
          />
          <path
            id="Rectangle_33"
            data-name="Rectangle 33"
            d="M7.77,0h0a7.77,7.77,0,0,1,7.77,7.77v6.072a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V7.77A7.77,7.77,0,0,1,7.77,0Z"
            transform="translate(153.774 367.623)"
            fill={fillList[2]}
          />
          <rect
            id="Rectangle_32"
            data-name="Rectangle 32"
            width="19"
            height="4.326"
            rx="2.163"
            transform="translate(152.044 381.052)"
            fill={fillList[3]}
          />
        </g>
      </svg>
    </>
  );
}
