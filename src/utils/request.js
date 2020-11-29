import axios from "axios";
import { Message } from "element-ui";  //错误按钮提示
import NProgress from "nprogress";    //进度条的包
import "nprogress/nprogress.css";
const instance = axios.create({
  baseURL: "/api",
  headers: {},
});

//设置请求拦截器
instance.interceptors.request.use((config) => {
  // 开始进度条
  NProgress.start();
  return config;
});

// 设置响应请求器
instance.interceptors.response.use(
  (response) => {
    NProgress.done();   //结束进度条

    if (response.data.code === 200) {
      return response.data.data;
    }
    const { message } = response.data;
    Message.error(message);
    return Promise.reject(message);
  },
  (error) => {
    NProgress.done();
    const message = error.message || "网络出错";
    Message.error(message);
    return Promise.reject(message);
  }
);

export default instance;
