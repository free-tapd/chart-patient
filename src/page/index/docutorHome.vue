<template>
  <div class="docutor-home vg">
    <!-- 医生主页 -->
    <div class="docutor-message flex-r">
      <div class="img-box">
        <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg" alt>
      </div>
      <div class="flex-c profession">
        <!-- first -->
        <div class="docutor-lv flex-r">
          <!-- 医生信息 -->
          <div class="docutor-name">
            <p class="docutor-title">李素珍</p>
            <p>
              <span>主任医师</span>
              <span>妇科</span>
            </p>
            <p>
              <span>河北大学第二医院</span>
            </p>
          </div>
          <!-- 关注 -->
          <div class="follow-btn">关注</div>
        </div>
        <!-- seconed -->
        <!-- 一生的业务信息 -->
        <div class="follow-msg flex-r">
          <div class="msg-item">
            <p>324</p>
            <p>咨询</p>
          </div>
          <div class="msg-item">
            <p>324</p>
            <p>咨询</p>
          </div>
          <div class="msg-item">
            <p>324</p>
            <p>咨询</p>
          </div>
        </div>
      </div>
    </div>
    <!--zixunfangshi -->
    <ul class="consultative flex-r">
      <!-- 咨询 -->
      <li>
        <img src="../../assets/images/pic1.png" alt>
        <p class="consultative-title">预约挂号</p>
        <span>￥30元/次</span>
      </li>
      <li>
        <img src="../../assets/images/pic2.png" alt>
        <p class="consultative-title">图文咨询</p>
        <span>￥30元/次</span>
      </li>
      <li>
        <img src="../../assets/images/pic3.png" alt>
        <p class="consultative-title">视频问诊</p>
        <span>￥30元/次</span>
      </li>
      <li>
        <img src="../../assets/images/pic4.png" alt>
        <p class="consultative-title">电话问诊</p>
        <span>￥30元/次</span>
      </li>
    </ul>
    <!-- 擅长 -->
    <div class="skill">
      <div class="list-skill vux-1px-b">
        <p class="flex-r">
          <span class="icons funbg icon-zan"></span>
          <span>擅长</span>
        </p>
        <span class="inner">Edgewise矫正技术、Tip—Edge矫治技术、MBT矫治技术、活动矫治技术、功能性矫治技术</span>
      </div>
      <div class="list-skill">
        <p class="flex-r">
          <span class="icons funbg icon-jianjie"></span>
          <span>擅长</span>
        </p>
        <span class="inner ellipsis-2">Edgewise矫正技术、Tip—Edge矫治技术、MBT矫治技术、活动矫治技术、功能性矫治技术</span>
      </div>
    </div>
    <!-- 评价 -->
    <div class="discuess">
      <p class="flex-r vux-1px-b">
        <span class="icons funbg icon-pinjia"></span>
        <span>评价</span>
      </p>
      <div class="discuess-inner flex-c vux-1px-b" v-for="v in 5" :key="v">
        <div class="star-box flex-r">
          <span>王**</span>
          <div class="star">
            <span class="star-list funbg icon-star"></span>
            <span class="star-list funbg icon-star"></span>
            <span class="star-list funbg icon-star"></span>
            <span class="star-list funbg icon-star"></span>
            <span class="star-list funbg icon-star"></span>
          </div>
          <span>2017-10-22</span>
        </div>
        <div class="dis-tag">
          <span v-for="v in 4" :key="v">及时回复</span>
        </div>
        <div class="dis-inner">
          医生对我的回答很有帮助，以后小病可以先在线问医生啦，真方
          便！
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {}
};
</script>
<style lang="less" scoped>
.docutor-home {
  > .docutor-message {
    padding: 30px;
    background-color: #fff;
    margin-bottom: 20px;
    font-size: 26px;
    color: #666;
    > .img-box {
      flex: 1;

      > img {
        display: block;
        border-radius: 50%;
        width: 124px;
        height: 124px;
      }
    }
    > .profession {
      flex: 3;
      > .docutor-lv {
        align-items: center;
        justify-content: space-between;
        > .docutor-name {
          > .docutor-title {
            font-size: 34px;
            color: #333;
            font-weight: bold;
            margin-bottom: 20px;
          }
        }
        > .follow-btn {
          width: 100px;
          height: 40px;
          border-radius: 20px;
          line-height: 40px;
          text-align: center;
          color: #fff;
          font-size: 24px;
          background-color: #5eb7f9;
        }
      }
      > .follow-msg {
        align-items: center;
        justify-content: flex-start;
        margin-top: 30px;
        > .msg-item {
          > p:first-child {
            font-size: 30px;
            color: #333;
            font-weight: bold;
          }
          > p:last-child {
            font-size: 24px;
            color: #999;
          }
        }
        > .msg-item:not(:first-child) {
          margin-left: 131px;
        }
      }
    }
  }
  > .consultative {
    padding: 30px;
    background-color: #fff;
    align-items: center;
    margin-bottom: 20px;
    > li {
      flex: 1;
      text-align: center;
      > img {
        width: 96px;
        height: 80px;
        display: block;
        margin: 0 auto;
        margin-bottom: 15px;
      }
      > .consultative-title {
        font-size: 28px;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        line-height: 28px;
      }
      > span {
        line-height: 1;
        font-size: 12px;
        transform: scale(0.9);
        color: #ff6c00;
        line-height: 12px;
      }
    }
  }
  > .skill {
    margin-bottom: 20px;
    padding: 15px 30px;
    background-color: #fff;
    > .list-skill {
      font-size: 28px;
      color: #666;
      padding: 15px 0;
      > p {
        align-items: center;
        justify-content: flex-start;
        > span:last-child {
          margin-left: 15px;
        }
      }
      > .inner {
        font-size: 26px;
        color: #333;
      }
    }
  }
  > .discuess {
    background-color: #fff;
    > p {
      font-size: 28px;
      color: #666;
      align-items: center;
      padding: 30px;
      > span:last-child {
        margin-left: 15px;
      }
    }
    > .discuess-inner {
      padding: 30px;
      > .star-box {
        width: 100%;
        align-items: center;
        justify-content: space-between;
        font-size: 24px;
        color: #999;
        > .star {
          display: flex;
          align-items: center;
          > .star-list {
            width: 29px;
            height: 29px;
            display: block;
          }
        }
      }
      > .dis-tag {
        margin-top: 30px;
        > span {
          background: rgba(242, 242, 242, 1);
          border-radius: 4px;
          padding: 8px 15px;
          color: #808080;
          text-align: center;
          font-size: 24px;
          line-height: 36px;
        }
        > span:not(:first-child) {
          margin-left: 18px;
        }
      }
      >.dis-inner{
          font-size: 24px;
          color: #030E13;
          margin-top: 30px;
      }
    }
  }
}
.icons {
  width: 27px;
  height: 27px;
  display: block;
}
.icon-zan {
  background-image: url("../../assets/images/zan@2x.png");
  // background-position: 0 0;
}
.icon-jianjie {
  background-image: url("../../assets/images/jianjie.png");
}
.icon-pinjia {
  background-image: url("../../assets/images/blur_star.png");
}
.icon-star {
  background-image: url("../../assets/images/gold_star.png");
}
</style>
