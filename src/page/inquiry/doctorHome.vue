<template>
  <div class="docutor-home vg">
    <!-- 服务内容 -->
    <ul class="patient-service" v-if="false">
      <li :class="{'active-patient':serviceId==v.id}" v-for="(v,i ) in patientService" :key="i"
        @click.stop="serviceId=v.id">{{v.title}}</li>
    </ul>
    <div class="go" v-if="serviceId==1">

      <!-- 医生主页 -->
      <div class="docutor-message flex-r">
        <div class="img-box1">
          <figure>
            <img :src="doctorMessage.doctorImg" alt @error="setErrorImg" />
            <!-- <img src="../../assets/images/default-doctor.png" alt="" v-else /> -->
          </figure>

          <!-- <div class="code" @click="isCode=!isCode">
          <span class="funbg"></span>
        </div> -->
          <div class="online-box" :class="{'active-online':doctorMessage.online=='true'}">
            <p>{{doctorMessage.online=='true'?"在线":"离线"}}</p>
          </div>
        </div>
        <div class="flex-c profession">
          <!-- first -->
          <div class="docutor-lv flex-r">
            <!-- 医生信息 -->
            <div class="docutor-name">
              <p class="docutor-title">{{doctorMessage.doctorName }}&nbsp;&nbsp; <span class="title-name">{{doctorMessage.titleName}}</span> </p>
              <p>
                <span></span>
                <span>{{doctorMessage.sectionName}}</span>
              </p>
              <p>
                <span>{{doctorMessage.hospitalName}}</span>
              </p>
            </div>
            <!-- 关注 -->
            <div class="follow-btn " @click="isCode=!isCode" v-if="false"> <span class="funbg"></span></div>
          </div>
          <!-- seconed -->

        </div>
      </div>
      <!-- 一生的业务信息 -->
      <div class="follow-msg flex-r">
        <div class="msg-item">
          <p>{{doctorMessage.orderCount}}</p>
          <p>咨询量</p>
        </div>
        <div class="msg-item">
          <p>{{doctorMessage.judgeCount}}</p>
          <p>评价量</p>
        </div>
        <div class="msg-item">
          <p>{{doctorMessage.followCount}}</p>
          <p>关注量</p>
        </div>
      </div>
      <!--zixunfangshi -->
      <ul class="consultative flex-r">
        <!-- 咨询 -->

        <li @click="jumpChart(v)" v-for="(v,i) in funArr" :key="i">
          <!-- <img src="../../assets/images/inquiry/pic3.png" alt> -->
          <figure>
            <img :src="v.funIconOn" alt v-if="v.status=='1'" />
            <img :src="v.funIconOff" alt v-else />
          </figure>

          <p class="consultative-title" :style="{color:new Number(v.status)?'#333':'#999'}">{{v.funName}}</p>
          <span v-if="v.status=='1'">￥{{v.presentPrice}}元/次</span>
          <!-- <span v-if="v.status=='0'" style="color:#999">￥{{v.presentPrice}}元/次</span> -->
          <span style="color:#999" v-else>暂未开通</span>
        </li>

      </ul>
      <!-- 擅长 -->
      <div class="skill" @click="isGood=!isGood">
        <div class="list-skill vux-1px-b">
          <p class="flex-r">
            <span class="icons funbg icon-label_1"><span>擅长</span></span>

          </p>
          <div class="inner ellipsis">{{doctorMessage.goodAt?doctorMessage.goodAt:"暂无"}}</div><span class="iconfont icon-right" style="transform:rotate(90deg)"></span>
        </div>
        <div class="list-skill">
          <p class="flex-r">
            <span class="icons funbg icon-label_1"> <span>简介</span></span>

          </p>
          <!-- <div class="inrto-list">
          新生儿疾病、哮喘、咳嗽、腹泻、心系疾病
          <span class="iconfont icon-right"></span>
        </div> -->
          <div class="inner ellipsis">{{doctorMessage.doctorInfo?doctorMessage.doctorInfo:"暂无"}} </div><span class="iconfont icon-right " style="transform:rotate(90deg)"></span>
        </div>
      </div>
      <!-- 评价 -->
      <div class="discuess">
        <div class="flex-r discuess-title vux-1px-b" v-if="evaluateArr.length>0">
          <!-- <span class="icons funbg icon-pinjia"></span> -->
          <span>评价</span>
          <p @click.stop="changeJump('/evaluateList',{doctorId:$route.query.doctorId})"><span>更多</span><span
              class="iconfont icon-right"></span></p>

        </div>
    <!-- 引入组件 -->
           <evaluateItem :evaluateItem="v" v-for="(v,i) in evaluateArr" :key="i"/>
        <!-- import evaluateItem from "@/components/evaluateItem"; -->
      </div>
    </div>
    <!-- chart list  -->
    <!-- 聊天室  -->
    <div class="chart-box" v-if="serviceId==2">
      <ul class="chart">
        <li class="chart-item">
          <!-- 聊天时间 -->
          <div class="chart-date">
            {{chartDate}}
          </div>
          <!-- 聊天信息 -->
          <div class="chart-line">
            <img src="../../assets/images/inquiry/head.jpg" alt="">
            <div class="chart-inner">

              性别：女
              年龄：22岁
              您好，我想咨询一下。怀孕了需要补充什么营养吗？谢谢

            </div>
          </div>
          <!-- 聊天提醒 -->
          <div class="chart-warm">

            您的问题已通知医生，医生将利用空余时间回复，如果觉得病情严重紧急，建议前往医院就诊。
            本次咨询在24小时内有效，若您已付费但医生没有来得及回答，咨询费用将自动退还。

          </div>

        </li>

        <li class="chart-item">
          <!-- 聊天时间 -->
          <div class="chart-date">
            {{chartDate}}
          </div>
          <!-- 聊天信息 -->
          <div class="chart-line active-recivice">
            <img src="../../assets/images/inquiry/head.jpg" alt="">
            <div class="chart-inner">

              如没有特殊情况无需额外补充。

            </div>
          </div>
          <!-- 聊天提醒 -->
          <div class="chart-warm" v-if="false">

            您的问题已通知医生，医生将利用空余时间回复，如果觉得病情严重紧急，建议前往医院就诊。
            本次咨询在24小时内有效，若您已付费但医生没有来得及回答，咨询费用将自动退还。

          </div>

        </li>
        <!-- 点击去评价 -->
        <li class="evaluate-box">
          <p class="chart-status">患者结束咨询</p>
          <div class="chart-message">
            <p class="evaluate-title">待评价</p>
            <span>咨询已经结束，请对医生的服务进行评价。</span>
            <div class="click-evaluate vux-1px-t" @click="isEvaluate=!isEvaluate">
              <p>点此进行评价</p>
              <span class="iconfont icon-right"></span>
            </div>
          </div>

        </li>
        <!-- 评价已完成 -->
        <li class="over-evaluate">
          <div class="evaluate-status">
            <span>患者评价：</span>
            <p class="evaluate-num">
              <i class="funbg"></i>
              <i class="funbg"></i>
              <i class="funbg"></i>
              <i class="funbg"></i>
              <i class="funbg"></i>
            </p>
          </div>
          <!-- ev -->
          <div class="evaluate-result">
            <p class="help-btn">有帮助</p>
            <p class="help-inner"> 有帮助，医生很专业，辛苦了，感谢！</p>
          </div>
        </li>
      </ul>
      <div class="chart-input">
        <chartInput />
      </div>
    </div>
    <!-- 聊天评价面板 -->
    <div class="cover" v-if="isEvaluate">
      <div class="chart-pannel">
        <p class="evaluate-title vux-1px-b"> <span class="iconfont icon-baseline-close-px"
            @click="isEvaluate=!isEvaluate"></span> 评论</p>
        <div class="content">
          <!-- 评价的医生 -->
          <p class="evaluate-doctor">
            <span>李苏素</span>
            <span>医生</span>
          </p>
          <!-- 评价的分数 -->
          <p class="evaluate-star">
            <i class="funbg icon-star"></i>
            <i class="funbg icon-star"></i>
            <i class="funbg icon-star"></i>
            <i class="funbg icon-star"></i>
            <i class="funbg icon-star"></i>
          </p>
          <p class="evaluate-text">非常满意</p>
          <!-- evaluate-label -->
          <ul class="evaluate-label-box">
            <li>
              回复及时
            </li>
            <li>艺术高明</li>
            <li>艺术高明</li>
            <li>艺术高明</li>
            <li>艺术高明</li>
            <li>艺术高明</li>
            <li class="active-label">耐心</li>
            <li>艺术高明</li>
            <li>艺术高明</li>
            <li>艺术高明</li>
            <li>艺术高明</li>
            <li>艺术高明</li>
          </ul>

        </div>
        <!-- textarea-input -->
        <div class="editor-evaluate">
          <div class="text-box">
            <div class="text-box2">
              <textarea name="" id="" placeholder="记录问诊中的感受和建议，给予其他病友帮助">

            </textarea>
            </div>

          </div>

        </div>
        <!-- success btn  over-->
        <div class="success-btn">
          完成
        </div>
      </div>
    </div>

    <!--  tab 服务内容 -->
    <!-- tab -> index -->
    <div class="service-content" v-if="serviceId==3">

      <ul class="text-list">
        <li class="img-box">
          <img src="../../assets/images/inquiry/head.jpg" alt="">
          <div class="text-title">
            <p>图文咨询</p>
            <span>单次服务</span>
          </div>
        </li>
        <li class="price">
          <span>￥30.00</span>
          <p>服务中</p>
        </li>

      </ul>
      <cellInput type="0" title="服务医生" value="赵秀敏" :isRight="true" />
      <cellInput type="0" title="服务期限" value="24小时" :isRight="true" />
      <div class="service-content-warm">
        <p class="title">服务内容</p>
        <p class="content">
          1.本次咨询为限时付费咨询，限时24小时。医生将在24小时内回复您的问题。
          2.为珍惜您的咨询时间，请全部围绕病情进行沟通，避免无关内容。
          3.如果付费24小时后，医生没有进行回复，订单将自动取消并全部退款至您的账户。
        </p>
      </div>
    </div>

    <!-- 咨询弹窗 -->
    <div class="cover" v-if="isShow">
      <div class="pannel-box">
        <div class="img-box">
          <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg" alt>
          <p>李淑珍</p>
        </div>
        <!-- 咨询条目 -->
        <div class="dis-box">
          <p class="dis-title">图文资讯</p>
          <div class="dis-price">
            <p>
              <span>￥</span>
              <span class="price-num">80</span>
            </p>
            <p>
              <a>￥100</a>
            </p>
          </div>
          <!-- 选择日期 -->
          <ul class="dis-day">
            <li v-for="(v,i) in dayArr" :key="v" :class="{'active-day':cur==i}" @click="cur=i">{{v}}</li>
          </ul>
          <!-- 服务内容 -->
          <div class="dis-inner">
            <p>服务说明</p>
            <span>
              1.本次咨询为限时付费咨询，文字/图片方式交流，限时（24小时）
              信息。医生将在24小时内回复您的问题。
              2.为珍惜您的咨询时间，请全部围绕病情进行沟通，避免无关内容
              3.如果付费24小时后，医生没有进行回复，订单将自动取消并全部退款至您的账户。
            </span>
          </div>
        </div>
        <div class="dis-btn" @click="goSeek">立即咨询</div>
      </div>
    </div>

    <div class="cover" v-if="isCode" @click="isCode=!isCode">
      <div class="co">
        <ul class="qrcode-box">
          <li class="title">
            <img :src="doctorMessage.doctorImg" alt>
            <div class="doctor-message">
              <p class="doctor-name"> <span>{{doctorMessage.doctorName}}</span> <span>{{doctorMessage.titleName}}</span>
              </p>
              <p class="hospital-name"><span>{{doctorMessage.hospitalName}}</span>&nbsp;&nbsp;
                <span>{{doctorMessage.sectionName}}</span></p>
            </div>
          </li>
          <li class="qrcode">
            <!-- <img src alt> -->
            <qrcode :value="value" :fg-color="fgColor"></qrcode>
          </li>
          <li class="cue">扫码关注我，随时找我咨询</li>
        </ul>
      </div>
    </div>
    <!-- 擅长，简介 -->

    <div class="cover cover-good" v-if="isGood">
      <div class="good-at">
        <div class="doc-msg">
          <h5> {{doctorMessage.doctorName}}</h5>
          <p class="main-doc"> <span>{{doctorMessage.titleName}}</span> &nbsp;&nbsp; <span>{{doctorMessage.sectionName}}</span></p>
        </div>
        <div class="good-at-label">
          <i class="funbg icon-label_1">擅长</i>
          <p>{{doctorMessage.goodAt}}</p>
        </div>
        <div class="good-at-label">
          <i class="funbg icon-label_1">简介</i>
          <p>{{doctorMessage.doctorInfo}}</p>
        </div>
      </div>
      <span class="close-btn-good-at funbg" @click="isGood=!isGood">

      </span>
    </div>

    <!-- 选择服务pannel -->

    <div class="cover" v-if="isRefer">
      <div class="server-pannel">
        <div class="title-box">
          <p>请选择咨询方式</p>
          <span @click.stop="isRefer=!isRefer">取消</span>
        </div>
        <ul class="sel-server">
          <li class="vux-1px-b" @click="jumpChart(v)" v-for="(v,i) in funArr" :key="i" v-if="v.status=='1'">
            <div class="img-box">
              <!-- <img src="../../assets/images/inquiry/s-pic.png" alt=""> -->
              <img :src="v.funIconOn" alt="">

            </div>
            <p class="server-intro"><span class="f-title">{{v.funName}}</span> <span class="s-title">使用图文的方式与医生沟通</span>
            </p>
            <div class="money">
              <p>{{v.presentPrice}}元/次 </p>
              <span class="iconfont icon-right1" ></span>
            </div>
          </li>
          <!-- <li class="vux-1px-b">
            <div class="img-box">
              <img src="../../assets/images/inquiry/s-video.png" alt="">

            </div>
            <p class="server-intro"><span class="f-title">视屏咨询</span> <span class="s-title">24小时内接通电话，通话时长15分钟 </span> </p>
            <div class="money">
              <p>{{v.presentPrice}}元/次 </p>
              <span class="iconfont icon-right1"></span>
            </div>
          </li> -->
          <!-- <li class="vux-1px-b">
            <div class="img-box">
              <img src="../../assets/images/inquiry/s-phone.png" alt="">

            </div>
            <p class="server-intro"><span class="f-title">电话咨询</span> <span class="s-title"> 使用音视频方式与医生沟通，时长10分钟 </span> </p>
            <div class="money">
              <p>30元/次 </p>
              <span class="iconfont icon-right1"></span>
            </div>
          </li> -->
        </ul>
      </div>
    </div>
    <!-- footer-btn -->
    <div class="footer-btn vux-1px-t" v-if="serviceId==1">
      <p class="attention" @click="followDoctor">
        <span class="icons funbg " :class="{'icon-pinjia1':!isFocus}"></span>
        <span>关注</span>
      </p>
      <div class="consult-btn" @click="isRefer=!isRefer"
        :class="{'no-click':doctorMessage.online=='false'|| funArr.length==0}">
        立即咨询
      </div>
    </div>

  </div>
