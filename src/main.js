// @ts-nocheck
import Vue from "vue";
import App from "./App";
import router from "./router";

import './styles/reset.css'
import './plugins/element.js'

Vue.config.productionTip = false;
console.log(router);
/* eslint-disable no-new */
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
