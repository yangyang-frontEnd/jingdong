import { useHistory, useLocation } from "react-router-dom";
import config from "../../../assets/js/config/config";

function useGoPage() {
  let { replace } = useHistory();
  return function (pUrl) {
    replace(config.path + pUrl);
  };
}

export { useGoPage, useHandleNavStyle };

function useHandleNavStyle() {
  let { pathname } = useLocation();
  return function (setBHomeStyle, setBCartStyle, setBMyStyle) {
    switch (pathname) {
      case config.path + "home/index":
        setBHomeStyle(true);
        setBCartStyle(false);
        setBMyStyle(false);
        break;
      case config.path + "home/cart":
        setBHomeStyle(false);
        setBCartStyle(true);
        setBMyStyle(false);
        break;
      case config.path + "home/my":
        setBHomeStyle(false);
        setBCartStyle(false);
        setBMyStyle(true);
        break;
      default:
        break;
    }
  };
}