</template>
<script>
  import {
    Qrcode,
    dateFormat
  } from "vux";
  import terminal from "@/utils/terminal"
  import evaluateItem from "@/components/evaluateItem";
  import cellInput from "@/components/cellInput";
  import chartInput from "@/components/chartInput";
  import defaultImg from "@/assets/images/default-doctor.png"
  export default {
    data() {
      return {
        dayArr: ["每次", "每周", "包月"],
        patientService: [{
            title: "医生资料",
            id: 1
          },
          {
            title: "医患对话",
            id: 2
          },
          {
            title: "服务内容",
            id: 3
          }
        ],
        cur: 0,
        isShow: false,
        value: "https://vux.li",
        fgColor: "#000",
        isCode: false,
        isFocus: false,
        serviceId: 1,
        chartDate: dateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss'),
        isCloseChart: false,
        isEvaluate: false,
        doctorMessage: [],
        evaluateArr: [],
        isGood: false,
        isRefer: false,
        funArr: []
      };
    },
    components: {
      Qrcode,
      cellInput,
      chartInput,
      evaluateItem

    },
    mounted() {
      // setInterval(() => {
      //   this.value = `https://vux.li?t=${Math.random()}`
      //   this.fgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
      // }, 1000)
      // this.getUserMedia();
      this.getdoctorDetail();
      this.getDoctorFun();
      this.getDoctorEvaluate();
      this.getDoctorStatus();
    },
    computed: {
      platformName() {
        return this.$store.state.platformName
      },
      userId() {
        return this.$store.state.userId
      }
    },
    beforeRouteEnter(to, from, next) {
      console.log(to);
      console.log(from);
      next(vm => {
        if (from.path == "/") {
          vm.getdoctorDetail();
          vm.getDoctorFun();
          vm.getDoctorEvaluate();
          vm.getDoctorStatus();
        }

      });
    },
    methods: {
      goSeek() {
        // 隐藏
        this.isShow = false;
        // 跳转
        this.changeJump("/addSicker", {});
      },
      // 错误图片处理
      setErrorImg(e) {
        console.log(e);
        //  console.log(e.target.src);
        e.target.src = defaultImg


      },
      // 手机录音功能
      getUserMedia() {
        navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
          })
          // 参数表示需要同时获取到音频和视频
          .then(stream => {
            // 获取到优化后的媒体流
            console.log('流媒体是？？？');

            console.log(stream);

            // let video = document.querySelector('#rtc');
            // video.srcObject = stream;
          })
          .catch(err => {
            // 捕获错误
            console.log(err);

          });
      },
      // 获取医生详情
      getdoctorDetail() {
        this.$post('doctor/getDoctorDetail', {
          platformAccount: this.platformName,
          doctorId: this.$route.query.doctorId
        }).then(res => {
          // console.log(res)
          if (res.code == 0) {
            this.doctorMessage = res.data;
            this.value = res.data.qrcode
            // 开发先用311003 res.data.hospitalCode
            this.$store.commit('saveHospitalCode', res.data.hospitalCode)

          }
        })
      },
      // 获取医生的功能
      getDoctorFun() {
        this.$post('doctor/getDoctorFun', {
          platformAccount: this.platformName,
          doctorId: this.$route.query.doctorId
        }).then(res => {
          console.log(res)
          if (res.code == 0) {
            this.funArr = res.data;
          }
        })
      },
      // 获取医生的评价
      getDoctorEvaluate() {
        this.$post('doctor/getDoctorJudge', {
          platformAccount: this.platformName,
          doctorId: this.$route.query.doctorId,
          limit: 10,
          page: 1
        }).then(res => {
          // console.log(res)
          if (res.code == 0) {
            res.data.forEach(v => {
               if(v.patientName) v.patientName=this.coverName(v.patientName)
              if (v.judgeLable) {
                v.judgeLable = v.judgeLable.split(',');
               
               
              }

            })
            this.evaluateArr = res.data;
          }
        })
      },
      // 名字隐藏中间的汉字
      coverName(str){
      //  return   str.substr(0,1)+"*"+str.substr(str.length-1,str.length);
       return   str.substr(0,1)+"**";
      },
      // 获取医生的关注状态
      getDoctorStatus() {
        if (this.$store.state.token) {
          this.$post('doctor/isFollowByUserId', {
            platformAccount: this.platformName,
            // userId: this.userId,
            doctorId: this.$route.query.doctorId
          }).then(res => {
            if (res.code == 0) {
              this.isFocus = res.data.status == '1' ? true : false;
            }
          })
        }

      },
      // 关注医生
      followDoctor() {
        if (this.$store.state.token) {

          this.$post('doctor/followDoctor', {
            platformAccount: this.platformName,
            // userId: this.$route.query.userId,
            doctorId: this.$route.query.doctorId,
            isFollow: this.isFocus ? 0 : 1
          }).then(res => {
            console.log(this.isFocus == true)
            if (res.code == 0) {
              console.log(this.isFocus)
              this.isFocus = !this.isFocus;
              this.$vux.toast.text(this.isFocus ? "关注成功" : "取消成功", 'middle')
            }
          })
        } else {
          // !TODO 没有登录跳转登录
          // 跳转登录页面
          // alert('go login')
          window.terminal.toLogin()
        }

      },
      jumpChart(item) {
        console.log(this.doctorMessage.online);

        if (this.doctorMessage.online == 'false') {
          this.$vux.toast.text('该医生暂未上线');
          return false;
        }
        if (item.status == '0') {
          this.$vux.toast.text('该功能暂未开通', "middle")
          return false;
        }
        if (new Number(item.status) && this.doctorMessage.online == "true") {
          this.changeJump('/addSicker', {
            funId: item.id,
            price: item.presentPrice,
            doctorId: this.doctorMessage.doctorId
          })
        }

      }

    }
  };

