<template>
  <div class="vg departments">
    <!-- 选择科室 -->
    <!-- 预约挂号 -->
    <div class="departments-hospital-title vux-1px-b flex-r" ref="q1" @click="isSel=!isSel">
      <span>河北省人民第六医院</span>
      <span class="funbg icon-choose"></span>
    </div>
    <!-- 引入组件xtab -->
    <div class="c" ref="q2">
      <Xtab :tabArr="tabData"/>
    </div>

    <div class="departments-list flex-r">
      <div class="cv flex-r">
        <!-- 左边 -->
        <ul class="department-left">
          <li v-for="(v,i) in 20" :key="i" :class="{'active': i==cur}" @click="cur=i">内科</li>
        </ul>
        <!-- 右边 -->
        <ul class="department-right">
          <li v-for=" v in 20" :key="v" @click="changeJump('/partmentsList',{})">心血管内科</li>
        </ul>
      </div>
    </div>

    <!-- 背景框 -->
    <!-- <div class="cover" v-if="isShow">
      <div class="depart-message-box flex-r">
        <div class="depart-message flex-c">
          <div class="title">预约挂号须知</div>
          <div class="content">
            <div class="c-title">
              <p>1.预约途径</p>
              <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe nulla expedita eius dolorem animi at, quasi ab tenetur perferendis officia necessitatibus, voluptate labore itaque non? Doloremque nulla est ipsa sunt!</span>
              <span
                v-for="v in 5"
                :key="v"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Error esse aut atque veritatis vero nam fugit inventore consectetur? At dolorum aperiam inventore repudiandae quidem sunt sit facere minima dignissimos exercitationem.</span>
            </div>
          </div>
          <div class="understand">
            <p class="c" @click="isShow=!isShow">我已了解</p>
          </div>
        </div>
      </div>
    </div> -->
    <!-- 选择医院 -->
    <div class="cover" v-if="isSel" @click.stop="isSel=!isSel">
      <div class="sel-hospital flex-r">
        <!-- <div class="departments-list flex-r"> -->
        <!-- 左边 -->
        <ul class="department-left">
          <li v-for="(v,i) in 10" :key="i" :class="{'active': i==cur}" @click.stop="cur=i">内科</li>
        </ul>
        <!-- 右边 -->
        <ul class="department-right">
          <li v-for=" v in 10" :key="v" class="flex-r">
            <p class="funbg icon-hos"></p>
            <div class="hospital-inner">
              <p>河北医科大学第二医院</p>
              <span>三级甲等</span>
            </div>
          </li>
        </ul>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import Xtab from "@/components/tab";
import { log } from "util";
export default {
  data() {
    return {
      isShow: true,
      isSel:false,
      cur: 0,
      tabData: [{ id: 1, title: "东院" }, { id: 2, title: "西院" }]
    };
  },
  mounted() {
    var clientHeight =
      document.body.clientHeight || document.documentElement.clientHeight;
    console.log(window.innerHeight);
    console.log(clientHeight);
    console.log(this.$refs.q1.offsetHeight);
    console.log(this.$refs.q2.offsetHeight);
  },
  methods: {
    // jisuan(){
    //   this.
    // }
  },

  components: {
    Xtab
  }
};
</script>
<style lang="less" scoped>
.active {
  color: #42a0e2;
  background-color: #fff;
}
.departments-list {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: (50px+50px) * 2.2;
  overflow: scroll;

  > .cv {
    width: 100%;
    justify-content: baseline;
    align-items: center;
    position: relative;
    font-size: 30px;
  }
}
.department-left {
  background: rgba(248, 248, 248, 1);
  // width: 25%;
  // left: 0;
  // top: 0;
  // bottom: 0;
  flex: 1;
  > li {
    padding: 30px 0;
    text-align: center;
  }
}

.department-right {
  flex: 3;
  background-color: #fff;
  > li {
    align-items: center;
    padding: 30px 0;
    margin-left: 40px;
    > .icon-hos {
      width: 68px;
      height: 68px;
      background-image: url("../../assets/images/logo1.png");
    }
    > .hospital-inner {
      margin-left: 15px;
      > p {
      }
      > span {
        font-size: 24px;
        color: #999;
      }
    }
  }
}
.departments {
  position: relative;
  > .departments-hospital-title {
    font-size: 40px;
    font-weight: bold;
    color: #333;
    padding: 24px 0;
    text-align: center;
    align-items: center;
    justify-content: center;
    > .icon-choose {
      display: block;
      width: 24px;
      height: 12px;
      background-image: url("../../assets/images/choose.png");
      margin-left: 16px;
    }
  }

  & .depart-message-box {
    width: 100%;
    height: 100%;
    align-items: center;
    background-color: transparent;
    justify-content: center;
    > .depart-message {
      background-origin: border-box;
      position: relative;
      width: 600px;
      height: 787px;
      background: rgba(255, 255, 255, 1);
      border-radius: 10px;
      padding: 37px;
      > .title {
        font-size: 30px;
        color: #333;
        text-align: center;
        font-weight: 300;
      }
      > .content {
        // width: 524px;
        height: 483px;
        overflow: scroll;
        font-size: 28px;
        font-family: PingFangSC-Light;
        font-weight: 300;
        color: #666;
        line-height: 36px;
        margin-top: 32px;
        > .c-title {
          > p {
            font-size: 28px;
            color: #333;
            margin-bottom: 15px;
          }
          > span {
            font-size: 24px;
          }
        }
      }
      > .content::-webkit-scrollbar {
        display: none;
        opacity: 0;
      }
      > .understand {
        height: 105px;
        line-height: 105px;
        text-align: center;
        background-color: #f0f0f0;
        color: #42a0e2;
        position: absolute;
        bottom: 37px;
        left: 37px;
        right: 37px;
      }
    }
  }
  & .sel-hospital {
    position: relative;
    height: 549px;
    background-color: #fff;
    overflow: scroll;
    align-items: baseline;
  }
}
</style>


