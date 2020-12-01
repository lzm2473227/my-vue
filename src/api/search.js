import request from "@utils/request";

//获取所有商品的数据
export const reqGetProductList = (data) => {
  return request({
    method: "POST",
    url: "/list",
    data,
  });
};
