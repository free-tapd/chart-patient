<template>
  <div class="system-message vg">
    <div class="message-item">
      <p>2017-08-18 10:45</p>
      <div class="message-inner">
        <p>退款提醒</p>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum debitis aut fuga earum nostrum dolor
          dolore odio. Expedita aut veritatis nihil! Cupiditate in beatae maiores magni facere debitis quos
          exercitationem!</span>
        <div class="message-detail vux-1px-t">
          <p>点击查看</p>
          <span class="iconfont icon-right" style="color:#B3B3B3;"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {

  }

</script>
<style lang="less" scoped>
  .system-message {
      &::before{
          display: table;
          content: "";
      }
    >.message-item {
        margin-top: 50px;
        text-align: center;

      >p {
          display: inline-block;
        background: rgba(230, 230, 230, 1);
        border-radius: 4px;
        font-size: 20px;
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        color: rgba(141, 143, 153, 1);
        text-align: center;
        margin-bottom: 35px;
      }

      >.message-inner {
        margin: 0 auto;
        width: 700px-50;
        // height: 356px;
        background: rgba(255, 255, 255, 1);
        // box-shadow: 0px 1px 2px 0px rgba(230, 230, 230, 0.61);s
        border-radius: 4px;
        padding: 0 25px;

        >p {
          padding: 30px 0;
          text-align: left;
          font-size: 34px;
          font-family: PingFang-SC-Bold;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          line-height: 44px;
        }

        >span {
          display: inline-block;
          padding: 10px 0;
          padding-bottom: 30px;
          text-indent: 4px;
          font-size: 28px;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 44px;
        }

        >.message-detail {
          padding: 20px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;

          >p {
            font-size: 28px;
            font-family: PingFang-SC-Regular;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 44px;
          }
        }
      }
    }
  }

</style>
