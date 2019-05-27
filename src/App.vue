<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
     created() {
      //在页面加载时读取localStorage里的状态信息
      // localStorage.getItem("userMsg") && this.$store.replaceState(JSON.parse(localStorage.getItem("userMsg")));
          localStorage.getItem("userMsg") && this.$store.replaceState(Object.assign(this.$store.state,JSON.parse(localStorage.getItem("userMsg"))));
      //在页面刷新时将vuex里的信息保存到localStorage里
      window.addEventListener("beforeunload", () => {
        console.log('刷新时调用')
        localStorage.setItem("userMsg", JSON.stringify(this.$store.state))
      })
    }
};
</script>

<style lang="less">
@import "~vux/src/styles/1px.less";
@import '~vux/src/styles/reset.less';
</style>
