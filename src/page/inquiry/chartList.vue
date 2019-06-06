<template>
  <div class="docutor-home vg">


    <!--mescroll滚动区域的基本结构-->
    <!-- <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit"> -->
    <!--内容...-->
    <!--滑动区域-->
    <div ref="mescroll" class="mescroll">
      <!-- chart list  -->
      <!-- 聊天室  -->
      <div class="chart-box" v-show="serviceId==2" ref="chartHeight">
        <ul class="chart">

          <!-- 订单消息 -->
          <li class="chart-item">
            <!-- 聊天时间 -->
            <div class="chart-date">
              {{orderItem.createTime}}
            </div>
            <!-- 聊天信息 -->
            <!-- 1 医生 0 患者 -->
            <div class="chart-line active-recivice">
              <figure>
                <img :src="doctorMessage.doctorImg" alt="" @error="setErrorImg">
              </figure>

              <!-- <img src="../../assets/images/default-doctor.png" alt="" v-else> -->
              <!-- <img src="http://192.168.1.81:8888/frontpage/images/demo1.jpg" > -->
              <div class="chart-inner-box">
                <!-- 聊天文字 -->
                <!-- <button @click="close1"> 关闭</button> -->
                <!--  @click="changeJump('/sureInquiry')" -->
                <div class="chart-inner">

                  性名：{{orderItem.patientName}} <br />
                  年龄：{{orderItem.age}}岁 <br />
                  {{orderItem.description}}<br />
                  <div class="img-box" v-if="orderItem.picUrl">
                    <figure v-for="pic in (orderItem.picUrl).split(',')" :key="pic">
                      <img :src="pic" alt="" @click="bigImg($event)">
                    </figure>
                  </div>
                </div>
                <!-- 聊天图片 -->
                <!-- <div class="chart-img" v-if="v.msgType==4">
                  <img :src="v.content" alt="">
                </div> -->
              </div>
            </div>
            <!-- 聊天提醒 -->
            <div class="chart-warm">

              您的问题已通知医生，医生将利用空余时间回复，如果觉得病情严重紧急，建议前往医院就诊。
              本次咨询在24小时内有效，若您已付费但医生没有来得及回答，咨询费用将自动退还。

            </div>

          </li>
          <!-- <li class="chart-item" v-for="(v,i) in chartPannelList" :key="i" -->
          <li class="chart-item" v-for="(v,i) in chatRecordList" :key="i"
            v-if="(v.userType==1 ||v.userType==0) && !v.content=='' ">
            <!-- 聊天时间 -->
            <div class="chart-date">
              {{v.createTime}}
            </div>
            <!-- 聊天信息 -->
            <!-- 1 医生 0 患者 -->
            <div class="chart-line" :class="{'active-recivice':v.userType==1}">
              <figure>
                <img :src="doctorMessage.doctorImg" alt="" @error="setErrorImg" v-if="v.userType==1">
                <img src="../../assets/images/inquiry/default-patient.png" alt="" v-else>
              </figure>

              <div class="chart-inner-box">
                <!-- 聊天文字 -->
                <div class="chart-inner" v-if="v.msgType==1 ">
                  {{v.content}}
                </div>
                <!-- 聊天图片 -->
                <div class="chart-img" v-if="v.msgType==4">
                  <img :src="v.content" alt="" @click="bigImg($event)">
                </div>
              </div>
            </div>
            <!-- 聊天提醒 -->
            <div class="chart-warm" v-if="false">

              您的问题已通知医生，医生将利用空余时间回复，如果觉得病情严重紧急，建议前往医院就诊。
              本次咨询在24小时内有效，若您已付费但医生没有来得及回答，咨询费用将自动退还。

            </div>

          </li>


          <!-- 点击去评价 -->
          <li class="evaluate-box" v-if="isClose">
            <p class="chart-status">患者结束咨询</p>
            <div class="chart-message" v-if="isMyEvaluateOver">
              <p class="evaluate-title">待评价</p>
              <span>咨询已经结束，请对医生的服务进行评价。</span>
              <div class="click-evaluate vux-1px-t" @click="isEvaluate=!isEvaluate">
                <p>点此进行评价</p>
                <span class="iconfont icon-right"></span>
              </div>
            </div>

          </li>
          <!-- 评价已完成 -->
          <li class="over-evaluate" v-if="isOverEvaluate">
            <div class="evaluate-status">
              <span>患者评价：</span>
              <p class="evaluate-num">
                <i class="funbg " v-for="(v,i) in (curStar+1)" :key="i"></i>
              </p>
            </div>
            <!-- ev -->
            <div class="evaluate-result">
              <div class="help-btn-box">
                <p class="help-btn" v-for="(v,i) in evaluateLabel" v-if="v.isSel">{{v.lableName}}</p>
              </div>

              <p class="help-inner"> {{evaluateContent}}</p>
            </div>
          </li>
        </ul>
        <div class="chart-input">
          <chartInput @goSend="send" :docMsg="doctorMessage" :payPrice="orderItem.orderPrice"
            :isCloseChart="isCloseChart" :isShowCream="isShowCream" :childClose="isClose" @closeChart="closechart"
            @alertIsClose="alertIsClose" @showCream="showCream" />
        </div>
      </div>
      <!-- </mescroll-vue> -->
    </div>
    <!-- 聊天评价面板 -->
    <div class="cover" v-if="isEvaluate">
      <div class="chart-pannel">
        <p class="evaluate-title vux-1px-b"> <span class="iconfont icon-baseline-close-px"
            @click="isEvaluate=!isEvaluate"></span> 评价</p>
        <div class="content">
          <!-- 评价的医生 -->
          <p class="evaluate-doctor">
            <span>{{doctorMessage.doctorName}}</span>
            <span>{{doctorMessage.titleName}}</span>
          </p>
          <!-- 评价的分数 -->
          <p class="evaluate-star">
            <!-- <i class="funbg icon-star" v-for="v in 1" :key="v"  @click="selStar"></i> -->
            <i class="funbg icon-greystar " :class="{'icon-star':curStar>=i}" v-for="(v,i) in 5" :key="i"
              @click="selStar(i)"></i>

          </p>
          <p class="evaluate-text">{{getText(this.curStar+1)}}</p>
          <!-- evaluate-label -->
          <ul class="evaluate-label-box">
            <li v-for="(v,i) in evaluateLabel " :key="i" :class="{'active-label':v.isSel}" @click="v.isSel=!v.isSel">
              {{v.lableName}}
            </li>
          </ul>

        </div>
        <!-- textarea-input -->
        <div class="editor-evaluate">
          <div class="text-box">
            <div class="text-box2">
              <textarea name="" id="" maxlength="100" placeholder="记录问诊中的感受和建议，给予其他病友帮助" :value="evaluateContent" @input="wordSize($event.target.value)" >

            </textarea>
            </div>
              <p class="word-num"> <span>{{wordLen}}</span>/100</p>
          </div>

        </div>
        <!-- success btn  over-->
        <div class="success-btn" @click="setEvaluate">
          完成
        </div>
      </div>
    </div>





    <div class="cover" v-if="isCode" @click="isCode=!isCode">
      <div class="co">
        <ul class="qrcode-box">
          <li class="title">
            <img src="../../assets/images/inquiry/head.jpg" alt>
            <div class="doctor-message">
              <p class="doctor-name"> <span>李素珍</span> <span>主治医师</span> </p>
              <p class="hospital-name"><span>河北医科大学第二医院</span>&nbsp;&nbsp; <span>中西医结合内科</span></p>
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
    <!-- footer-btn -->
    <div class="footer-btn vux-1px-t" v-if="serviceId==1">
      <p class="attention" @click="isFocus=!isFocus">
        <span class="icons funbg " :class="{'icon-pinjia1':isFocus}"></span>
        <span>关注</span>
      </p>
      <div class="consult-btn">
        立即咨询
      </div>
    </div>
    <div class="cover" v-show="imgShow" @click=" imgShow=!imgShow" style="background-color:rgba(0,0,0,1)">
      <div class="big-img">
        <figure>
          <img src="" alt="" ref="bigImgShow">
        </figure>

      </div>
    </div>

  </div>
