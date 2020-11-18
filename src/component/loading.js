import React from "react";
import Css2 from "../assets/css/common/loading.module.css";

function Loading() {
  return <div id="page-load" className={Css2["load"]} style={{display:"block"}}></div>;
}

export default Loading;
