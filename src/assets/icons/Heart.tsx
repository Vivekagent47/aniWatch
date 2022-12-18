import React from "react";

interface IProps {
  width?: string;
  height?: string;
  classSvg?: string;
  style?: any;
}

const Heart = ({ width, height, style, classSvg }: IProps) => (
  <svg
    width={width}
    height={height}
    className={classSvg}
    style={{ ...style }}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.33277 13.4622C5.78057 12.5211 4.33657 11.4134 3.02663 10.1591C2.10569 9.25567 1.40458 8.15445 0.97701 6.9396C0.207588 4.58295 1.10632 1.88505 3.62147 1.08663C4.94334 0.66738 6.38698 0.906997 7.50089 1.73052C8.61517 0.908005 10.0584 0.668472 11.3803 1.08663C13.8955 1.88505 14.8007 4.58295 14.0312 6.9396C13.6037 8.15445 12.9026 9.25567 11.9816 10.1591C10.6717 11.4134 9.22765 12.5211 7.67545 13.4622L7.50733 13.5652L7.33277 13.4622Z"
      strokeWidth="1.3587"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Heart;
