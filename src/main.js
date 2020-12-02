// @ts-nocheck
import Vue from "vue";
import App from "./App";

import router from "./router";
import store from "./store";

// 引入公共资源
import "./styles/reset.css";

import "./plugins/element.js";

//引入mockServer，加载其中代码，加载就会启动mock服务器，从而拦截相应的请求
import './mock/mockServer'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    beforeCreate(){
        Vue.prototype.$bus = this
    },
  render: (h) => h(App),
  // 应用router
  router,
  store,
}).$mount("#app");
