<template>
  <div class="chart-buy">

    <div class="buy-again" v-if="false">
      <div class="doctor-message">
        <p class="doc-add">
          <span class="name">
            赵秀敏
          </span>
          <span class="hos-name">
            中西医结合内科 主治医师
          </span>
        </p>
     
      </div>   <p class="a-buy">
            <span>
                            再次购买
                        </span>
                        <span>
                            （30.00元）
                        </span>
        </p>
    </div>
    <div class="chart-all-input" >
      <div class="chart-input">
        <div class="yuyin">
          <i class="icons1 funbg icon-chart-yuyin"></i>
        </div>
        <!-- 输入框 -->
        <input type="text" v-model="sendMessage" v-on:keyup.enter="goSend" @focus="InputOnfouce">
        <!-- <span class="iconfont icon-biaoqing" @click="ge"></span> -->
        <!-- <span class="iconfont icon-tianjia"></span> -->
        <div class="yuyin" @click="sendCream">
          <i class="icons1 funbg icon-chart-add"></i>
        </div>
        <!-- <x-button mini type="primary" @click.native="goSend()">发送</x-button> -->
      </div>
      <!-- <div class="biaoqing" >
        <div v-for="item in list" :key=item class="vux-center-h" @click="sendEmotion($event)">
        <emotion is-gif v-show="isShowEmotion">{{item}}</emotion>
        </div>
    </div> -->
      <!-- <span class="iconfont icon-tianjia"></span> -->
      <!-- 相机组件 -->
      <div class="chart-cream" v-show="isShowCream">
        <div class="item-chart-cream">

          <i class="icons funbg icon-img-file"></i>
          <!-- 获取相册 -->
          <form id="uploadForm" enctype="multipart/form-data" method="post">
            <!-- <span class="iconfont icon-xiangji"></span> -->
            <input type="file" accept="image/*" name="file" capture="camera" @change="uploadImage()" class="imageBox"
              v-if="isAndroid()" />
            <input type="file" accept="image/*" name="file" @change="uploadImage()" class="imageBox" v-else>
          </form>


        </div>

        <div class="item-chart-cream" @click="showPosition('middle')"><i class="icons funbg icon-video-file"></i></div>
        <div class="item-chart-cream" @click="isCloseChart=!isCloseChart"><i class="icons funbg icon-close-chart"></i>
        </div>
        <!-- <input type="file" accept="image/*" capture="camera" > -->
      </div>
      <toast v-model="showPositionValue" type="text" :time="800" is-show-mask text="开发中..." :position="position">
        {{ ('Basic Usage') }}</toast>
      <!-- 结束聊天的弹窗 -->
      <div class="cover" v-if="isCloseChart">
        <div class="close-chart">
          <p class="close-chart-title">
            结束咨询
          </p>
          <p class="close-content">是否确认结束咨询？</p>
          <div class="btn-box">
            <span>取消</span>
            <span class="sure-active-btn" @click.stop="isCloseChart=!isCloseChart">确认</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 咨询完成  -->
  </div>
