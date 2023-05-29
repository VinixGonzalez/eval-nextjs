import React from "react";

interface SVGProps {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  fillList?: Array<string>;
  className?: string;
}

export function LogoEvalNoText({
  height = "42.741",
  width = "41.002",
  viewBox = "0 0 41.002 42.741",
  className,
  fill,
  fillList = ["#591ee5", "#fff", "#461fa2"],
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
          id="Group_45378"
          data-name="Group 45378"
          transform="translate(-140 -17.8)"
        >
          <path
            id="Path_181"
            data-name="Path 181"
            d="M20.506,0,0,20.5V42.74H25.3V27.045H41V20.5Z"
            transform="translate(140 17.801)"
            fill={fillList[0]}
          />
          <path
            id="Path_182"
            data-name="Path 182"
            d="M42.633,45.571v15.7l15.7-15.7Z"
            transform="translate(122.668 -0.727)"
            fill={fillList[1]}
          />
          <path
            id="Path_183"
            data-name="Path 183"
            d="M20.8,63.137H33.758V50.173Z"
            transform="translate(131.543 -2.596)"
            fill={fillList[2]}
          />
        </g>
      </svg>
    </>
  );
}
