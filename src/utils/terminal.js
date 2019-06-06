import store from "../store"
import router from "../router"
class Terminal {
  constructor() {
    this.isBrow = () => {
      var u = navigator.userAgent;
      var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      var isWeixin = function () { //判断是否是微信
        var ua = navigator.userAgent.toLowerCase();
        return ua.match(/MicroMessenger/i) == "micromessenger";
      }();
      return {
        isAndroid,
        isiOS,
        isWeixin
      }
    }
  }

}
window.terminal = new Terminal()
Object.assign(terminal, {

  toLogin() {
    let isPlatform = store.state.headerMessage.ch;
    try {
      if (isPlatform == 'wechat_service_number') {
        // 微信端
        console.log('微信端');
        
        this.go()
        return false;
      }
      if (isPlatform == 'ios') {
        console.log('ios');
        window.webkit.messageHandlers.loginToJump.postMessage(null);
        
        // app ios
      }
      if (isPlatform == 'android') {
        console.log('android');
        window.android.loginToJump();
        // android
      }
    }
    catch(e){
      alert('请传入平台 ch')
    }
  },

  addPatient(){
    let isPlatform=store.state.headerMessage.ch;
    // try {
      // if (ch == 'wechat_service_number') {
      //   // 微信端
      //   console.log('微信端');
        
      //   return false;
      // }
      // console.log(router);
      // router.go(0)
      
      if (isPlatform == 'ios') {
        console.log('ios');
        window.webkit.messageHandlers.AddPatientToJump.postMessage(null);
        
        // app ios
      }
      if (isPlatform == 'android') {
        console.log('android');
        window.android.AddPatientToJump();
        // android
      }
    // }
    // catch(e){
    //   alert('请传入平台 ch')
    // }
  },


 
  go() {
    store.commit('saveBackUrl', `${window.location.href}`);
    if (store.state.backurl.includes('?')) {
      console.log('进入第一个');
      let loginUrl = store.state.loginUrl;
      // if(store.state.backurl.includes('&token')){
      //  let a =store.state.backurl.split('&token=')

      //  console.log(a[0])
      //   // debugger
      //   // location.href=store.state.loginUrl+encodeURIComponent(a+'&token')
      //   //  location.href=store.state.loginUrl+encodeURIComponent(a+'&token')
      //   location.href= loginUrl +encodeURIComponent(a[0] +'&token=')

      //   // debugger;
      // }else{
      //   location.href=loginUrl+encodeURIComponent(store.state.backurl+'&token=')
      // }
      this.iswen('&token=')
    } else {
      this.iswen('?token=')
    }
  },
  iswen($name) {
    let loginUrl = store.state.loginUrl;
    if (store.state.backurl.includes($name)) {
      let a = store.state.backurl.split($name)

      console.log(a[0])
      // debugger
      // location.href=store.state.loginUrl+encodeURIComponent(a+'&token')
      //  location.href=store.state.loginUrl+encodeURIComponent(a+'&token')
      location.href = loginUrl + encodeURIComponent(a[0] + $name)

      // debugger;
    } else {
      location.href = loginUrl + encodeURIComponent(store.state.backurl + $name)
    }
  },
 
  checkWeiXin() {
    // 是否在微信浏览器打开
    const navigatorInfo = navigator.userAgent.toLowerCase();
    if (navigatorInfo.match(/WeiBo/i) == "weibo") {
      return true;
    } else if (navigatorInfo.match(/QQ/i) == "qq") {
      return true;
    } else if (navigatorInfo.match(/MicroMessenger/i) == "micromessenger") {
      return true;
    } else {
      return false;
    }
    // if (navigatorInfo.match(/MicroMessenger/i) == "micromessenger") {
    //   // this.toDefaultBrowser = true;
    //   return true;
    // } else {
    //   return false;
    // }
  },
  // 登录回调
  loginResult(token) {
    console.log('登录完成');
    
    store.commit('saveToken', token);
    router.go(0)
  },
  // 跳转就诊人接口回调
  AddPatientResult(){
    // alert('调取结果方法')
    router.go(0)
  }
})

export default terminal;
