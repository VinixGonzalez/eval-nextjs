import React from "react";

interface SVGProps {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  fillList?: Array<string>;
  className?: string;
}

export function LogoEval({
  height = "67.972",
  viewBox = "0 0 203 67.972",
  width = "203",
  className,
  fill,
  fillList = ["#591ee5", "#f1e8fb", "#461fa2"],
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
          id="Group_44986"
          data-name="Group 44986"
          transform="translate(14075.442 -8878.999)"
        >
          <path
            id="Path_181"
            data-name="Path 181"
            d="M32.611,0,0,32.6V67.969H40.236V43.01H65.2V32.6Z"
            transform="translate(-14075.442 8878.999)"
            fill={fillList[0]}
          />
          <path
            id="Path_182"
            data-name="Path 182"
            d="M42.633,45.571v24.96L67.6,45.571Z"
            transform="translate(-14077.839 8876.438)"
            fill={fillList[1]}
          />
          <path
            id="Path_183"
            data-name="Path 183"
            d="M20.8,70.79h20.6V50.173Z"
            transform="translate(-14076.611 8876.181)"
            fill={fillList[2]}
          />
          <g
            id="Group_240"
            data-name="Group 240"
            transform="translate(-13995.257 8893.157)"
          >
            <path
              id="Path_212"
              data-name="Path 212"
              d="M3.242,42a41.563,41.563,0,0,1,9.35-6.1l1.526-.956-.573-1.335a15.845,15.845,0,0,0-2.861-4.58,5.332,5.332,0,0,0-3.816-1.525,9.436,9.436,0,0,0-3.052.573v-6.3a30.86,30.86,0,0,1,4.006-.192,10.006,10.006,0,0,1,6.3,2.1c1.717,1.526,3.244,4.005,4.96,7.443l7.442,15.834A23.358,23.358,0,0,0,29,51.544a3.978,3.978,0,0,0,3.052,1.527,5.26,5.26,0,0,0,1.717-.192v5.915a9.756,9.756,0,0,1-2.48.38c-2.671,0-4.96-1.335-7.059-4.005a18.34,18.34,0,0,1-11.638,4.005A14.335,14.335,0,0,1,3.624,56.5,8.531,8.531,0,0,1,0,49.254,9.854,9.854,0,0,1,3.242,42M8.2,52.116a6.887,6.887,0,0,0,4.579,1.335A12.151,12.151,0,0,0,21.367,50.4c0-.192,0-.192-.191-.384v-.192l-4.769-9.919-1.335.764a60.364,60.364,0,0,0-6.868,4.2A5.7,5.7,0,0,0,6.3,48.873,3.937,3.937,0,0,0,8.2,52.116"
              transform="translate(72.056 -13.76)"
            />
            <path
              id="Path_213"
              data-name="Path 213"
              d="M286.8,26.934a18.111,18.111,0,0,1,13.546-5.343,17.2,17.2,0,0,1,13.737,6.1l-2.672,5.533a13.163,13.163,0,0,0-11.066-5.722,12.633,12.633,0,0,0-8.2,2.863,11.985,11.985,0,0,0-4.388,7.249h20.223V43.15H287.753a12.67,12.67,0,0,0,12.591,10.113,13.167,13.167,0,0,0,11.066-5.724l2.672,5.533a17.814,17.814,0,0,1-13.737,6.1,19,19,0,0,1-13.736-5.532,17.983,17.983,0,0,1-5.343-13.356A17.722,17.722,0,0,1,286.8,26.934"
              transform="translate(-281.265 -13.76)"
            />
            <path
              id="Path_214"
              data-name="Path 214"
              d="M1302.854,22.789,1313.92,47.4l11.257-24.613h6.868L1314.68,59.611h-1.527l-17.167-36.822Z"
              transform="translate(-1261.579 -14.295)"
            />
            <path
              id="Path_215"
              data-name="Path 215"
              d="M1185.933,7.8h6.276V39.162a9.076,9.076,0,0,0,2.088,6.085,8.243,8.243,0,0,0,5.894,2.091h.573V53.23h-1.712c-4.182,0-7.225-1.14-9.7-3.612-2.284-2.471-3.424-5.7-3.424-9.883Z"
              transform="translate(-1077.951 -7.797)"
            />
          </g>
        </g>
      </svg>
    </>
  );
}