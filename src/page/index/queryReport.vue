<template>
  <div class="report vg">
    <Xtab :tabArr="tabArr" @getItem="getItem"/>
    <ul class="hospital-message">
      <li class="vux-1px-b">
        <div class="img-box">
          <i class="funbg icon-user"></i>
          <span>{{$route.query.patientName}}</span>
        </div>
        <!-- <span class="iconfont icon-right1" style="color:#BFBFBF;"></span> -->
      </li>
      <li class="vux-1px-b" @click.stop="selHospital=!selHospital">
        <div class="img-box">
          <i class="funbg"></i>
          <span>{{currHospital.hospitalName}}</span>
        </div>
        <span class="iconfont icon-right1" style="color:#BFBFBF;"></span>
      </li>
      <li class="" @click="selPatient=!selPatient">
        <div class="img-box">
          <i class="funbg icon-card"></i>
          <span style="font-weight:400;" v-if="cardTypeName||cardNum">{{cardTypeName}}:{{cardNum}}</span>
          <span style="font-weight:400;" v-else>暂无就诊卡</span>
        </div>
        <span class="iconfont icon-right1" style="color:#BFBFBF;"></span>
      </li>
    </ul>



    <!-- 选择时间 -->
    <ul class="sel-date">
      <li class="vux-1px-b">
        <span>日期</span>
        <div class="date-btn " :class="{'active-btn':cur1==0}" @click="cur1=0">
          最近30天
        </div>
        <div class="date-btn" :class="{'active-btn':cur1==1}" @click="cur1=1">
          最近半年
        </div>
      </li>
      <li class="vux-1px-b">
        <span>类型</span>
        <div class="date-btn  has-icon" :class="{'active-btn':cur==0}" @click="cur=0">
          <i class="funbg icon-jy-1" :class="{'icon-jy-2':cur==0}"></i> <span>检验报告</span>
        </div>
        <div class="date-btn has-icon" :class="{'active-btn':cur==1}" @click="cur=1">
          <i class="funbg icon-jc-1" :class="{'icon-jc-2':cur==1}"></i> <span>检查报告</span>
        </div>
      </li>
    </ul>
    <!-- 提示 -->
    <div class="warm-content">
      <p class="warm-title">温馨提示</p>
      <p class="content"><span class="iconfont icon-jiufuqianbaoicon14"
          style="font-size:12px;color:#EC5330;transform:scale(.6);"></span> <span>
          通过对人体血液、尿液等，进行包括血常规、肝功能、肾功能、血糖、大便潜血试验、尿蛋白、尿红细胞、微生物等的化验检查肾和生殖系统等。
        </span></p>
      <p class="content"><span class="iconfont icon-jiufuqianbaoicon14"
          style="font-size:12px;color:#EC5330;transform:scale(.6);"></span> <span>
          数据仅供参考，以院方实际数据为主。
        </span></p>
    </div>

    <div class="btn-bg">
      <div class="add-btn" @click="checkReport">
        立即查询
      </div>
    </div>

    <!-- 就诊卡列表 -->
    <div class="cover" v-if="selPatient">


      <div class="picker-panne">
        <p class="picker-title vux-1px-b">选择就诊人 <span class="close " @click.stop="selPatient=!selPatient"> </span></p>
        <!-- <picker :data='arr' v-model='picker1' @on-change="onChange" ></picker> -->
        <!-- <picker :data='cardPicker' v-model='picker1' @on-change="onChange" ></picker> -->
        <ul class="card-list">
          <li class="vux-1px-b" v-for="(v,i) in cardMessage" :key="i" @click.stop="isCard=i">
            <p class="card-message" :class="{'active-sel':isCard==i}">
              <span class="card-name">{{v.cardTypeName}}</span>
              <span class="card-num"> {{v.cardNum}}</span>
            </p>
            <span class="iconfont icon-iconfontcheck" style="color:#2D9FF1;" v-show="isCard==i"></span>
          </li>
        </ul>
        <p class="add-patient">+添加就诊人</p>
      </div>
    </div> <!-- 就诊卡列表 -->
    <div class="cover" v-if="selHospital">


      <div class="picker-panne">
        <p class="picker-title vux-1px-b">选择医院 <span class="close " @click.stop="selHospital=!selHospital"> </span></p>
        <!-- <picker :data='arr' v-model='picker1' @on-change="onChange" ></picker> -->
        <!-- <picker :data='cardPicker' v-model='picker1' @on-change="onChange" ></picker> -->
        <ul class="card-list">
          <!-- <li class="vux-1px-b" v-for="(v,i) in cardMessage" :key="i" @click.stop="isCard=i">
            <p class="card-message" :class="{'active-sel':isCard==i}">
              <span class="card-name">{{v.cardTypeName}}</span>
              <span class="card-num"> {{v.cardNum}}</span>
            </p>
            <span class="iconfont icon-iconfontcheck" style="color:#2D9FF1;" v-show="isCard==i"></span>
          </li> -->
          <picker :data='arr' v-model='picker1' :columns='2' @on-change="onChange"></picker>
        </ul>
        <!-- <p class="add-patient">+添加就诊人</p> -->
      </div>
    </div>


  </div>
