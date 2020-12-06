import request from "@utils/request";

export const reqGetCartList = () => {
  return request({
    methods: "GET",
    url: `/cart/cartList`,
  });
};

//添加或者减少购物车商品数量
export const reqUpdateCartCount = (skuId, skuNum) => {
  return request({
    method: "POST",
    url: `/cart/addToCart/${skuId}/${skuNum}`,
  });
};

//切换选中的商品状态
export const reqUpdateCartCheck = (skuId, isChecked) => {
  return request({
    method: "GET",
    url: `/cart/checkCart/${skuId}/${isChecked}`,
  });
};

//删除商品
export const reqDelCart = (skuId) => {
  return request({
    method: "DELETE",
    url: `/cart/deleteCart/${skuId}`,
  });
};
