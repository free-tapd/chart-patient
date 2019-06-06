<template>
  <div class="chart-buy" ref="fot">
    <div class="chart-all-input" v-show="!childClose">
      <div class="chart-input">
        <div class="yuyin">
          <i class="icons1 funbg icon-chart-yuyin"></i>
        </div>
        <!-- 输入框 -->
        <!-- <input type="text" v-model="sendMessage" v-on:keyup.enter="goSend" @focus.stop="onFocus" @blur="onBlur"/> -->
        <textarea name="" id="" cols="30" rows="5" v-model="sendMessage" v-on:keyup.enter="goSend" @focus.stop="onFocus"
          @blur="onBlur" ref="input"></textarea>
        <!-- <span class="iconfont icon-biaoqing" @click="ge"></span> -->
        <!-- <span class="iconfont icon-tianjia"></span> -->
        <div class="yuyin send-style">
          <i class="icons1 funbg icon-chart-add" v-if="!isButton" @click="sendCream"></i>
          <div class="send-btn" v-else @click="goSend">发送</div>
        </div>
      </div>
      <!-- <div class="biaoqing" >
        <div v-for="item in list" :key=item class="vux-center-h" @click="sendEmotion($event)">
        <emotion is-gif v-show="isShowEmotion">{{item}}</emotion>
        </div>
    </div> -->
      <!-- <span class="iconfont icon-tianjia"></span> -->
      <!-- 相机组件 -->
      <div class="chart-cream" v-show="isShowCream">
        <div class="chart-box">
          <div class="item-chart-cream">
          <i class="icons funbg icon-img-file"></i>
          <!-- 获取相册 -->
          <form id="uploadForm" enctype="multipart/form-data" method="post">
            <!-- <span class="iconfont icon-xiangji"></span> -->
            <input type="file" accept="image/*" name="file" @focus.stop="onFocus" @blur="onBlur" capture="camera"
              @change="uploadImage()" class="imageBox" v-if="isAndroid()" />
            <input type="file" accept="image/*" name="file" @blur="onBlur" @change="uploadImage()" class="imageBox"
              v-else>
          </form>
        </div>
          <p class="funName"> 发送图片</p>
        </div>
        <div class="chart-box">
          <div class="item-chart-cream" @click="showPosition('middle')"><i class="icons funbg icon-video-file"></i>
          
          </div>
          <p class="funName"> 发送视频</p>
        </div>
        <div class="chart-box">
           <div class="item-chart-cream" @click="alertIsClose"><i class="icons funbg icon-close-chart"></i>
        </div>
       <p class="funName"> 结束咨询</p>
        </div>
        <!-- <input type="file" accept="image/*" capture="camera" > -->
      </div>
      <!-- <toast v-model="showPositionValue" type="text" :time="800" is-show-mask text="开发中..." :position="position">
        {{ ('Basic Usage') }}</toast> -->
      <!-- 结束聊天的弹窗 -->
      <div class="cover" v-if="isCloseChart">
        <div class="close-chart">
          <p class="close-chart-title">
            结束咨询
          </p>
          <p class="close-content">是否确认结束咨询？</p>
          <div class="btn-box">
            <span @click.stop="cancleClose">取消</span>
            <span class="sure-active-btn" @click.stop="closeChart">确认</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 咨询完成  -->
    <div class="buy-again" v-show="childClose">
      <div class="doctor-message">
        <!-- <div class="img-doc" :style="{backgroundImage:`url(${docMsg.doctorImg})`}" @error="setErrorImg">

        </div> -->
        <figure>
          <img src="docMsg.doctorImg" alt="" @error="setErrorImg"/>
        </figure>
        <div class="doc-add">
          <span class="name">{{docMsg.doctorName}}</span>
          <p>
            {{docMsg.sectionName}} {{docMsg.titleName}}
          </p>
        </div>
      </div>
      <div class="a-buy vux-1px-l" @click="againBuy">
        <span>
          再次购买
        </span>
        <span>
          （{{ payPrice}}元）
        </span>
      </div>
    </div>


  </div>
