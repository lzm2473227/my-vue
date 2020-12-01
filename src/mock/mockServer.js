import Mock from "mockjs";
import banners from "./rbanners.json";
import floors from "./rfloors.json";

//一旦运行 就会拦截get请求
Mock.mock("/mock/banners", "get", {
  code: 200,
  "data|4": banners,
});

Mock.mock("/mock/floors", "get", {
  code: 200,
  "data|2": floors,
});


// 这个文件相当于服务器