</script>
<style lang="less" scoped>
  @import url('../../styles/doctorHome.less');
  @w: 656px;
  @h: 782px;

  .no-click {
    background-color: #c1c1c1 !important;
    pointer-events: none;
  }

  .co {
    width: @w;
    height: @h;
    background: rgba(255, 255, 255, 1);
    border-radius: 20px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -@w/2;
    margin-top: -@h/2;

  }

  .active-patient {
    background: rgba(28, 163, 254, 1);
    border: 1px solid rgba(45, 159, 241, 1);
    color: #fff !important;
  }

  .patient-service {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
    background-color: #fff;

    >li {
      width: 180px;
      height: 60px;
      border: 1px solid rgba(45, 159, 241, 1);
      line-height: 60px;
      text-align: center;
      color: #2D9FF1;
      font-size: 30px;
    }

    >li:not(:first-child) {
      border-left: none;
    }

    >li:first-child {
      border-radius: 6px 0px 0px 6px;
    }

    >li:last-child {
      border-radius: 0px 6px 6px 0px;
    }
  }

  .qrcode-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;


    >.title {
      // width: 320px;
      padding: 0 25px;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      >img {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        display: block;
        margin-right: 30px;
      }

      >.doctor-message {
        color: #999;

        >.doctor-name {
          >span:first-child {
            font-size: 34px;
            color: #333;
            font-weight: bold;
          }

          >span:last-child {
            font-size: 24px;
          }

        }

        >.hospital-name {
          display: flex;
          align-items: center;
          justify-content: flex-start;

          text-align: left;

          >span {

            font-size: 24px;
            display: inline-block;
            // transform: scale()
          }


        }
      }

    }

    >.qrcode {

      // margin-top: 33px;
      /deep/ img {
        margin: 0 auto;
        // width: 283px;
        // height: 271px;
        width: 225*2px !important;
        height: 225*2px !important;
        display: block;
      }
    }

    >.cue {
      // margin-top: 33px;
      text-align: center;
      font-size: 26px;
      color: #333;
    }
  }

  .active-online {
    background-color: #fff !important;
   
    >p{
       color:  #2A93E2 !important;
    }
  }

  .docutor-home {

    >.go {
      padding-bottom: 140px;

      >.docutor-message {
        color: #fff;

        background: linear-gradient(234deg, rgba(98, 145, 224, 1), rgba(100, 172, 231, 1));
        padding: 40px 30px;
        background-color: #fff;
        // margin-bottom: 20px;
        font-size: 26px;

        >.img-box1 {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;

          >.code {
            margin-top: -10px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 74px;
            height: 74px;
            margin-left: 25px;
            background-color: #dcf1ff;

            >span {
              display: block;
              width: 30px;
              height: 30px;
              background-image: url("../../assets/images/inquiry/code.png");
            }
          }

          >.online-box {
            z-index: 10;
            margin-top: -10px;
            width: 68px;
            height: 36px;
            border-radius: 18px;
            color: #fff;
            background-color: #c2c2c2;

            >p {
              font-size: 22px;
              font-weight: bold;
              // color: rgba(42, 147, 226, 1);
              color: #fff;
              transform: scale(22/24);
              text-align: center;
              line-height: 36px;
            }
          }

          >figure {

            display: block;

            width: 124px;
            height: 124px;

            >img {
              width: 100%;
              height: 100%;
              display: block;
              border-radius: 50%;

            }
          }
        }

        >.profession {
          flex: 3;

          >.docutor-lv {
            align-items: center;
            justify-content: space-between;

            >.docutor-name {
              >.docutor-title {
                font-size: 34px;
                color: #fff;
                font-weight: bold;
                margin-bottom: 20px;
                >.title-name{
                  font-size:28px;
                  font-weight:400;
                  color:rgba(255,255,255,1);
                }
              }
            }

            >.follow-btn {
              background-color: #7fb9ed;
              display: flex;
              align-items: center;
              justify-content: center;

              >span {
                display: block;
                width: 28px;
                height: 28px;

                background-image: url("../../assets/images/inquiry/code_1.png");
                margin: 0 auto;
              }

              width: 58px;

              height: 50px;

              border-radius: 4px;
              text-align: center;
              color: #fff;

            }
          }

        }
      }

      >.follow-msg {
        background: linear-gradient(234deg, rgba(98, 145, 224, .9), rgba(100, 172, 231, .9));
        align-items: center;
        justify-content: flex-start;
        padding: 13px 0;

        // margin-top: 30px;
        >.msg-item {
          flex: 1;
          text-align: center;

          >p:first-child {
            font-size: 30px;
            color: #fff;
          }

          >p:last-child {
            font-size: 24px;
            color: #fff;
            transform: scale(20/24);
          }
        }

        >.msg-item:not(:first-child) {
          margin-left: 131px;
        }
      }

      >.consultative {
        padding: 30px;
        background-color: #fff;
        align-items: center;
        margin-bottom: 20px;

        >li {
          flex: 1;
          text-align: center;

          >figure {
            width: 90px;
            height: 90px;
            display: block;
            margin: 0 auto;
            margin-bottom: 15px;

            >img {
              max-width: 100%;
              height: auto;
              display: block;
            }
          }

          >.consultative-title {

            font-size: 28px;
            font-weight: bold;
            color: rgba(51, 51, 51, 1);
            line-height: 28px;
          }

          >span {
            line-height: 1;
            font-size: 24px;
            transform: scale(0.9);
            color: #ff6c00;
            line-height: 24px;
          }
        }
      }

      >.skill {
        margin-bottom: 20px;
        padding: 0 30px;
        background-color: #fff;

        >.list-skill {
          font-size: 28px;
          color: #666;
          padding: 30px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;

          >p {
            align-items: center;
            justify-content: flex-start;
            position: relative;

            >span {
              // margin-left: 15px;
              text-align: center;

              >span {
                line-height: 41px;
                color: #458DE6;
                font-size: 24px;
              }
            }


          }

          >.inrto-list {
            font-size: 26px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
          }

          >.inner {

            font-size: 26px;
            color: #333;
          }
        }
      }

      >.discuess {
        background-color: #fff;

        >.discuess-title {
          font-size: 28px;
          color: #666;
          align-items: center;
          padding: 30px;
          justify-content: space-between;

          >p {
            font-size: 30px;
            color: #B3B3B3;
          }

          >span {
            font-size: 30px;
            font-weight: bold;
            color: rgba(51, 51, 51, 1);
          }

          >span:last-child {
            margin-left: 15px;

          }
        }

        >.discuess-inner {
          padding: 30px;

          >.star-box {
            width: 100%;
            align-items: center;
            justify-content: space-between;
            font-size: 24px;
            color: #999;

            >.star {
              display: flex;
              align-items: center;

              >.star-list {
                width: 30px;
                height: 30px;
                display: block;
                background-image: url('../../assets/images/chart/star_1.png');
              }
            }
          }

          >.dis-tag {
            margin-top: 30px;

            >span {
              background: rgba(242, 242, 242, 1);
              border-radius: 4px;
              padding: 8px 15px;
              color: #808080;
              text-align: center;
              font-size: 24px;
              line-height: 36px;
            }

            >span:not(:first-child) {
              margin-left: 18px;
            }
          }

          >.dis-inner {
            text-overflow: ellipsis;
            word-wrap: break-word;
            word-break: break-all;
            white-space: normal !important;
            -webkit-box-orient: vertical;
            font-size: 24px;
            color: #030e13;
            margin-top: 30px;
          }
        }
      }
    }

    >.footer-btn {
      height: 120px;
      background-color: #fff;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;

      >.attention {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 30px;
        color: #666;
        margin-left: 50px;

        >span:first-child {
          width: 44px;
          height: 44px;
          display: block;
          background-image: url('../../assets/images/inquiry/star.png');
        }

        >span:last-child {
          display: block;
          transform: scale(22/30);
        }
      }

      >.consult-btn {
        width: 590px;
        height: 88px;
        background: rgba(45, 159, 241, 1);
        border-radius: 10px;
        font-size: 34px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 88px;
        text-align: center;
        margin-right: 22px;

      }

    }
  }

  .active-day {
    background: rgba(66, 160, 226, 1);
    color: #fff !important;
  }

  .pannel-box {
    z-index: 100;
    padding: 22px;
    height: 900px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;

    >.img-box {
      text-align: center;
      margin-bottom: 30px;

      >img {
        width: 124px;
        height: 124px;
        border-radius: 50%;
        display: block;
        margin: 0 auto;
        margin-top: -(124px/1.5);
      }

      >p {
        font-size: 34px;
        color: #333;
        font-weight: bold;
        text-align: center;
      }
    }

    >.dis-box {
      >.dis-title {
        margin-bottom: 30px;
        font-size: 34px;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
      }

      .dis-price {
        margin-bottom: 30px;
        font-size: 24px;
        color: #999;
        display: flex;
        align-items: baseline;

        >p:first-child {
          color: #ff780a;

          >.price-num {
            font-size: 40px;
          }
        }

        >p:last-child {
          margin-left: 24px;

          >a {
            text-decoration: line-through;
          }
        }
      }

      >.dis-day {
        margin-bottom: 30px;
        display: flex;
        align-items: center;

        >li {
          width: 182px;
          height: 56px;
          // background: rgba(66, 160, 226, 1);
          border: 2px solid rgba(66, 160, 226, 1);
          border-radius: 4px;
          text-align: center;
          line-height: 56px;
          font-size: 28px;
          font-weight: bold;
          color: rgba(66, 160, 226, 1);
        }

        >li:not(:first-child) {
          margin-left: 27px;
        }
      }

      >.dis-inner {
        >p {
          font-size: 30px;
          color: #333;
        }

        >span {
          font-size: 26px;
          color: #666;
        }
      }
    }

    >.dis-btn {
      text-align: center;
      height: 88px;
      position: absolute;
      left: 22px;
      right: 22px;
      bottom: 22px;
      background: rgba(66, 160, 226, 1);
      border-radius: 6px;
      font-size: 34px;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      line-height: 88px;
    }
  }

  .icons {
    width: 27px;
    height: 27px;
    display: block;
  }

  .icon-label_1 {
    background-image: url("../../assets/images/inquiry/label_1.png");
    width: 85px;
    height: 41px;
    // background-position: 0 0;
  }

  .icon-jianjie {
    background-image: url("../../assets/images/jianjie.png");
  }

  .icon-pinjia {
    background-image: url("../../assets/images/blur_star.png");
  }

  .icon-pinjia1 {
    background-image: url("../../assets/images/inquiry/Wicon@2x.png") !important;
  }

  .icon-star {
    background-image: url("../../assets/images/gold_star.png");
  }

</style>
