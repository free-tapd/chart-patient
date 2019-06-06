// import axios from 'axios';

// const http = axios.create({
//   timeout: 5000
// });

// http.interceptors.response.use(function (response) {
//   // 对响应数据做点什么
//   return response.data;
// }, (error) => {
//   // 对响应错误做点什么
//   console.log(error.response.status);
//   return Promise.reject(error);
// });

// export default http;


/**
 * Created by superman on 17/2/16.
 * http配置
 */
import {
  dateFormat
} from 'vux'
import axios from 'axios'
// import { Message} from 'element-ui'
import QS from "qs"
import Vue from 'vue'
import {
  md5
} from 'vux'
import store from '../store'
// import * as types from './store/types'
import router from '../router'
import terminal from "../utils/terminal"

// axios 配置
axios.defaults.timeout = 8000
// axios.defaults.baseURL = 'http://192.168.0.49:8081/inquiry-api'
// axios.defaults.baseURL="http://192.168.0.204:8081/inquiry-api/
// axios.defaults.baseURL="http://192.168.0.199:8081/inquiry-api/" //刘跃龙
axios.defaults.baseURL = 'https://qfkj.jiankanghebei.com/inquiry-api/'
// axios.defaults.baseURL = '/api/'

// http request 拦截器
axios.defaults.responseType = "json";
// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";
axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
let timer=null;
axios.interceptors.request.use(

  config => {
    Vue.$vux.loading.show({
      text: '正在加载中...'
     })
    timer= setTimeout(()=>{
      Vue.$vux.loading.hide()
      // Vue.$vux.toast.text('网络延迟')
     },axios.defaults.timeout)
    //  debugger;
  
    let {pf,ch,exp,isFooter,token}=router.app._route.query;
    console.log('三兄弟');
    console.log(pf,ch,exp);
    if(pf&&ch&&exp){
      console.log('第二次三兄弟');
      console.log(pf,ch,exp);
      
      store.commit('saveHeader',{pf,ch,exp});
      store.commit('savePlatform',pf);
      localStorage.setItem('headers',JSON.stringify({pf,ch,exp}) )

    }
      if(token){
        // console.log('有token进入');
        store.commit('saveToken',token);
        config.headers.exp=store.state.token;
      }
      if (store.state.token) {
        config.headers.token = ` ${store.state.token}`
      } 
      console.log('打印当前的store.header');
      console.log(store.state);
      
      console.log(store.state.headerMessage);
      
      if(store.state.headerMessage.pf && store.state.headerMessage.ch && store.state.headerMessage.exp){
        console.log('到底有没有');
        
        config.headers.pf=store.state.headerMessage.pf;
        config.headers.ch=store.state.headerMessage.ch;
        config.headers.exp=store.state.headerMessage.exp
        console.log(config.headers.pf);
        console.log(config.headers.ch);
        console.log(config.headers.exp);
      }
       if(JSON.parse(localStorage.getItem('headers'))){
        console.log('到底有没有localstorage');
        let a=JSON.parse( localStorage.getItem('headers'))
        config.headers.pf=a.pf;
        config.headers.ch=a.ch;
        config.headers.exp=a.exp
        console.log(config.headers.pf);
        console.log(config.headers.ch);
        console.log(config.headers.exp);
      }
   

    // console.log(store.state.headerMessage);
    
    // config.headers.token="0e9cf2f974114873acde5948c919dac4"
    
    return config

  },
  err => {
    return Promise.reject(err)
    Vue.$vux.loading.hide()
    alert('请求err')
  },
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
  // 隐藏
Vue.$vux.loading.hide()
// clearTimeout(timer)
    
    // 保存当前的location
    // store.commit('saveBackUrl', window.location.href);
    console.log('+++++++++++++++++++++====');
    // alert('打算分代理商卡')
    console.log(response.data.code);
    // debugger
    switch(response.data.code){
      
      case 100001:
      console.log('跳转app登录 ')
      // debugger
     store.commit('saveBackUrl', `${window.location.href}`);
      window.terminal.toLogin()
      break;
      // Vue.$vux.toast.text(response.data.msg)
    }
    if(response.data.code!=0){
      Vue.$vux.toast.text(response.data.msg)
    }
    return response
  },
  error => {
   
    Vue.$vux.loading.hide();
    Vue.$vux.toast.text('网络错误');
    if (error.response) {
      console.log('错误');
      console.log(error);
      
      Vue.$vux.toast.text('网络错误')
      // tryHideFullScreenLoading();
      //   switch (error.response.status) {
      //     case 401:
      //       // 401 清除token信息并跳转到登录页面
      //       store.commit(types.LOGOUT)

      //       // 只有在当前路由不是登录页面才跳转
      //       router.currentRoute.path !== 'login' &&
      //         router.replace({
      //           path: 'login',
      //           query: { redirect: router.currentRoute.path },
      //         })
      //   }
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(error.response)
  },
)

/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err)
      })
  });
}
// 对象转字符串
function rankSign(obj) {
  let secret = "hebHealthyApp1234567890"
  let arrStr = []
  for (let i in obj) {
    let str = i.toString() + obj[i].toString();
    arrStr.push(str)
  }
  let newArrStr = arrStr.sort((a, b) => a > b).join("");
  return secret + newArrStr + secret
}
/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params={}) {
  return new Promise((resolve, reject) => {
    console.log(params)
    axios.post( url,params)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err)
      })
  });
}

