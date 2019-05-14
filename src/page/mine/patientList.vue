<template>
  <div class="vg">
    <ul class="patient-list">
      <li @click="changeJump('/addPatient')">
        <i>谢</i>
        <div class="patient-text">
          <p class="patient-name">张素贞 <span>(默认)</span></p>
          <p class="patient-age">28岁
            <span class="iconfont icon-nv" style="color:#E66DC5;"></span>
            <span class="iconfont icon-nan" style="color:#329DE5;"></span>

          </p>
        </div>
      </li>
    </ul>
    <p class="warm-text"> 你还可以添加<span style="color:#2D9FF1;">6</span> 位就诊人</p>
    <div class="add-btn-box">
        <p>+添加就诊人</p>
    </div>
  </div>
</template>
<script>
  export default {

  }

</script>
<style lang="less" scoped>
  .patient-list {
    margin-top: 22px;

    >li {
      width: 680px;
      height: 150px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      margin: 0 auto;
      display: flex;
      align-items: center;

      >i {
        display: block;
        width: 80px;
        height: 80px;
        background: rgba(77, 169, 235, 1);
        border-radius: 50%;
        font-size: 38px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 80px;
        text-align: center;
        font-style: normal;
        margin-left: 38px;
      }

      >.patient-text {
        line-height: 1.3;
        margin-left: 15px;

        >.patient-name {
          font-size: 34px;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 56px;

          >span {
            font-size: 24px;
            font-weight: 400;
            color: rgba(0, 160, 234, 1);
            margin-left: 15px;
          }
        }

        >.patient-age {
          font-size: 24px;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);

          >span {
            margin-left: 15px;
          }
        }
      }
    }
  }
.warm-text{
font-size:24px;
font-family:PingFang-SC-Regular;
font-weight:400;
color:rgba(128,128,128,1);
line-height:56px;
text-align: center;
margin-top: 57px;
}
.add-btn-box{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
height:134px;
background:rgba(255,255,255,1);
box-shadow:0px -1px 0px 0px rgba(230,230,230,1);
display: flex;
align-items: center;
justify-content: center;
>p{
    width:670px;
height:88px;
background:#00A0EA;
border-radius:10px;
font-size:32px;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(255,255,255,1);
line-height:88px;
text-align: center;
}
}
</style>
