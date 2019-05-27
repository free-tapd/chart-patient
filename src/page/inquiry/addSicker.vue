<template>
  <div class="vg">
    <div class="df">
      <div class="add-sick">

        <p class="add-sick-title vux-1px-b">选择就诊人</p>
        <ul class="add-person">
          <li v-for="(v,i) in patientList" :key="i" :class="{'active-sel':cur==i}" @click='selPatient(v,i)'>
            <!-- <span ></span> -->
            <span class="patient-name">{{v.patientName}}</span>
          </li>
          <li @click="changeJump('/addPatient')">
            <span class="iconfont icon-jiahao" style="color:#666;"></span>
          </li>
        </ul>
      </div>
      <div class="authorization-box">
        <!-- 授权 -->
        <div class="authorization">
          <span> 报告授权</span>
          <div class="authorization-btn" @click="changeJump('/queryReport')">
            授权
          </div>
        </div>
        <!-- more-list -->
        <ul class="more-list">
          <li>
            <span>血常规（五分类）</span>
            <span>2018-06-05</span>
          </li>
          <li>
            <span>血常规（五分类）</span>
            <span>2018-06-05</span>
          </li>
          <li>
            <span>血常规（五分类）</span>
            <span>2018-06-05</span>
          </li>

        </ul>
        <div class="more-icon">
          <span>更多</span>
          <i class="iconfont icon-right1"></i>
        </div>
      </div>
      <!-- list2 -->
      <div class="add-sick">
        <p class="add-sick-title vux-1px-b">病情描述 <span class="example-title" @click="isEx=!isEx">(参考样例)</span></p>
        <ul class="sick-inner">
          <li>
            <!-- 1.症状、疾病和身体状况<br>
            2.症状发生的时间、症状、部位、持续时间、有无伴随症状<br>
            3.吃过什么药物<br>
            4.如就诊过，提供医生诊断、治疗经过<br>
            5.既往病史 -->
            <div class="text-box">
              <textarea name="" id="" cols="30" maxlength="500" rows="5" placeholder="请输入你的病状" :value="sickValue"
                @input="wordSize($event.target.value)">

              </textarea>
            </div>

            <p class="example-text"> {{wordLen}}/500</p>
          </li>
        </ul>
        <!-- 上传照片 -->
        <div class="add-proto vux-1px-t">
          <p>上传照片</p>
          <div class="file-img-box">
            <div class="file-img">
              <form id="uploadForm" enctype="multipart/form-data" method="post">
                <input type="file" accept="image/*" name="file" capture="camera" @change="uploadImage($event)"
                  class="imageBox" v-if="isAndroid()" multiple="multiple" />
                <input type="file" accept="image/*" name="file" @change="uploadImage($event)" class="imageBox"
                  multiple="multiple" v-else>
              </form>
              <span class="iconfont icon-jiahao" style="color:#aaa;"></span>
            </div>
            <div class="info-title" v-if="maxPicLen==0">
              <p class="info1">添加照片(可选)</p>
              <p class="info2">
                可添加患处、病历、检查单，请保证图片清晰
                (限5张）
              </p>
            </div>
            <div class="img-list">
              <div class="result" v-for="(v,i) in picUrl" :key="i">
                <img :src="v" alt="">
              </div>
              
            </div>


          </div>
          <!-- <span>病症部位，检查报告等辅助资料（限X张）</span> -->
        </div>
        <!-- 接受协议 -->

        <div class="protocol vux-1px-t" @click="isReceive=!isReceive">
          <span class="funbg icon-prococal" :class="{'icon-nprococal':!isReceive}"></span>
          <span>接收<span style="color:#2D9FF1;">
              《河北医科大学第二医院在线问诊协议》
            </span> </span>
        </div>
        <!-- <div class="protocol" v-if="cur==0" @click="cur=0">
        <span class="funbg icon-nprococal"></span>
        <span>接收协议</span>
      </div> -->
      </div>
    </div>

    <div class="footer-btn vux-1px-t">
      <div class="total-money">
        <span>合计:</span>
        <span>{{30|formatMoney}}</span>
      </div>
      <div class="dis-btn" @click.stop="payService">立即咨询</div>
    </div>
    <!-- 参考样例弹窗 -->
    <div class="cover" v-if="isEx">
      <div class="example-box">
        <p class="ex-title">病情描述(参考样例)</p>
        <ul class="ex-inner">
          <li>
            <p>主要症状：</p>
            <span>咽部异物感6月 </span>
          </li>
          <li>
            <p>既往病史：</p>
            <span> 否认“肝炎”、“结核”、“菌痢”等传染病史，有手术、数学、外伤史，否认青霉素、青霉素过敏史。 </span>
          </li>
          <li>
            <p>检查单：</p>
            <span> 鼻咽黏膜光滑，咽隐窝无新生物。口咽黏膜慢性充血，咽后壁淋巴滤泡明显增生，咽侧索肥厚。双扁桃体1度肿大，表面无干酪性分泌物，舌扁桃体增生。双侧梨状窝清晰。                  
            </span>
          </li>
          <li>
            <p>既往诊治记录：</p>
            <span> 慢性咽炎，开了草珊瑚含片和冬凌草片</span>
          </li>
        </ul>
      </div>
      <div class="close-box funbg" @click="isEx=!isEx"></div>
    </div>
    <!-- 温馨提示 -->
    <div class="cover" v-if="isWarm">
      <div class="warm-prompt">
        <p>温馨提示</p>
        <div class="warm-inner">
          <p>
            1. 该咨询服务仅提供相关建议；
          </p>
          <p>2. 危急重病患者，请立即到医院进行治疗。</p>
        </div>
        <div class="sure-btn" @click="isWarm=!isWarm">确定</div>
      </div>
    </div>

  </div>
</template>
<script>
  import {
    base64
  } from 'vux'
import { log } from 'util';
import { decode } from 'punycode';
  export default {
    data() {
      return {
        isReceive: true,
        isEx: false,
        isWarm: true,
        sickValue: "",
        cur: 0,
        patientList: [],
        picUrl: [],
        maxPicLen: 0,
        patientMessage:{}
      }
    },
    mounted() {
      this.getAddSicker();
      this.$store.commit('saveBackUrl',window.location.href);
      
    },
    beforeRouteEnter(to,from,next){
      console.log(to);
      console.log(from);
      
      next();
    },
    computed: {
      wordLen() {
        return this.sickValue.length;
      },
      uploadUrl() {
        return this.$store.state.uploadUrl;
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
      initState(){
        // if(this.)
        // let result = '<img src="' + res.data.path + '" alt=""/>';
        //         this.$store.commit('savePicCase',this.picUrl)
        //         let div = document.createElement('div');
        //         div.innerHTML = result;
        //         div.className = "result"
        //         document.querySelector('.img-list').appendChild(div); //插入dom树
      },
      selPatient(item,index){
        this.cur=index;
        this.patientMessage=item
      },
      getAddSicker() {
        this.$get('Patient/getPatientList').then(res => {
          if (res.code == 0) {
            console.log(res)
            if (res.code == 0) {
              this.patientList = res.data;
              // 默认第一个
              this.patientMessage=this.patientList[0]
            }
          }
        })
      },
      wordSize(val) {
        this.sickValue = val

      },
      readFile(target) {
        this.maxPicLen += target.files.length;
        if (this.maxPicLen > 5) {
          this.$vux.toast.text('最多可以上传5张');
          return false;
        }
        let imgData = {
          accept: ['image/gif', 'image/jpeg', 'image/png', 'image/jpg'],
        }
        for (var i = 0; i < target.files.length; i++) {
          // console.log(imgData.accept.includes(target.files[i].type));
          if (!(imgData.accept.includes(target.files[i].type))) {
            this.$vux.toast.text('请选择我们支持的图片格式！');
            return false;
          }
          var reader = new FileReader();
          // reader.readAsArrayBuffer(target.files[i]);
          let file = target.files[i]
          reader.readAsDataURL(file);
          reader.onload = (e) => {
            console.log(e.target.result);
            var blob = new Blob([e.target.result]);
            var formdata = new FormData()
            formdata.append('file', file, file.name)

            //  console.log(new Blob([e.target.result]));

            this.$post(this.$store.state.uploadUrl, formdata).then(res => {
              console.log(res);
              if (res.code == 0) {
                this.picUrl.push(res.data.path)
              
                // let result = '<img src="' + e.target.result + '" alt=""/>';
                // let result = '<img src="' + res.data.path + '" alt=""/>';
                // this.$store.commit('savePicCase',this.picUrl)
                // let div = document.createElement('div');
                // div.innerHTML = result;
                // div.className = "result"
                // document.querySelector('.img-list').appendChild(div); //插入dom树
              }

            })


          }
        }
      },
      //上传图片
      uploadImage(event) {
   
        this.readFile(event.target)
     
      },

      // 用户登录
      getLoginUrl(){
        return  this.$post('userLogin/getLogin')
      },
      payService() {
        // 假如用户没有登录
        // 根据token 判断
        if(!this.$store.state.token){
           this.getLoginUrl().then(res=>{
             if(res.code==0){
               
                window.location.href=res.data+encodeURIComponent(this.$store.state.backurl+'&token') ;
                // window.history.pushState(state, state.title, state.url);
               
             }
        })
        }else{

          let {patientId,idCard,patientPhone,patientName} =this.patientMessage;
        let params = {
          "doctorId": this.$route.query.doctorId,
          "functionId": this.$route.query.funId,
          "patientId":patientId,
          "patientIdcard": idCard,
          "patientName": patientName,
          "patientPhone": patientPhone,
          "description": this.sickValue,
          "picUrl": this.picUrl.join(','),
          "payType": "WX-H5"
        }
        let _this = this;
        _this.$post('inquiryOrder/payOrder', params).then(res => {
          if (res.code == 0) {
            const {
              appId,
              timeStamp,
              nonceStr,
              paySign,
              package_
            } = res.data;

            _this.$wechat.config({
              // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
              debug: true,
              appId: appId, // 必填，公众号的唯一标识
              timestamp: timeStamp, // 必填，生成签名的时间戳
              nonceStr: nonceStr, // 必填，生成签名的随机串
              signature: paySign, // 必填，签名，
              jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表
            });
            _this.$wechat.ready(function () {
              _this.$wechat.chooseWXPay({
                // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                timestamp: timeStamp,
                nonceStr: nonceStr, // 支付签名随机串，不长于 32 位
                package: package_, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
                signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                paySign: paySign, // 支付签名
                success: function (res) {
                  //res返回信息只有errMsg并没有err_msg，都是自己开调试模式，log出来的！都是泪
                  // 支付成功后的回调函数
                  let {doctorId}=this.$route.query
                  this.changeJump('/chartList',{doctorId:doctorId,roomId:"20190000524",userType:"0",orderNo:"20190000524",orderId:"9"})
                },
                cancel: function (res) {
                  // 支付取消的回调函数
                },
                error: function (res) {
                  // 支付失败的回调函数
                }
              });
            })

           
          }


        })
                let {doctorId}=this.$route.query
                  this.changeJump('/chartList',{doctorId:doctorId,roomId:"20190000524",userType:"0",orderNo:"20190000524",orderId:"9"})
      }
 
      }

    }
  };

</script>
<style lang="less" scoped>
  .vg {
    padding-bottom: 125px;
  }

  .imageBox {
    opacity: 0;
  }

  .active-sel {
    background-color: #2D9FF1 !important;

    >span {
      color: #fff !important;
    }

  }

  #uploadForm {
    opacity: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    overflow: hidden;
  }

  .df::after {
    display: table;
    content: '';
  }

  .dis-btn {
    text-align: center;
    height: 88px;
    // position: fixed;
    // left: 22px;
    // right: 22px;
    // bottom: 22px;
    background: rgba(66, 160, 226, 1);
    border-radius: 6px;
    font-size: 34px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 88px;
    width: 340px;
    height: 88px;
    background: rgba(27, 156, 251, 1);
    border-radius: 10px;
  }

  .add-sick {
    &::after {
      display: table;
      content: '';
    }

    padding: 0 23px;
    background-color: #fff;
    margin-bottom: 20px;

    >.add-sick-title {
      font-size: 28px;
      font-weight: 500;
      color: #4D4D4D;
      padding: 20px 0;
      position: relative;

      >.example-title {
        font-size: 28px;
        font-weight: 500;
        color: rgba(51, 157, 229, 1);
        line-height: 65px;
        position: absolute;
        right: 0;
      }
    }

    >.add-person {
      padding: 30px 0;
      display: flex;
      align-items: center;

      >li {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 149px;
        height: 66px;
        background: rgba(238, 238, 238, 1);
        border-radius: 4px;

        >.patient-name {
          font-size: 28px;
          color: #333;

        }
      }

      >li:not(:first-child) {
        margin-left: 20px;
      }
    }

    >.sick-inner {
      padding: 30px 0;
      font-size: 26px;
      color: #999;

      >li {
        >.text-box {
          >textarea {
            width: 100%;
            border: none;
            outline: none;
            font-size: 26px;
            color: #999;
          }
        }

        >.example-text {
          text-align: right;
        }
      }

    }

    >.add-proto {
      padding: 30px 0;

      >p {
        font-size: 30px;
        color: #333;
      }

      >.file-img-box {
        margin: 30px 0;
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;

        >.file-img {
          position: relative;
          width: 90px;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px dashed #aaa;
          margin-right: 20px;
        }

        >.info-title {

          width: 478px;
          font-size: 24px;
          color: #666;

          >.info1 {
            line-height: 1;
            font-size: 30px;
            font-weight: 500;
            color: #333;
          }

          >.info2 {
            color: #999;
          }
        }

        >.img-list {
          display: flex;
          align-items: center;

          /deep/.result {
            width: 90px;
            height: 90px;
            margin-left: 15px;
            >img {
              width: 100%;
              height: 100%;
              display: block;
            }
          }

        }
      }

      >span {
        font-size: 22px;
        color: #999;
      }
    }

    >.protocol {
      padding: 30px 23px;
      ;
      display: flex;
      align-items: center;
      font-size: 26px;
      color: #333;
      background-color: #f5f5f5;
      margin: 0 -23px;

      >span:first-child {
        width: 36px;
        height: 36px;
        display: block;
        margin-right: 12px;
      }
    }
  }

  .authorization-box {
    margin-bottom: 20px;
    padding: 25px 30px;
    background-color: #fff;

    >.authorization {

      display: flex;
      align-items: center;
      justify-content: space-between;



      >span {
        font-size: 28px;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 65px;

      }

      >div.authorization-btn {
        width: 150px;
        height: 60px;
        background: #2D9FF1;
        border-radius: 6px;
        font-size: 28px;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 60px;
        text-align: center;

      }
    }

    >.more-list {

      // padding: 30px;
      >li {
        padding: 30px 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 26px;
        font-weight: bold;
        color: #666;
        line-height: 36px;

        >span:last-child {
          font-size: 24px;
        }
      }
    }

    >.more-icon {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-top: 30px;
      font-size: 26px;
      // font-weight:bold;
      color: rgba(45, 159, 241, 1);
      line-height: 36px;
    }
  }

  .footer-btn {
    padding: 0 30px;
    height: 124px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px -1px 0px 0px rgba(230, 230, 230, 1);
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;

    >.total-money {
      font-size: 24px;

      >span:first-child {
        font-weight: bold;
      }

      >span:last-child {
        font-size: 30px;
        color: #FF5345;
        font-weight: bold;
      }

    }
  }

  .cover {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @W: 600px;
  @H: 727px;

  .example-box {
    width: @W;
    height: @H;
    background: rgba(255, 255, 255, 1);
    border-radius: 20px;
    // padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    >.ex-title {
      font-size: 34px;
      color: #333;
      padding: 25px 0;
      font-weight: bold;

    }

    >.ex-inner {
      overflow: scroll;
      margin: 0 auto;
      width: 520px-60;
      height: 573-60px;
      background: rgba(247, 247, 247, 1);
      border-radius: 10px;
      padding: 30px;

      >li {

        // display: flex;
        // align-items: center;flex-wrap: wrap;
        font-size: 28px;
        color: #339DE5;

        >p {
          display: inline-block;
        }

        >span {
          color: #808080;
        }
      }

      >li:not(:first-child) {
        margin-top: 20px;
      }
    }
  }

  .close-box {
    margin-top: 70px;
    width: 80px;
    height: 80px;
    background-image: url('../../assets/images/inquiry/hurt_remove.png');
  }

  .warm-prompt {
    width: 600px;
    height: 440px;
    background: rgba(255, 255, 255, 1);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    >p {
      font-size: 34px;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      line-height: 65px;
      padding: 40px 0;
      background: linear-gradient(-13deg, rgba(234, 234, 234, 1) 0%, rgba(216, 216, 216, 1) 100%);
      -webkit-background-clip: text;
      // -webkit-text-fill-color:transparent;
    }

    >.warm-inner {
      width: 457px;
      color: #808080;
      font-size: 28px;
      font-weight: 400;
      line-height: 50px;
    }

    >.sure-btn {
      position: absolute;
      width: 300px;
      height: 88px;
      background: rgba(45, 159, 241, 1);
      border-radius: 10px;
      bottom: 50px;
      left: 50%;
      margin-left: -150px;
      text-align: center;
      line-height: 88px;
      color: #fff;
      font-size: 34px;
    }
  }

  .icon-prococal {
    background-image: url("../../assets/images/jzr_ico_chose_set@2x.png");
  }

  .icon-nprococal {
    background-image: url("../../assets/images/jzr_ico_chose_nor@2x.png");
  }

</style>
