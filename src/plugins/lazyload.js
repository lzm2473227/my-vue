
import Vue from "vue";
import VueLazyload from "vue-lazyload";
import loading from "../assets/imgs/loading.gif";

Vue.use(VueLazyload, {
	// loading: "../assets/imgs/loading.gif", // 不行，不能当做图片解析
	loading: loading,
});
