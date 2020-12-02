<template>
  <header class="header">
    <div class="header-top">
      <div class="header-container">
        <div class="login-list">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <router-link to="/login">登录</router-link>
            <router-link to="/register" class="register">免费注册</router-link>
          </p>
        </div>
        <div class="type-list">
          <a href="#">我的订单</a>
          <a href="#">我的购物车</a>
          <a href="#">我的尚品汇</a>
          <a href="#">尚品汇会员</a>
          <a href="#">企业采购</a>
          <a href="#">关注尚品汇</a>
          <a href="#">合作招商</a>
          <a href="#">商家后台</a>
        </div>
      </div>
    </div>

    <div class="header-bottom">
      <h1 class="logo">
        <router-link to="/">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="header-search">
        <form action="" class="search-form">
          <input
            type="text"
            id="autocomplete"
            class="sui-btn btn-xlarge btn-danger"
            v-model="searchText"
          />
          <button
            @click="search"
            class="sui-btn btn-xlarge btn-danger"
            type="button"
          >
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    search() {
      const { searchText } = this;
      const location = {
        name: "search",
      };

      if (searchText) {
        location.params = {
          searchText,
        };
      }
      const { categoryName } = this.$route.query;
      if (categoryName) {
        location.query = this.$route.query;
      }
      if (this.$route.name === "search") {
        this.$router.replace(location);
      } else {
        this.$router.push(location);
      }
    },
  },
  mounted() {
    this.$bus.$on("claerkeyword", () => {
      this.searchText = "";
    });
  },
};
</script>

<style lang="less" scoped>
.header-top {
  background-color: #eaeaea;
  height: 30px;
  line-height: 30px;
}
.header-container {
  display: flex;
  width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
}
.login-list {
  display: flex;
}

.login-list p {
  margin-right: 10px;
}
.type-list a + a {
  border-left: 1px solid #b3aeae;
}
.type-list a {
  padding: 0 10px;
}
.register {
  border-left: 1px solid #b3aeae;
  padding: 0 5px;
  margin-left: 5px;
}
form {
  display: flex;
}
.header-bottom {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
h1 {
  font-size: 18px;
}
.header-search {
  margin-top: 35px;
  input {
    box-sizing: border-box;
    width: 490px;
    height: 32px;
    padding: 0px 4px;
    border: 2px solid #ea4a36;
  }
  button {
    height: 32px;
    width: 68px;
    background-color: #ea4a36;
    border: none;
    color: #fff;
    cursor: pointer;
  }
}
</style>
