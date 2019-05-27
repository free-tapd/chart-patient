<template>
  <div style="background:#fff;">
    <div class="cell-input1" :class="{'vux-1px-b':isBorder}">
      <div class="left-title">
        <slot name="icon"></slot>
        <span class="cell-title" v-if="!isCode" :style="{color:tColor}">{{cell.title}} <span
            class="iconfont icon-jiufuqianbaoicon14" v-if="isRquire"></span> </span>
        <input type="text" placeholder="请输入验证码" v-else>
      </div>

      <!-- 0 展示效果 1 input 可以输入效果 2 number 3solt-->
      <div class="type-box flex-r" v-if="cell.type==0" :style="{color:vColor}" :class="{'isRight':isRight}">
        <span>{{cell.value}} </span>
        <span class="iconfont icon-right" style="font-size:16px;margin-left:6px;" v-if="islink"></span>
      </div>
      <div class="input-type" v-if="cell.type==1">
        <input type="text" :placeholder="cell.placeholder" :class="{'isRight':isRight}"  :value="value" @input="onInput($event.target.value)"/>
      </div>
      <div class="input-type" v-if="cell.type==2">
        <input type="number" :placeholder="cell.placeholder" :class="{'isRight':isRight}" />
      </div>
      <div class="slot-box" v-if="cell.type==3" :class="{'isRight':isRight}">
        <slot name="ismean"></slot>
        <span class="iconfont icon-right" style="font-size:16px;margin-left:6px;" v-if="islink"></span>
      </div>
      <!-- 专门试用与title传值 -->
      <div class="type-box flex-r" v-if="cell.type==4" :style="{color:vColor}" :class="{'isRight':isRight}">
        <span>{{propValue}}</span>
        <span class="iconfont icon-right" style="font-size:16px;margin-left:6px;" v-if="islink"></span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        cell: {}
      };
    },
    model:{
          prop: "value", //绑定的值，通过父组件传递
          event: "onInput" //自定义时间名
    },

    props: {
      // title:{
      //     type:String,
      //     default:''
      // },
      value:{
        type:String,
        default:""
      },
      propValue: {
        type: String,
        default: ""
      },
      isRquire:{
        tyep:Boolean,
        default:false
      },
      isRight: {
        type: Boolean,
        default: false
      },
      islink: {
        type: Boolean,
        default: false
      },
      isCode: {
        type: Boolean,
        default: false
      },
      isBorder: {
        type: Boolean,
        default: true
      },
      tColor: {
        type: String,
        default: "#333"
      },
      vColor: {
        type: String,
        default: "#999"
      }
    },
    created() {
      console.log(this.$attrs); //注意这里
      this.cell = this.$attrs;
    },
    mounted() {},
    methods: {
      onInput(val){
        
        this.$emit('onInput',val)
      }
    }
  };

</script>
<style lang="less" scoped>
  .isRight {
    text-align: right !important;
    justify-content: flex-end !important;
  }

  .cell-input1 {
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 21px 0px 21px;
    background-color: #fff;
    font-size: 30px;
    color: #999;

    >.left-title {
      display: flex;
      align-items: center;
      flex: 1;

      >.cell-title {
        >span {
          vertical-align: middle;
          color: #EA3729;
          // line-height: 1;
          margin-left: 15px;
          display: inline-block;
          font-size: 24px;
          transform: scale(.7);
        }
      }

      >input[type="text"] {
        border: none;

        color: #333;
      }
    }

    >.type-box {
      align-items: center;
      flex: 3;
    }

    >.input-type {
      flex: 3;

      >input[type="text"] {
        border: none;
        width: 100%;
        min-width: 153px;
        color: #333;

      }

      >input[type="number"] {
        border: none;
        width: 219px;
        min-width: 219px;
        color: #333;
      }
    }
  }

  .slot-box {
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

</style>
