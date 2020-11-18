import axios from "axios";
import config from "../config/config";

export default function ({ url, data = {} }) {
  return new Promise((resolve,reject) => {
    axios
      .get(config.baseUrl + url, {
        params: {
          ...data,
        },
      })
      .then((res) => {
          if (res.data.code === 200) {
              resolve(res.data)
          }else{
              reject('errCode')
          }
      });
  }).catch((err) => {
    console.log(err);
  });
}
