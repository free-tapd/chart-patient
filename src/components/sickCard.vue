<template>
  <div class="sick-card">
    <!--   病人卡片       -->
    <div class="visit-message flex-c">
      <div class="cv flex-r">
        <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg" alt>
        <div class="message">
          <p class="visit-user">
            <span>就诊人:</span>
            <span>张素真</span>
            <span>(默认)</span>
          </p>
          <!-- <p> <span>就诊卡号：</span> <span>84410505012210</span></p> -->
          <p class="no-card" v-if="isCard">暂无就诊卡</p>
          <div class="has-card" v-else>
            <p>
              <span>住院号：</span>
              <span>84410505012210</span>
            </p>
            <!-- 历史清单 -->
            <p>
              <span>住院清单：</span>
              <span>84410505012210</span>
            </p>
          </div>
        </div>

        <div class="icon-switch flex-r" :style="{opacity:isShowIcon==false?0:1}">
          <span v-show="isBtn">切换</span>
        </div>
      </div>
      <div class="gv vux-1px-t flex-r" v-if="isCard" @click.stop="addCard">
        <span class="icon-add">+</span>
        <span>添加就诊卡</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isShowIcon: {
      type: Boolean,
      default: true
    },
    isBtn: {
      type: Boolean,
      default: true
    },
    isCard:{
      type:Boolean,
      default:false
    }
  },
  methods:{
    addCard(){
      this.$emit('addCardGo',"")
    }
  }
};
</script>
<style lang="less" scoped>
@color: #42a0e2;
.visit-message {
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);

  // position: absolute;
  // bottom: -100%;
  margin: 0 auto;
  margin-top: -100px;
  position: relative;
  width: 95%;
  // left: 5%;
  background-color: #fff;
  height: 150px+74px;
  border-radius: 10px;
  justify-content: space-around;
  > .cv {

    align-items: center;
    // height: 100%;
    justify-content: space-around;
    width: 100%;
    & > .message {
      font-size: 26px;
      color: #333;

      & > .visit-user {
        font-size: 30px;

        & > span:first-child {
          font-weight: bold;
        }

        & > span:last-child {
          font-size: 24px;
        }
      }
      > .no-card {
        color: #666;
      }
    }

    & > img {
      width: 89px;
      height: 89px;
      display: block;
      border-radius: 50%;
    }

    & > .icon-switch {
      width: 71px;
      height: 71px;
      background-size: contain;
      background-position: center;
      background-color: @color;
      border-radius: 50%;
      background-image: url("../assets/images/qh_btn.png");
      color: #fff;
      font-size: 12px;
      align-items: center;
      justify-content: center;

      & > span {
        transform: scale(0.9);
      }
    }
  }
  >.gv{
    height: 74px;
    width: 100%;
    // position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 28px;
    color: #42A0E2;
    
    text-align: center; align-items: center;
      justify-content: center;
    >.icon-add{
      width: 28px;
      height: 28px;
      line-height: 28px;
      // text-align: center;
      border: 1px solid #42A0E2;
      border-radius: 50%;
      margin-right: 15px;
     
    }
  }
}
</style>
