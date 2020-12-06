import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import Search from "../views/Search";
import Detail from "../views/Detail";
import AddCartSuccess from "../views/AddCartSuccess";
import ShopCart from "../views/ShopCart";

const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(location, onComplete, onAbout) {
  if (onComplete && onAbout) {
    return push.call(this, location, onComplete, onAbout);
  }
  return push.call(this, location, onComplete, () => {});
};
VueRouter.prototype.replace = function(location, onComplete, onAbout) {
  if (onComplete && onAbout) {
    return replace.call(this, location, onComplete, onAbout);
  }
  return replace.call(this, location, onComplete, () => {});
};

// console.log(VueRouter.prototype);

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
      meta: {
        isfooterShow: true,
      },
    },
    {
      path: "/register",
      component: Register,
      meta: {
        isfooterShow: true,
      },
    },
    {
      name: "search",
      path: "/search/:searchText?",
      component: Search,
    },
    {
      name: "detail",
      path: "/detail/:id",
      component: Detail,
    },
    {
      name: "shopcart",
      path: "/shopcart",
      component: ShopCart,
    },
    {
      name: "addcartsuccess",
      path: "/addcartsuccess",
      component: AddCartSuccess,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
