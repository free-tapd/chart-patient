<template>
<div class="vg">


  <div class="co">
    <div class="search-inner" ref="searchs">
      <searchBox @focusHandler="focusHandler" />
    </div>
    <!-- 广告图 -->
    <div class="advert-box">
      <!-- <img src="../../assets/images/inquiry/f_logo.png" alt=""> -->
      <div class="swiper">
        <!-- <swiper :list="swiperList"  aspect-ratio dots-position="center" :show-dots="false" :show-desc-mask="false"></swiper> -->
        <swiper :options="swiperOption">
          <swiper-slide v-for="(v,i) in swiperList" :key="i"><img :src="v.img" :alt="v.name"
              style="max-width:100%; display:block;height:100%;border-radius:10px"></swiper-slide>

          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <!-- <button @click="testLogin"> 测试APP交互 </button> -->
    <!-- 咨询记录，我的医生 -->
    <ul class="infor-list">
      <li class="vux-1px-r" @click="changeJump('/consultList')">
        <!-- <img src="../../assets/images/inquiry/record.png" alt=""> -->
        <!--  -->
        <span class="ios-img  funbg " ></span>
        <div class="my-text">
          <p>咨询记录</p>
          <span>点击查看</span>
        </div>
      </li>
      <li @click="changeJump('/myDoctor')">
        <!-- <img src="../../assets/images/inquiry/doctor.png" alt=""> -->

        <span class="ios-img ios-img1 funbg" ></span>
        <!-- <span class="ios-img ios-img1 funbg" ></span> -->
        <div class="my-text">
          <p>我的医生</p>
          <span>点击查看</span>
        </div>
      </li>
    </ul>
    <!-- 热门科室 -->
    <div class="hot-sections">
      <div class="title-box vux-1px-b">
        <span>推荐科室</span>
        <p @click.stop="changeJump('/indexSearch',{platformName:platformName,type:1})">更多 <span
            class="iconfont icon-right"></span> </p>

      </div>
      <ul class="section-list">
        <li v-for="(v,i) in sectionArr" :key="i" @click.stop="jumpSection(v)">
          <!-- <img :src="v.sectionIcon" alt=""> -->
          <div class="ios-img funbg" :style="{backgroundImage:'url('+v.sectionIcon+')'}" v-if="v.sectionIcon && v.sectionIcon!='undefined'"> </div>
          <div class="ios-img funbg no-section"  v-else> </div>
          <p class="ellipsis"> {{v.sectionName}}</p>
          <span>{{v.num}}位医生在线</span>
        </li>
      </ul>
    </div>
    <!-- 热门医生 -->
    <div class="hot-sections">
      <div class="title-box vux-1px-b">
        <span>推荐医生</span>
        <p @click.stop="changeJump('/indexSearch',{platformName:platformName,type:2})">更多 <span
            class="iconfont icon-right"></span> </p>

      </div>
      <docutorItem v-for="(v,i) in doctorList" :key="i" :doctorItem="v" @doctorDetail="doctorDetail"
        @goChart="goChart" />

         <div class="no-doctor1" v-if="doctorList.length==0">
          <span class="bg-image"></span>
          <span class="no-text"> 暂无数据</span>
        </div>
    </div>

    <Xfooter />
  </div></div>
