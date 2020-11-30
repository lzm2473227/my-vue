import request from "@utils/request";
import mockRequest from "@utils/mockRequest";

export const reqGetBaseCatgoryList = () => {
  return request({
    method: "GET",
    url: "/product/getBaseCategoryList",
  });
};

export const reqGetBanners = () => {
  return mockRequest({
    method: "GET",
    url: "/banners",
  });
};

export const reqGetFloors = () => {
  return mockRequest({
    method: "GET",
    url: "/floors",
  });
};
