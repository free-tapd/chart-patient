<template>
  <div class="consult-list vg">

    <!--mescroll滚动区域的基本结构-->
    <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">
      <!--内容...-->

      <div class="c" v-if="loadingOrderList.length>0">
        <p class="going">进行中</p>
        <chartList v-for="(v,i) in loadingOrderList" :key="i" :orderItem="v" @againChart="againChart" />
      </div>
      <div class="c" v-if="overOrderList.length>0">
        <p class="going">已完成</p>
        <chartList v-for="(v,i) in overOrderList" :key="i" :orderItem="v" />
      </div>

    </mescroll-vue>


  </div>
</template>
<script>
  import chartList from "@/components/chartList"
  // 引入mescroll的vue组件
  import MescrollVue from 'mescroll.js/mescroll.vue'
  import {
    dateFormat
  } from "vux";
  export default {
    data() {
      return {
        pageNum: 1,
        pageSize: 10,
        overOrderList: [],
        loadingOrderList: [],
        mescroll: null,
        mescrollUp: {
          callback: this.overOrder,
          htmlNodata: '<p class="upwarp-nodata">-- 已经到底了 --</p>',
          // auto: true,
          page: {
            num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
            size: 10 //每页数据条数,默认10
          },

        },
        mescrollDown:{
          callback:this.downCallback
        }
      }
    },
    mounted() {
      // this.overOrder(this.mescrollUp.page);
      this.loadingOrder();
    },
    components: {
      chartList,
      MescrollVue // 注册mescroll组件
    },
    methods: {
      // mescroll组件初始化的回调,可获取到mescroll对象
      mescrollInit(mescroll) {
        this.mescroll = mescroll // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
      },
     
      loadingOrder() {
        this.$get('inquiryOrder/getInquiryOrderList', {
          startPage: 1,
          pagesize: 10,
          orderState: "1",
        }).then(res => {
          res.data.forEach(v=>{
            v.createTime = dateFormat(new Date(v.createTime), 'HH:mm:ss ');
          })
          this.loadingOrderList = res.data;
        })
      },
       downCallback(mescroll){
         console.log('下拉加载')
         mescroll.endSuccess()
      },
      overOrder(page, mescroll) {
        this.$get('inquiryOrder/getInquiryOrderList', {
          startPage: page.num,
          pagesize: page.size,
          orderState: "",
        }).then(res => {
          if (res.code == 0) {
            let opt = res.data;
            let currPage=res.data.currPage;
            let totalPage=res.data.totalPage
            let curPageData=res.data.list
            opt.list.forEach(v => {
              v.createTime = dateFormat(new Date(v.createTime), 'YYYY-MM-DD ');
            })
            // 如果是第一页需手动置空列表
            if (opt.totalPage == 1) {
              this.overOrderList = []
            }
            // if (page.num == opt.totalPage) {
            //   mescroll.endSuccess(opt.list.length, false);
            // }
            // 把请求到的数据添加到列表
            this.overOrderList = this.overOrderList.concat(opt.list)
            
            // 数据渲染成功后,隐藏下拉刷新的状态
            this.$nextTick(() => {
              // mescroll.endSuccess(opt.list.length)
              mescroll.endByPage(curPageData.length, totalPage);
               
            })
          }
        }).catch((e) => {
          // 联网失败的回调,隐藏下拉刷新和上拉加载的状态;
          mescroll.endErr()
        })
      },

      // 上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
      upCallback(page, mescroll) {
        // 联网请求
        axios.get('xxxxxx', {
          params: {
            num: page.num, // 页码
            size: page.size // 每页长度
          }
        }).then((response) => {
          // 请求的列表数据
          let arr = response.data
          // 如果是第一页需手动置空列表
          if (page.num === 1) this.dataList = []
          // 把请求到的数据添加到列表
          this.dataList = this.dataList.concat(arr)
          // 数据渲染成功后,隐藏下拉刷新的状态
          this.$nextTick(() => {
            mescroll.endSuccess(arr.length)
          })
        }).catch((e) => {
          // 联网失败的回调,隐藏下拉刷新和上拉加载的状态;
          mescroll.endErr()
        })
      },
      againChart(item) {
        this.changeJump('/chartList', {
          item
        })
      }
    }
  }

</script>
<style lang="less" scoped>
  .going {
    padding: 23px 30px;
    font-size: 30px;
    font-weight: 400;
    color: rgba(128, 128, 128, 1);
  }

  /*通过fixed固定mescroll的高度*/
  .mescroll {
    position: fixed;
    top: 44px;
    bottom: 0;
    height: auto;
  }

</style>
