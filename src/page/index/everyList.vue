<template>
  <div class="every-list vg">
    <!-- <x-header :left-options="{backText: '',showBack: true}">每日清单</x-header> -->
    <div class="bg-top"></div>


    <div class="content">
      <div class="visit-message flex-r">
        <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg" alt="">
        <div class="message">
          <p class="visit-user"> <span>张素真</span> <span>(默认)</span></p>
          <p> <span>就诊卡号：</span> <span>84410505012210</span></p>
          <p> <span>住院号：</span> <span>84410505012210</span></p>
        </div>
        <span class="icon-switch"></span>
      </div>
      <div class="visit-date">
        <date />
      </div>
      <!--消费  -->
      <div class="total-list ">
        <div class="flex-r vux-1px-b min-box">
          <p> <span>当日消费：</span>
            <span>￥2550.00</span></p>
          <p>
            <span>费用笔数:</span>
            <span>914</span>
          </p>
        </div>

      </div>
      <!-- 消费列表 -->
      <div class="pay-list-box">
          <payList v-for="v in 5" :key="v"/>
      </div>
    </div>
  </div>
</template>
<script>
  import date from '@/components/date'
  import payList from '@/components/payList'
  import {
    XHeader,

  } from 'vux'

  export default {
    components: {
      XHeader,
      date,
      payList
    }
  }

</script>
<style lang="css">
  .vux-header {
    background-color: #42A0E2 !important;
  }

  .vux-header-title {
    color: #fff !important;
  }

</style>
<style lang="less">
  @color: #42a0e2;

  .every-list {
    background-color: #fff;

    >.bg-top {
      height: 115px;
      position: relative;
      background-color: @color;
    }

    >.content {
      position: relative;

      >.visit-message {
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
        align-items: center;
        justify-content: space-around;
        // position: absolute;
        // bottom: -100%;
        margin: 0 auto;
        margin-top: -100px;

        width: 90%;
        left: 5%;
        background-color: #fff;
        height: 192px;
        border-radius: 10px;

        &>.message {
          font-size: 26px;
          color: #333;

          &>.visit-user {
            font-size: 30px;

            &>span:first-child {
              font-weight: bold;
            }

            &>span:last-child {
              font-size: 24px;
            }
          }
        }

        &>img {
          width: 89px;
          height: 89px;
          display: block;
          border-radius: 50%;
        }

        &>.icon-switch {
          width: 71px;
          height: 71px;
          display: block;
          background-size: contain;
          background-position: center;
          background-image: url('../../assets/images/home_zhenjianjf@2x.png');

        }
      }

      // 
      >.visit-date {
        background-color: #fff;
        padding: 30px;
        margin-top: 15px;
      }

      >.total-list {
        >.min-box {
          justify-content: space-between;
          align-items: center;padding: 30px 0;
        }

        background-color: #fff;
        
        font-size: 26px;
        color: @color;
        padding-left:30px;
        padding-right:30px;  


      }
      >.pay-list-box{
          padding: 30px;
      }
    }
  }

</style>
