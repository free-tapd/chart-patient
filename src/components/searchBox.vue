<template>
  <div class="search vux-1px-b"  @click="focusInput">
    <div class="no-focus" v-if="!isFocus" >
      <span class="funbg icon-search"></span>
      <span class="place-text">搜索科室和医生</span>
    </div>
    <div class="yes-focus" v-else>

      <div class="input-box">
        <input type="text" v-model="searchInner" v-focus @click.stop="searchResult" @change="searching"/>
        <span class="funbg icon-search"></span>
        <div class="close-btn" @click.stop="emptyContent">
           <span class="iconfont icon-baseline-close-px"></span>
        </div>
        
      </div>
      <span class="cancle" @click.stop="cancleHandle"> 取消</span>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      isFocus: {
        type: Boolean,
        default: false
      },
      

    },
    data(){
      return{
        searchInner:""
      }
    },
    directives:{
      focus:{
        inserted(el){
          el.focus()
        }
      }
    },
    methods: {
      focusInput() {
        this.$emit('focusHandler', this.isFocus)
      },
      searchResult(){
        console.log('click')
      },
      emptyContent(){
        this.searchInner=""
      },
      cancleHandle(){
        this.$emit('cancleHandle',this.isFocus)
      },
      searching(){
        console.log('change')
      },
      jump(){
        this.changeJump('/indexSearch')
      }
    }
  }

</script>
<style lang="less" scoped>
  @h: 74px;
  @w: 690px;

  .icon-search {
    position: absolute;
    left: 29px;
    top: 50%;
    margin-top: -14px;
    background-image: url('../assets/images/inquiry/search.png');
    width: 26px;
    height: 28px;
    display: block;
  }

  .search {
    padding: 20px 0;
    background-color: #fff;

    // margin-bottom: 15px;
    >.no-focus {
      position: relative;
      width: @w;
      height: @h;
      background: rgba(235, 235, 235, 1);
      border-radius: 37px;
      margin: 0 auto;

      >input[type='text'] {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
      }

      >.place-text {
        position: absolute;
        font-size: 28px;
        color: #808080;
        left: 29+15+26px;
        line-height: 74px;
        position: relative;
      }

    }

    >.yes-focus {
      padding: 0 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      >.input-box {
        position: relative;
        >input[type="text"] {
          padding:0 29+32+15px 0 29+26+19px; 
          background: rgba(235, 235, 235, 1);
          border-radius: 37px;
          width: 600px-29-26-19-29-32-15;
          // width: 90%;
          height: @h;
          border: none;
          outline: none;
          font-size: 28px;
          color: #333;
          font-weight: 400;
        }
        >.close-btn{
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: #B3B3B3;
         
          text-align: center;
        
          color: #fff;
          position: absolute;
          right: 29px;
          top: 50%;
          margin-top: -16px;
          display: flex;
          align-items: center;
          justify-content: center;
          >span{
            color: #fff; 
            font-size: 26px;  
          }

        }
      }

      >.cancle {
        font-size: 30px;
        color: #333;
        font-weight: 500;
      }
    }
  }

</style>
