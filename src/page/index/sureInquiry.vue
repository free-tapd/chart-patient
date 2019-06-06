<template>
  <div class="sure-inquiry vg">
    <!-- 类型 -->
    <div class="inquiry-methods">
      <div class="title flex-r">
        <span> 订单类型:</span>
        <p>
          视屏问诊
          <span style="color:#FF5345;">(￥10.00)</span>
        </p>
      </div>
      <p class="inquiry-status">待接诊</p>
    </div>
    <!-- 就诊人 -->
    <div class="inquiry-people">
      <div class="doc-msg vux-1px-b">
        <div class="img-box">
          <figure>
            <img src="../../assets/images/inquiry/head.jpg" alt="">
          </figure>
          <div class="doc-name">
            <p>赵秀敏</p>
            <p>胸外科 主任医师</p>
            <p>河北医科大学第二医院</p>
          </div>
        </div>
        <span class="date">2019-5-21 14:32</span>
      </div>
    </div>
    <!-- 病状描述 -->
    <div class="sick-description">
      <p class="sick-title"> 症状描述</p>
      <p class="sick-content">您好，我想咨询一下。怀孕了需要补充什么营养吗？谢谢</p>
      <div class="sick-list vux-1px-b">
        <figure>
          <img src="../../assets/images/inquiry/head.jpg" alt="">
        </figure>
      </div>
      <div class="see-sick">
        <p>点击查看 <span style="color:#2D9FF1">病状报告</span></p>
      </div>
    </div>
    <div class="wait-people">
      <p>
        前方有<span style="color:#FF5345">5人</span> 排队，请耐心等待
      </p>
    </div>
    <!-- 按钮 -->
    <div class="sick-btn-bg">

      <div class="sick-btn">取消</div>
    </div>
  </div>
</template>
<script>
  export default {

  }

</script>

<style lang="less" scoped>
  .inquiry-methods {
    padding: 30px;
    background-color: #fff;
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    >.title {
      font-size: 28px;
      font-weight: 500;
      color: #333;
      line-height: 56px;

      >span {
        color: #666;
      }
    }

    >.inquiry-status {
      font-size: 28px;
      font-weight: bold;
      color: rgba(255, 83, 69, 1);
      line-height: 65px;
    }
  }

  .inquiry-people {
    background-color: #fff;
    padding: 0 30px;

    >.doc-msg {
      padding: 30px 0;
      display: flex;
      justify-content: space-between;

      >.img-box {
        display: flex;

        >figure {
          width: 90px;
          height: 90px;
          display: block;

          >img {
            width: 100%;
            height: 100%;
            display: block;
            border-radius: 50%;
          }
        }

        >.doc-name {
          margin-left: 15px;

          >p:first-child {
            font-weight: bold;
          }

          font-size:28px;
          font-weight:400;
          color:rgba(77, 77, 77, 1);
          line-height:40px;
        }
      }

      >.date {
        font-size: 28px;
        font-weight: 400;
        color: rgba(77, 77, 77, 1);
        line-height: 65px;
      }
    }
  }

  .sick-description {
    padding: 30px;
    background-color: #fff;

    >.sick-title {
      font-size: 28px;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 56px;
    }

    >.sick-content {
      font-size: 28px;
      font-weight: 500;
      color: rgba(102, 102, 102, 1);
      line-height: 44px;
    }

    >.sick-list {
      // padding: 30px 0; 
      padding-bottom: 30px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      >figure {
        width: 138px;
        height: 138px;
        display: block;

        >img {
          width: 100%;
          height: 100%;
          display: block;
          border-radius: 5px;

        }
      }

      >figure:not(:first-child) {
        margin-left: 9px;
      }
    }

    >.see-sick {
      font-size: 26px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 56px;
    }

  }

  .wait-people {
    position: fixed;
    width: 750px;
    height: 100px;
    background: rgba(255, 250, 220, 1);
    font-size: 26px;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 100px;
    text-align: center;
    bottom: 124px;
    left: 0;
    right: 0;
  }

  .sick-btn-bg {
    width: 750px;
    height: 124px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px -1px 0px 0px rgba(230, 230, 230, 1);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    >.sick-btn {
      width: 689px;
      height: 88px;
      background: #FF5345;
      border-radius: 10px;
      font-size: 34px;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 88px;
      text-align: center;
    }
  }

</style>
