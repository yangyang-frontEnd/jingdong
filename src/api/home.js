import request from "../assets/js/utils/request";

function getSwiper(data = {}) {
  let params = Object.assign({}, { token: "1ec949a15fb709370f" }, data);
  return request({
    url: "/api/home/index/slide",
    data: params,
  });
}

function getNav(data = {}) {
  let params = Object.assign({}, { token: "1ec949a15fb709370f" }, data);
  return request({
    url: "/api/home/index/nav",
    data: params,
  });
}

function getGoodsLevel(data = {}) {
  let params = Object.assign({}, { token: "1ec949a15fb709370f" }, data);
  return request({
    url: "/api/home/index/goodsLevel",
    data: params,
  });
}

function getReco(data = {}) {
  let params = Object.assign({}, { token: "1ec949a15fb709370f", data });
  return request({
    url: "/api/home/index/recom",
    data: params,
  });
}

export { getSwiper, getNav, getGoodsLevel,getReco };
