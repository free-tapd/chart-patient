<template>
  <div class="docutor-list">
    <!-- 医生列表   页面 -->
    <div class="docutor-message flex-r ">
      <div class="img-box">
        <img src="../assets/images/inquiry/head.jpg" alt>
        <p class="is-online-box"> <span>在线</span> </p>
      </div>
      <div class="flex-c profession vux-1px-b">
        <!-- first -->
        <div class="docutor-lv flex-r">
          <!-- 医生信息 -->
          <div class="docutor-name">
            <div class="docutor-skill">
              <p class="docutor-title">李素珍</p>
              <span class="docutor-grade">主任医师</span>
              <span class="docutor-partment">消化科</span>
            </div>
            <!-- 所属医院 -->
            <p class="hospital-name" >好的，谢谢</p>
            <!-- <div class="score">
              <span class="icon-star-pink funbg"></span>
              <span>5.0</span>
              <span>40次咨询</span>
            </div> -->
          </div>
          <!-- 关注 -->
          <!-- <div class="follow-btn">关注</div> -->
          <!-- <div class="is-online">
            <i></i>
            <p>在线</p>
          </div> -->
          <span class="chart-date"> 09:54:28</span>
        </div>
        <!-- seconed -->
        <!-- 一生的业务信息 -->
        <div class="follow-msg flex-r ellipsis" > 您好，我最近感觉痛经，但是以前没有这您好，我最近感觉痛经，但是以前没有这... <span class="badge-box"><badge text="1"></badge></span>
        </div>
        <!-- 暂未评价 -->
        <div class="no-evluate"> 
            <div class="my-eva">
                <span>我的评价</span>
                <i class="icon-star-pink funbg"></i>
                <i class="icon-star-pink funbg"></i>
                <i class="icon-star-pink funbg"></i>
                <i class="icon-star-pink funbg"></i>
                <i class="icon-star-pink funbg"></i>
            </div>
             <div class="zixun-btn">
            立即咨询
          </div>

        </div>
        <!-- <div class="server-price flex-r vux-1px-t">
          <p class="flex-r">
            <i class="funbg"></i>
            <span>￥30</span>
          </p>
          <p class="flex-r">
            <i class="funbg icon-video"></i>
            <span>￥60</span>
          </p>
          <div class="zixun-btn">
            立即咨询
          </div>
        </div> -->
        
      </div>
    </div>
  </div>
</template>
<script>
import {Badge} from "vux";

  export default {
      components:{
          Badge,
      }
  };

</script>
<style lang="less" scoped>
.badge-box{
    position: absolute;
    right: 0;
    top: -3px;
}
.chart-date{
font-size:24px;
font-weight:400;
color:rgba(153,153,153,1);
}
.no-evluate{
    color: #999;
    font-size: 26px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
}
 .icon-star-pink {
              width: 28px;
              height: 28px;
              display: inline-block;
              background-image: url("../assets/images/inquiry/gold_star2.png");
            }
  .docutor-message {
    padding: 0 30px;
    background-color: #fff;
    // margin-bottom: 20px;
    font-size: 26px;
    color: #666;

    >.img-box {
      flex: 1;
        padding: 30px 0; 
      >img {
        display: block;
        border-radius: 50%;
        width: 80px;
        height: 80px;
        margin-bottom: 18px;
      }

      >.is-online-box {
        width: 74px;
        height: 30px;
        background: #5CB3F1;
        border-radius: 15px;


        line-height: 30px;
        text-align: center;

        >span {
          display: block;
          font-size: 24px;
          color: #fff;
          transform: scale(18/24);
        }
      }
    }

    >.profession {
        padding: 30px 0;
      flex: 5;

      >.docutor-lv {
        align-items: baseline;
        justify-content: space-between;

        >.docutor-name {
          display: flex;
          flex-direction: column;
          align-items: baseline;

          >.hospital-name {
            font-size: 26px;
            // transform: scale(0.86);
            color: #333;
          }

          >.docutor-skill {
            display: flex;
            align-items: center;
            line-height: 40px;
            margin-bottom: 20px;

            >.docutor-title {
              font-size: 34px;
              color: #333;
              font-weight: bold;
            }

            >.docutor-grade {
              font-size: 24px;
              font-weight: 400;
              color: rgba(51, 51, 51, 1);
              margin-left: 30px;
            }

            >.docutor-partment {
              font-size: 24px;
              font-weight: 400;
              color: rgba(51, 51, 51, 1);
            //   transform: scale(0.86);
              margin-left: 30px;
            }
          }

          >.score {
            display: flex;
            align-items: center;
            color: #999;
            vertical-align: baseline;

            >.icon-star-pink {
              width: 22px;
              height: 22px;
              display: block;
              background-image: url("../assets/images/inquiry/gold_star2.png");
            }

            >span:nth-child(2) {
              color: #ff6e04;
              font-size: 24px;
              transform: scale(0.86);
            }

            >span:last-child {
              font-size: 24px;
              transform: scale(0.86);
            }
          }
        }

        >.is-online {
          display: flex;
          align-items: center;

          >i {
            width: 11px;
            height: 11px;
            background-color: #70e100;
            border-radius: 50%;
            display: block;
          }

          >p {
            font-size: 24px;
            color: #999;
            transform: scale(18/24);
          }
        }

        >.follow-btn {
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

      >.server-price {
        position: relative;
        // padding: 30px 0; 
        padding-top: 30px;
        margin-top: 30px;
        align-items: center;
        font-size: 28px;
        color: #2D9FF1;

        >p {
          >i {
            width: 38px;
            height: 38px;
            display: block;
            background-image: url("../assets/images/inquiry/online.png");
            margin-right: 26px;
          }

          >span {}
        }

        >p:not(:first-child) {
          margin-left: 50px;
        }

        >.zixun-btn {
          width: 140px;
          height: 56px;
          background: #2D9FF1;
          border-radius: 10px;
          font-size: 24px;
          color: #fff;
          text-align: center;
          line-height: 56px;
          position: absolute;
          right: 0;
        }
      }

      >.follow-msg {
        font-size: 26px;
        color: #333;
        position: relative;

      }
    }
  }

  .icon-video {
    background-image: url('../assets/images/inquiry/video.png') !important;
  }
  .zixun-btn {
          width: 140px;
          height: 56px;
        //   background: #5F89FA;
        border:1px solid #479EE4;
          border-radius: 10px;
          font-size: 24px;
          color: #479EE4;
          text-align: center;
          line-height: 56px;
        //   position: absolute;
        //   right: 0;
        //   bottom: 18px;
        }

</style>
