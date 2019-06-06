<template>
  <div class="vg">
    <div class="co">
      <messageItem v-for="(v,i) in loadingOrderArr" :key="i"
        @click.native="changeJump('/chartList',{orderNo:v.orderNo,orderId:v.id,roomId:v.orderNo,doctorId:v.doctorId})"
        :orderItem="v" />
     
        <div class="no-doctor" v-if="loadingOrderArr.length==0">
          <span class="bg-image no-data" ></span>
          <span class="no-text"> 暂无数据</span>
        </div>
    </div>
    <!-- <messageItem :isMar="true" :isSystem="true" @click.native="changeJump('/systemMessage')"/>  -->
 <Xfooter :selected="1" />
  </div>
</template>
<script>
  import Xfooter from '@/components/footer'
  import messageItem from '@/components/messageItem'
  import terminal from "@/utils/terminal"
  // import { Search } from 'vux'
  export default {
    data() {
      return {
        isFooter: 0,
        loadingOrderArr: []
      };
    },
    components: {
      Xfooter,
      // Search ,
      messageItem
    },
    mounted() {
      this.isFooter = new Number(this.$route.query.isFooter);
      this.loadingOrder()
    },
    methods: {
      loadingOrder() {
        this.$get('inquiryOrder/getInquiryOrderList', {
          startPage: 1,
          pagesize: 10,
          orderState: "1",
        }).then(res => {
          if (res.code == 0) {
            this.loadingOrderArr = res.data;
          }
          //   if(res.code==100001){
          //     // alert
          //   window.terminal.toLogin();
          // }
        })
      }
    }
  }

</script>
<style lang="less" scoped>
    .co{
        padding-bottom: 100px;
    }
</style>