</template>
<script>
  import keybord from "@/utils/keyboard"
  import defaultImg from "@/assets/images/default-doctor.png"
  export default {
    data() {
      return {
        sendMessage: '',
        position: 'default',
        listenMessage: {},
        imgs: [],

        isButton: false
      }
    },
    props: {
      isCloseChart: {
        type: Boolean,
        default: false,
      },
      isShowCream: {
        type: Boolean,
        default: false,
      },
      childClose: {
        type: Boolean,
        default: false
      },
      docMsg: {
        type: Object,
        default () {
          return {}
        }
      },
      payPrice: {
        type: Number,
        default: 0
      }

    },
    mounted() {
      // var bodyHeight = document.body.scrollHeight;

      // window.onresize = function () {

      //   var scrolledHeight = bodyHeight - document.body.scrollHeight;

      //   if (scrolledHeight > 0) {

      //     self.bottomButtonShow = false;

      //     setTimeout(function () {

      //       var pannel = self.$refs.deviceModelPannel;

      //       pannel.scrollIntoView(true);

      //       pannel.scrollIntoViewIfNeeded();

      //     }, 50);

      //   } else {

      //     self.bottomButtonShow = true;

      //   }

      // };

    },


    methods: {
      //判断是iOS 韩式android 手机
      isAndroid() {
        //解决上传图片时capture="camera"在安卓与IOS的兼容性问题（在Android只能拍照，不能选相册）
        var ua = navigator.userAgent.toLowerCase(); //获取浏览器的userAgent,并转化为小写——注：userAgent是用户可以修改的
        var isIos = (ua.indexOf('iphone') != -1) || (ua.indexOf('ipad') != -1); //判断是否是苹果手机，是则是true
        return isIos
      },
      // 

      onFocus() {
        // console.log("聚焦")
        this.isButton = true
        // keybord.listenKeybord(this.$refs.input)

        // setInterval(() => {
        //   this.$refs.input.scrollIntoView(true);
        //   console.log();

        // }, 200)


      },
      onBlur() {
        if (!this.sendMessage) {
          this.isButton = false
        }

      },
      // 点击发送
      goSend() {
        if (this.sendMessage.toString() == "") {
          this.$vux.toast.text('请输入内容', "middel")
        } else {
          this.$emit('goSend', {
            msg: this.sendMessage,
            msgType: "1"
          });
          this.sendMessage = ""
        }

      },
      // 弹出是for关闭
      alertIsClose() {
        this.$emit('alertIsClose', this.isCloseChart)
      },
      // 关闭聊天
      closeChart() {
        this.$emit('closeChart', {
          isCloseChart: this.isCloseChart,
          set: 1
        })
      },
      // 取消关闭
      cancleClose() {
        this.$emit('closeChart', {
          isCloseChart: this.isCloseChart,
          set: 0
        })
      },

      sendCream() {
        // this.isShowCream = !this.isShowCream

        this.$emit('showCream', this.isShowCream)
      },
      showPosition(position) {
        this.$vux.toast.text('开发中')
      },
      // 再一次购买
      againBuy() {
        this.$router.replace({
          path: '/doctorHome',
          query: {
            doctorId: this.docMsg.doctorId
          }
        })
      },
      setErrorImg(e) {
        console.log(e);
        //  console.log(e.target.src);
        e.target.src = defaultImg


      },

      //上传图片
      uploadImage() {
        let imgData = {
          accept: 'image/gif, image/jpeg, image/png, image/jpg',
        }
        let reader = new FileReader();
        let img1 = event.target.files[0];
        let type = img1.type; //文件的类型，判断是否是图片  
        let size = img1.size; //文件的大小，判断图片的大小  
        if (imgData.accept.indexOf(type) == -1) {
          alert('请选择我们支持的图片格式！');
          return false;
        }
        // if(size>3145728){  
        //     alert('请选择3M以内的图片！');  
        //     return false;  
        // }  
        // console.log(img1)
        var uri = ''
        let form = new FormData();
        form.append('file', img1, img1.name);
        //!TODO 测试服务器，正式，需要填写正式服务器地址
        // alert(this.$store.state.uploadUrl)
        this.$post(this.$store.state.uploadUrl, form).then((res) => {

          // console.log(res);
          if (res.code == 0) {
            this.$emit('goSend', {
              msg: res.data.path,
              msgType: "4"
            });
            //  this.isShowCream=false;
            this.sendCream()
          }
        })
      },

    },
  }

