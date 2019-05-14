<template>
  <div class="vg">
    <group>
      <cell title="医院名称" value="秦皇岛中医院" is-link></cell>
      <cell title="就诊人" value="马素贞" is-link></cell>
      <cell title="类型" value="就诊卡" is-link></cell>
      <cell title="卡号" value="A000130017188553" is-link></cell>
      <!-- <cell :title="$t('Money')" @click.native="onClick" :is-loading="!money" :value="money"></cell>
      <cell :title="$t('Withdraw')" disabled is-link></cell> -->
    </group>

    
    <div class="btn-app">确定添加</div>
  </div>
</template>

<script>
import { Cell,  Group  } from 'vux'

export default {
  mounted () {
   
  },
  components: {
    Group,
    Cell,
   
  },
  methods: {
    onClick () {
      console.log('on click')
    }
  },
  data () {
    return {
     
    }
  }
}
</script>

<style lang="less" scoped>
    .btn-app{

        width: 90%;
        background-color: #42A0E2;
        height: 98px;
        margin: 0 auto;
        line-height: 98px;
        color: #fff;
        font-size: 30px;
        text-align: center;
        margin-top: 93px;
    }
</style>