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

// axios 配置
axios.defaults.timeout = 30000
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

axios.interceptors.request.use(

  config => {
    Vue.$vux.loading.show({
      text: 'Loading'
     })
    if (store.state.token) {
      config.headers.token = ` ${store.state.token}`
    } 
    let {pf,ch,exp,isFooter,token}=router.app._route.query;
    if(pf&&ch&&exp){
      store.commit('saveHeader',{pf,ch,exp});
      store.commit('savePlatform',pf);

    }
      if(token){
        store.commit('saveToken',token);
        config.headers.exp=store.state.token;
      }
    if(store.state.headerMessage.pf||store.state.headerMessage.ch||store.state.headerMessage.exp){
      config.headers.pf=store.state.headerMessage.pf;
      config.headers.ch=store.state.headerMessage.ch;
      config.headers.exp=store.state.headerMessage.exp
    }
   

    // console.log(store.state.headerMessage);
    
    // config.headers.token="0e9cf2f974114873acde5948c919dac4"
    
    return config

  },
  err => {
    return Promise.reject(err)
  },
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
  // 隐藏
Vue.$vux.loading.hide()
    console.log('响应数据')
    console.log(response)
    switch(response.data.code){
      case "100001":
      console.log('跳转app登录 ')
      break;
    }
    return response

  },
  error => {
    if (error.response) {
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

