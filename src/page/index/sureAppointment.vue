<template>
  <div class="vg">
    <!-- <x-header :left-options="{backText: '',showBack: true}">预交费缴费</x-header> -->
    <div class="bg-top"></div>
    <!-- <div class="bg-bottom">
      <div class="bg-inner-box">
        
        <Xtab :tabArr="tabArr" :defaultColor="'#ccc'" :activeColor="'#fff'" :barColor="'#fff'" @getItem="getItem" />
      </div>

    </div>-->
    <div class="content">
      <!-- 引入组件 -->
      <sickCard :isCard="true" @addCardGo="addCardGo"/>

      <div class="visit-box" v-if="false">
        <div class="date-list">2017/07/21-2017/07/30</div>
        <div class="visit-list">
          <div
            class="flex-c visit-item vux-1px-b"
            v-for="v in 10"
            :key="v"
            @click="changeJump('/payRecordDetail',{})"
          >
            <!-- <span class="is-checked" v-if="isPay"></span> -->
            <div class="flex-r add-list">
              <div class="offices-name flex-c">
                <div class="off-list">
                  <p>今天 5:12</p>
                </div>
              </div>
              <div class="pay-money flex-c">
                <div class="money-num">+1000.00</div>
              </div>
            </div>
            <span class="off-date">收据号：12345678910234567891010</span>
          </div>
        </div>
      </div>
      <!-- 确认预约信息 -->
      <div class="appoint-message">
        <p class="hospital-title">河北医科大学第四医院</p>
        <ul class="message">
          <li>
            <span>就诊科室：</span>
            <span>消化科</span>
          </li>
          <li>
            <span>就诊医生：</span>
            <span>专家号</span>
          </li>
          <li>
            <span>就诊日期：</span>
            <span>2017-08-19 星期五</span>
          </li>
          <li>
            <span>就诊时间：</span>
            <span>08：00-08：14</span>
          </li>
          <li>
            <span>诊 察 费:</span>
            <span style="color:#FF0000">￥8.00</span>
          </li>
        </ul>
      </div>
      <!-- 注意事项 -->
      <div class="waring flex-r">
        <!-- <span class="waring-text"></span> -->
        请在
        <span style="color:#FF4747">30分钟</span>
        <span>内完成付款，否责挂号自动取消</span>
        <!-- <span class="waring-text"></span> <span>1、暂不支持医保支付
        </span>
        <span class="waring-text"></span> <span>2、请在 下午16：00前完成支付</span>
        <span class="waring-text"></span> <span>3、暂不支持在线缴纳检查费用-->
        <!-- </span> -->
      </div>
    </div>
    <!-- <div class="pay-btn-box vux-1px-t flex-r" v-show="isPay">
      <p class="pay-text"> <span>共:</span>
        
        <span>￥562.20</span></p>
      <div class="pay-btn">
          立即支付
      </div>
    </div>-->
    <div class="btn-fixed">
      <!-- <x-button  type="primary" style="border-radius:99px;width:95%;">立即支付 ￥8</x-button> -->
      <p @click="isClose=!isClose">立即支付 ￥8</p>
    </div>
    <!-- 余额不足 -->
    <!-- 弹窗 -->
    <div class="cover" v-show="isMoney">
      <div class="pay-loss flex-c">
        <p class="pay-loss-title">温馨提示</p>
        <p class="pay-loss-inner">就诊卡余额不足，先进行充值</p>
        <div class="pay-loss-btn flex-r">
          <span @click="isMoney=false">取消</span>
          <span>去充值</span>
        </div>
      </div>
    </div>

    <!-- 支付弹窗 -->
    <actionPay :isClose="isClose" @close="close" @payFor="payFor"/>
  </div>
</template>
<script>
import date from "@/components/date";
import payList from "@/components/payList";
import sickCard from "@/components/sickCard";
import Xtab from "@/components/tab";
import { XHeader, XButton } from "vux";
import actionPay from "@/components/actionPay";

export default {
  data() {
    return {
      tabArr: [
        {
          id: 1,
          title: "待支付"
        },
        {
          id: 2,
          title: "已支付"
        }
      ],
      isPay: true,
      isClose: false,
      isMoney:true
    };
  },

  components: {
    XHeader,
    date,
    payList,
    sickCard,
    Xtab,
    XButton,
    actionPay
  },
  methods: {
    getItem(item) {
      console.log(item);
      if (item.id == 1) {
        // 待支付
        this.isPay = true;
      } else {
        // 已支付
        this.isPay = false;
      }
    },
    addCardGo() {
      this.changeJump("./addSection", {});
    },
    close(msg) {
      this.isClose = msg;
      this.isClose = !this.isClose;
    },
    // 获取支付方式
    payFor(msg) {
      console.log(msg);
    }
  }
};
</script>
<style lang="css">
.vux-tab {
  background-color: transparent !important;
}
</style>
<style lang="less" scoped>
@color: #42a0e2;

