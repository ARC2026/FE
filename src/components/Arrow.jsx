import React from "react";

const Arrow = ({ color = "#ff3435", ...props }) => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24 22.75C24 23.8546 23.1046 24.75 22 24.75L4 24.75C2.89543 24.75 2 23.8546 2 22.75C2 21.6454 2.89543 20.75 4 20.75L20 20.75L20 4.75C20 3.64543 20.8954 2.75 22 2.75C23.1046 2.75 24 3.64543 24 4.75L24 22.75ZM22 22.75L20.5858 24.1642L0.0857869 3.66422L1.5 2.25L2.91421 0.835788L23.4142 21.3358L22 22.75Z"
      fill={color}
    />
  </svg>
);

export default Arrow;
