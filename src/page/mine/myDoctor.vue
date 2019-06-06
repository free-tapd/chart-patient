<template>
  <div class="my-doctor">
    <ul class="doctor-box">
      <li class="doctor-item" v-for="(v,i) in doctorArr " :key="i" @click="changeJump('/doctorHome',{doctorId:v.doctorId})">
        <div class="img-box">
          <figure>
             <img :src="v.doctorImg" @error="setErrorImg" alt=""/>
          </figure>
         
          <div class="is-online" :class="{'active-online':v.online=='true'}">
            <p>{{v.online=='true'?"在线":"离线"}} </p>
          </div>
        </div>
        <div class="doctor-message vux-1px-b">
          <div class="doctor-name">
            <h5>{{v.doctorName}}</h5> <span>{{v.sectionName}}&nbsp; {{v.titleName}}</span>
          </div>
          <p class="doctor-address">{{v.hospitalName}}</p>
        </div>
      </li>
    </ul>
     <div class="no-doctor" v-if="doctorArr.length==0">
          <span class="bg-image"></span>
          <span class="no-text"> 暂无数据</span>
        </div>
  </div>
</template>
<script>
import defaultImg from "@/assets/images/default-doctor.png"
  export default {
    data(){
      return {
        doctorArr:[]
      }
    },
    computed:{
      userId(){
        return this.$store.state.userId
      }
    },
    mounted(){
      this.getMyDoctor()
    },
    methods:{
      // 我的医生列表
      getMyDoctor(){
        this.$post('doctor/getFollowDoctorByUserId',{userId:this.userId}).then(res=>{
          if(res.code==0){
            this.doctorArr=res.data;
          }
        })
      },
         setErrorImg(e){
         console.log(e);
        //  console.log(e.target.src);
        e.target.src=defaultImg

         
       }
    }
  }

</script>
<style lang="less" scoped>

.active-online{
     background-color: #5CB3F1!important;
}
  .my-doctor {
    >.doctor-box {
      background-color: #fff;
      color: #333;
      font-size: 24px;

      >.doctor-item {
        // padding: 30px 30px 15px 30px;
        height: 174px;
        // padding-left: 30px;
        display: flex;
        align-items: center;

        >.img-box {
            flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        //   margin-right: 47px;

          >figure {
            width: 80px;
            height: 80px;
            display: block;
           
            >img{
              width: 100%;
              height: 100%;
              display: block; border-radius: 50%;
            }

          }

          >.is-online {
            width: 74px;
            height: 30px;
            // background: #5CB3F1;
            background-color: #C2C2C2;
            border-radius: 15px;
            color: #fff;
            text-align: center;
            line-height: 30px;
            margin-top: 2px;

            >p {
              transform: scale(18/24);

            }
          }
        }

        >.doctor-message {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            position: relative;
            flex: 4;
          >.doctor-name {
            display: flex;
            align-items: center;

            >h5 {
              font-size: 34px;
              color: rgba(0, 0, 0, 1);
              margin-right: 31px;
            }
          }

          >.doctor-address {
            line-height: 2;
          }
        }
        

      }
    }
  }

</style>
