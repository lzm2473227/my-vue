<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-if="!$route.meta.isfooterShow"></Footer>
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


