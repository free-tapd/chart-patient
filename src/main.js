// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
import App from './App';
import router from './router';
import './styles/base.less'
import { Flexbox, FlexboxItem,ConfirmPlugin } from 'vux';
Vue.use(ConfirmPlugin)
FastClick.attach(document.body);
import VConsole from 'vconsole'
const vconsole=new VConsole();
Vue.config.productionTip = false;

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

/* eslint-disable no-new */
new Vue({
  el: '#app-box',
  router,
  components: { App },
  template: '<App/>'
});
