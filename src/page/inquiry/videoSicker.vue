<template>
  <div class="vg">
    <div class="video-sick flex-r">
      <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg" alt>
      <div class="docutor-message">
        <p class="docutor-place">
          <span class="name">李志勇</span>
          <span class="partment">皮肤科</span>
          <span class="main">主治医师</span>
        </p>
        <p class="hospital-section">河北医科大学第二医院</p>
        <p class="docutor-price">￥200/次 (15分钟）</p>
      </div>
    </div>
    <group gutter="0">
      <cell title="视频咨询服务说明" is-link></cell>
    </group>
    <group gutter="5px">
      <cell title="就诊人" value="就诊人 18652142142124" is-link></cell>
      <cell title="预约时间" value="2018-04-24 下午" is-link></cell>
    </group>
    <!-- list2 -->
    <div class="add-sick">
      <p class="add-sick-title vux-1px-b">病情描述</p>
      <ul class="sick-inner">
        <li>
          1.症状、疾病和身体状况
          2.症状发生的时间、症状、部位、持续时间、有无伴随症状
          3.吃过什么药物
          4.如就诊过，提供医生诊断、治疗经过
          5.既往病史
        </li>
      </ul>
      <!-- 上传照片 -->
      <div class="add-proto vux-1px-t">
        <p>上传照片</p>
        <div class="file-img-box">
          <div class="file-img">
            <span class="iconfont icon-jiahao" style="color:#aaa;"></span>
          </div>
        </div>
        <span>病症部位，检查报告等辅助资料（限X张）</span>
      </div>
      <!-- 接受协议 -->

      <div class="protocol vux-1px-t" @click="isReceive=!isReceive">
        <span class="funbg icon-prococal" :class="{'icon-nprococal':!isReceive}"></span>
        <span>接收协议</span>
      </div>
      <!-- <div class="protocol" v-if="cur==0" @click="cur=0">
        <span class="funbg icon-nprococal"></span>
        <span>接收协议</span>
      </div>-->
    </div>
    <div class="bg-btn vux-1px-t">
      <div class="dis-btn">立即咨询</div>
    </div>
    <!-- 确认就诊人 -->
    <div class="cover" v-if="false">
       <div class="sure-sick">
          <p class="title">确认就诊人</p>
          <p class="content">刘航 电话：1851611421</p>
          <ul class="sick-btn">
            <li>取消</li>
            <li>确认</li>
          </ul>
        </div>
    </div>
    
  </div>
</template>
<script>
import { Cell, Group, TransferDomDirective as TransferDom, XDialog } from "vux";
export default {
  data() {
    return {
      isReceive: true,
      isx: true
    };
  },
  directives: {
    TransferDom
  },
  components: {
    Cell,
    Group,
    XDialog
  },
  beforeRouteEnter(to, from, next) {
    console.log("进来了");
    document.getElementById("QF").innerHTML = "描述病状";
    next();
  }
};
</script>
<style lang="less" scoped>
.vg {
  padding-bottom: 140px;
}
.dis-btn {
  text-align: center;
  height: 88px;
  position: absolute;
  left: 22px;
  right: 22px;
  bottom: 22px;
  background: rgba(66, 160, 226, 1);
  border-radius: 6px;
  font-size: 34px;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 88px;
}
.bg-btn {
  height: 140px;
  background-color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
.video-sick {
  background-color: #fff;
  padding: 30px 25px;
  align-items: center;
  > img {
    width: 110px;
    height: 110px;
    display: block;
    border-radius: 50%;
    margin-right: 26px;
  }
  > .docutor-message {
    font-size: 26px;
    color: #333;
    > .docutor-place {
      > .name {
        font-size: 30px;
      }
      > .department {
      }
      > .main {
      }
    }
    > .hospital-section {
      color: #999;
    }
    > .docutor-price {
      color: #ff780a;
    }
  }
}
.add-sick {
  padding: 0 23px;
  background-color: #fff;
  margin-bottom: 22px;
  margin-top: 10px;
  > .add-sick-title {
    font-size: 30px;
    color: #333;
    padding: 20px 0;
  }
  > .add-person {
    padding: 30px 0;
    > li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 149px;
      height: 66px;
      background: rgba(238, 238, 238, 1);
      border-radius: 4px;
    }
  }
  > .sick-inner {
    padding: 30px 0;
    font-size: 26px;
    color: #999;
  }
  > .add-proto {
    padding: 30px 0;
    > p {
      font-size: 30px;
      color: #333;
    }
    > .file-img-box {
      margin: 30px 0;
      > .file-img {
        width: 90px;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px dashed #aaa;
      }
    }
    > span {
      font-size: 22px;
      color: #999;
    }
  }
  > .protocol {
    padding: 30px 0;
    display: flex;
    align-items: center;
    font-size: 26px;
    color: #333;
    > span:first-child {
      width: 36px;
      height: 36px;
      display: block;
      margin-right: 12px;
    }
  }
}
.sure-sick {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -600px/2;
  margin-top: -342px/2;
  width: 600px;
  height: 342px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
  font-size: 34px;
  color: #666;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  > .title {
    color: #333;
  }
  > .content {
    font-size: 30px;
  }
  > .sick-btn {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    > li {
      width: 250px;
      height: 88px;
      background: rgba(240, 240, 240, 1);
      border-radius: 6px;
      color: #7F7F7F;
      line-height: 88px;
      text-align: center;
    }
    >li:last-child{
      color: #42A0E2;
    }
  }
}
.icon-prococal {
  background-image: url("../../assets/images/jzr_ico_chose_set@2x.png");
}
.icon-nprococal {
  background-image: url("../../assets/images/jzr_ico_chose_nor@2x.png");
}
</style>
