// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
import App from './App';
import router from './router';
import store from "./store";
import './styles/base.less'
import { Flexbox, FlexboxItem,ConfirmPlugin,ToastPlugin ,LoadingPlugin } from 'vux';
Vue.use(ConfirmPlugin);
Vue.use(ToastPlugin);
Vue.use(LoadingPlugin);
FastClick.attach(document.body);
import VConsole from 'vconsole'
import {post,get} from "./utils/http";
const vconsole=new VConsole();
Vue.config.productionTip = false;
// 引入jssdk
import { WechatPlugin } from 'vux'
Vue.use(WechatPlugin)
Vue.component('flexbox', Flexbox);
Vue.component('flexbox-item', FlexboxItem);

Vue.prototype.changeJump=function(path,query={}){
  this.$router.push({
    path,
    query,
  })
}
Vue.filter("formatMoney", function(value) {   //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
  return "￥"+value;
});

Vue.prototype.$post=post;
Vue.prototype.$get=get;
/* eslint-disable no-new */
new Vue({
  el: '#app-box',
  router,
  store,
  components: { App },
  template: '<App/>'
});