</template>
<script>
  var arr = [
    [{
      name: '2019届5班',
      value: '1'
    }, {
      name: '2019届4班',
      value: '2'
    }]
  ]
  // data

  import Xtab from "@/components/tab";

  import {
    Picker,
    dateFormat
  } from 'vux'
  import {
    log
  } from 'util';
  export default {
    data() {
      return {
        tabArr: [{
          id: 1,
          title: "门诊"
        }, {
          id: 2,
          title: "住院"
        }],
        tabItem:{},
        arr: arr,
        curCard: 0,
        cur: 0,
        cur1: 1,
        isCard: 0,
        cardMessage: {},
        cardPicker: [],
        picker1: [''],
        picker2: [''],
        selPatient: false,
        selHospital: false,
        currHospital: {},
        jyReport:[],
        jcReport:[]

      };
    },
    computed: {
      hospitalCode() {
        return this.$store.state.hospitalCode
      },
      patientId() {
        return this.$store.state.patientId
      },
      cardTypeName() {
        let a = ''
        if (this.cardMessage.length > 0) {
          a = (this.cardMessage[this.curCard].cardTypeName)
        }
        return a;
      },
      cardNum() {
        let a = ''
        if (this.cardMessage.length > 0) {
          a = (this.cardMessage[this.curCard].cardNum)
        }
        return a
      }



    },
    components: {
      Xtab,
      Picker,
    },
    mounted() {
      this.getPatientCode()
      this.getHospitalMessage()
      this.gethospitalItem()
      this.getCity();
      // 默认
      this.init();
    },
    methods: {
      sure() {
        console.log('sure')
      },
      init(){
        // 默认等于第一个
        this.tabItem=this.tabArr[0]
      },
      onChange(e) {
        console.log('onchange')
        console.log(e);
        if (e[1]) {
          let hospitalMessage = this.arr.filter(v => {
            return v.hospitalId == e[1]
          })
          //  console.log(hospitalMessage);
          this.currHospital = hospitalMessage[0];
          //  保存用户当前的行为


        }

      },
      onShow() {
        console.log('on show')
      },
      onHide(type) {
        console.log('on hide', type)
      },
      // 获取就诊卡信息
      getPatientCode() {
        this.$post('patient/queryPatientCard', {
          hospitalCode: this.hospitalCode,
          patientId: this.patientId
        }).then(res => {
          if (res.code == 0) {
            // console.log(res)
            this.cardMessage = res.data
          }
        })
      },
      // 根据就诊人查询住院信息
      getHospitalMessage() {
        this.$post('patient/queryPatientHospitalized', {
          hospitalCode: this.hospitalCode,
          patientId: this.patientId
        }).then(res => {
          if (res.code == 0) {
            console.log(res)
          }
        })
      },
      // 根据hospitalcode 查询医院信息
      gethospitalItem() {
        this.$get('hospital/queryHospitalByHospitalCode', {
          hospitalCode: this.hospitalCode
        }).then(res => {
          if (res.code == 0) {
            console.log(res)
          }
        })
      },

      // 获取地级市

      getCity() {
        this.$post('doctor/getCityList', {
          platformAccount: this.$store.state.platformName
        }).then(res => {
          if (res.code == 0) {
            let cityLub = [];
            cityLub = res.data.map(v => ({
              name: v.cityName,
              value: v.cityId,
              parent: '',
              ...v
            }))
            this.cityList = cityLub
            console.log('城市list');

            console.log(cityLub);

            let arr = [...cityLub];
            this.cityList.forEach((v, i) => {

              if (v.cityId) {
                this.getSecondCity(v.cityId).then(res => {
                  if (res.code == 0) {
                    // this.hospitalList=res.data;
                    if (res.data.length > 0) {
                      let hospitalList = res.data.map(o => ({
                        name: o.hospitalName,
                        value: o.hospitalId,
                        parent: v.cityId,
                        ...o
                      }))
                      // console.log(hospitalList);

                      arr.push(...hospitalList);
                      // console.log(arr);

                    }


                  }
                })
              }

            })
            // console.log('最中的数组是')
            // arr.push(...this.cityList);
            // console.dir(arr);
            // console.log(arr.length);
            // console.log(arr[0]);
            this.arr = arr;

          }
        })
      },

      // 根据地级市获取耳机区域
      getSecondCity(cityId) {
        return this.$post('doctor/getHospitalListByCityId', {
          platformAccount: this.$store.state.platformName,
          cityId
        })
      },
        getItem(item){
          console.log(item);
          this.tabItem=item;
        },

      // 判断是检查还是检验
      checkReport(){
        
          let {
          patientId,
          idCard
        } = this.$route.query;
        /** 
         * cur1 :0 30天
         * cur1:1 半年
         * */
        // 半年的时间戳
        let curDate = new Date().getTime();
        let  HALFYEAR = curDate - (365 * 24 * 60 * 60 * 1000) / 2;
        let  DAY30 = curDate - (30 * 24 * 60 * 60 * 1000);
        let startDate = this.cur1==1 ? HALFYEAR : DAY30;
        let params = {
          "hospitalCode": this.hospitalCode,
          "patientId": this.patientId,
          "patientHisId": this.cardMessage[this.curCard].patientHisId,
          "healthyCard": this.cardMessage[this.curCard].cardNum,
          "idCard": idCard,
          "startDate": this.dateString(startDate),
          "endDate": this.dateString(),
          "patientType": this.tabItem.id==1?0:1 //0是门诊 1住院
        }
        // cur 0 检验报告
        // cur1 检查报告

        if(this.cur){
          this.getReportList(params)
        }else{
          this.getReportList2(params)
        }

      },

      // 检查报告 
      getReportList(params) {
      
        // console.log(params);
        this.$post('report/getPacsReport',params).then(res=>{
          if(res.code==0){
               res.data.forEach(v=>{
              this.$set(v,'isCheck',0)
            })
            this.jcReport=res.data;
             this.changeJump('/queryReportList',{data:JSON.stringify(res.data)})
          }
        })

      },

      // 检验报告

      getReportList2(params){
        this.$post('report/getLisReport',params).then(res=>{
          if(res.code==0){
            res.data.forEach(v=>{
              this.$set(v,'isCheck',0)
            })
            this.jyReport=res.data;
            
            this.changeJump('/queryReportList1',{data:JSON.stringify(res.data)})
          }
          
        })
      },
      // 时间序列化
      dateString(date = new Date()) {

        return dateFormat(new Date(date), 'YYYY-MM-DD')
      }
    }
  };

