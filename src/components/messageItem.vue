<template>
  <div class="message-box" :class="{'defaultMargin':isMar,'vux-1px-b':!isMar}">
    <div class="message-left">
      <img src="../assets/images/inquiry/bell.png" alt="">
      <div class="message-text">
        <p> <span>系统消息</span> <i v-if="!isSystem">图文</i> </p>
        <span>您有一笔退款消息</span>
      </div>
    </div>
    <div class="message-right">
      <span class="date">2016-05-04</span>
      <!-- <span class="date-num"></span> -->
       <badge text="8"></badge>
    </div>
  </div>
</template>
<script>
  import {
    type
  } from 'os';
  import {
    Badge
  } from 'vux'
  export default {
    props: {
      isMar: {
        type: Boolean,
        default: false
      },
      isSystem: {
        type: Boolean,
        default: false
      }
    },
    components: {
      Badge
    }
  }

</script>
<style lang="less" scoped>
  .defaultMargin {
    margin-bottom: 15px;
  }

  .message-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    padding: 30px;

    >.message-left {
      display: flex;
      align-items: center;

      >img {
        width: 90px;
        height: 90px;
        display: block;
        border-radius: 50%;
        margin-right: 29px;
      }

      >.message-text {
        color: #333;
        font-size: 34px;

        >p {
          display: flex;
          align-items: center;

          >span {
            font-weight: bold;
          }


          >i {
            width: 68px;
            height: 34px;
            border: 1px solid #5CB3F1;
            border-radius: 5px;
            font-style: normal;
            display: block;
            line-height: 34px;
            font-size: 22px;
            margin-left: 24px;
            text-align: center;
            color: #5CB3F1;

          }
        }

        >span {
          font-size: 28px;
          color: #8F8F8F;
        }
      }
    }

    >.message-right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-start;

      >.date {
        font-size: 24px;
        color: #9F9F9F;
        margin-bottom: 20px;
      }

      >.date-num {
        border-radius: 50%;
        background-color: #FF5743;
        color: #fff;
        width: 16*2px;
        height: 16*2px;
        line-height: 32px;
        text-align: center;
        display: inline-block;
        margin-top: 25px;
      }
    }
  }

</style>
