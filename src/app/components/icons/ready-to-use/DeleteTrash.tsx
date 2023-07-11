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

export function DeleteTrash({
  height = "24",
  viewBox = "0 0 24 24",
  width = "24",
  className,
  title,
  fill,
  fillList = ["#f1e8fb", "#591ee5", "#591ee5"],
}: SVGProps) {
  return (
    <div title={title}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        width={width}
        height={height}
        viewBox={viewBox}
      >
        <g
          id="Group_1817"
          data-name="Group 1817"
          transform="translate(-644 -586)"
        >
          <g id="delete" transform="translate(644 586)">
            <path
              id="Path_6184"
              data-name="Path 6184"
              d="M23.257,4.732H18.151a5.889,5.889,0,0,0-11.547,0H1.515a1.326,1.326,0,0,0,0,2.622H3.606l1.21,14.641a4.355,4.355,0,0,0,4.277,4.011h6.575a4.355,4.355,0,0,0,4.277-4.011L21.149,7.354h2.108a1.326,1.326,0,0,0,0-2.622ZM12.38,2.647a3.352,3.352,0,0,1,3.089,2.107H9.291A3.4,3.4,0,0,1,12.38,2.647Z"
              transform="translate(-0.386 -0.005)"
              fill={fillList[0]}
            />
          </g>
          <rect
            id="Rectangle_105"
            data-name="Rectangle 105"
            width="2"
            height="8"
            rx="1"
            transform="translate(655 605) rotate(180)"
            fill={fillList[1]}
          />
          <rect
            id="Rectangle_106"
            data-name="Rectangle 106"
            width="2"
            height="8"
            rx="1"
            transform="translate(659 605) rotate(180)"
            fill={fillList[2]}
          />
        </g>
      </svg>
    </div>
  );
}
