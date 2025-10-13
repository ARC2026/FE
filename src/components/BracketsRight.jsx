import React from "react";

const BracketsRight = ({
  color = "#ff3435",
  width = 36,
  height = 120,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 36 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.985352 0L4.74512 7.0332C9.92106 16.7034 13.5154 26.8346 15.5283 37.4258C16.8428 44.3749 17.5 51.9522 17.5 60.1572C17.5 72.967 15.6716 84.7512 12.0156 95.5098C9.87947 101.873 6.10027 110.037 0.677734 120H35.6777V0H0.985352Z"
      fill={color}
    />
  </svg>
);

export default BracketsRight;
