<template>
  <div class="vg">
    <div class="content">
      <!-- 引入组件 -->
      <!-- 检查报告 -->
      <div class="visit-box">

        <div class="visit-list">

          <div class="flex-c visit-item vux-1px-b" v-for="(v,i) in reportList" :key="i">
            <!-- <span class="is-checked" v-if="isPay"></span> -->
            <div class="flex-r add-list">
              <div class="offices-name flex-c">
                <div class="off-list">
                  <i class="funbg icon-nprococal" :class="{'icon-prococal':v.isCheck}" @click.stop="clickList(v)"></i>
                  <p>{{v.itemName}}</p>

                </div>
              </div>
              <div class="pay-money flex-c">
                <div class="money-num">
                  {{v.reportTime}} </div>
              </div>
            </div>
            <!-- <span class="off-date"> 收据号：12345678910234567891010</span> -->

          </div>

        </div>
      </div>
    </div>
    <div class="btn-bg vux-1px-t">
      <div class="cancle-btn" @click="clickAll">
        <i class="funbg icon-nprococal" :class="{'icon-prococal':isAll}"></i>
        <span>全选</span>
      </div>
   
      <!--  -->
      <div class="add-btn" >
        保存
      </div>
       <div class="add-btn cancle" style="background-color:#FF5345;" v-if="false">
        删除
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
        reportList:[],
        isAll:false,
      }
    },

    components: {
      XHeader,
      date,
      payList,
      sickCard,
      Xtab
    },
    
    mounted(){
      this.reportList=JSON.parse(this.$route.query.data) ;
      this.isAllCheck()
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
      },
      // 点击授权list
      clickList(v){
        v.isCheck=!v.isCheck;
        this.isAllCheck()
      },
      // 判断全选是否选中
      isAllCheck(){
        let n=0;
        this.reportList.forEach(v=>{
          
          if(v.isCheck){
            n+=1
          }
        })
        if(n==this.reportList.length){
         this.isAll=true
        }else{
          this.isAll=false
        }
      },
      //点击全选按钮
      clickAll(){
        this.isAll=!this.isAll;
        this.reportList.forEach(v=>{
          v.isCheck=this.isAll
        })
      },

      // 点击保存
      saveList(){
        let arr=[];
        this.reportList.forEach(v=>{
          if(v.isCheck){
            arr.push(v);
          }
        })
        // 保存用户的
      }

    }
  }

</script>

<style lang="less" scoped>
  @color: #42a0e2;

  .content {
    padding-bottom: 120px;

    >.switch-start-end {

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
      // align-items: center;
      // margin: 0 auto;
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

    >.visit-box {
      // background-color: #fff;
      margin: 0 auto;

      >.date-list {
        justify-content: space-between;
        padding: 15px;
        color: #999;
        font-size: 24px;

      }

      >.visit-list {
        margin-top: 20px;
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
          flex: 3;

          >.off-list {
            display: flex;
            align-items: center;

            >i {
              width: 33px;
              height: 33px;
              display: block;
              margin-right: 27px;
            }

            >p {
              font-size: 30px;
              color: #333;
              font-weight: bold;

            }

            font-size: 30px;
            color: #333;

            >.off-date {
              font-size: 26px;
              color: #999;
            }
          }

          >.off-list1 {
            font-size: 30px;
            color: #333;

            >.off-dete {
              color: #999;
              font-size: 24px;
            }
          }
        }

        & .pay-money {
          flex: 1;
          justify-content: flex-end;

          >.money-num {
            text-align: right;
            font-size: 26px;
            color: #999;
            font-weight: 530;
          }

          >.money-num1 {
            text-align: right;
            color: #999;
            font-size: 26px;
          }

        }

        &>.visit-item {
          //   align-items: center;
          padding: 40px 20px;
          background-color: #fff;
          margin-bottom: 11px;

          >.is-checked {
            display: block;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: @color;
            margin-right: 15px;

          }

        }


      }
    }


  }

  .btn-bg {
    height: 120px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 0px 0px rgba(230, 230, 230, 1);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .cancle-btn {
    display: flex;
    align-items: center;

    >i {
      width: 33px;
      height: 33px;
      display: block;
      margin-right: 27px;
      margin-left: 30px;
    }

    >span {
      font-size: 30px;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      line-height: 50px;
    }
  }

  .add-btn {
    margin-right: 22px;
    width: 520px;
    height: 88px;
    background: #2D9FF1;
    border-radius: 10px;
    font-size: 32px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 88px;
    text-align: center;


  }

  .icon-prococal {
    background-image: url("../../assets/images/jzr_ico_chose_set@2x.png")!important;
  }

  .icon-nprococal {
    background-image: url("../../assets/images/jzr_ico_chose_nor@2x.png");
  }

</style>
