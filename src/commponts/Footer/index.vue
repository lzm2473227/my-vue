<template>
  <footer class="footer">
    <div class="footer-container">
      <ul class="footer-list">
        <li class="footer-item">
          <h5>购物指南</h5>
          <ul class="footer-item-con">
            <li>购物流程</li>
            <li>会员介绍</li>
            <li>生活旅行/团购</li>
            <li>常见问题</li>
            <li>购物指南</li>
          </ul>
        </li>
        <li class="footer-item">
          <h5>配送方式</h5>
          <ul class="footer-item-con">
            <li>上门自提</li>
            <li>211限时达</li>
            <li>配送服务查询</li>
            <li>配送费收取标准</li>
            <li>海外配送</li>
          </ul>
        </li>
        <li class="footer-item">
          <h5>支付方式</h5>
          <ul class="footer-item-con">
            <li>货到付款</li>
            <li>在线支付</li>
            <li>分期付款</li>
            <li>邮局汇款</li>
            <li>公司转账</li>
          </ul>
        </li>
        <li class="footer-item">
          <h5>售后服务</h5>
          <ul class="footer-item-con">
            <li>售后政策</li>
            <li>价格保护</li>
            <li>退款说明</li>
            <li>返修/退换货</li>
            <li>购物指南</li>
          </ul>
        </li>
        <li class="footer-item">
          <h5>特色服务</h5>
          <ul class="footer-item-con">
            <li>夺宝岛</li>
            <li>DIY装机</li>
            <li>延保服务</li>
            <li>尚品汇E卡</li>
            <li>尚品汇通信</li>
          </ul>
        </li>
        <li>
          <h5>帮助中心</h5>
          <img src="./images/wx_cz.jpg" alt="" />
        </li>
      </ul>
      <div class="copyright">
        <ul>
          <li>关于我们</li>
          <li>联系我们</li>
          <li>联系客服</li>
          <li>商家入驻</li>
          <li>营销中心</li>
          <li>风险警示</li>
          <li>京东公益</li>
          <li>手机京东</li>
          <li>京东社区</li>
        </ul>
        <div>地址：北京市昌平区宏福科技园综合楼6层</div>
        <div>京ICP备19006430号</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="less" scoped>
.footer {
  background-color: #eaeaea;
}
.footer-container {
  width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}
.footer-list {
  padding: 20px;
  border-bottom: 1px solid #e4e1e1;
  border-top: 1px solid #e4e1e1;
  overflow: hidden;
  padding-left: 40px;
  display: flex;
}
.footer-item {
  width: 16.6666667%;
  h5 {
    font-size: 14px;
  }
}
.footer-item-con {
  line-height: 18px;
}
.copyright {
  padding: 20px;
  ul {
    text-align: center;
    li + li{
         border-left: 1px solid #666;
    }
    li{
      display: inline;
      width: 1px;
      height: 13px;
      padding: 0 10px;
    }
  }
  div {
    margin: 10px 0;
    text-align: center;
  }
}
</style>
