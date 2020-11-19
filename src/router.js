import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomeComponent from "./pages/home/home";
import GoodsClassify from "./pages/home/goods/classify";
import config from "./assets/js/config/config";

function RouterComponent() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={config.path + "home"} component={HomeComponent}></Route>
        <Route
          path={config.path + "goods/classify/items"}
          component={GoodsClassify}
        ></Route>
        <Redirect to={config.path + "home/index"} />
      </Switch>
    </BrowserRouter>
  );
}

export default RouterComponent;
