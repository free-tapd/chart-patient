<template>
  <div class="feedback vg clear-mar">
    <tab :tabArr="tabArr" @getItem="getItem" />
    <div class="see-idea">
      <div class="textarea-box vux-1px-b">
        <group>
          <x-textarea :max="400" placeholder="请在此输入您的意见或建议..." @on-focus="onEvent('focus')" height="200"
            @on-blur="onEvent('blur')" v-model="textInner"></x-textarea>
        </group>
      </div>
      <!-- btn -->
      <div class="sub-btn">
        提交
      </div>
    </div>

    <div class="success-feed" v-if="false">
      <img src="../../assets/images/inquiry/my_record.png" alt="">
      <h5>反馈成功</h5>
      <p>
        感谢您的反馈，对于您的意见和
        建议，我们将认真对待
      </p>

      <div class="sub-btn success-btn">完成</div>
    </div>
  </div>
</template>
<script>
  import {
    XTextarea,
    Group
  } from 'vux'
  import tab from "@/components/tab"
  export default {
    components: {
      XTextarea,
      tab
    },
    data() {
      return {
        textInner: "",
        tabArr: [{
          title: "反馈意见",
          id: 1
        }, {
          title: "反馈记录",
          id: 2
        }],
        tabIndex: 1
      }
    },
    methods: {
      onEvent(name) {
        console.log(name)
      },

    }
  }

</script>
<style lang="less" scoped>
  .sub-btn {
    margin: 0 auto;
    width: 690px;
    height: 88px;
    background: #2D9FF1;
    border-radius: 10px;
    line-height: 88px;
    text-align: center;
    color: #fff;
    font-size: 34px;
    font-weight: 500;
    margin-top: 79px;
  }

  .feedback {

    // background-color: #f5f5f5;
    & .textarea-box {
      margin-top: 32px;
      background-color: #fff;
    }



    & .success-feed {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background-color: #f5f5f5;
      text-align: center;
      margin: 0 auto;

      >img {
        border-radius: 50%;
        width: 127px;
        height: 127px;
        display: block;
        margin: 0 auto;
        margin-top: 100px;
      }

      >h5 {
        font-size: 34px;
        font-family: PingFang-SC-Regular;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        line-height: 56px;
        margin-top: 76px;
        margin-bottom: 49px;
      }

      >p {
        width: 417px;
        font-size: 30px;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        line-height: 46px;
        margin: 0 auto;

      }

      >.success-btn {
        width: 300px;
        height: 88px;
        border-radius: 10px;
      }
    }
  }

</style>
