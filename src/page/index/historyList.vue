<template>
  <div>
    <!-- <x-header :left-options="{backText: '',showBack: true}">历史清单</x-header> -->
    <div class="bg-top"></div>
    <div class="content">
      <!-- 引入组件 -->
      <sickCard />
      <div class="switch-start-end" v-if="false">
        <div class="padd">
          <div class="switch-start flex-r">
            <div class="flex-r">
              <p class="icons icon-start flex-r"> <span class="c"> 起</span></p>
              <p class="switch-date">2017-05-23</p>
            </div>

            <span class="iconfont icon-right" style="font-size:12px"></span>

          </div>
          <!-- 切换图标 -->
          <div class="icons icon-switch">
            |
          </div>
          <div class="switch-end flex-r">
            <div class="flex-r">
              <p class="icons icon-end flex-r"><span>止</span> </p>
              <p class="switch-date">2017-05-23</p>
            </div>

            <span class="iconfont icon-right" style="font-size:12px"></span>
          </div>
        </div>

      </div>

      <div class="waring flex-r" v-if="false">
        <span class="waring-text">*</span> <span>数据仅供参考，以院方实际数据为准</span>
      </div>
      <div class="visit-box">
        <div class="date-list">
          2017/07/21-2017/07/30
        </div>
        <div class="visit-list">
            <div class="flex-r visit-item" v-for="v in 5" :key="v">
                <div class="offices-name flex-c">
                <div class="off-list">
                    <p>感冒外科一病区</p>
                    <span class="off-date">2017-05-26</span>
                </div>
            </div>
            <div class="pay-money flex-c">
                <div class="money-num">
                            500.00
                        </div>
            </div>
            </div>
            
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  import date from '@/components/date'
  import payList from '@/components/payList'
  import sickCard from '@/components/sickCard'
  import {
    XHeader,

  } from 'vux'

  export default {
    components: {
      XHeader,
      date,
      payList,
      sickCard
    }
  }

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

  .bg-top {
    height: 115px;
    //   position: relative;
    background-color: @color;
  }

  .content {
    >.switch-start-end {
      width: 90%;
      margin: 0 auto;
      box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
      margin-top: 17px;
      background-color: #fff;


      >.padd {
        padding: 0 30px;

        >.switch-start {
          justify-content: space-between;
          align-items: center;
          padding: 22px 0;

          & .icon-start {
            background: rgba(59, 179, 255, 1);
            box-shadow: 0px 2px 4px 0px rgba(0, 156, 255, 0.5);
          }
        }

        >.switch-end {
          justify-content: space-between;
          align-items: center;
          padding: 22px 0;

          .icon-end {
            background: #FFA403;
            box-shadow: 0px 2px 4px 0px rgba(255, 145, 12, 0.5);
          }
        }

        >.icon-switch {
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

    >.waring {
      align-items: center;
      margin: 0 auto;
      width: 90%;
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

    >.visit-box {
      width: 90%;
        margin:  0 auto;
      >.date-list {
        padding: 15px 0;
        color: #333;
      }

      >.visit-list {
          box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
          padding: 30px;
          justify-content: space-between;
          align-items: center;
          font-size: 30px;
          color: #000;
          & .offices-name{
              flex:1;
              >.off-list{
                  >.off-date{
                      font-size: 26px;
                      color:#808080;
                  }
              }
          }
          & .pay-money{
              flex:1;
              justify-content: flex-end;
              .money-num{
                  text-align: right;
              }
          }
          &>.visit-item{
              align-items: center;
             
          }
          &>.visit-item:not(:last-child){
               margin-bottom: 52px;
          }
      }
    }


  }

</style>
