<template>
  <div class="report vg">
    <Xtab :tabArr="tabArr"/>
    <ul class="report-list">
      <li class="flex-r" @click="changeJump('/queryReportList',{})">
        <div class="report-left flex-r">
          <p>检验报告</p>
          <i class="funbg"></i>
        </div>
        <i class="funbg icon-report1"></i>
      </li>
      <li class="flex-r">
        <div class="report-left flex-r">
          <p>检验报告</p>
          <i class="funbg"></i>
        </div>
        <i class="funbg icon-report2"></i>
      </li>
    </ul>
  </div>
</template>
<script>
import Xtab from "@/components/tab.vue";
export default {
  data() {
    return {
      tabArr: [{ id: 1, title: "门诊" }, { id: 2, title: "住院" }]
    };
  },
  beforeRouteEnter(to, from, next) {
    document.getElementById("QF").innerHTML = "报告查询";
    next();
  },
  components: {
    Xtab
  }
};
</script>
<style lang="less" scoped>
.report-list {
  padding: 15px;
  > li {
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    background-color: #fff;
    padding: 30px;
    margin-bottom: 20px;
    align-items: center;
    justify-content: space-between;
    font-size: 30px;
    color: #000;
    font-family: PingFangSC-Light;
    font-weight: 300;
    color: rgba(51, 51, 51, 1);
    line-height: 71px;
    > .report-left {
      flex: 3;
      align-items: center;
      > i {
        width: 26px;
        height: 26px;
        display: block;
        background-image: url("../../assets/images/list_ico_qec@2x.png");
        margin-left: 30px;
      }
    }
    > i {
      // flex: 1;
      width: 70px;
      height: 70px;
      display: block;
      //   background-image: url("../../assets/images/list_ico_-inspect@2x.png");
    }
  }
}
.icon-report1 {
  background-image: url("../../assets/images/list_ico_-inspect@2x.png");
}
.icon-report2 {
  background-image: url("../../assets/images/list_ico_test@2x.png");
}
</style>


