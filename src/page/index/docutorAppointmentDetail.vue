<template>
  <div class="partmentList vg">
    <!-- <div class="co">
      <div class="switch-box flex-r">
        <p :class="{'active-btn':cur==0}" @click="cur=0">按医生</p>
        <p :class="{'active-btn':cur==1}" @click="cur=1">按时间</p>
      </div>
    </div>-->
    <div class="docutor-home flex-r">
      <!-- 医生预约时间 -->
      <div class="docutor-date-box">
        <div class="flex-r docutor-date">
          <div class="docutor-left flex-r">
            <img
              src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg"
              @click="changeJump('/docutorHome',{})"
              alt
            >
            <div class="docutor-title">
              <p>
                <span>耳鼻咽喉二科正高职</span>
                <!-- <span>专家</span> -->
              </p>
              <p>
                <span>专家</span>
                <span>产科门诊</span>
              </p>
              <p>河北医科大学第二医院</p>
            </div>
          </div>

          <span class="iconfont icon-bottom" style="color:#30A3F6"></span>
        </div>
      </div>
      <div class="tab-pos">
        <!-- tab -->
        <Xtab
          :tabArr="tabArr"
          :defaultColor="'#f5f5f5'"
          :barColor="'#fff'"
          :activeColor="'#fff'"
          @getItem="getItem"
        />
      </div>
    </div>
    <!-- 选择时间 -->
    <!-- <div class="select-date vux-1px-b">
      <date/>
    </div>-->

    <div class="or-am flex-r">
      <p>2019-03-01</p>
      <div class="switch-box flex-r">
        <p :class="{'active-btn':cur==0}" @click="cur=0">全天</p>
        <p :class="{'active-btn':cur==1}" @click="cur=1">上午</p>
        <p :class="{'active-btn':cur==2}" @click="cur=2">下午</p>
      </div>
    </div>
    <!-- 1 -->
    <ul class="is-num" v-show="tabIndex==1">
      <li class="flex-r vux-1px-t" v-for="v in 10 " :key="v">
        <p>
          <span>08:00-08:59</span>
          <span class="order-one">剩余1</span>
        </p>
        <p @click.stop="changeJump('/sureAppointment',{})">预约</p>
      </li>
    </ul>
    <!-- 2 -->
    <div class="c" v-show="tabIndex==2">
      <div class="docutor-intro">
        <p>擅长</p>
        <span>赵宗茂，男，1969年5月生，河北省安平县人。中共党员，医学博士，生物学博士后。河北医科大学第二医院神经外科主任医师、教授，博士研究生导师。神经外 ...副主任、党支部书记</span>
      </div>
      <div class="docutor-intro">
        <p>简介</p>
        <span>赵宗茂，男，1969年5月生，河北省安平县人。中共党员，医学博士，生物学博士后。河北医科大学第二医院神经外科主任医师、教授，博士研究生导师。神经外 ...副主任、党支部书记</span>
      </div>
    </div>
    <!-- 评价 -->
    <ul class="evaluate-box" v-show="tabIndex==3">
      <li class="vux-1px-b" v-for="v in 5" :key="v">
        <div class="evaluate-name flex-r">
          <div class="flex-r cv">
            <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg" alt>
            <div class="star-box">
              <span class="star funbg icon-star"></span>
              <span class="star funbg icon-star"></span>
              <span class="star funbg icon-star"></span>
              <span class="star funbg icon-star"></span>
              <span class="star funbg icon-star"></span>
            </div>
          </div>
          <p>
            <span>黄*波</span>
            <span>2017-20-01</span>
          </p>
        </div>
        <!--  -->
        <p>郝医生分析的很到位，我的病有了明显好转非常感谢</p>
      </li>
    </ul>
  </div>
</template>
<script>
import date from "@/components/date.vue";
import Xtab from "@/components/tab.vue";
export default {
  data() {
    return {
      cur: 0,
      tabIndex: 1,
      tabArr: [
        { title: "号源", id: 1 },
        { title: "简介", id: 2 },
        { title: "评价", id: 3 }
      ]
    };
  },
  components: {
    date,
    Xtab
  },
  methods: {
    getItem(msg) {
      this.tabIndex = msg.id;
    }
  }
};
</script>
<style lang="css">
.vux-tab {
  background-color: transparent !important;
}
</style>

<style lang="less" scoped>
.active-btn {
  background-color: #1c8ffe;
  color: #fff !important;
}
.switch-box {
  //   margin: 0 auto;
  border-radius: 30px;
  background-color: #fff;
  width: 300px;
  height: 54px;
  border: 1px solid #1c8ffe;
  margin-bottom: 10px;
  > p {
    flex: 1;
    border-radius: 30px;
    text-align: center;
    color: #1c8ffe;
    font-size: 26px;
    line-height: 54px;
    // background-color: #1C8FFE;
  }
}
.partmentList {
  > .co {
    background-color: #fff;
    padding: 30px 0;
  }
  > .docutor-home {
    position: relative;
    height: 281px;
    background-color: #28acff;
    align-items: center;
    justify-content: space-between;
    > .docutor-date-box {
      padding: 30px;
      // background-color: #fff;
      font-size: 24px;
      color: #fff;

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
              color: #fff;
              margin-right: 15px;
              // font-weight: bold;
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
    > .tab-pos {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
  > .or-am {
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 30px;
    > p {
      font-size: 28px;
      color: #000;
    }
  }
  > .is-num {
    font-size: 28px;
    padding: 0 30px;
    background-color: #fff;
    > li {
      padding: 33px 0;
      align-items: center;
      justify-content: space-between;
      > p:first-child {
        > .order-one {
          color: #fb9f40;
          margin-left: 22px;
        }
      }
      > p:last-child {
        height: 60px;
        width: 100px;
        line-height: 60px;
        text-align: center;
        color: #fff;
        font-size: 30px;
        background-color: #1c8ffe;
        border-radius: 30px;
      }
    }
  }
  & .docutor-intro {
    margin-bottom: 12px;
    background-color: #fff;
    padding: 30px;
    > p {
      font-size: 24px;
      font-weight: 400;
      color: #666;
      width: 85px;
      height: 41px;
      background: rgba(40, 172, 255, 0.1);
      text-align: center;
      line-height: 41px;
      border-radius: 6px 0px 0px 6px;
    }
    > span {
      padding: 15px;
      font-size: 26px;
      color: #333;
    }
  }
  & > .evaluate-box {
    background-color: #fff;
    font-size: 24px;
    color: #333;
    > li {
      padding: 15px 30px;
      > .evaluate-name {
        justify-content: space-between;
        align-items: center;
        margin-bottom: 36px;
        > .cv {
          > img {
            display: block;
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }
          > .star-box {
            margin-left: 23px;
            > .star {
              width: 26px;
              height: 26px;
              display: inline-block;
            }
          }
        }
        > p {
          > span {
            font-size: 24px;
            transform: scale(20/24);
            color: #999;
          }
        }
      }
    }
  }

  > .select-date {
    padding: 30px;
    background-color: #fff;
  }
}
.icon-star {
  background-image: url("../../assets/images/gold_star.png");
}
</style>
