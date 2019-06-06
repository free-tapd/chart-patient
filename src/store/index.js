import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    info: {},
    platformName:"jkhb",
    userId: "1",
    hospitalCode:"311003",
    // uploadUrl:"http://192.168.1.141:8888/attachment/upload", //开发
    // uploadUrl:"https://mid.jiankanghebei.com/zt/file/upload",//正式
    uploadUrl:"https://qfkj.jiankanghebei.com/zt/file/upload",//测试
    token:"",
    patientId:'123323',
    chartPannelList:[],
    headerMessage:{
      exp:"",
      pf:"",
      ch:""
    },
    tabMessage:{
      firstSectionName:"", //一级科室
      firstSectionId:"",
      secondSectionName:"",//二级科室
      secondSectionId:""
    },
    searchInner:[],
    picCase:[],//上传病例照片
    backurl:'http://192.168.0.148:8080/vue/#/addSicker?funId=7&doctorId=3&token=',
    loginUrl:""
  },
  getters,
  actions,
  mutations
});
