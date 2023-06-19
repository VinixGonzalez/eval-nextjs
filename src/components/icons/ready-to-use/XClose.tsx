"use client";
import React, { CSSProperties, useState } from "react";

interface SVGProps {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  fillList?: Array<string>;
  className?: string;
  useHover?: boolean;
  style?: CSSProperties;
}

export function XClose({
  height = "8",
  width = "8",
  viewBox = "0 0 8 8",
  className,
  fill = "#591ee5",
  useHover = false,
  style,
  fillList = [],
}: SVGProps) {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <svg
        style={style}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={viewBox}
      >
        <path
          id="Union_3"
          data-name="Union 3"
          d="M6.367,7.719,4,5.352,1.633,7.719A.956.956,0,0,1,.28,6.368L2.647,4,.28,1.634A.957.957,0,0,1,1.634.28L4,2.647,6.368.28A.956.956,0,1,1,7.719,1.633L5.352,4,7.719,6.367A.957.957,0,1,1,6.367,7.719Z"
          transform="translate(0 0)"
          fill={useHover && isHover ? "#fff" : fill}
        />
      </svg>
    </>
  );
}
