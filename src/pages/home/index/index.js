import React, { useEffect, useState } from "react";
import Css from "../../../assets/css/home/index/index.module.css";

import Swiper from "swiper";
import {
  useGetSwiper,
  useGetNav,
  useGetGoodsLevel,
  useGetReco,
} from "../../../assets/js/hook/home";

import { lazyImg } from "../../../assets/js/utils/lazy-img";

import Loading from "../../../component/loading";

function IndexComponent() {
  let [aSwiper, setaSwiper] = useState(null);
  let [aNav, setaNav] = useState(null);
  let [aGoods, setaGoods] = useState(null);
  let [aRecoGoods, setaRecoGoods] = useState(null);
  let [bScroll, setbScroll] = useState(false);

  let _getSwiper = useGetSwiper();
  let _getNav = useGetNav();
  let _getGoodsLevel = useGetGoodsLevel();
  let _getReco = useGetReco();

  let handleScroll = () => {
    let iScrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (iScrollTop >= 80) {
      console.log("到了");
      setbScroll(true);
    } else {
      setbScroll(false);
    }
  };
  useEffect(() => {
    _getSwiper({ setaSwiper, Css, Swiper });
    _getNav(setaNav);
    _getGoodsLevel(setaGoods);
    _getReco(setaRecoGoods);
    lazyImg();
    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (aSwiper && aNav && aGoods && aRecoGoods) {
    return (
      <div className={Css["page"]}>
        <div
          className={`${Css["search-header"]} ${bScroll ? Css["red-bg"] : ""}`}
        >
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
            {aSwiper != null
              ? aSwiper.map((item, index) => {
                  return (
                    <div key={index} className="swiper-slide">
                      <a
                        href={item.webs}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={item.image} alt={item.title} />
                      </a>
                    </div>
                  );
                })
              : ""}
          </div>
          <div className="swiper-pagination"></div>
        </div>
        <div className={Css["quick-nav"]}>
          {aNav != null
            ? aNav.map((item, index) => {
                return (
                  <ul key={index} className={Css["item"]}>
                    <li className={Css["item-img"]}>
                      <img src={item.image} alt={item.title} />
                    </li>
                    <li className={Css["item-text"]}>{item.title}</li>
                  </ul>
                );
              })
            : ""}
        </div>

        {aGoods != null
          ? aGoods.map((item, index) => {
              return (
                <div key={index} className={Css["goods-level-wrap"]}>
                  <div
                    className={
                      Css["classify-title"] + " " + Css["color" + (index + 1)]
                    }
                  >
                    —— {item.title} ——
                  </div>

                  {index % 2 === 1 ? (
                    <div className={Css["goods-level1-wrap"]}>
                      {item.items != null
                        ? item.items.slice(0, 2).map((item2, index2) => {
                            return (
                              <div
                                key={index2}
                                className={Css["goods-level1-item0"]}
                              >
                                <div className={Css["goods-title2"]}>
                                  {item2.title}
                                </div>
                                <div className={Css["goods-text2"]}>
                                  火爆开售
                                </div>
                                <div className={Css["goods-img2"]}>
                                  <img
                                    src={
                                      require("../../../assets/images/common/lazyImg.jpg")
                                        .default
                                    }
                                    alt={item2.title}
                                    data-echo={item2.image}
                                  />
                                </div>
                              </div>
                            );
                          })
                        : ""}
                    </div>
                  ) : (
                    <div className={Css["goods-level1-wrap"]}>
                      <div className={Css["goods-level1-item0"]}>
                        <div className={Css["goods-title"]}>
                          {item.items != null ? item.items[0].title : ""}
                        </div>
                        <div className={Css["goods-text"]}>精品打折</div>
                        <div className={Css["goods-price" + (index + 1)]}>
                          {item.items != null ? item.items[0].price : ""}元
                        </div>
                        <div className={Css["goods-img"]}>
                          <img
                            data-echo={
                              item.items != null ? item.items[0].image : ""
                            }
                            src={
                              require("../../../assets/images/common/lazyImg.jpg")
                                .default
                            }
                            alt={item.items != null ? item.items[0].title : ""}
                          />
                        </div>
                      </div>
                      <div className={Css["goods-level1-item1"]}>
                        {item.items != null
                          ? item.items.slice(1, 3).map((item2, index2) => {
                              return (
                                <div key={index2} className={Css["goods-row"]}>
                                  <div className={Css["goods-row-title"]}>
                                    {item2.title}
                                  </div>
                                  <div className={Css["goods-row-text"]}>
                                    品质精挑
                                  </div>
                                  <div className={Css["goods-row-img"]}>
                                    <img
                                      src={
                                        require("../../../assets/images/common/lazyImg.jpg")
                                          .default
                                      }
                                      data-echo={item2.image}
                                      alt={item2.title}
                                    />
                                  </div>
                                </div>
                              );
                            })
                          : ""}
                      </div>
                    </div>
                  )}

                  <div className={Css["goods-list-wrap"]}>
                    {item.items != null
                      ? item.items
                          .slice(index % 2 === 1 ? 2 : 3)
                          .map((item2, index2) => {
                            return (
                              <div key={index2} className={Css["goods-list"]}>
                                <div className={Css["title"]}>
                                  {item2.title}
                                </div>
                                <div className={Css["image"]}>
                                  <img
                                    src={
                                      require("../../../assets/images/common/lazyImg.jpg")
                                        .default
                                    }
                                    data-echo={item2.image}
                                    alt={item2.title}
                                  />
                                </div>
                                <div className={Css["price"]}>
                                  ¥{item2.price}
                                </div>
                                <div className={Css["unprice"]}>
                                  ¥{item2.price * 2}
                                </div>
                              </div>
                            );
                          })
                      : ""}
                  </div>
                </div>
              );
            })
          : ""}

        <div className={Css["reco-title-wrap"]}>
          <div className={Css["line"]}></div>
          <div className={Css["reco-text-wrap"]}>
            <div className={Css["reco-icon"]}></div>
            <div className={Css["reco-text"]}>为您推荐</div>
          </div>
          <div className={Css["line"]}></div>
        </div>
        <div className={Css["reco-item-wrap"]}>
          {aRecoGoods != null
            ? aRecoGoods.map((item, index) => {
                return (
                  <div key={index} className={Css["reco-item"]}>
                    <div className={Css["image"]}>
                      <img
                        src={
                          require("../../../assets/images/common/lazyImg.jpg")
                            .default
                        }
                        alt={item.title}
                        data-echo={item.image}
                      />
                    </div>
                    <div className={Css["title"]}>{item.title}</div>
                    <div className={Css["price"]}>¥{item.price}</div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    );
  } else {
    return <Loading></Loading>;
  }
}

export default IndexComponent;
