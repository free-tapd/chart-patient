<template>
  <div>
    <!-- <x-header :left-options="{backText: '',showBack: true}">历史清单</x-header> -->
    <div class="bg-top"></div>
    <div class="content">
      <!-- 引入组件 -->
      <sickCard :isBtn="false"/>
      <Xtab :tabArr="tabArr"/>
      <ul class="sel-money flex-r">
        <li
          v-for=" (v,i) in selMoney"
          :key="i"
          class="flex-r"
          :class="{'active-border':i==cur}"
          @click.stop="activeEnter(i)"
        >{{v}}元
        
        </li>
        <!-- <li class="flex-r">其他金额</li> -->
      </ul>

      <div class="waring flex-c">
        <p class="flex-r">
          <span class="waring-text"></span>
          <span>最大充值金额3000元</span>
        </p>
        <p class="flex-r">
          <span class="waring-text"></span>
          <span>充值成功不能在线退款，如需退款请到医院进行办理</span>
        </p>
      </div>

      <div class="pay-btn-box flex-r" @click="showPannel">
        <div class="pay-btn">￥500立即充值</div>
      </div>
    </div>
    <div class="cover" v-show="isClose">
      <div class="pay-pannel">
        <div class="header vux-1px-b">
          <i @click.stop="isClose=!isClose"></i>
          <p>支付</p>
        </div>
        <ul>
          <!-- <li class="flex-r vux-1px-b">
            <div class="pay-methods flex-r">
              <img src="../../assets/images/ico_weixin@2x.png" alt class="c">
              <div class="pay-methods-text">
                <p>微信支付</p>
                <span>推荐使用</span>
              </div>
            </div>
            <i></i>
          </li>-->
          <li class="flex-r vux-1px-b" v-for="(v,i) in payMethods" :key="i" @click="switchPay=i">
            <div class="pay-methods flex-r">
              <img :src="v.icon" alt>
              <div class="pay-methods-text">
                <p>{{v.title}}</p>
                <span>推荐使用</span>
              </div>
            </div>
            <i :class="{'active-right':i==switchPay}"></i>
          </li>
        </ul>
        <!-- 立即支付 -->
        <div class="pay-btn-box flex-r" @click="changeJump('./successPay',{})">
          <div class="pay-btn">确认支付￥321</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import date from "@/components/date";
import payList from "@/components/payList";
import sickCard from "@/components/sickCard";
import Xtab from "@/components/tab";
import { XHeader } from "vux";
import { log } from 'util';

export default {
  data() {
    return {
      tabArr: [
        {
          title: "门诊充值",
          id: 1
        },
        {
          title: "住院预交金充值",
          id: 2
        }
      ],
      payMethods: [
        {
          title: "微信支付",
          icon:
            "data:image/png;base64,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",
          id: 1
        },
        {
          title: "支付宝支付",
          icon:
            "data:image/png;base64,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",
          id: 2
        },
        {
          title: "就诊卡支付",
          icon:
            "data:image/png;base64,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",
          id: 3
        }
      ],
      selMoney: [100, 500, 1000, 1500, 2000, "其他金额"],
      isEnter: false,
      cur: 0,
      switchPay: 0,
      isClose:false,
    };
  },
  components: {
    XHeader,
    date,
    payList,
    sickCard,
    Xtab
  },
  methods: {
    activeEnter(index) {
      console.log(index);

      this.cur = index;
    },
    showPannel(){
      console.log('点击');
      this.isClose=!this.isClose;
    }
  },
  beforeRouteEnter (to,from,next){
    document.getElementById('QF').innerHTML="缴费充值"
    next()
  },
  beforeRouteUpdate (to,from,next){
    console.log('更新')
    next();
  }

};
</script>

<style lang="less">
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
.active-border {
  border: 1px solid @color!important;
  border-radius: 6px;
}
.active-border:after{
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  background-image: url('../../assets/images/sel.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 42px;
  height: 42px;
  display: block;
}
.active-right {
  width: 28px;
  height: 28px;
  display: block;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("../../assets/images/chouse@2x.png");
}
.bg-top {
  height: 115px;
  //   position: relative;
  background-color: @color;
}
.pay-pannel {
  height: 671px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  > .header {
    font-family: PingFangSC-Light;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    line-height: 70px;
    position: relative;
    text-align: center;
    padding: 30px 0;
    > i {
      position: absolute;
      left: 30px;
      top: 30px;
      display: block;
      width: 26px;
      height: 26px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url("../../assets/images/ico_close@2x.png");
    }
  }
  > ul {
    padding: 0 30px;
    > li {
      align-items: center;
      justify-content: space-between;
      padding: 30px 0;
      > .pay-methods {
        > img {
          width: 48px;
          height: 48px;
          display: block;
        }
        > .pay-methods-text {
          margin-left: 30px;
          line-height: 1;
          > p {
            color: #333;
            font-size: 30px;
          }
          > span {
            font-size: 24px;
            color: #999;
          }
        }
        align-items: center;
        // justify-content: space-evenly;
      }
      > .active-right {
        width: 28px;
        height: 28px;
        display: block;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url("../../assets/images/chouse@2x.png");
      }
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
      margin: 0 auto;
      width: 95%;
      height: 88px;
      font-size: 34px;
      color: #fff;
      background-color: #fd7662;
      line-height: 88px;
      text-align: center;
      border-radius: 44px;
    }
  }
}
.content {
  > .sel-money {
    list-style: none;
    padding: 30px 0;
    padding-left: 15px;
    flex-wrap: wrap;

    > li {
      border-radius: 6px;
      align-items: center;
      justify-content: center;
      width: 211px;
      height: 100px;
      border: 1px solid #d7d7d7;
      margin-bottom: 16px;
      position: relative;

    }

    > li {
      margin-left: 18px;
    }

    // >li:first-child{
    //   margin-left: 30px;
    // }
  }

  > .waring {
    // align-items: center;
    margin: 0 auto;
    width: 90%;
    margin-top: 35px;
    font-size: 28px;
    color: #999;
    > p {
      align-items: center;
    }
    & .waring-text {
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      // margin-top: 9px;
      // color: #FF2400;
      background-color: #42a0e2;
      // font-size: px;
      margin-right: 15px;
    }
  }
}

.pay-btn-box {
  justify-content: space-between;
  align-items: center;
  height: 119px;
  background-color: transparent;
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
    margin: 0 auto;
    width: 90%;
    height: 88px;
    font-size: 34px;
    color: #fff;
    background-color: @color;
    line-height: 88px;
    text-align: center;
    border-radius: 44px;
  }
}
</style>
