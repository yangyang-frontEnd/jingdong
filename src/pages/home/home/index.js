import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Css from "../../../assets/css/home/home/index.module.css";
import IndexComponent from "../../../pages/home/index/index";
import config from "../../../assets/js/config/config";
import CartIndex from "../cart/index";
import UserIndex from "../../user/index";
import { useGoPage, useHandleNavStyle } from "../../../assets/js/hook/home";

function HomeComponent(props) {
  let goPage = useGoPage();
  let handleNavStyle = useHandleNavStyle();

  let [bHomeStyle, setBHomeStyle] = useState(true);
  let [bCartStyle, setBCartStyle] = useState(false);
  let [bMyStyle, setBMyStyle] = useState(false);


  useEffect(() => {
    handleNavStyle(setBHomeStyle, setBCartStyle, setBMyStyle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    console.log(123);
    handleNavStyle(setBHomeStyle, setBCartStyle, setBMyStyle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.location.pathname]);

  return (
    <div>
      <React.Fragment>
        <Switch>
          <Route path={config.path + "home/index"} component={IndexComponent} />
          <Route path={config.path + "home/cart"} component={CartIndex}></Route>
          <Route path={config.path + "home/my"} component={UserIndex}></Route>
        </Switch>
      </React.Fragment>
      <div className={Css["bottom-nav"]}>
        <ul
          onClick={() => {
            goPage("home/index");
          }}
        >
          <li
            className={`${Css["home"]} ${bHomeStyle ? Css["active"] : ""}`}
          ></li>
          <li className={`${Css["text"]} ${bHomeStyle ? Css["active"] : ""}`}>首页</li>
        </ul>
        <ul
          onClick={() => {
            goPage("home/cart");
          }}
        >
          <li
            className={`${Css["cart"]} ${bCartStyle ? Css["active"] : ""}`}
          ></li>
          <li className={`${Css["text"]} ${bCartStyle ? Css["active"] : ""}`}>购物车</li>
        </ul>
        <ul onClick={() => [goPage("home/my")]}>
          <li className={`${Css["my"]} ${bMyStyle ? Css["active"] : ""}`}></li>
          <li className={`${Css["text"]} ${bMyStyle ? Css["active"] : ""}`}>我的</li>
        </ul>
      </div>
    </div>
  );
}

export default HomeComponent;
