interface SVGProps {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  fillList?: Array<string>;
  className?: string;
}

export function XCloseBg({
  height = "24",
  width = "24",
  viewBox = "0 0 24 24",
  className,
  fill = "#591ee5",
  fillList = ["#f1e8fb", "#591ee5"],
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
          id="Group_41096"
          data-name="Group 41096"
          transform="translate(-844 -478)"
        >
          <circle
            id="Ellipse_545"
            data-name="Ellipse 545"
            cx="12"
            cy="12"
            r="12"
            transform="translate(844 478)"
            fill={fillList[0]}
          />
          <path
            id="Union_3"
            data-name="Union 3"
            d="M6.782-905.866l-2.367-2.367-2.367,2.367a.956.956,0,0,1-1.352,0,.957.957,0,0,1,0-1.353l2.367-2.367L.695-911.953a.957.957,0,0,1,0-1.353.957.957,0,0,1,1.353,0l2.367,2.367,2.367-2.367a.957.957,0,0,1,1.353,0,.955.955,0,0,1,0,1.352l-2.367,2.367,2.367,2.367a.957.957,0,0,1,0,1.353.953.953,0,0,1-.676.28A.953.953,0,0,1,6.782-905.866Z"
            transform="translate(851.585 1399.586)"
            fill={fillList[1]}
          />
        </g>
      </svg>
    </>
  );
}
