<template>
  <div class="partmentList vg">
    <div class="co">
      <div class="switch-box flex-r">
        <p :class="{'active-btn':cur==0}" @click="cur=0">按医生</p>
        <p :class="{'active-btn':cur==1}" @click="cur=1">按时间</p>
      </div>
    </div>

    <!-- 医生预约时间 -->
    <div class="docutor-date-box" @click="changeJump('/docutorAppointmentDetail',{})">
      <div class="flex-r docutor-date">
        <div class="docutor-left flex-r">
          <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg" alt>
          <div class="docutor-title">
            <p>
              <span>耳鼻咽喉二科正高职</span>
              <span>专家</span>
            </p>
            <p>
              <span>擅长：</span>
              <span>暂无</span>
            </p>
          </div>
        </div>

        <span class="iconfont icon-bottom" style="color:#30A3F6"></span>
      </div>
    </div>
    <!-- 选择时间 -->
    <div class="select-date vux-1px-b">
      <date/>
    </div>
    <div class="docutor-date-box" v-for="v in 10" :key="v">
      <div class="flex-r docutor-date">
        <div class="docutor-left flex-r">
          <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg" alt>
          <div class="docutor-title">
            <p>
              <span>耳鼻咽喉二科正高职</span>
              <span>专家</span>
            </p>
            <p>
              <span>擅长：</span>
              <span>暂无</span>
            </p>
          </div>
        </div>

        <span class="iconfont icon-bottom" style="color:#30A3F6"></span>
      </div>
    </div>
  </div>
</template>
<script>
import date from "@/components/date.vue";
export default {
  data() {
    return {
      cur: 0
    };
  },
  components: {
    date
  }
};
</script>
<style lang="less" scoped>
.active-btn {
  background-color: #1c8ffe;
  color: #fff !important;
}
.partmentList {
  > .co {
      background-color: #fff;
      padding: 30px 0;
    > .switch-box {
      margin: 0 auto;
      border-radius: 30px;
      background-color: #fff;
      width: 320px;
      height: 60px;
      border: 1px solid #1c8ffe;
      margin-bottom: 10px;
      > p {
        flex: 1;
        border-radius: 30px;
        text-align: center;
        color: #1c8ffe;
        font-size: 28px;
        line-height: 60px;
        // background-color: #1C8FFE;
      }
    }
  }
  > .docutor-date-box {
    padding: 30px;
    background-color: #fff;
    font-size: 24px;
    color: #545454;

    > .docutor-date {
      width: 100%;
      align-items: center;
      justify-content: space-between;
      > .docutor-left {
        align-items: center;
        //   justify-content:
        > .docutor-title {
          margin-left: 30px;
          > p:first-child > span:first-child {
            font-size: 32px;
            color: #000;
            margin-right: 15px;
            font-weight: bold;
          }
        }
        > img {
          width: 90px;
          height: 90px;
          display: block;
          border-radius: 50%;
        }
      }
    }
  }
  > .select-date {
    padding: 30px;
    background-color: #fff;
  }
}
</style>
