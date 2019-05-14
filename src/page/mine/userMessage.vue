<template>
  <div class="user-messgae vg clear-mar">
      <div class="nick-name ">
              <cellInput title="昵称" value="吃了三包辣条" type="0" :tColor="'#333'" />
      </div>

    <cellInput title="头像" :islink="true" type="3">
      <div slot="ismean" class="img-box">
        <img src="../../assets/images/inquiry/my_record.png" alt="">
      </div>
    </cellInput>
    <cellInput type="1" title="姓名" placeholder="请输入姓名" />
    <cellInput type="3" title="性别">
      <ul slot="ismean" class="sex">
        <li :class="{'active-sex':cur==0}" @click="cur=0">
          男
        </li>
        <li :class="{'active-sex1':cur==1}" @click="cur=1">
          女
        </li>
      </ul>
    </cellInput>
    <cellInput type="1" title="身份证号" placeholder="请输入身份证号" />
    <cellInput type="4" title="出生日期" :propValue="value2" @click.native="dateShow=!dateShow" />
    <cellInput type="1" title="手机号" placeholder="请输入手机号" />
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
    Group

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
      VueCropper
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

  .user-messgae {
    background-color: #f5f5f5;
    >.nick-name{
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
