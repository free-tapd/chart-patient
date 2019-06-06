<template>
  <div class="vg">
    <ul class="patient-list">
      <li @click="editorPatient(v)" v-for="(v,i) in patientArr " :key="i">
        <i :style="{backgroundColor:v.bgColor}">{{v.patientName.substr(0,1)}}</i>
        <div class="patient-text">
          <p class="patient-name">{{v.patientName}} <span v-if="false">(默认)</span></p>
          <p class="patient-age">{{v.patientAge}}岁
            <!-- 0：未知；1：男；2：女； -->
            <span class="iconfont icon-nv" style="color:#E66DC5;" v-if="v.isSex==2"></span>
            <span class="iconfont icon-nan" style="color:#329DE5;" v-if="v.isSex==1"></span>

          </p>
        </div>
      </li>
    </ul>
    <p class="warm-text"> 你还可以添加<span style="color:#2D9FF1;">{{5-patientArr.length}}</span> 位就诊人</p>
    <div class="add-btn-box">
      <p :class="{'no-click':patientArr.length==5}" @click="addPatient">+添加就诊人</p>
    </div>
  </div>
</template>
<script>
  import {
    getAge,
    isSex
  } from "@/utils/age"
  import terminal from "@/utils/terminal"
  export default {
    data() {
      return {
        patientArr: [],
        isSyncPatient: 0,
        addPatientUrl: ''
      }
    },
    mounted() {
      this.$store.commit('saveBackUrl', window.location.href);
      this.getPatientList();
      // window.terminal. AddPatientResult()
    },
    watch:{
     '$route'(newValue){
     console.log(newValue);
     
      
    }
    },
      
    beforeRouteEnter(to, from, next) {
      next(vm=>{
        if(from.path=="/"){
            vm.getPatientList();
        }
      });
    },
    beforeRouteUpdate(to,from,next){
      console.log(to);
      console.log(from);
      next();
      
      
    },
    methods: {
      // 获取就诊人
      getPatientList() {
        this.$get('Patient/getPatientList').then(res => {
          if (res.code == 0) {

            res.data.forEach(v => {
              this.$set(v, 'bgColor', `#${Math.floor(Math.random() * 16777215).toString(16)}`)
              this.$set(v, 'patientAge', getAge(v.idCard));
              this.$set(v,"isSex",isSex(v.idCard))
            })
            this.patientArr = res.data;
            this.isSyncPatient = res.isSyncPatient;
            this.addPatientUrl = res.addPatientUrl
          }
        })
      },
      addPatient() {
        if (this.patientArr.length >= 5) {
          this.$vux.toast.text('就诊人最多是5个!!!')
        } else {
          if (this.$store.state.headerMessage.ch == 'wechat_service_number') {
            if (this.isSyncPatient == '1') {
              location.href = this.addPatientUrl + encodeURIComponent(window.location.href);

            } else {
              this.changeJump('/addPatient')
            }
          } else {
            // 否则app
            window.terminal.addPatient()
          }
        }

      },
      editorPatient(v) {
        if (this.isSyncPatient == '1') {
          this.$vux.toast.text('第三方就诊人不允许修改')
        } else {
          this.changeJump('/editorPatient', {
            sickerMessage: JSON.stringify(v)
          })
        }
      }
    }
  }

</script>
<style lang="less" scoped>
  .no-click {
    pointer-events: none;
    background-color: #CCCCCC !important;
  }

  .patient-list {
    margin-top: 22px;

    >li {
      width: 680px;
      height: 150px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      margin-bottom: 22px;

      >i {
        display: block;
        width: 80px;
        height: 80px;
        background: rgba(77, 169, 235, 1);
        border-radius: 50%;
        font-size: 38px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 80px;
        text-align: center;
        font-style: normal;
        margin-left: 38px;
      }

      >.patient-text {
        line-height: 1.3;
        margin-left: 15px;

        >.patient-name {
          font-size: 34px;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 56px;

          >span {
            font-size: 24px;
            font-weight: 400;
            color: rgba(0, 160, 234, 1);
            margin-left: 15px;
          }
        }

        >.patient-age {
          font-size: 24px;
          font-family: PingFang-SC-Regular;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          display: flex;
          align-items: center;

          >span {
            margin-left: 15px;
          }
        }
      }
    }
  }

  .warm-text {
    font-size: 24px;
    font-family: PingFang-SC-Regular;
    font-weight: 400;
    color: rgba(128, 128, 128, 1);
    line-height: 56px;
    text-align: center;
    margin-top: 57px;
  }

  .add-btn-box {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 134px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px -1px 0px 0px rgba(230, 230, 230, 1);
    display: flex;
    align-items: center;
    justify-content: center;

    >p {
      width: 670px;
      height: 88px;
      background: #00A0EA;
      border-radius: 10px;
      font-size: 32px;
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 88px;
      text-align: center;
    }
  }

</style>