</script>
<style lang="less" scoped>
  .funName{
font-size:24px;
font-weight:500;
color:#6D7074;
margin-top: 15px;
text-align: center;
  }
  .bgimg(@bgw, @bgh) {
    width: @bgw;
    height: @bgh;
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -@bgw/2;
    margin-top: -@bgh/2;
  }

  .send-style {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icons {
    .bgimg(54px, 54px);

  }

  .icons1 {
    border-radius: 50%;
    margin: 0 auto;
    .bgimg(58px, 58px);
  }

  .icon-chart-yuyin {
    background-image: url('../assets/images/chart/chart5.png');
  }

  .icon-chart-add {
    background-image: url('../assets/images/chart/chart3.png');
  }

  .icon-img-file {
    background-image: url('../assets/images/chart/chart4.png');
  }

  .icon-video-file {
    background-image: url('../assets/images/chart/chart2.png');
  }

  .icon-close-chart {
    background-image: url('../assets/images/chart/chart1.png');
  }

  // 引入阿里字体
  //   @import url('//at.alicdn.com/t/font_1096541_dej3om24ib.css');

  .chart-input {
    width: 100%;
    background: #fff;
    // padding: 0 15px;
    display: flex;
    height: 120px;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &>input[type="text"],
    &>textarea {
      font-size: 28px;
      padding: 15px 15px;
      width: 510px-30;
      border: none;
      outline: none;
      //   padding-left: 15px;
      height: 70px-30;
      border-radius: 6px;
      margin: 0 auto;
      background-color: #EDEDED;
    }

    >.yuyin {
      width: 15%;
      position: relative;

      >.send-btn {
        position: relative;
        // width: 50px;
        height: 50px;
        text-align: center;
        font-size: 24px;
      }

    }

    &>span {
      text-align: center;
      width: 10%;
      display: inline-block;
      font-size: 58px;
      cursor: pointer;
      color: #6C7488;

    }

  }

  .biaoqing {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }

  @borderWidth: 217px;

  .chart-cream {
    display: flex;
    flex-direction: row;
    justify-content: baseline;
    align-items: center;
    height: @borderWidth;
    background-color: #EDEDED;
    padding: 0 30px;
    >.chart-box{

    &>.item-chart-cream {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 120px;
      height: 120px;
      background: rgba(250, 250, 250, 1);
      border: 1px solid rgba(234, 234, 236, 1);
      border-radius: 14px;

      &:extend(.border1px); //less继承

      &>form {
        &>span {
          font-size: 20px;
          height: initial;
        }

        &>input[type="file"] {

          width: 100%;
          height: 100%;
          position: absolute;
          opacity: 0;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
        }
      }

    }
  }
    >.chart-box:not(:first-child) {
      margin-left: 69px;
    }
  }

  .chart-all-input {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10;
    background-color: #fff;
    width: 100%;

  }

  // 聊天的弹出框
  .cover {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sure-active-btn {
    background-color: #3C9BFC !important;
    color: #fff !important;
  }

  .close-chart {
    width: 600px;
    height: 351px;
    background-color: #fff;
    border-radius: 20px;
    position: relative;

    >.close-chart-title {
      padding: 40px 0;
      font-size: 34px;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      line-height: 44px;
      text-align: center;
    }

    >.close-content {
      font-size: 28px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 34px;
      text-align: center;
    }

    >.btn-box {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: 46px;
      bottom: 37px;

      >span {
        width: 240px;
        height: 88px;
        background: rgba(247, 247, 247, 1);
        border: 2px solid rgba(230, 230, 230, 1);
        border-radius: 10px;
        font-size: 30px;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        display: block;
        line-height: 88px;
        text-align: center;
      }

      >span:last-child {
        margin-left: 37px;
      }
    }

  }

  .buy-again {
    display: flex;
    height: 120px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px -1px 0px 0px rgba(230, 230, 230, 1);
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;

    >.doctor-message {

      margin-left: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &>figure {
        width: 80px;
        height: 80px;
        display: block;
        margin-right: 18px;
        >img{
          width: 100%;
          height: 100%;
          border-radius: 50%;
          display: block;
        }
      }

      >.doc-add {
        display: flex;
        flex-direction: column;
        color: #333;
        font-size: 24px;


        >.name {
          color: #333;
          font-size: 34px;
          font-weight: bold;

        }


      }

    }

    >.a-buy {
      padding-left: 55px;
      margin-right: 20px;
      display: flex;
      flex-direction: column;
      font-size: 24px;
      color: #01ABFF;

      >span:first-child {
        font-size: 34px;
      }
    }
  }

</style>
