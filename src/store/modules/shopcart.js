import {
  reqGetCartList,
  reqUpdateCartCount,
  reqUpdateCartCheck,
} from "@api/shopcart";

export default {
//   namespaced: true,
  state: {
    cartList: [], //所有购物车数据
  },

  getters: {},
  actions: {
    async getCartList({ commit }) {
      const cartList = await reqGetCartList();
      //1 手动更新vuex的数据    这样页面就会重新渲染
      //2 重新请求所有的购物车数据
      commit("GET_CART_LIST", cartList);
    },

    // actions只能接受外面一个参数，（a，b）b这样actions函数是接受不到的
    // 得写成对象的格式({a,b})
    async updateCartCount({ commit }, { skuId, skuNum }) {
      await reqUpdateCartCount(skuId, skuNum);
      commit("UPDATE_CART_COUNT", { skuId, skuNum });
    },

    async updateCartCheck({ commit }, { skuId, isChecked }) {
      // 发送请求   更新服务器数据
      await reqUpdateCartCheck(skuId, isChecked);
      console.log(commit);
    },
  },
  mutations: {
    GET_CART_LIST(state, cartList) {
      state.cartList = cartList;
    },
    //购物车数量修改
    UPDATE_CART_COUNT(state, { skuId, skuNum }) {
      state.cartList = state.cartList.map((cart) => {
        if (cart.skuId === skuId) {
          cart.skuNum += skuNum;
        }
        return cart;
      });
    },
  },
};
