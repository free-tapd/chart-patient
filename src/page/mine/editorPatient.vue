<template>
  <div class="user-messgae vg clear-mar">
    <p class="title-waring"> <span class="iconfont icon-jiufuqianbaoicon14"></span> <i>为必填项</i> </p>
    <cellInput type="1" title="患者姓名" placeholder="请输入姓名" v-model="sikerMessage.patientName" :tColor="'#666'" :isRight="true" :isRquire="true" />

    <!-- <cellInput type="1" title="姓名" placeholder="请输入姓名" :isRight="true"/> -->
    <cellInput type="3" title="性别" :isRight="true" :tColor="'#666'" :isRquire="true" v-if="false">
      <ul slot="ismean" class="sex">
        <li :class="{'active-sex':cur==0}" @click="cur=0">
          男
        </li>
        <li :class="{'active-sex1':cur==1}" @click="cur=1">
          女
        </li>
      </ul>
    </cellInput>

    <cellInput type="4" title="出生日期" :propValue="value2" @click.native="dateShow=!dateShow" :tColor="'#666'"
      :isRight="true" :isRquire="true"  v-if="false"/>
    <cellInput type="1" title="手机号" placeholder="请输入手机号" :tColor="'#666'" :isRight="true" :isRquire="true" v-model="sikerMessage.patientPhone"/>
    <cellInput type="1" title="身份证号" placeholder="请输入身份证号" :tColor="'#666'" :isRight="true"  :isRquire="true" v-model="sikerMessage.idCard"/>
    <div v-transfer-dom>
      <popup v-model="dateShow">
        <datetime-view v-model="value2" confirm-text="确认" cancel-text="取消"></datetime-view>
      </popup>
    </div>
    <!-- <group><datetime title="出生日期" v-model="value2"></datetime>
       </group> -->
    <!-- <QFpicker/> -->
    <div class="img-crop" v-if="false">
      <vueCropper ref="cropper" :img="option.img" :outputSize="option.size" :outputType="option.outputType"
        :autoCrop="autoCrop"></vueCropper>
    </div>
    <div class="default-user" v-if="false">
      <p>设为默认就诊人</p>
      <div class="switch-box">
        <inline-x-switch v-model="value"></inline-x-switch>
      </div>
    </div>
    <div class="btn-bg">
        <div class="cancle-btn" @click.stop="canclePatient(sikerMessage.patientId)">
            删除就诊人
        </div>
      <div class="add-btn" @click.stop="addPatient">
        保存
      </div>
    </div>

  </div>
</template>
<script>
"use strict";
  import {
    VueCropper
  } from 'vue-cropper'
  import cellInput from "@/components/cellInput"
  import QFpicker from "@/components/QFpicker"
  import {
    DatetimeView,
    Popup,
    TransferDom,
    Datetime,
    Group,
    XButton,
    InlineXSwitch

  } from 'vux'
  export default {
    data() {
      return {
        cur: 0,
        dateShow: false,
        value2: "请选择时间",
        listData: Array.from({
          length: 12
        }, (value, index) => 1 + index),
        option: {
          img: "../src/assets/images/inquiry/my_doctor.png",
          outputSize: 1,
          outputType: "jpeg || png || webp",
          autoCrop: true
        },
        sikerMessage:{}
      }
    },
    directives: {
      TransferDom
    },
    components: {
      cellInput,
      DatetimeView,
      Popup,
      Datetime,
      Group,
      QFpicker,
      VueCropper,
      XButton,
      InlineXSwitch
    },
    created(){
      // this.sikerMessage=JSON.parse( this.$route.query.sickerMessage);
      this.$set(this,"sikerMessage",JSON.parse( this.$route.query.sickerMessage))
    },
    mounted(){
      // this.sikerMessage=JSON.parse( this.$route.query.sickerMessage)
      // console.log(this.s)
    },
    methods:{
        canclePatient(patientId){
            this.$post('Patient/delPatient',{patientId}).then(res=>{
                if(res.code==0){
                    this.$vux.toast.text('已删除',"middle");
                    this.$router.go(-1)
                }
            })
        },
        addPatient(){
          console.log(this.sikerMessage)
          // let a ={...this.sickerMessage};
          // console.log(a)
          // console.log(a.patientPhone)
          this.$post('Patient/saveWZPatient',{patientPhone:this.sikerMessage.patientPhone,patientName:this.sikerMessage.patientName,idCard:this.sikerMessage.idCard}).then(res=>{
            if(res.code==0){
               this.$vux.toast.text('已保存',"middle");
               this.$router.go(-1)
            }
          })
        }
    }

  }

</script>
<style lang="less" scoped>
  .active-sex {
    background-color: #2D9FF1 !important;
  }

  // #D565B2
  .active-sex1 {
    background-color: #D565B2 !important;
  }
  .btn-bg{
height:134px;
background:rgba(255,255,255,1);
box-shadow:0px 1px 0px 0px rgba(230,230,230,1);
position: fixed;
left: 0;
right: 0;
bottom: 0;
display: flex;
align-items: center;
justify-content: space-evenly;
  }
  .add-btn {
    width: 440px;
    height: 88px;
    background: #2D9FF1;
    border-radius: 10px;
    font-size: 32px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 88px;
    text-align: center;
    

  }
  .cancle-btn{
      width:220px;
        height:88px;
        border:1px solid rgba(255,0,0,1);
        border-radius:10px;
          font-size: 32px;
    font-weight: 500;
   color: #FF0000;
    line-height: 88px;
    text-align: center;
    
        
  }

  .title-waring {
    font-style: normal;
    padding: 26px 45px;
    color: #666;
    font-size: 24px;
    display: flex;
    align-items: center;

    >span {
      vertical-align: middle;
      color: #EA3729;
      // line-height: 1;
      margin-right: 15px;
      display: inline-block;
      font-size: 24px;
      transform: scale(.7);
    }

    >i {
      font-style: normal;
      display: inline-block;
      vertical-align: middle;
    }
  }

  .user-messgae {
    background-color: #f5f5f5;

    >.nick-name {
      margin: 19px 0;
    }

    & .img-box {
      >img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: block;
      }
    }

    & .sex {
      display: flex;
      align-items: center;

      >li {
        border-radius: 10px;
        width: 80px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        font-size: 30px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        background-color: #CCCCCC
      }

      >li:last-child {
        margin-left: 48px;
      }
    }
  }

  .img-crop {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 1);
  }

  .default-user {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 45px 15px;

    >p {
      font-size: 30px;
      font-family: PingFang-SC-Regular;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }

    >.switch-box {
      transform: scale(.8, 46/60);

      /deep/ .weui-switch:checked {
        border-color: #2d9ff1;
        background-color: #2d9ff1;
      }
    }
  }

</style>
