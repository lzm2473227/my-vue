<template>
  <div class="login-wrap">
    <div class="login">
      <div class="login-from">
        <ul>
          <li><a href="##">扫描登录</a></li>
          <li><a class="a-active" href="##">账户登录</a></li>
        </ul>
        <div class="login-content">
          <form action="##">
            <div class="input-text">
              <input type="text" placeholder="手机号" />
            </div>

            <div class="input-text">
              <input type="text" placeholder="请输入密码" />
            </div>
            <div class="setting">
              <label class="checkbox">
                <input type="checkbox" checked="checked" />
                自动登入</label
              >
              <span class="forget">忘记密码？</span>
            </div>
            <button class="btn"><router-link to="/">登入</router-link></button>
          </form>
          <div class="call">
            <router-link to="/register" class="register">立即注册</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqLogin } from "@api/user";
export default {
  name: "Login",
  methods: {
      login(){
          reqLogin('13700000000','111111')
          .then((res)=>{
              console.log('res',res);
          })
          .catch((err)=>{
              console.log('err',err);
          })
      }
  },
};
</script>

<style lang="less" scoped>
.login-wrap {
  height: 487px;
  background-color: #e93854;
}
.login {
  width: 1200px;
  height: 487px;
  margin: 0 auto;
  background: url(./images/loginbg.bc528304.png) no-repeat;
}
.login-from {
  width: 420px;
  height: 406px;
  box-sizing: border-box;
  background: #fff;
  float: right;
  top: 45px;
  position: relative;
  padding: 20px;
  ul {
    overflow: hidden;
  }
  li {
    width: 50%;
    float: left;
    text-align: center;
    a {
      width: 100%;
      display: block;
      height: 50px;
      line-height: 50px;
      font-size: 20px;
      font-weight: 700;
      color: #333;
      border: 1px solid #ddd;
      box-sizing: border-box;
      text-decoration: none;
    }
    .a-active {
      border-bottom: none;
      border-top-color: #eb600f;
      color: #ee720c;
    }
  }
}
.login-content {
  width: 380px;
  height: 316px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-top: none;
  padding: 18px;
}
.form {
  margin: 15px 0 18px 0;
  font-size: 12px;
  line-height: 18px;
}
.input-text {
  overflow: hidden;
  margin-bottom: 22px;
  position: relative;
  input {
    width: 302px;
    height: 32px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    // border-left: none;
    float: left;
    padding-top: 6px;
    padding-bottom: 6px;
    font-size: 14px;
    line-height: 22px;
    padding-right: 8px;
    padding-left: 8px;
    border-radius: 0 2px 2px 0;
    outline: none;
  }
}
.forget {
  float: right;
}
button {
  background-color: #e1251b;
  padding: 6px;
  border-radius: 0;
  font-size: 16px;
  border: 1px solid #e1251b;
  color: #fff;
  width: 100%;
  height: 36px;
  margin-top: 25px;
  outline: none;
}
.call {
  margin-top: 30px;
  overflow: hidden;
}
.register {
  float: right;
  font-size: 15px;
  line-height: 38px;
}
</style>
