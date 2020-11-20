import { getData } from "../../../api/items";
import { useLocation } from "react-router-dom";
import { localParam } from "../utils/localParam";

function useGetData() {
  let strParams = useLocation().search;
  let objParams = localParam(strParams).search;
  // console.log(objParams);
  let { cid } = objParams;
  //   console.log(cid);

  return function (setaGoods) {
    getData({ cid }).then((res) => {
      if (res) {
        console.log("分类右侧数据", res);
        setTimeout(()=>{
            setaGoods(res.data);
        },150)
      }
    });
  };
}

export { useGetData };
