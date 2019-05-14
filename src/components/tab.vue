<template>
    <div class="tab" ref="tabHeight">
    <tab :bar-active-color="barColor" :active-color="activeColor" :default-color="defaultColor" :line-width="1" >
        <tab-item v-for="(v,i) in tabArr" :selected="i==cur"  :key="i" @on-item-click="handlerId(v)">{{v.title}}</tab-item>
    </tab>
    </div>
</template>

<script>
import { Tab, TabItem } from 'vux'

export default {
    props:{
      tabArr:{
          type:Array,
          default:[]
      },
      defaultColor:{
        type:String,
        default:'#333'
      },
      activeColor:{
        type:String,
        default:'#1ca3fe'
      },
      barColor:{
        type:String,
        default:'#1ca3fe'
      }  
    },
    data(){
      return {
        cur:0
      }
    },
    mounted(){
      console.log(this.defaultColor)
    },
  components: {
    Tab,
    TabItem
  },
  mounted(){
    var cHeight=this.$refs.tabHeight.offsetHeight
    console.log('组件的高度',cHeight)
  },
  methods:{
      handlerId(v){
          this.$emit('getItem',v)
      }
  }
}
</script>
