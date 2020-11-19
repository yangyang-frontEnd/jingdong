import React, { useState, useEffect } from "react";
import { useGetClassifyData } from "../../../assets/js/hook/home";
import Css from "../../../assets/css/home/goods/classify.module.css";
import config from "../../../assets/js/config/config";
import GoodsItems from "./items";
import { Switch, Route } from "react-router-dom";

function Classify(props) {
  let [aClassify, setaClassify] = useState([]);
  let [tabIndex, setTabIndex] = useState(0);

  let getClassifyData = useGetClassifyData();

  let goBack = () => {
    let { goBack } = props.history;
    goBack();
  };

  let replace = (pUrl) => {
    let { replace } = props.history;
    replace(config.path + pUrl);
  };

  let changeStyle = (index, pUrl) => {
    setTabIndex(index);
    replace(pUrl);
  };

  useEffect(() => {
    getClassifyData(setaClassify);
  }, []);

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
        <div id="scroll-classify" className={Css["classify-wrap"]}>
          <div>
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
        <div className={Css["goods-content"]}>
          <Switch>
            <Route
              path={config.path + "goods/classify/items"}
              component={GoodsItems}
            ></Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Classify;
