<template>
  <div class="message-box" :class="{'defaultMargin':isMar,'vux-1px-b':!isMar}">
    <div class="message-left">
      <div class="img-box">
        <figure>
          <img :src="orderItem.doctorImg" alt="" @error="setErrorImg">
        </figure>

        <!-- <img src="../assets/images/default-doctor.png" alt="" v-else> -->
      </div>
      <div class="message-text">
        <div class="line">
          <p> <span>{{orderItem.doctorName}}</span>
            <i v-if="orderItem.msgType==1">文本</i>
            <i v-if="orderItem.msgType==4">图片</i>
          </p>
          <span class="date">{{orderItem.createTime}}</span>
        </div>
        <div class="line2">
          <span class="ellipsis cco">{{orderItem.content}}</span>
          <badge :text="orderItem.wdStatus" v-if="orderItem.wdStatus"></badge>
        </div>

      </div>
    </div>
    <div class="message-right">

      <!-- <span class="date-num"></span> -->

    </div>
  </div>
</template>
<script>
  import defaultImg from "@/assets/images/default-doctor.png"
  import {
    type
  } from 'os';
  import {
    Badge
  } from 'vux'
  export default {

    props: {
      orderItem: {
        type: Object,
        default () {
          return {}
        }
      },
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
    },
    methods: {
      // 错误图片处理
      setErrorImg(e) {
        console.log(e);
        //  console.log(e.target.src);
        e.target.src = defaultImg


      },
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
      width: 100%;
      display: flex;
      align-items: center;

      >.img-box {
        flex: 1;

        >figure {
          max-width: 90px;
          height: 90px;
          display: block;
          border-radius: 50%;
          margin-right: 29px;

          >img {
            max-width: 100%;
            height: 100%;
            display: block;
            border-radius: 50%;

          }
        }

      }

      >img {
        min-width: 90px;
        height: 90px;
        display: block;
        border-radius: 50%;
        margin-right: 29px;
      }

      >.message-text {
        flex: 5;
        color: #333;
        font-size: 34px;

        >.line {
          display: flex;
          align-items: center;
          justify-content: space-between;

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

          >.date {
            font-size: 24px;
            color: #9F9F9F;
            margin-bottom: 20px;
          }
        }

        >.line2 {
          display: flex;
          align-items: center;
          justify-content: space-between;

          >span.cco {
            font-size: 28px;
            color: #8F8F8F;
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
    }


  }

</style>
