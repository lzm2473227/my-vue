import axios from "axios";
import { Message } from "element-ui"; //错误按钮提示
import getUserTempId from "@utils/getUserTempld";
import NProgress from "nprogress"; //进度条的包
import "nprogress/nprogress.css";
import store from "../store";

// 文件加载就只加载一次，拿到外面就触发一次，不会像拦截器里每次都会触发
const userTempId = getUserTempId();
const prefix_url =
  process.env.NODE_ENV === "development" ? "/" : "http://182.92.128.115/";

const instance = axios.create({
  baseURL: `${prefix_url}api`, // 公共的基础路径
  headers: {},
});

//设置请求拦截器
instance.interceptors.request.use((config) => {
  // 开始进度条   请求拦截器触发的时候开始进度条
  NProgress.start();

  const token = store.state.user.token;
  if (token) {
    config.headers.token = token;
  }

  config.headers.userTempId = userTempId;

  return config;
});

// 设置响应请求器
instance.interceptors.response.use(
  (response) => {
    NProgress.done(); //结束进度条   响应拦截器触发的时候结束进度条

    if (response.data.code === 200) {
      //响应成功不代表能拿到数据
      return response.data.data; //成功拿到数据    是data.data
    }
    const { message } = response.data;
    Message.error(message);
    return Promise.reject(message); //失败返回失败原因
  },
  (error) => {
    NProgress.done(); //结束进度条
    const message = error.message || "网络出错";
    Message.error(message);
    return Promise.reject(message);
  }
);

export default instance;
