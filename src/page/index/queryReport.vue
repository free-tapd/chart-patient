<template>
  <div class="report vg">
    <Xtab :tabArr="tabArr" />
    <ul class="hospital-message">
      <li class="">
        <div class="img-box">
          <i class="funbg icon-user"></i>
          <span>张素贞</span>
        </div>
        <!-- <span class="iconfont icon-right1" style="color:#BFBFBF;"></span> -->
      </li>
    </ul>
     <popup-picker :popup-title="'hello world'" :title="'title1'" :data="arr" v-model="picker2" @on-show="onShow"
      @on-hide="onHide" @on-change="onChange" :placeholder="'please select'">
      <div slot="title">
        <ul class="hospital-message">
         <li class="">
        <div class="img-box">
          <i class="funbg"></i>
          <span>河北医科大学第二医院</span>
        </div>
        <span class="iconfont icon-right1" style="color:#BFBFBF;"></span>
      </li>
        </ul>
      </div>
    </popup-picker>
        <popup-picker :popup-title="'选择就诊卡'"  :data="cardPicker" v-model="picker1" @on-show="onShow"
      @on-hide="onHide" @on-change="onChange"  @on-shadow-change="sure">
      <div slot="title">
        <ul class="hospital-message">
          <li class="">
            <div class="img-box">
              <i class="funbg icon-card"></i>
              <span style="font-weight:400;">{{cardMessage[0].cardTypeName}}:{{cardMessage[0].cardNum}}</span>
            </div>
            <span class="iconfont icon-right1" style="color:#BFBFBF;"></span>
          </li>
        </ul>
      </div>
    </popup-picker>

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
      <div class="add-btn" @click="changeJump('/queryReportList')">
        立即查询
      </div>
    </div>
    <!-- 就诊卡列表 -->
    <!-- <div class="picker-panne">
      <p class="picker-title">选择就诊开</p>
       <picker :data='cardPicker' v-model='picker1' @on-change="onChange" ></picker>
    </div> -->
    <!-- <popup-picker :popup-title="'hello world'" :title="'title1'" :data="arr" v-model="picker1" @on-show="onShow"
      @on-hide="onHide" @on-change="onChange" :placeholder="'please select'">
      <div slot="title">
        <ul class="hospital-message">
          <li class="vux-1px-b">
            <div class="img-box">
              <i class="funbg icon-card"></i>
              <span style="font-weight:400;">{{cardMessage[0].cardTypeName}}:{{cardMessage[0].cardNum}}</span>
            </div>
            <span class="iconfont icon-right1" style="color:#BFBFBF;"></span>
          </li>
        </ul>
      </div>
    </popup-picker> -->
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
  import Xtab from "@/components/tab";
  import {
    Picker,
    PopupPicker
  } from 'vux'
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
        arr: arr,
        cur: 0,
        cur1: 1,
        isCard: false,
        cardMessage: {},
        cardPicker: [],
        picker1: [''],
        picker2: ['']
      };
    },
    computed: {
      hospitalCode() {
        return this.$store.state.hospitalCode
      },
      patientId() {
        return this.$store.state.patientId
      }
    },
    components: {
      Xtab,
      Picker,
      PopupPicker
    },
    mounted() {
      this.getPatientCode()
      this.getHospitalMessage()
      this.gethospitalItem()
      this.getReportList()
    },
    methods: {
      //       getReport(){
      //         let params={
      // 	"hospitalCode": this.hospitalCode,
      // 	"patientId": this.patientId,
      // 	"patientHisId": "",
      // 	"cardNum": "",
      // 	"idCard": "",
      // 	"beginDate": "",
      // 	"endDate": "",
      // 	"patientType": 0
      // }
      //         this.$post('report/getPacsReport',{})
      //       }
      sure(){
        console.log('sure')
      },
      onChange(e) {
        console.log('onchange')
        console.log(this.picker2)
        console.log(e);

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
            let a = [];
            a = res.data.map((v, i) => ({
              name: v.cardTypeName + v.cardNum,
              value: i.toString(),
              ...v
            }))
            this.cardPicker.push(a)
            console.log(this.cardPicker);

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

      // 检验
      // {
      // 	"hospitalCode": "311003",
      // 	"patientId": "123323",
      // 	"patientHisId": "0014615933",
      // 	"healthyCard": "A000130014615933",
      // 	"idCard": "130125199402053512",
      // 	"startDate": "2019-01-01",
      // 	"endDate": "2019-05-23",
      // 	"patientType": "0"
      // }
      // 检验报告 
      getReportList() {
        let params = {
          "hospitalCode": this.hospitalCode,
          "patientId": this.patientId,
          "patientHisId": 0,
          "healthyCard": "A000130014615933",
          "idCard": "130125199402053512",
          "startDate": "2019-01-01",
          "endDate": "2019-05-23",
          "patientType": "0"
        }

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

</style>
