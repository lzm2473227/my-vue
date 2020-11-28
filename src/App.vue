<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <!-- 希望在footer看不到公共的组件，在路由配置meta:true,不想看到取反就行 -->
    <!-- <Footer v-if="!$route.meta.isfooterShow"></Footer> -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './commponts/Header'
import Footer from './commponts/Footer'
export default {
  name: "App",
  components: {
    Footer,
    Header,
  },
};
</script>

<style lang="less" scoped>
</style>