.icons {
  width: 54px;
  height: 54px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #fff;
  font-size: 24px;
}

.bg-top {
  height: 115px;
  //   position: relative;
  background-color: @color;
}

.bg-bottom {
  background-color: @color;

  > .bg-inner-box {
    // padding-bottom: 30px;
  }
}

.pay-btn-box {
  justify-content: space-between;
  align-items: center;
  height: 119px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 19px;

  > .pay-text {
    font-size: 34px;

    > span:last-child {
      color: #ff8400;
      margin-left: 20px;
    }
  }

  > .pay-btn {
    width: 302px;
    height: 88px;
    font-size: 34px;
    color: #fff;
    background-color: @color;
    line-height: 88px;
    text-align: center;
    border-radius: 40px;
  }
}

.content {
  > .appoint-message {
    background-color: #fff;
    text-align: center;
    color: #333;
    font-size: 34px;
    > .hospital-title {
      padding: 31px 0;
      font-weight: bold;
    }
    > .message {
      padding: 30px;
      text-align: left;
      > li:not(:first-child) {
        margin-top: 31px;
      }
    }
  }
  > .switch-start-end {
    width: 95%;
    margin: 0 auto;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
    margin-top: 17px;
    background-color: #fff;

    > .padd {
      padding: 0 30px;

      > .switch-start {
        justify-content: space-between;
        align-items: center;
        padding: 22px 0;

        & .icon-start {
          background: rgba(59, 179, 255, 1);
          box-shadow: 0px 2px 4px 0px rgba(0, 156, 255, 0.5);
        }
      }

      > .switch-end {
        justify-content: space-between;
        align-items: center;
        padding: 22px 0;

        .icon-end {
          background: #ffa403;
          box-shadow: 0px 2px 4px 0px rgba(255, 145, 12, 0.5);
        }
      }

      > .icon-switch {
        color: #333;
        text-align: center;
      }

      & .switch-date {
        font-size: 30px;
        color: #333;
        margin-left: 15px;
      }
    }
  }

  > .waring {
    // align-items: center;
    // margin: 0 auto;
    width: 95%;
    padding: 30px;
    margin-top: 35px;
    font-size: 24px;
    color: #666;

    > .waring-text {
      margin-top: 9px;
      color: #ff2400;
      font-size: 50px;
      margin-right: 15px;
    }
  }

  > .visit-box {
    background-color: #fff;
    margin: 0 auto;
    margin-top: 15px;

    > .date-list {
      padding: 15px;
      color: #999;
      font-size: 24px;
      // width: 95%;
    }

    > .visit-list {
      // box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
      padding: 30px;
      // width: 95%;
      margin: 0 auto;
      justify-content: space-between;
      align-items: center;
      font-size: 30px;
      color: #000;

      & .off-date {
        font-size: 24px;
        color: #999;
      }

      & .add-list {
        justify-content: space-between;
        width: 100%;
      }

      & .offices-name {
        flex: 2;

        > .off-list {
          > p {
            font-size: 26px;
            color: #666;
          }

          font-size: 24px;
          color: #999;

          > .off-date {
            font-size: 24px;
            color: #999;
          }
        }

        > .off-list1 {
          font-size: 30px;
          color: #333;

          > .off-dete {
            color: #999;
            font-size: 24px;
          }
        }
      }

      & .pay-money {
        flex: 1;
        justify-content: flex-end;

        > .money-num {
          text-align: right;
          font-size: 30px;
          color: #525252;
          font-weight: 530;
        }

        > .money-num1 {
          text-align: right;
          color: #999;
          font-size: 26px;
        }
      }

      & > .visit-item {
        //   align-items: center;
        padding: 26px 0;

        > .is-checked {
          display: block;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: @color;
          margin-right: 15px;
        }
      }

      & > .visit-item:not(:first-child) {
      }
    }
  }
}
.btn-fixed {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 24px;
  > p {
    width: 95%;
    height: 98px;
    border-radius: 49px;
    text-align: center;
    line-height: 98px;
    background-color: #42a0e2;
    font-size: 34px;
    color: #fff;
    margin: 0 auto;
  }
}
.pay-loss {
  position: relative;
  width: 600px;
  height: 278px;
  padding: 32px 0;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
  font-size: 34px;
  color: #666;
  align-items: center;
  justify-content: space-between;
  > .pay-loss-title {
    color: #333;
    text-align: center;
  }
  > .pay-loss-inner {
    text-align: center;
    font-size: 30px;
    color: #666;
  }
  > .pay-loss-btn {
    // position: absolute;
    // left: 0;
    // right: 0;
    // bottom: 32px;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    > span {
      display: block;
      width: 255px;
      height: 88px;
      // padding: 28px 93px;
      color: #7f7f7f;
      border-radius: 10px;
      background: rgba(240, 240, 240, 1);
      text-align: center;
      line-height: 88px;
    }
    > span:first-child {
    }
    > span:last-child {
      color: #42a0e2;
    }
  }
}
.cover {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
