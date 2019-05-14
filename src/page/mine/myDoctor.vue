<template>
  <div class="my-doctor">
    <ul class="doctor-box">
      <li class="doctor-item" v-for="v in 10 " :key="v" @click="changeJump('/doctorHome',{})">
        <div class="img-box">
          <img src="../../assets/images/inquiry/my_doctor.png" alt="">
          <div class="is-online">
            <p>离线 </p>
          </div>
        </div>
        <div class="doctor-message vux-1px-b">
          <div class="doctor-name">
            <h5>赵素芬</h5> <span>妇科 主任医师</span>
          </div>
          <p class="doctor-address">河北医科大学第二医院</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {

  }

</script>
<style lang="less" scoped>
active-online{
     background-color: #5CB3F1!important;
}
  .my-doctor {
    >.doctor-box {
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

          >img {
            width: 80px;
            height: 80px;
            display: block;
            border-radius: 50%;


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
