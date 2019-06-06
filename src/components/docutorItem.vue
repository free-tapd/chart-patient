<template>
  <div class="docutor-list" @click="jump(doctorItem)">
    <!-- 医生列表   页面 -->
    <div class="docutor-message flex-r vux-1px-b ">
      <div class="img-box">
        <figure>
          <!-- <img src="../assets/images/default-doctor.png" alt="" class="img-user" width="100%" v-if="!doctorItem.doctorImg"/> -->
           <img :src="doctorItem.doctorImg" alt class="img-user" width="100%" @error="setErrorImg"/>
        </figure>
       
        <p class="is-online-box" :style="{backgroundColor:doctorItem.online=='1'?'#2d9ff1':'#c2c2c2'}"> <span>{{doctorItem.online=='1'?"在线":"离线"}}</span> </p>
      </div>
      <div class="flex-c profession ">
        <!-- first -->
        <div class="docutor-lv flex-r">
          <!-- 医生信息 -->
          <div class="docutor-name">
            <div class="docutor-skill">
              <p class="docutor-title">{{doctorItem.doctorName}}</p>
              <span class="docutor-grade">{{doctorItem.titleName}}</span>
              <span class="docutor-partment">{{doctorItem.sectionName}}</span>
            </div>
            <!-- 所属医院 -->
            <p class="hospital-name">{{doctorItem.hospitalName}}</p>
            <div class="score">
             
              <!-- <span class="icon-star-pink funbg" v-for="v in parseInt(doctorItem.judgeStars)?parseInt(doctorItem.judgeStars):0" :key="v"></span> -->
             <span class="icon-star-pink funbg"></span>
              <span style="color:#FB8716;">  &nbsp;&nbsp;{{doctorItem.judgeStars }}分</span>
              <span>{{doctorItem.orderCount}}次咨询</span>
            </div>
          </div>
          <!-- 关注 -->
          <!-- <div class="follow-btn">关注</div> -->
          <!-- <div class="is-online">
            <i></i>
            <p>在线</p>
          </div> -->
        </div>
        <!-- seconed -->
        <!-- 一生的业务信息 -->
        <div class="follow-msg flex-r ellipsis"><span style="color:#808080;">擅长:</span> {{doctorItem.goodAt}}
        </div>
        <div class="server-price flex-r vux-1px-t">
          <p class="flex-r" v-for="(fun,index) in doctorItem.doctorFunList" :key="index">
            <!-- <i class="funbg" :style="{backgroundImage:`url(${fun.funIconOff})`}" v-if="fun.status=='0'"></i> -->
            <i class="funbg" :style="{backgroundImage:`url(${fun.funIconOn})`}" v-if="fun.status=='1'"></i>
            <span v-if="fun.status=='1'">￥{{fun.presentPrice}}</span>
            <!-- <span v-else style="color:#999">暂无开通</span> -->
          </p>
          <!-- <p class="flex-r">
            <i class="funbg icon-video"></i>
            <span>￥60</span>
          </p> -->
          <div class="zixun-btn">
            立即咨询
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import defaultImg from "@/assets/images/default-doctor.png"
  export default {
    props:{
      doctorItem:{
        type:Object,
        default(){
          return {doctorId:1}
        }
      }
    },
    methods:{
      jump(item){
        this.$emit('doctorDetail',item)
      },
      goChart(item){
        this.$emit('goChart',item)
      },
        setErrorImg(e){
        //  console.log(e);
        //  console.log(e.target.src);
        e.target.src=defaultImg

         
       }
    }
  };

</script>
<style lang="less" scoped>
  .docutor-message {
    padding: 30px;
    background-color: #fff;
    // margin-bottom: 20px;
    font-size: 26px;
    color: #666;

    >.img-box {
      flex: 1;

      >figure {
        display: block;
        width: 80px;
        height: 80px;
        margin-bottom: 18px;
        >.img-user{
          border-radius: 50%;
          width: 100%;
          height: 100%;
        }
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
      flex: 5;

      >.docutor-lv {
        align-items: center;
        justify-content: space-between;

        >.docutor-name {
          display: flex;
          flex-direction: column;
          align-items: baseline;

          >.hospital-name {
            font-size: 24px;
            // transform: scale(22/24);
            font-weight: 500;
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
              font-weight: 500;
              color: rgba(51, 51, 51, 1);
              margin-left: 30px;
            }

            >.docutor-partment {
              font-size: 24px;
              font-weight: 500;
              color: rgba(51, 51, 51, 1);
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
              transform: scale(22/24);
            }

            >span:last-child {
              font-size: 24px;
              transform: scale(22/24);
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
        padding-right: 140px;
        color: #2D9FF1;
        flex-wrap: wrap;

        >p {
          // margin-bottom: 30px;
          padding: 15px 0;
          width: 50%;
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
          // margin-left: 50px;
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
        font-size: 24px;
        color: #999;

      }
    }
  }

  .icon-video {
    background-image: url('../assets/images/inquiry/video.png') !important;
  }

</style>