</template>
<script>
  import docutorItem from "@/components/docutorItem";
  import searchBox from "@/components/searchBox";
  import Xfooter from "@/components/footer"
  import {
    mapState,
    mapMutations
  } from "vuex";
  import 'swiper/dist/css/swiper.css' //在全局没引入，这里记得要！
  import terminal from "@/utils/terminal"
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'

  import {
    Flexbox,
    FlexboxItem,
    Sticky,
    Swiper
  } from "vux";
  export default {
    data() {
      return {
        searchValue: "dsaf fsd ",
        cur: 0,
        cur1: 0,
        cur2: 0,
        activeId: -1,
        offset: 0,
        sectionArr: [],
        doctorList: [],
        swiperList: [],
        swiperOption: {
          autoplay: true,
        },
        
      };
    },
    computed: {
      ...mapState(['platformName', "hospitalCode", ])
    },
    components: {
      docutorItem,
      Flexbox,
      FlexboxItem,
      searchBox,
      Xfooter,
      Sticky,
      swiper,
      swiperSlide
    },
    mounted() {
      this.$nextTick(() => {
        console.log(document.getElementsByTagName("body"));
        // document.getElementsByTagName("body")[0].style.overflow = "hidden";
        console.log(this.$refs.searchs.offsetHeight)
        this.offset = this.$refs.searchs.offsetHeight;
        document.querySelector('.co').style.paddingTop = this.offset + "px";
        this.getIntroDoctorList();
        this.getIntroSection();
        this.getSwiperList();
        this.isFooter = new Number(this.$route.query.isFooter)
        this.$store.commit('saveBackUrl', window.location.href);
        this.payService()
      })



    },
    methods: {
      ...mapMutations(['saveTab']),
      allHandler(v) {
        console.log(v);

        this.activeId = v.id;
        if (this.cur == v.id) {
          this.cur = 0;

          document.getElementsByTagName("body")[0].style.overflow = "";
        } else {
          this.cur = v.id;
          document.getElementsByTagName("body")[0].style.overflow = "hidden";
          // document.querySelector('.pannel-search-hospital').style.top=this.offset+"px";
        }
      },

      chooseTag(item, j) {
        item.choose.cur = j
      },
      focusHandler(msg) {
        this.changeJump('/indexSearch1')
      },
      // 测试接口

      // 获取推荐医生列表
      getIntroDoctorList() {
        this.$get('WzPlatformDoctor/getHotDoctorList', {
          platformAccount: this.platformName
        }).then(res => {
          // console.log(res)
          if (res.code == 0) {
            this.doctorList = res.data;
          }
        })
      },
      //跳转 医生详情
      doctorDetail(item) {
        this.changeJump('/doctorHome', {
          doctorId: item.doctorId
        })
      },
      // 获取推荐科室
      getIntroSection() {
        this.$get('WzPlatformSections/getHotSectionList', {
          platformAccount: this.platformName
        }).then(res => {
          if (res.code == 0) {
            this.sectionArr = res.data;
          }
        })
      },
      getSwiperList() {
        this.$post('SlidePic/getSlideList', {
          platformAccount: this.platformName,
          hospitalCode: this.hospitalCode
        }).then(res => {
          // console.log(res)
          if (res.code == 0) {
            const urlList = res.data.map((item, index) => ({
              url: "",
              img: item.slidePic,
              // fallbackImg: item.fallbackImg,
              title: item.slideName
            }))
            this.swiperList = urlList;
          }
        })
      },
      goChart(item) {
        this.changeJump('/doctorHome', {
          doctorId: item.doctorId
        })
      },
      // 科室条转
      jumpSection(item) {
        this.changeJump('/indexSearch', {
          platformName: this.platformName,
          type: 2,
          sectionId: item.sectionId,
          level: item.level
        });
        if (item.level == '1') {
          this.saveTab({
            firstSectionName: item.sectionName,
            firstSectionId: item.sectionId
          })
        } else {
          this.saveTab({
            secondSectionName: item.sectionName,
            secondSectionId: item.sectionId
          })
        }

      },
       // 用户登录
      getLoginUrl() {
        return this.$post('userLogin/getLogin')
      },
      payService() {
        // this.isClick=true;
        // 假如用户没有登录
        // 根据token 判断
        // 
        if (!this.$route.query.token) {
          this.getLoginUrl().then(res => {
            if (res.code == 0) {
                this.$store.commit('saveLoginUrl',res.data );
              // window.location.href = res.data + encodeURIComponent(this.$store.state.backurl + '&token');
              // window.history.pushState(state, state.title, state.url);

            }
          })
        } 
      },
      testLogin(){
        // if(isiOS){
        //   // window.loginClick()

        //   window.webkit.messageHandlers.loginClick.postMessage(JSON.stringify({name:'xyy',result:"调取成功"}));
        
        //   window.webkit.messageHandlers.shareResult.postMessage(null)
        //    console.log(window.webkit.messageHandlers.shareResult.postMessage(null));
        //   // window.webkit.messageHandlers.home.postMessage(true)
        // }
        window.terminal.AddPatientResult()
      },
    }
  };

</script>
<style lang="less" scoped>
  .active {
    color: #00a0e9 !important;
  }
