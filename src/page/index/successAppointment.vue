<template>
  <div class="success-pay">
    <!-- 支付成功 -->

    <div class="bg flex-c funbg">
      <!-- 支付成功 -->
      <!-- <img src="../../assets/images/bg_ico_bg@2x.png" alt> -->
      <!-- 支付失败 -->
      <img src="../../assets/images/bg_ico_bg2@2x.png" alt>
      <div class="pay-result flex-c">
        <i class="funbg err-pay"></i>
        <!-- <i class="funbg err-pay"></i>/ -->
        <!-- <span>恭喜您，预约成功！</span> -->
        <span>预约失败</span>
      </div>

      <!-- 失败 -->
      <!-- <span class="c">充值失败</span> -->
    </div>
    <!-- v-if="预约成功 -->
    <div class="pay-message">
      <p>
        <span class="title">就诊取号：</span>
        <span class="inner">就诊当天请携带就诊卡，无就诊就诊当天请携带就诊卡，无就诊就诊当天请携带就诊卡</span>
      </p>
      <p>
        <span class="title">取消预约：</span>
        <span class="inner">就诊当天请携带就诊卡，无就诊就诊当天请携带就诊卡，无就诊就诊当天请携带就诊卡</span>
      </p>
      <p>
        <span class="title">在线预约：</span>
        <span class="inner">通过点击“我的”，选择“我的预约”取消预约</span>
      </p>
      <p>
        <span class="title">电话预约：</span>
        <span class="inner">请致电12580-6取消预约</span>
      </p>
    </div>
    <!-- 否则失败 -->
    <div class="err-message">
      <p class="err-title">充值失败</p>
      <p>就诊当天请携带就诊卡，无就诊就诊当天请携带就诊卡，无就诊就诊当天请携带就诊卡</p>
    </div>
    <!-- 预约成功 -->
    <!-- <div class="appoint-btn flex-r">
      <span>查看预约</span>
      <span>预约陪诊</span>
    </div> -->
    <!-- 预约失败 -->
    <div class="appoint-btn flex-r fail-appoint">
      <span>查看订单</span>
      <span>从新支付</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  beforeRouteEnter(to, from, next) {
    /**
     * @ 支付完成回调函数需要返回充值状态参数
     * @ 根据参数判断 title or 显示 success or err 的界面
     * @ 的方法
     */
    document.getElementById("QF").innerHTML = "预约成功";
    next();
  }
};
</script>
<style lang="less" scoped>
.success-pay {
  //   background-image: url("../../assets/images/bg_ico_bg@2x.png");
  //   height: 480px;
  position: relative;
  background-color: #fff;
  padding-bottom: 45px+88;
  > .bg {
    width: 100%;
    height: 480px;
    position: relative;
    // align-items: center;
    // justify-content: center;
    > img {
      max-width: 100%;
      height: 100%;
      display: block;
    }
    > .pay-result {
      position: absolute;
      left: 0;
      right: 0;
      top: 25%;
      height: 50%;
      align-items: center;
      justify-content: center;
      > i {
        //   position: absolute;
        // left: 50%;
        // top: 50%;
        // margin-left: -97px/2;
        // margin-top: -97px/2;
        border-radius: 50%;

        width: 97px;
        height: 97px;
        display: block;
      }
      > span {
        margin-top: 37px;
        font-size: 30px;
        font-family: PingFangSC-Light;
        font-weight: 300;
        color: rgba(255, 255, 255, 0.6);
      }
    }
  }
  > .pay-message {
    padding: 30px;
    font-size: 34px;
    color: #333;
    > p {
      display: flex;
      flex-direction: column;
      > .title {
        color: #558eff;
        font-size: 30px;
        font-weight: bold;
      }
      > .inner {
        font-size: 28px;
        color: #666;
      }
    }
    > p:not(:first-child) {
      margin-top: 15px;
    }
  }
  > .err-message {
    padding: 30px;
    font-size: 28px;
    color: #666;
    > .err-title {
      font-size: 30px;
      color: #ffa900;
      font-weight: bold;
    }
  }
}
.appoint-btn {
  position: fixed;
  left: 50%;
  margin-left: -592px/2;
  bottom: 45px;
  width: 592px;
  height: 88px;
  background: rgba(0, 160, 234, 1);
  border-radius: 44px;
  > span {
    flex: 1;
    color: #fff;
    font-size: 34px;
    text-align: center;
    line-height: 88px;
  }
  > span:first-child {
    border-right: 1px solid #fff;
  }
}
.fail-appoint{
  background-color: #FBAA0C;
}
.succ-bg {
  background-image: url("../../assets/images/bg_ico_bg@2x.png");
}
.err-bg {
  background-image: url("../../assets/images/bg_ico_bg2@2x.png");
}
.succ-pay {
  background-image: url("../../assets/images/bg_ico_Success@2x.png");
}
.err-pay {
  background-image: url("../../assets/images/bg_ico_lose@2x.png");
}
</style>