</template>
<script>
  import {
    XButton,
    WechatEmotion as Emotion,
    Toast
  } from 'vux'
  import {
    log
  } from 'util';
  // import func from './vue-temp/vue-editor-bridge';
  export default {
    data() {
      return {
        sendMessage: '',
        list: ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗',
          '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰',
          '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓',
          '可怜', '菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀',
          '足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK',
          '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极'
        ],
        isShowEmotion: false, //是否弹出表情框，默认为FALSE
        isShowCream: false, //相机弹出框，默认FALSE
        showPositionValue: false,
        position: 'default',
        listenMessage: {},
        imgs: [],
        imgData: {
          accept: 'image/gif, image/jpeg, image/png, image/jpg',
        }
      }
    },
    props: {
      isCloseChart: {
        type: Boolean,
        default: false,
      },
      messageDate: {
        type: Array,
        default: []
      }
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
      // 点击发送
      goSend() {
        // this.messageDate.push(this.sendMessage)
        //message_event 跟后台自定义方法
        this.$socket.emit('message_event', {
          sourceClientId: this.$route.params.sid,
          targetClientId: this.$route.params.tid,
          msg: this.sendMessage
        });
        // console.log('targetId='+this.targetId)
        this.sendMessage = ''
      },

      socketMethod(obj) {
        this.$socket.emit('message_event', obj)
      },
      //发送表情
      sendEmotion(event) {
        // this.messageDate.push(`<img src=${event.currentTarget.children[0].children[0].src}>`)
        this.$socket.emit('message_event', {
          sourceClientId: this.$route.params.sid,
          targetClientId: this.$route.params.tid,
          msg: `<img src=${event.currentTarget.children[0].children[0].src}>`
        });
      },
      ge() {
        this.isShowEmotion = !this.isShowEmotion;
        this.isShowCream = false;
        // if(this.isShowEmotion){
        let inputHeight = document.querySelector('.chart-all-input').clientHeight
        console.log(inputHeight)
        this.vm.$emit('blur', inputHeight); //触发事件
        // }

      },
      sendCream() {
        this.isShowCream = !this.isShowCream
        this.isShowEmotion = false;
        this.$emit('showCream', this.isShowCream)
      },
      showPosition(position) {
        this.position = position
        this.showPositionValue = true
      },
      //输入框获取焦点时，取消表情以及相机功能
      InputOnfouce() {
        this.isShowEmotion = false;
        this.isShowCream = false;
      },
      //上传图片
      uploadImage() {
        let reader = new FileReader();
        let img1 = event.target.files[0];
        let type = img1.type; //文件的类型，判断是否是图片  
        let size = img1.size; //文件的大小，判断图片的大小  
        if (this.imgData.accept.indexOf(type) == -1) {
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
        this.$http.post(this.$URL + 'imageUpload', form, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then((res) => {
          // this.messageDate.push('<img style="width:50px; height:auto;" src='+ res.data.entity+ '>')
          this.socketMethod({
            sourceClientId: this.$route.params.sid,
            targetClientId: this.$route.params.tid,
            msg: `<img style="width:50px; height:auto;" src=${res.data.entity} >`
          })

        })
      }
    },
    created() {
      //兄弟组件传参
      this.vm.$on('showCream', (arg) => {
        //  console.log(arg)
        this.isShowCream = arg
        this.isShowEmotion = arg
      })
    },
    mounted() {
      this.$nextTick(() => {
        this.isAndroid();
        // console.log(this.isAndroid())
      })
    },
    sockets: {
      connect: function () {
        console.log('已经链接服务器');
      },
      message_event(data) {
        // 监视父元素的messageDate
        if (data) {
          //假如目标目标id（targetid）跟地址id一样，就把当前id保存在messageDate
          if (data.targetClientId == this.$route.tid) {
            this.messageDate.push(data)
          }
        } else {
          this.messageDate.push('欢饮来到嘻嘻嘻店') //
        }
      },
      disconnect(data) {
        console.log(data)
      }
    },
    components: {
      XButton,
      Emotion,
      Toast
    },

  }

</script>
<style lang="less" scoped>
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
    height: 106px;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &>input[type="text"] {
      font-size: 28px;
      padding: 0 15px;
      width: 530px-30;
      border: none;
      outline: none;
      //   padding-left: 15px;
      height: 70px;
      border-radius: 6px;
      margin: 0 auto;
      background-color: #EDEDED;
    }

    >.yuyin {
      width: 15%;
      position: relative;

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

    >.item-chart-cream:not(:first-child) {
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
      &::before {
        content: "";
        background-image: url('../assets/images/inquiry/head.jpg');
        width: 80px;
        height: 80px;
        display: block;
        margin-right: 18px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        border-radius: 50%;
      }

      >.doc-add {
          display: flex;
          flex-direction: column;
          color: #333;
          font-size: 24px;
          
          
          >.name{
              color: #333;
              font-size: 34px;
              font-weight: bold;

          }


      } 
    
    }
      >.a-buy{
          margin-right: 20px;
          display: flex;
          flex-direction: column;
          font-size: 24px;
          color: #01ABFF;
          >span:first-child{
              font-size: 34px;
          }
      }
  }

</style>
