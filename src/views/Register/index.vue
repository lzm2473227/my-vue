<template>
  <div class="register">
    <h3>
      注册新用户
      <span class="goto"
        >我有账号，去 <router-link to="/login">登陆</router-link></span
      >
    </h3>
    <div class="register-content">
      <label>手机号:</label>
      <input type="text" placeholder="请输入你的手机号" name="phone" />
    </div>
    <div class="register-content">
      <label>验证码:</label>
      <input type="text" placeholder="请输入验证码" name="code" class="codes"/>
      <img class="verification" src="/api/user/passport/code" alt="code">
    </div>
    <div class="register-content">
      <label>登录密码:</label>
      <input type="text" placeholder="请输入你的登入密码" name="phone" />
    </div>
    <div class="register-content">
      <label>确认密码:</label>
      <input type="text" placeholder="请输入确定密码" name="phone" />
    </div>
    <div class="protocol">
      <input type="checkbox" name="协议" />
      <span>同意协议并注册《尚品汇用户协议》</span>
    </div>
    <div class="btn">
      <button>完成按钮</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>

<style lang="less" scoped>
.register {
  width: 1200px;
  height: 445px;
  border: 1px solid #dfdfdf;
  margin: 0 auto;
  div:nth-of-type(1) {
    margin-top: 40px;
  }
  h3 {
    background: #ececec;
    padding: 6px 15px;
    border-bottom: 1px solid #dfdfdf;
    font-size: 20.04px;
    line-height: 30.06px;
    display: flex;
    justify-content: space-between;
  }
}
.goto a {
  color: #e1251b;
}
.register-content {
  display: flex;
  justify-content: center;
  margin-bottom: 18px;
  position: relative;
}
label {
  font-size: 14px;
  height: 18px;
  width: 76px;
  text-align: right;
  line-height: 34px;
}
.register-content input {
  width: 270px;
  height: 38px;
  padding-left: 8px;
  box-sizing: border-box;
  margin-left: 5px;
  outline: none;
  border: 1px solid #999;
}
.protocol {
  display: flex;
  justify-content: center;
}
.btn {
  display: flex;
  justify-content: center;
  margin: 17px 0 0 55px;
  button {
    width: 270px;
    height: 36px;
    background: #e1251b;
    color: #fff !important;
    font-size: 16px;
  }
}
.verification{
    width: 60px;
    height: 25px;
    position: absolute;
    left: 776px;
}

</style>
