import { reqGetBanners, reqGetBaseCatgoryList, reqGetFloors } from "@api/home";

export default {
  state: {
    categoryList: [],
    banners: [], //首页轮播图数据
    floors: [], //  首页楼层数据
  },
  actions: {
    async getCategoryList({ commit }) {
      const categoryList = await reqGetBaseCatgoryList();
      commit("GET_CATEGORY_LIST", categoryList);
    },

    async getBanners({ commit }) {
      const banners = await reqGetBanners();
      commit("GET_BANNERS", banners);
    },

    async getFloors({ commit }) {
      const banners = await reqGetFloors();
      commit("GET_FLLORS", banners);
    },
  },
  mutations: {
    GET_CATEGORY_LIST(state, categoryList) {
      state.categoryList = categoryList;
    },
    GET_BANNERS(state, banners) {
      state.banners = banners;
    },
    GET_FLLORS(state, floors) {
      state.floors = floors;
    },
  },
  getters: {},
};
