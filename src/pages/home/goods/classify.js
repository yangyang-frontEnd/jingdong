import React, { useState, useEffect, useRef } from "react";
import { useGetClassifyData } from "../../../assets/js/hook/home";
import Css from "../../../assets/css/home/goods/classify.module.css";
import config from "../../../assets/js/config/config";
import GoodsItems from "./items";
import { Switch, Route } from "react-router-dom";
import IScroll from "iscroll/build/iscroll";
import { localParam } from "../../../assets/js/utils/localParam";
let myScroll = {};

function Classify(props) {
  let [aClassify, setaClassify] = useState([]);
  let [tabIndex, setTabIndex] = useState(0);

  let getClassifyData = useGetClassifyData();

  let wrap = useRef();
  let scrollWrap = useRef();

  let { key } = props.location;

  let goBack = () => {
    let { goBack } = props.history;
    goBack();
  };

  let replace = (pUrl) => {
    let { replace } = props.history;
    replace(config.path + pUrl);
  };

  let handleScroll = (index) => {
    // console.log(wrap);

    // console.log(Array.isArray(wrap.current.children) );
    /*     Array.from(wrap.current.children).forEach((item) => {
      console.log(item);
    }); */
    let arr = [];

    Array.from(wrap.current.children).reduce((prev, curr) => {
      arr.push(prev);
      return prev + curr.offsetHeight;
    }, 0);
    // console.log(arr);

    let iHalfHeight = Math.round(scrollWrap.current.offsetHeight / 3);

    let maxScrollTop =
      wrap.current.offsetHeight - scrollWrap.current.offsetHeight;

    if (arr[index] <= maxScrollTop && arr[index] >= iHalfHeight) {
      myScroll.scrollTo(0, -arr[index], 300, IScroll.utils.ease.elastic);
    }
  };

  let changeStyle = (index, pUrl) => {
    setTabIndex(index);
    replace(pUrl);
    handleScroll(index);
    // console.log(props.location.search);
  };

  let eventScroll = () => {
    document.getElementById("scroll-classify").addEventListener(
      "touchmove",
      function (e) {
        e.preventDefault();
      },
      false
    );

    myScroll = new IScroll("#scroll-classify", {
      scrollX: false,
      scrollY: true,
      preventDefault: false,
    });
  };

  let defaultClassifyStyle = () => {
    if (aClassify.length > 0) {
      let { search } = props.location;
      // console.log(search);
      let params = localParam(search).search;
      // console.log(localParam(search).search);
      let index = aClassify.findIndex((item) => {
        return item.cid === params.cid;
      });
      // console.log(index);
      setTabIndex(index);
    }
  };

  useEffect((...arg) => {
    // console.log(arg);
    getClassifyData(setaClassify);
    setTimeout(() => {
      eventScroll();
    }, 200);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    defaultClassifyStyle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aClassify]);

  return (
    <div>
      <div className={Css["search-header"]}>
        <div
          className={Css["back"]}
          onClick={() => {
            goBack();
          }}
        ></div>
        <div className={Css["search"]}>请输入宝贝名称</div>
      </div>
      <div className={Css["goods-main"]}>
        <div
          id="scroll-classify"
          ref={scrollWrap}
          className={Css["classify-wrap"]}
        >
          <div ref={wrap}>
            {aClassify != null
              ? aClassify.map((item, index) => {
                  return (
                    <div
                      className={`${Css["classify-item"]} ${
                        tabIndex === index ? Css["active"] : ""
                      }`}
                      key={index}
                      onClick={() => {
                        changeStyle(
                          index,
                          `goods/classify/items?cid=${item.cid}`
                        );
                      }}
                    >
                      {item.title}
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
        <div className={Css["goods-content"]} key={key}>
          <Switch>
            <Route
              path={config.path + "goods/classify/items"}
              render={() => {
                return <GoodsItems />;
              }}
            ></Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Classify;
