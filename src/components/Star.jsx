import React from "react";

const Star = ({ color = "#ff3435", ...props }) => (
  <svg
    width="46"
    height="47"
    viewBox="0 0 46 47"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M27.9688 46.4769L26.9776 31.0546L39.8626 39.6974L45.1355 30.4202L31.2198 23.6408L45.1355 16.8613L39.8626 7.58416L26.9776 16.227L27.9688 0.804688H17.3833L18.3744 16.227L5.4895 7.58416L0.216583 16.8613L14.1323 23.6408L0.216583 30.4202L5.4895 39.6974L18.3744 31.0546L17.3833 46.4769H27.9688Z"
      fill={color}
    />
  </svg>
);

export default Star;
