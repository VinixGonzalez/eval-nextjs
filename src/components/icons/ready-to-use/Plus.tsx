import React from "react";

interface SVGProps {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  fillList?: Array<string>;
  className?: string;
}

export function Plus({
  height = "24",
  width = "24",
  viewBox = "0 0 24 24",
  className,
  fill,
  fillList = ["#f1e8fb", "#591ee5"],
}: SVGProps) {
  return (
    <>
      <svg
        className={className}
        id="Group_41097"
        data-name="Group 41097"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={viewBox}
      >
        <circle
          id="Ellipse_547"
          data-name="Ellipse 547"
          cx="12"
          cy="12"
          r="12"
          fill={fillList[0]}
        />
        <path
          id="Union_5"
          data-name="Union 5"
          d="M6.367,7.719,4,5.352,1.633,7.719A.956.956,0,0,1,.28,6.368L2.647,4,.28,1.634A.957.957,0,0,1,1.634.28L4,2.647,6.368.28A.956.956,0,1,1,7.719,1.633L5.352,4,7.719,6.367A.957.957,0,1,1,6.367,7.719Z"
          transform="translate(12 6.343) rotate(45)"
          fill={fillList[1]}
        />
      </svg>
    </>
  );
}
