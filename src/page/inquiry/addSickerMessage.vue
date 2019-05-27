<template>
  <div class="user-messgae vg clear-mar">
    <p class="title-waring"> <span class="iconfont icon-jiufuqianbaoicon14"></span> <i>为必填项</i>   </p>
    <cellInput type="1" title="患者姓名" placeholder="请输入姓名" :tColor="'#666'" :isRight="true" :isRquire="true" v-model="user.patientName" :value="user.patientName" @onInput="onInput"/>

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
    
    <cellInput type="4" title="出生日期" v-if="false" :propValue="value2" @click.native="dateShow=!dateShow" :tColor="'#666'" :isRight="true" :isRquire="true"/>
    <cellInput type="1" title="手机号" placeholder="请输入手机号" :tColor="'#666'" :isRight="true" v-model="user.patientPhone"/>
    <cellInput type="1" title="身份证号" placeholder="请输入身份证号" :tColor="'#666'" :isRight="true" v-model="user.idCard"/>
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

    <div class="add-btn " @click="addSicker">
        确定添加
    </div>
  </div>
</template>
<script>
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
    XButton

  } from 'vux'
import { log } from 'util';
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
        user:{
          patientName:"",
          idCard:"",
          patientPhone:""
        }
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
      VueCropper,XButton
    },
    mounted(){
      // this.addSicker();
    },
    methods:{
      onInput(msg){
        // console.log(msg)
        console.log(this.user)
      },
      addSicker(){
        let params={
          ...this.user
        };
         this.$post('Patient/saveWZPatient',params).then(res=>{
          //  console.log(res)
          if(res.code==0){
            // 显示文字
            this.$vux.toast.text(添加成功, 'middle')
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
  .add-btn{
      width:670px;
height:88px;
background:#2D9FF1;
border-radius:10px;
margin: 0 auto;
font-size:32px;
font-weight:500;
color:rgba(255,255,255,1);
line-height:88px;
text-align: center;
margin-top: 62px;

  }
    .title-waring{
        font-style: normal;
        padding: 26px 45px;
        color: #666;
        font-size: 24px;
        display: flex;
        align-items: center;
        >span{
            vertical-align: middle;
            color: #EA3729;
            // line-height: 1;
            margin-right: 15px;
            display: inline-block;
            font-size: 24px;
            transform: scale(.7);
        }
        >i{
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

</style>
