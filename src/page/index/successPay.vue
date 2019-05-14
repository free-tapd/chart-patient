<template>
  <div class="success-pay">
    <!-- 支付成功 -->

    <div class="bg flex-c funbg">
      <!-- 支付成功 -->
      <!-- <img src="../../assets/images/bg_ico_bg@2x.png" alt> -->
      <!-- 支付失败 -->
      <img src="../../assets/images/bg_ico_bg2@2x.png" alt="">
      <div class="pay-result flex-c">
        <i class="funbg succ-pay"></i>
        <!-- <i class="funbg err-pay"></i>/ -->
        <!-- <span>支付成功</span> -->
        <span> 支付失败</span>
      </div>

      <!-- 失败 -->
      <!-- <span class="c">充值失败</span> -->
    </div>
    <!-- v-if="充值成功 -->
    <div class="pay-message">
      <p>
        <span>医院名称：</span>
        <span>河北医科大学第二医院</span>
      </p>
      <p>
        <span>订 单 号：</span>
        <span>31224122141211</span>
      </p>
      <p>
        <span>充值时间：</span>
        <span>2017-05-12 8：00</span>
      </p>
      <p>
        <span>用户姓名：</span>
        <span>李素贞</span>
      </p>
      <p>
        <span>就诊卡号：</span>
        <span>A4545315453141</span>
      </p>
      <p>
        <span>充值金额：</span>
        <span style="color:red">258666</span>
      </p>
    </div>
    <!-- 否则失败 -->
    <div class="err-message">
      <p class="err-title">充值失败</p>
      <p>xxxxxxxxx</p>
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
    document.getElementById("QF").innerHTML = "充值成功";
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
  }
  > .err-message {
    padding: 30px;
    > .err-title {
      font-size: 30px;
      color: #ffa900;
      font-weight: bold;
    }
  }
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


