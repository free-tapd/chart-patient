<template>
  <div class="vg departments">
    <!-- 选择科室 -->
    <!-- 预约挂号 -->
    <!-- <div class="departments-hospital-title vux-1px-b flex-r">
      <span>河北省人民第六医院</span>
      <span class="funbg icon-choose"></span>
    </div> -->
    <div class="departments-list flex-r">
      <!-- 左边 -->
      <ul class="department-left">
        <li v-for="(v,i) in 10" :key="i" :class="{'active': i==cur}" @click="cur=i">石家庄</li>
      </ul>
      <!-- 右边 -->
      <ul class="department-right">
        <li v-for=" v in 10" :key="v" class="flex-r" @click="changeJump('/departments',{})">
            <p class=" funbg icon-hos"></p>
            <div class="hospital-inner">
                <p> 河北医科大学第二医院</p>
                <span>三级甲等</span>
            </div>

        </li>
      </ul>
    </div>

    <!-- 背景框 -->
    <div class="cover" v-if="isShow">
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
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: true,
      cur: 0
    };
  }
};
</script>
<style lang="less" scoped>
.active {
  color: #42a0e2;
  background-color: #fff;
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
  > .departments-list {
    // justify-content: baseline;
    font-size: 30px;
    > .department-left {
      // position: fixed;
      // bottom: 0;
      // left: 0;
      flex: 1;
      > li {
        padding: 30px 0;
        text-align: center;
      }
    }
    > .department-right {
      flex: 3;
      background-color: #fff;
      > li {
          align-items: center;
        padding: 30px 0;
        margin-left: 40px;
        >.icon-hos{
            width: 68px;
            height: 68px;
            background-image: url('../../assets/images/logo1.png');
            
        }
        >.hospital-inner{
            margin-left: 15px;
            >p{

            }
            >span{
                font-size: 24px;
                color: #999;
            }
        }
      }
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
}
</style>


