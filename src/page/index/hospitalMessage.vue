<template>
  <div class="in-hospital">
    <!-- <x-header :left-options="{backText: 'false',showBack: false}">住院信息</x-header> -->
    <div class="c">
      <group>
        <cell title="每日清单" :is-link="true" link="/everyList">
          <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/images/pro-list.png">
        </cell>
        <cell title="历史清单" :is-link="true" link="/historyList">
          <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/images/history.png">
        </cell>
      </group>

    </div>
  </div>
</template>
<script>
  import {
    XHeader,
    Cell,
    Group
  } from 'vux'

  export default {
    components: {
      XHeader,
      Cell,
      Group
    }
  }

</script>
<style lang="less">

</style>
