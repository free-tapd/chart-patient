<template>
  <div class="c">
    <ul class="tab-bar vux-1px-t">
      <li>
        <div class="img-box">
          
          <img slot="icon-active" src="../assets/images/inquiry/home_blue.png" v-if="selected==0">
          <img slot="icon" src="../assets/images/inquiry/home.png" v-else>
        </div>
        <span slot="label"  :class="{'active-tab':selected==0}">首页</span>
      </li>
      <li>
        <div class="img-box">
         
          <img slot="icon-active" src="../assets/images/inquiry/msg_blue.png" v-if="selected==1">
           <img slot="icon" src="../assets/images/inquiry/msg.png" v-else>
        </div>
        <span slot="label"  :class="{'active-tab':selected==1}">消息</span>
      </li>
      <li>
        <div class="img-box">
          <img slot="icon-active" src="../assets/images/inquiry/person_blue.png" v-if="selected==2">
          <img slot="icon" src="../assets/images/inquiry/person.png" v-else>
        </div>
        <span slot="label" :class="{'active-tab':selected==2}">我的</span>
      </li>

    </ul>

  </div>
</template>
<script>
  // import func from '../../vue-temp/vue-editor-bridge';
  export default {
    data() {
      return {
        cur: 0,
        tabIndex: 0,
        // selected:0
      }
    },
    props:{
      selected:{
        type:Number,
        default:0
      }
    },
    mounted() {
      document.querySelectorAll('.tab-bar li').forEach( (v,i) => {
        v.addEventListener('click', (e)=> {
          console.log(this)
          this.tabIndex=i
          this.selected=i
          if(this.selected==0){
            this.changeJump('/index')
          }else if(this.selected==1){
            this.changeJump('/inquiry');
          }else{
            this.changeJump('/mine')
          }
        })
      })


    },
    methods: {
      handleClick(index) {
        this.tabIndex = index;
        console.log(this.tabIndex)
      },
      handleClick1(index) {
        console.log(index)
        console.log("点击");
        this.tabIndex = index;
      }
    }
  };

</script>
<style lang="less" scoped>
  .home {
    width: 35px;
    height: 35px;
    background-image: url("../assets/images/tab/registration.png");
  }
  .active-tab{
    color: #2d9ff1!important;
  }
  .tab-bar {
    height: 100px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 0px 0px rgba(230, 230, 230, 1);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;

    >li {
      display: flex;
      flex: 1;
      text-align: center;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      height: 100%;

      >.img-box {
        >img {
          width: 20*2px;
          height: 21*2px;
          display: block;
          margin: 0 auto;
        }
      }

      >span {
        font-size: 24px;
        color: #999;
        line-height: 1;
      }
    }
  }

</style>