</script>
<style lang="less" scoped>
  .icon-jy-1 {
    background-image: url('../../assets/images/report/jy_1.png');

  }

  .icon-jy-2 {
    background-image: url('../../assets/images/report/jy_2.png');
  }

  .icon-jc-1 {
    background-image: url('../../assets/images/report/jc_1.png');
  }

  .icon-jc-2 {
    background-image: url('../../assets/images/report/jc_2.png');
  }

  .icon-user {
    background-image: url('../../assets/images/report/person.png') !important;
  }

  .icon-card {
    background-image: url('../../assets/images/report/card.png') !important;
  }

  .active-sel {
    color: #2D9FF1 !important;
  }

  .hospital-message {
    background-color: #fff;
    // margin: 20px 0 0 0;

    >li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 30px;

      >.img-box {
        display: flex;
        align-items: center;

        >i {
          width: 32px;
          height: 32px;
          display: block;
          background-image: url('../../assets/images/inquiry/hospital_1.png');
          margin-right: 18px;
        }

        >span {
          font-size: 30px;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          line-height: 56px;
        }
      }
    }
  }

  .active-btn {
    background: rgba(45, 159, 241, 0.1) !important;
    border: 1px solid rgba(45, 159, 241, 1) !important;
    color: #329DE5 !important;
  }

  .sel-date {
    margin-top: 20px;
    background-color: #fff;
    padding: 0 30px;

    >li {
      padding: 30px 0;
      font-size: 30px;
      color: #333;
      display: flex;
      align-items: center;
      justify-content: space-between;

      >span {
        font-size: 26px;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
      }

      >.date-btn {
        width: 251px;
        height: 75px;
        background: rgba(247, 247, 247, 1);
        border-radius: 10px;
        font-size: 30px;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
        line-height: 75px;
        text-align: center;
        border: 1px solid transparent;

        >i {
          width: 40px;
          height: 40px;
          display: block;
        }
      }

      >.has-icon {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
      }
    }
  }

  .warm-content {
    padding: 40px 30px;
    background-color: #fff;

    >.warm-title {
      font-size: 24px;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      line-height: 56px;
    }

    >.content {
      font-size: 24px;
      color: #666;
      margin-bottom: 20px;

      >.iconfont {
        font-size: 12px;
        color: rgb(236, 83, 48);
        transform: scale(0.6);
        display: inline-block;
      }
    }
  }

  .btn-bg {
    height: 134px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 0px 0px rgba(230, 230, 230, 1);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .add-btn {
    width: 670px;
    height: 88px;
    background: #2D9FF1;
    border-radius: 10px;
    margin: 0 auto;
    font-size: 32px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 88px;
    text-align: center;

  }

  .picker-panne {
    min-height: 600px;
    position: fixed;
    box-shadow: 0px 1px 0px 0px rgba(230, 230, 230, 1);
    border-radius: 20px 20px 0px 0px;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #fff;
    transition: all linear .5s;

    >.picker-title {
      padding: 30px 0;
      text-align: center;
      font-size: 34px;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      position: relative;

      >.close {
        position: absolute;
        right: 30px;
        top: (114-40)/2px;
        color: #A7A7A7;

        &::after {
          content: "\e615";
          font-family: "iconfont" !important;
          font-size: 30px;
          font-style: normal;
          -webkit-font-smoothing: antialiased;

        }


      }
    }

    >.card-list {
      height: 400px;
      overflow: scroll;
      padding: 0 30px;

      >li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 30px 0;

        >.card-message {

          font-size: 30px;
          color: #333;
        }
      }


    }

    >.add-patient {
      padding: 30px;
      font-size: 30px;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      background: rgba(248, 248, 248, 1);
    }
  }

</style>
