import React from "react";
import ReactDOM from "react-dom";

import RouterComponent from "./router";

import "./assets/css/common/public.css";
// import "./assets/js/libs/zepto"

import "swiper/css/swiper.min.css";
import "swiper/js/swiper.min.js";

ReactDOM.render(
  <React.StrictMode>
    <RouterComponent />
  </React.StrictMode>,
  document.getElementById("root")
);
