import { useHistory, useLocation } from "react-router-dom";
import config from "../../../assets/js/config/config";
import {
  getSwiper,
  getNav,
  getGoodsLevel,
  getReco,
  getClassifyData,
} from "../../../api/home";
import { lazyImg } from "../utils/lazy-img";

export {
  useGoPage,
  useHandleNavStyle,
  useGetSwiper,
  useGetNav,
  useGetGoodsLevel,
  useGetReco,
  useGetClassifyData,
};

function useGoPage() {
  let { replace } = useHistory();
  return function (pUrl) {
    replace(config.path + pUrl);
  };
}

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

function useGetSwiper() {
  return function ({ setaSwiper, Css, Swiper }) {
    getSwiper().then((res) => {
      setaSwiper(res.data);
      console.log("轮播图数据", res);
      new Swiper(`.${Css["swiper-wrap"]}`, {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
      });
    });
  };
}

function useGetNav() {
  return function (setaNav) {
    getNav().then((res) => {
      setaNav(res.data);
      console.log("nav数据", res);
    });
  };
}

function useGetGoodsLevel() {
  return function (setaGoods) {
    getGoodsLevel().then((res) => {
      console.log("首页产品数据", res);
      setaGoods(res.data);
    });
  };
}

function useGetReco() {
  return function (setaRecoGoods) {
    getReco().then((res) => {
      console.log("推荐数据", res);
      setaRecoGoods(() => {
        return res.data;
      });
    });
  };
}

function useGetClassifyData() {
  return function (setaClassify) {
    getClassifyData().then((res) => {
      console.log("产品分类左侧", res);
      setaClassify(res.data);
    });
  };
}
