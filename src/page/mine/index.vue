<template>
  <div class="vg">
    <div class="top" @click="changeJump('/userMessage',{})">
      <img class="top1" src="../../assets/images/inquiry/head.jpg">
      <div class="top2">李凯悦</div>
      <div class="top3"><span>女</span><span>23岁</span></div>
      <span class="to-right funbg"></span>
    </div>
    <div class="center">
      <div class="item" @click="changeJump('/patientList')">
        <div class="item1"><img src="../../assets/images/inquiry/my_manager.png"></div>
        <div class="item2">就诊人管理</div>
        <div class="item3"><img src="../../assets/images/inquiry/array.png"></div>
      </div>
      <div class="item" @click="changeJump('/consultList',{})">
        <div class="item1"><img src="../../assets/images/inquiry/my_record.png"></div>
        <div class="item2">咨询记录</div>
        <div class="item3"><img src="../../assets/images/inquiry/array.png"></div>
      </div>
      <div class="item" @click="changeJump('/myDoctor',{})">
        <div class="item1"><img src="../../assets/images/inquiry/my_doctor.png"></div>
        <div class="item2">我的医生</div>
        <div class="item3"><img src="../../assets/images/inquiry/array.png"></div>
      </div>
    </div>
    <div class="center">
      <div class="item" @click="changeJump('/feedback',{})">
        <div class="item1"><img src="../../assets/images/inquiry/my_manager.png"></div>
        <div class="item2">意见反馈</div>
        <div class="item3"><img src="../../assets/images/inquiry/array.png"></div>
      </div>

    </div>
    <Xfooter :selected="2"/>
  </div>
</template>
<script>
  import Xfooter from '@/components/footer'
  import adpat from "@/utils/adpat"
  export default {
    data() {
      return {};
    },
    components: {
      Xfooter
    }
  }

</script>
<style lang="less">
  html,
  body {
    background: #f7f7f7;
  }

  .top {
    margin-top: .55rem;
    height: 5rem;
    background: #fff;
    position: relative;
    margin-bottom: .5rem;
  }

  .top1 {
    position: absolute;
    left: 0.75rem;
    top: 1.15rem;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 50%;
  }

  .top2 {
    font-size: .85rem;
    font-weight: bold;
    padding-top: 1.4rem;
    padding-left: 4.45rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: absolute;
  }

  .top3 {
    padding-top: 2.8rem;
    position: absolute;
    padding-left: 4.45rem;
    font-size: .65rem;
    color: #808080;
  }

  .top3 span {
    padding-right: .5rem;
  }

  .top4 {
    position: absolute;
    top: 2.2rem;
    width: .4rem;
    height: .65rem;
    right: 1rem;
  }

  .center {
    background: #fff;
    font-size: .75rem;
    margin-bottom: .5rem;
  }

  .item {
    display: flex;
    align-items: center;
    line-height: 2.75rem;
    height: 2.75rem;
  }

  .item1 {
    width: 3rem;
    display: flex;
    align-items: center;
  }

  .item1>img {
    width: 1.4rem;
    height: 1.4rem;
    padding-left: .8rem;
  }

  .item2 {
    flex-grow: 1;
    border-bottom: 1px solid #eee;
  }

  .item3 {
    width: 3rem;
    border-bottom: 1px solid #eee;
  }

  .item3>img {
    padding-left: 1.5rem;
    width: .4rem;
    height: .65rem;
  }

  .top:active {
    background: #ddd;
  }

  .item:active {
    background: #ddd;
  }

  .to-right {
    display: block;
    position: absolute;
    right: 1.3rem;
    top: 50%;
    margin-top: -.325rem;
    width: .4rem;
    height: .65rem;
    background-image: url('../../assets/images/inquiry/array.png');

  }

</style>
