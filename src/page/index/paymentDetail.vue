<template>
  <div class="vg">
    <x-header :left-options="{backText: '',showBack: true}">缴费明细</x-header>
    <div class="bg-top"></div>
    <div class="bg-bottom">
      <div class="bg-inner-box">
        <sickCard :isShowIcon="false" />
        <!-- <Xtab :tabArr="tabArr" :defaultColor="'#ccc'" :activeColor="'#fff'" :barColor="'#fff'" @getItem="getItem" /> -->
        <div class="visit-message">
          <p class="item-message flex-r"> <span>科&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;室：</span> <span>肠胃科</span></p>
          <p class="item-message flex-r"> <span>处方序号：</span> <span>201755551123451</span></p>
          <p class="item-message flex-r"> <span>就诊时间:</span> <span>2017-05-08 7:30</span></p>
          <p class="item-message flex-r"> <span>处方类型:</span> <span>普通处方，当日有效</span></p>
        </div>
      </div>

    </div>
    <div class="content">
      <!-- 在线支付 how much -->
      <div class="total-num flex-r">
        <span>在线支付</span>
        <p class="total-num-money"><span>总价</span>
          <span>
            ￥562.20
          </span></p>
      </div>
      <!-- 西药 -->
      <div class="medicine-list-box">

        <ul class="medicine-list flex-r t-1px">
          <li> 药品名称</li>
          <li> 规格</li>
          <li> 价格／数量</li>
        </ul>
        <ul class="medicine-list flex-r t-1px" v-for="v in 5" :key="v">
          <li> 阿莫****</li>
          <li> 150mg*7片／盒</li>
          <li> ￥160/2</li>
        </ul>

      </div>
      <!-- 中药 -->
      <div class="medicine-list-box" v-if="false">

        <ul class="medicine-list flex-r t-1px">
          <li> 药品名称</li>
          <li> 用量</li>
          <!-- <li> 价格／数量</li> -->
        </ul>
        <!-- <ul class="medicine-list flex-r t-1px" v-for="v in 5" :key="v">
          <li> 阿莫****</li>
          <li> 150mg*7片／盒</li>
          <li> ￥160/2</li>
        </ul> -->

      </div>
      <!-- 未开药 -->
      <div class="medicine-list-box" v-if="false">

        <ul class="medicine-list flex-r t-1px">
          <li> 药品名称</li>
          <li> 标本种类</li>
          <li> 价格</li>
        </ul>
        <!-- </ul> <ul class="medicine-list flex-r t-1px" v-for="v in 5" :key="v">
          <li> 阿莫****</li>
          <li> 150mg*7片／盒</li>
          <li> ￥160/2</li>
        </ul> -->

      </div>





      <!-- 注意事项 -->
      <div class="waring flex-c">
        <span class="waring-text"></span> <span>注意事项：当日有效,请及时付款</span>

      </div>
    </div>
    <div class="pay-btn-box vux-1px-t flex-r">
      <!-- <p class="pay-text"> <span>共:</span>

        <span>￥562.20</span></p> -->
      <div class="pay-btn">
        立即支付
      </div>
    </div>
  </div>
</template>
<script>
  import date from '@/components/date'
  import payList from '@/components/payList'
  import sickCard from '@/components/sickCard'
  import Xtab from '@/components/tab'

  import {
    XHeader,

  } from 'vux'

  export default {
    data() {
      return {
        tabArr: [{
            id: 1,
            title: "待支付"
          },
          {
            id: 2,
            title: "已支付"
          }
        ],
        isPay: true,
      }
    },

    components: {
      XHeader,
      date,
      payList,
      sickCard,
      Xtab,

    },
    methods: {
      getItem(item) {
        console.log(item)
        if (item.id == 1) {
          // 待支付
          this.isPay = true
        } else {
          // 已支付
          this.isPay = false;
        }
      }
    }
  }

</script>
<style lang="css">
  .vux-tab {
    background-color: transparent !important;
  }

</style>
<style lang="less" scoped>
  @color: #42a0e2;

  .vg {
    padding-bottom: 120px;
  }

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

    >.bg-inner-box {
      padding-bottom: 30px;

      >.visit-message {
        padding-top: 23px;

        width: 95%;
        margin: 0 auto;

        >.item-message {
          font-size: 26px;
          color: #fff;
          justify-content: space-between;
          margin-bottom: 16px;
        }
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

    >.pay-text {
      font-size: 34px;

      >span:last-child {
        color: #FF8400;
        margin-left: 20px;
      }
    }

    >.pay-btn {
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

  .content {
    >.total-num {
      justify-content: space-between;
      font-size: 30px;
      color: #333;
      padding: 30px;

      &>.total-num-money {
        >span:nth-child(2) {
          color: #FF8400;
        }
      }
    }

    >.medicine-list-box {
      position: relative;

      >.medicine-list {
        padding: 35px 30px;
        justify-content: space-between;
        list-style: none;
        font-size: 30px;
        color: #333;
        background-color: #fff;
        box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1);

      }
    }



    >.waring {
      // align-items: center;
      // margin: 0 auto;
      //   width: 95%;
      padding: 30px;
      margin-top: 35px;
      font-size: 24px;
      color: #666;

      >.waring-text {
        margin-top: 9px;
        color: #FF2400;
        font-size: 50px;
        margin-right: 15px;
      }
    }




  }

</style>
