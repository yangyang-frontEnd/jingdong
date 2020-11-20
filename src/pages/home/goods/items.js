import React, { useState, useEffect } from "react";
import { useGetData } from "../../../assets/js/hook/items";
import Css from "../../../assets/css/home/goods/items.module.css";
import IScroll from "iscroll";
import { lazyImg } from "../../../assets/js/utils/lazy-img";
let myScroll = {};

function GoodsItems(props) {
  let [aGoods, setaGoods] = useState([]);
  let getData = useGetData(setaGoods);

  let eventScroll = () => {
    document.getElementById("goods-content-main").addEventListener(
      "touchmove",
      function (e) {
        e.preventDefault();
      },
      false
    );
    myScroll = new IScroll("#goods-content-main", {
      scrollX: false,
      scrollY: true,
      preventDefault: false,
    });

    myScroll.on("scrollEnd", () => {
      lazyImg();
    });
  };

  useEffect(() => {
    getData(setaGoods);
    setTimeout(() => {
      eventScroll();
      lazyImg();
    }, 300);
  }, []);

  return (
    <div id="goods-content-main" className={Css["goods-content-main"]}>
      <div>
        {aGoods.length > 0 ? (
          aGoods.map((item, index) => {
            return (
              <div className={Css["goods-wrap"]} key={index}>
                <div className={Css["classify-name"]}>{item.title}</div>
                <div className={Css["goods-items-wrap"]}>
                  {item.goods != null
                    ? item.goods.map((item2, index2) => {
                        return (
                          <ul key={index2}>
                            <li>
                              <img
                                data-echo={item2.image}
                                src={
                                  require("../../../assets/images/common/lazyImg.jpg")
                                    .default
                                }
                                // src={item2.image}
                                alt={item2.title}
                              />
                            </li>
                            <li>{item2.title}</li>
                          </ul>
                        );
                      })
                    : ""}
                </div>
              </div>
            );
          })
        ) : (
          <div className="null-item">没有相关商品！</div>
        )}
      </div>
    </div>
  );
}

export default GoodsItems;
