import React from "react";

interface SVGProps {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  fillList?: Array<string>;
  className?: string;
}

export function Edit({
  height = "15",
  width = "15",
  viewBox = "0 0 14.406 14.406",
  className,
  fill,
  fillList = ["#f1e8fb", "#591ee5", "#591ee5"],
}: SVGProps) {
  return (
    <>
      <svg
        className={className}
        id="edit"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={viewBox}
      >
        <path
          id="Path_6149"
          data-name="Path 6149"
          d="M9.137,10.09l-8.2,8.2a.507.507,0,0,0-.134.233L.013,21.595a.507.507,0,0,0,.492.633.558.558,0,0,0,.127-.015L3.7,21.425a.492.492,0,0,0,.233-.132l8.2-8.2Z"
          transform="translate(0.004 -7.948)"
          fill={fillList[0]}
        />
        <path
          id="Path_6150"
          data-name="Path 6150"
          d="M44.107,2.447,41.825.166a.507.507,0,0,0-.715,0L39.59,1.687l3,2.991,1.521-1.521a.5.5,0,0,0-.008-.71Z"
          transform="translate(-29.85 -0.018)"
          fill={fillList[1]}
        />
        <path
          id="Path_6151"
          data-name="Path 6151"
          d="M29.391,53.5H24.254a.634.634,0,0,0,0,1.267h5.138a.634.634,0,0,0,0-1.267Z"
          transform="translate(-17.845 -40.361)"
          fill={fillList[2]}
        />
      </svg>
    </>
  );
}