.no-section{
  background-image: url('../../assets/images/default-section.png');
}
  .co {
    padding-bottom: 110px
  }

  /deep/.swiper-container {
    height: 100%;
  }

  .search-inner {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
  }

  .search-inner::after {
    display: block;
    content: "";
  }

  .active-icon {
    // translate: 50% 50%;
    background-image: url("../../assets/images/inquiry/blur_array.png") !important;

    // transform: rotate(180deg);
  }

  .active-item {
    background-color: #fff;
    color: #00a0e9;
  }

  .advert-box {
    background-color: #fff;


    >.swiper {
      width: 690px;
      height: 320px;
      border-radius: 20px;
      display: block;
      margin: 0 auto;
      overflow: hidden;
    }

  }

  // 我的医生
  .infor-list {
    padding: 40px 0;
    background-color: #fff;
    display: flex;
    align-items: center;
    margin-bottom: 22px;

    >li {

      flex: 1;
      line-height: 1.5;
      justify-content: center;
      display: flex;
      align-items: center;

      >.ios-img {
        margin-right: 30px;
        width: 100px;
        height: 100px;
        display: block;
        background-image:url('../../assets/images/inquiry/record.png');
        
        // border-radius: 50%;

      }
      >.ios-img1{
        background-image:url('../../assets/images/inquiry/doctor.png')
      }

      >.my-text {
        >p {
          font-size: 34px;
          color: #333;
          font-weight: bold;

        }

        >span {
          font-size: 24px;
          color: #999;
        }
      }
    }
  }

  .hot-sections {
    background-color: #fff;

    >.title-box {
      padding: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #333;
      font-size: 28px;
    }

    >.section-list {
      margin-bottom: 22px;
      padding: 15px 0;
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      >li {
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 15px 0;

        >.ios-img {
          width: 100px;
          height: 100px;
          display: block;
          border-radius: 50%;
        }

        >p {
          font-size: 28px;
          line-height: 2;
        }

        >span {
          color: #999;
          transform: scale(.9);
          font-size: 24px;
        }
      }
    }
  }

  .search-box {
    z-index: 10;
    position: relative;
    background-color: #fff;

    & .flex-demo {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 88px;
      line-height: 88px;
      font-weight: 400;
      font-size: 24px;
      color: #333;

      >span {
        width: 16px;
        height: 16px;
        display: block;
        margin-left: 24px;
        transition: all linear 0.5s;
      }
    }
  }

  .pannel-search-hospital {
    display: flex;

    // align-items: baseline;

    height: 549px;
    background-color: #fff;
    position: absolute;
    // bottom: 0;
    left: 0;
    right: 0;
    z-index: 10000;

    >.pannel-left {
      overflow: scroll;
      background: rgba(248, 248, 248, 1);
      width: 197px;
      height: 100%;
      font-size: 30px;
      color: #333;

      >li {
        text-align: center;
        padding: 30px 0;
      }
    }

    >.pannel-right {
      overflow: scroll;
      height: 100%;

      >li {
        display: flex;
        align-items: center;
        padding: 19.5px 30px;

        >img {
          width: 68px;
          height: 68px;
          display: block;
          border-radius: 50%;
          margin-right: 30px;
        }

        >.hospital-name {
          font-size: 30px;
          color: #333;

          // line-height: 1;
          >span {
            font-size: 24px;
            color: #999;
          }
        }
      }
    }
  }

  .pannel-search-department {
    & .hospital-name {
      >span {
        font-size: 30px !important;
        color: #00a0e9 !important;
      }
    }

    &>.pannel-right {
      >li {
        line-height: 1.6;
        padding: 30px !important;
      }
    }
  }

  .pannel-search-all {
    height: auto !important;
    flex-direction: column;

    .choose-from {
      padding: 33px;

      >li {
        margin-bottom: 22px;

        >.choose-title {
          font-size: 24px;
          color: #999;
          margin-bottom: 22px;
        }

        >.choose-list {
          display: flex;
          align-items: center;

          >span {
            display: block;
            width: 180px;
            height: 60px;
            border: 1px solid rgba(215, 215, 215, 1);
            line-height: 60px;
            text-align: center;
            color: #333;
            font-size: 24px;
          }

          >span:first-child {
            margin-right: 19px;
          }
        }
      }
    }

    .choose-btn {
      // width: 100%;
      height: 88px;
      display: flex;

      >span {
        flex: 1;
        text-align: center;
        line-height: 88px;
        background-color: #F5FBFF;
        color: #42A0E2;
        font-size: 24px;
      }

      >span:last-child {
        background-color: #42A0E2;
        color: #fff;
      }
    }
  }

  .active-choose {
    background-color: #00a0e9 !important;
    color: #fff !important;
  }

  .icon-top {
    background-image: url("../../assets/images/inquiry/zhedie.png");
  }

</style>
