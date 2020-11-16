import React, { useEffect } from "react";
import Css from "../../../assets/css/home/index/index.module.css";
import Swiper from "swiper";

function IndexComponent() {
  useEffect(() => {
    new Swiper(`.${Css["swiper-wrap"]}`, {
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }, []);
  return (
    <div>
      <div className={Css["search-header"]}>
        <div className={Css["classify-icon"]}></div>
        <div className={Css["search-wrap"]}>
          <div className={Css["search-icon"]}></div>
          <div className={Css["search-text"]}>请输入宝贝名称</div>
        </div>
        <div className={Css["login-wrap"]}>
          <div className={Css["login-text"]}>登录</div>
        </div>
      </div>
      <div className={Css["swiper-wrap"]}>
        <div className="swiper-wrapper">
          <div className="swiper-slide">slider1</div>
          <div className="swiper-slide">slider2</div>
          <div className="swiper-slide">slider3</div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}

export default IndexComponent;