</template>
<script>
  import {
    Qrcode,
    dateFormat,
    Previewer
  } from "vux";
  import {
    getAge
  } from '@/utils/age'
  // 引入mescroll的vue组件
  import MescrollVue from 'mescroll.js/mescroll.vue'
  import cellInput from "@/components/cellInput";
  import chartInput from "@/components/chartInput";
  import {
    mapState
  } from "vuex"
  import {
    log
  } from 'util';
  // 引入mescroll.min.js和mescroll.min.css
  import MeScroll from 'mescroll.js'
  import 'mescroll.js/mescroll.min.css'
  import defaultImg from "@/assets/images/default-doctor.png"
  import {
    setTimeout
  } from 'timers';
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
        fgColor: "#ff0",
        isCode: false,
        isFocus: false,
        serviceId: 2,
        chartDate: dateFormat(new Date(), 'YYYY-MM-DD HH:mm:ss'),
        isCloseChart: false,
        isEvaluate: false,
        // doctorMessage: [],
        path: '',
        socket: "",
        pageSize: 10,
        pageNum: 2,
        chatRecordList: [], //聊天记录
        firstChatRecordList: [],
        mescroll: null,

        orderItem: {},
        isClose: false,
        isShowCream: false,
        doctorMessage: {}, //医生详情的数据
        evaluateLabel: [],
        // curLabel:0,
        curStar: -1,
        evaluateContent: "",
        isOverEvaluate: false,
        isMyEvaluateOver: true,
        imgShow: false,
        messageType: null
        //   mescrollUp: {
        //   callback: this.upCallback,
        //   htmlNodata: '<p class="upwarp-nodata">-- 已经到底了 --</p>',
        //   // auto: true,
        //   page: {
        //     num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
        //     size: 10 //每页数据条数,默认10
        //   },

        // },

      };
    },
    components: {
      Qrcode,
      cellInput,
      chartInput,
      MescrollVue,
      Previewer

    },
    computed: {
      ...mapState(['chartPannelList', 'patientId']),
         wordLen() {
        return this.evaluateContent.length;
      },

    },
    created() {

      this.getOrderDetail()
      this.getdoctorDetail()
    },
    mounted() {
      setInterval(() => {
        this.value = `https://vux.li?t=${Math.random()}`
        this.fgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
      }, 1000)
      // this.getUserMedia();
      this.init();
      // this.queryChartList();

      // 创建MeScroll对象:为避免配置的id和父组件id重复,这里使用ref的方式初始化mescroll
      this.mescroll = new MeScroll(this.$refs.mescroll, { // 在mounted生命周期初始化mescroll,以确保您配置的dom元素能够被找到.
        down: {
          auto: true, // 是否在初始化完毕之后自动执行下拉回调callback; 默认true
          mustToTop: true,
          resetClass: "mescroll-downwarp-reset",
          callback: this.downCallback // 下拉刷新的回调
        },

      })


      this.$nextTick(() => {
        // this.firstData();
        this.getEvaluateLabel()
        this.getUserInfo()
        this.pageNum = 1
      })
      setTimeout(() => {
        this.readyInit()
      }, 500);
    },
    methods: {
      setErrorImg(e) {
        console.log(e);
        //  console.log(e.target.src);
        e.target.src = defaultImg


      },

      // mescroll组件初始化的回调,可获取到mescroll对象
      mescrollInit(mescroll) {
        this.mescroll = mescroll // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
      },
      readyInit() {
        console.log('当前聊天的高度');
        console.log(this.$refs.fot);

        let innHeight = this.$refs.chartHeight.offsetHeight;
        let boxHeight = this.$refs.mescroll.offsetHeight;
        this.$refs.mescroll.scrollTop = (innHeight + 30 - boxHeight)
        console.log(this.$refs.chartHeight.offsetHeight);
        console.log(this.$refs.mescroll.offsetHeight);
        console.log(this.$refs.chartHeight.clientHeight);

      },
        wordSize(val) {
        this.evaluateContent = val

      },
      firstData() {
        let {
          doctorId,
          roomId,
          userType,
          orderNo,
          orderId
        } = this.$route.query;
        let params = {
          orderNo,
          orderId,
          page: "1",
          limit: "10",
          order: "desc",
          sidx: "create_time"
        }
        this.$get('inquiryContent/getInquiryContentList', params).then(res => {
          if (res.code == 0) {
            let a = this.unshiftBack(res.data.list);
            a.forEach(v => {

              // v.createTime = v.createTime.replace(/\-/g, "/");
              // v.createTime = dateFormat(new Date(v.createTime), 'YYYY-MM-DD HH:mm:ss')
            })
            this.chatRecordList = a
            setTimeout(() => {
              this.readyInit()
            }, 200)


          }

        })
      },
      /* 下拉刷新的回调 */
      downCallback() {
        console.log('this.mescroll.version=' + this.mescroll.version);
        // 联网加载数据
        let {
          doctorId,
          orderId,
          roomId,
          userType,
          orderNo
        } = this.$route.query;
        let params = {
          orderNo,
          orderId: orderId,
          page: this.pageNum,
          limit: this.pageSize,
          order: "desc",
          sidx: "create_time"
        }
        this.$get('inquiryContent/getInquiryContentList', params).then(res => {
          if (res.code == 0) {
            // console.log(res)
            let {
              currPage,
              totalPage
            } = res.data;
            let a = this.unshiftBack(res.data.list);
            // let a=res.data.list
            // debugger;
            console.log(a);

            a.forEach(v => {
              //   function GetDateDiff(startDiffTime, endDiffTime) {
              // //将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式 
              // startTime = startDiffTime.replace(/\-/g, "/");
              // endTime = endDiffTime.replace(/\-/g, "/");
              // }();
              // v.createTime = v.createTime.replace(/\-/g, "/");
              // v.createTime = dateFormat(new Date(v.createTime), 'YYYY-MM-DD HH:mm:ss')
            })
            // if (totalPage == 1) {
            //   this.chatRecordList = [];
            // }
            // if (currPage == 1) {
            //   this.firstChatRecordList = a;
            // }
            if (currPage < totalPage) {
              this.chatRecordList = [...a, ...this.chatRecordList];
              this.pageNum++;

            }
            if (currPage == totalPage) {
              this.chatRecordList = [...a, ...this.chatRecordList];
              this.pageNum++;
              this.$vux.toast.text('没有更多记录')
              this.mescroll.lockDownScroll(true)
            }


            // setTimeout(() => {
            //   this.readyInit()
            // }, 200)
          }

        }).catch(res => {
          this.mescroll.endErr()
        })

        console.log('下拉刷新');
        this.$nextTick(() => {
          this.mescroll.endSuccess();
        })

      },
      // 聊天倒叙
      unshiftBack(arr) {
        let a = []
        // let b = arr.map(v => a.unshift(v))
        arr.forEach(v => {
          a.unshift(v)
        })
        return a
      },
      //防止用户没有登陆或者userid
      //获取用户接口
      getUserInfo() {
        this.$get('getUser/getUserDetil').then(res => {
          if (res.code == 0) {
            this.userInfo = res.data;

            this.$store.commit('saveUserId', this.userInfo.inquiryUserId)
          }
        })
      },


      // chart
      init() {
        if (typeof (WebSocket) === "undefined") {
          this.$vux.toast.text("您的浏览器不支持socket")
        } else {
          // 实例化socket
          let {
            doctorId,
            roomId,
            userType,
            orderNo

          } = this.$route.query;
          this.socket = new WebSocket(
            `wss://qfkj.jiankanghebei.com/websocket/?roomId=${orderNo}&userId=${this.$store.state.userId}&type=inquiry&token=${this.$store.state.token}&userType=0`
          )
          // this.socket = new WebSocket(
          //   `ws://192.168.1.152:8787/websocket?roomId=${orderNo}&userId=${this.$store.state.userId}&type=inquiry&token=${this.$store.state.token}&userType=0`
          // )
          // this.socket = new WebSocket(
          //   `ws://192.168.0.204:8787/websocket?roomId=123&userId=${this.patientId}&type=inquiry&token=token&userType=0`
          //   )
          // 监听socket连接
          this.socket.onopen = this.open
          // 监听socket错误信息
          this.socket.onerror = this.error
          // 监听socket消息
          this.socket.onmessage = this.getMessage
          //监听关闭scoket 消息
          this.socket.onclose = this.close;
        }
      },
     
      open: function () {
        console.log("socket连接成功")
      },
      error: function () {
        console.log("连接错误")
      },
      getMessage(msg) {

        console.log('接受到的消息');
        console.log(msg.data);
        // this.pageNum=1;
        // this.downCallback();

        let a = JSON.parse(msg.data);
        // let a=this.chatRecordList;
        console.log(a.userType);

        if (a.userType == '1' || a.userType == '0') {
          // a.createTime = dateFormat(new Date(a.createTime), 'YYYY-MM-DD HH:mm:ss')
          // this.$store.commit('saveChartList', a)
          this.messageType = a.msgType;
          // debugger;
          if(this.messageType==10){
            this.closeLine()
            return false;
          }
          this.chatRecordList = [...this.chatRecordList, a];
          console.log('当前的list');

          console.log(this.chatRecordList);

          // 重新计算高度
          this.$nextTick(() => {
            this.readyInit()
          })

        }
      },
      send(msg) {
        let {
          doctorId,
          roomId,
          userType,
          orderNo,
          orderId
        } = this.$route.query;
        let params = {
          orderId,
          roomId: orderNo,
          type: "inquiry",
          orderNo,
          fromUserId: this.$store.state.userId,
          toUserId: doctorId,
          msgType: msg.msgType,
          content: msg.msg,
          msgStatus: "0",
          userType: "0",
          patientName: this.orderItem.patientName,
          ch: this.userInfo.channeIdentify,
          pf: this.userInfo.platformAccount,
          exp: this.userInfo.exp
        }
        
        
        this.socket.send(JSON.stringify(params))
        // this.$store.commit('saveChartList',params)
        console.log('我传的值');
// console.log(this.socket);
        console.log(params)
      },
      close(msg) {
        console.log(msg);
        console.log(msg.type);
        if (msg.type == 'close') {
          // alert(this.messageType)
          if (this.messageType != 10) {
            
            // alert('重新连接')
            this.init()
          
          }

          // 重新计算高度
          setTimeout(() => {
            this.readyInit()
          }, 500)


          // this.updataOrderSate()
        }

        console.log("socket已经关闭")

      },
      // 打开下面功能栏，【 图片 结束聊天。。。。。】
      showCream(msg) {
        this.isShowCream = msg;
        this.isShowCream = !this.isShowCream;
      },
      // 打开当前的查询是for关闭的弹窗
      alertIsClose(msg) {
        this.isCloseChart = msg;
        this.isCloseChart = !this.isCloseChart;
      },
      // 关闭当前的链接
      closechart(msg) {
        // console.log(msg);
        this.isCloseChart = msg.isCloseChart;

        if (msg.set) {
          let {
            doctorId,
            roomId,
            userType,
            orderNo,
            orderId
          } = this.$route.query;
          let params = {
            orderId,
            roomId: orderNo,
            type: "inquiry",
            orderNo,
            fromUserId: this.$store.state.userId,
            toUserId: doctorId,
            msgType: "10",
            content: "",
            msgStatus: "",
            userType: "0",
            patientName: this.orderItem.patientName,
            ch: this.userInfo.channeIdentify,
            pf: this.userInfo.platformAccount,
            exp: this.userInfo.exp
          }
          this.socket.send(JSON.stringify(params))
          console.log('我传的值');
          console.log(params);

         this.socket.close();
          this.isClose = !this.isClose
          this.updataOrderSate()

        }
        this.isCloseChart = !this.isCloseChart;
        //  关闭当的功能栏
        this.isShowCream = !this.isShowCream;
        // 重新计算高度
        // this.readyInit()

      },

      closeLine(){
          this.socket.close();
          this.isClose = !this.isClose
          // this.updataOrderSate()

      },



      goSeek() {
        // 隐藏
        this.isShow = false;
        // 跳转
        this.changeJump("/addSicker", {});
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
      //获取订单详情
      getOrderDetail() {
        this.$get('inquiryOrder/getInquiryOrderInfo', {
          orderNo: this.$route.query.orderNo
        }).then(res => {
          if (res.code == 0) {
            let a = res.data;
            // a.createTime = a.createTime.replace(/\-/g, "/");
            // a.createTime = dateFormat(new Date(a.createTime), 'YYYY-MM-DD HH:mm:ss')
            this.$set(a, 'age', getAge(res.data.patientIdcard))
            this.orderItem = a;
            if (this.orderItem.orderState != 0 && this.orderItem.orderState != 1) {
              // alert(1)
              this.isClose = true;
              // console.log(this.isClose);

            }
            // 订单详情获取完成以后在计算高度

          }
        })
      },
      // 获取医生详情
      getdoctorDetail() {
        this.$post('doctor/getDoctorDetail', {
          platformAccount: this.$store.state.platformName,
          doctorId: this.$route.query.doctorId
        }).then(res => {
          console.log(res)
          if (res.code == 0) {
            let a = res.data;


            this.doctorMessage = a;
          }
        })
      },
      /** 
       * @ 评价
       * @ api wzJudge/saveJudge
       * @ 聊天结束后评价
       * */

      setEvaluate() {
        let {
          doctorId,
          orderNo,
          orderId
        } = this.$route.query
        if(!this.evaluateContent){
          this.$vux.toast.text('请填写评价内容');
          return false;
        }
        let a = this.evaluateLabel.filter(v => v.isSel == true);
        let b = a.map(v => v.lableName)
        console.log(b);

        let params = {
          "doctorId": doctorId,
          "userId": this.$store.state.userId,
          "starts": this.curStar + 1,
          "judgeLable": b.join(','),
          "judgeContent": this.evaluateContent,
          "updateUser": "",
          "patientName": this.orderItem.patientName,
          "judgeCheck": "",
          "orderId": orderId,
          "orderNo": orderNo
        }
        this.$post('wzJudge/saveJudge', params).then(res => {
          if (res.code == 0) {
            console.log(res.data);
            this.isOverEvaluate = true;
            this.isEvaluate = !this.isEvaluate;
            // 评价完成隐藏点击评价
            this.isMyEvaluateOver = false
          }
        })
      },
      /** 
       * @ 获取评价的接口
       * @ 为了减少http 只是在结束聊天请求聊天的label
       * */

      getEvaluateLabel() {
        this.$get('WzJudgeLable/getWzJudgeLable').then(res => {
          if (res.code == 0) {
            res.data.forEach(v => {
              this.$set(v, "isSel", false)
            })
            this.evaluateLabel = res.data;

          }
        })
      },
      /** 
       * @ 点击选择评价的星星数量
       * 
       */
      selStar(index) {
        console.log(index);

        this.curStar = index

      },
      getText(index) {
        let starText = ""
        switch (index) {
          case 1:
            starText = "很不满意";
            break;
          case 2:
            starText = "不满意";
            break;
          case 3:
            starText = "勉强接受"
            break;
          case 4:
            starText = "满意"
            break;
          case 5:
            starText = "非常满意"
            break
        }
        return starText;
      },
      //  结束订单更改状态
      updataOrderSate() {
        this.$post('inquiryOrder/updateOrderStatus', {
          orderNo: this.$route.query.orderNo,
          orderState: "2"
        }).then(res => {
          if (res.code == 0) {
            console.log(res);

          }
        })
      },
      /** 
       * @ titile 图片放大功能
       * 
       * @ 
       * */

      bigImg(e) {
        console.log(e);
        this.imgShow = !this.imgShow;
        console.log(this.$refs.bigImgShow);

        this.$refs.bigImgShow.src = e.target.src;
      }


    },
    destroyed() {
      // alert('离开')
      this.mescroll.destroy();
    }
  };

</script>
<style lang="less" scoped>
  /*通过fixed固定mescroll的高度*/
  .mescroll {
    position: fixed;
    top: 0px;
    bottom: 0px;
    height: auto;
    overflow-y: scroll;
  }

  @import url('../../styles/doctorHome.less');
  @w: 656px;
  @h: 782px;

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
            background-color: #fff;

            >p {
              font-size: 22px;
              font-weight: bold;
              color: rgba(42, 147, 226, 1);
              transform: scale(22/24);
              text-align: center;
              line-height: 36px;
            }
          }

          >img {

            display: block;
            border-radius: 50%;
            width: 124px;
            height: 124px;
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

          >img {
            width: 90px;
            height: 90px;
            display: block;
            margin: 0 auto;
            margin-bottom: 15px;
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
    background-image: url("../../assets/images/gold_star.png") !important;
  }

  .icon-greystar {
    background-image: url('../../assets/images/grey_star.png')
  }

  .big-img {
    width: 100%;
    height: auto;

    >figure {
      max-width: 100%;
      height: auto;
      display: block;

      >img {
        height: 100%;
        width: 100%;
        display: block;
      }
    }
  }

</style>
