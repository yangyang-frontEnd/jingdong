import request from "../assets/js/utils/request";

function getData(data = {}) {
  let params = Object.assign({}, { token: "1ec949a15fb709370f" }, data);
  return request({
    url: "/api/home/category/show",
    data: params,
  });
}

export { getData };
