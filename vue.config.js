const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        //配置路径别名
        "@view": path.resolve(__dirname, "src/views"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@store": path.resolve(__dirname, "src/store"),
        "@comps": path.resolve(__dirname, "src/comps"),
        "@view": path.resolve(__dirname, "src/views"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@api": path.resolve(__dirname, "src/api"),
      },
    },
  },

  devServer: {
    proxy: {
      "/api": {
        target: "http://182.92.128.115",
        changeOrigin: true,  //允许跨域
        
        // pathRewrite: { // 重写路径
        //   "^/api": "",
        // },
      },
    },
  },
};
