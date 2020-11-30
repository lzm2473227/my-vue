import { reqGetBaseCatgoryList } from "@api/home";

export default {
  state: {
    categoryList: [],
  },
  actions: {
    async getCategoryList({ commit }) {
      const categoryList = await reqGetBaseCatgoryList();
    //   this.categoryList = categoryList.slice(0,10);
      commit("GET_CATEGORY_LIST", categoryList);
    },
  },
  mutations: {
    GET_CATEGORY_LIST(state, categoryList) {
      state.categoryList = categoryList;
    },
  },
  getters: {},
};
