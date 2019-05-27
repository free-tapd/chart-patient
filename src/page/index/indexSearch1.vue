<template>
  <div class="vg">

    <div class="search-inner" ref="searchs">
      <searchBox :isFocus="isFocus" @focusHandler="focusHandler" :value="searchValue" @cancleHandle="cancleHandle"
        @input="onInput" />
    </div>
    <!-- search history -->
    <div class="container" :style="{top:offset+'px'}">
      <div class="search-content">
        <div class="search-item">
          <p>相关科室</p>
          <div class="off-list " v-for="(v,i) in searchResult.section" :key="i" v-if="searchResult.section.length>0"
            @click="jumpSection(v)">
            <div class="off-name">{{v.name}}</div>
            <!-- <p class="off-inner">此处是妇产科简介。</p> -->
            <p class="icon-box">
              <span class="iconfont icon-right"></span>
            </p>
          </div>
          <!-- <div class="off-list">
            <div class="off-name">妇产科</div>
            <p class="off-inner">此处是妇产科简介。</p>
            <p class="icon-box">
              <span class="iconfont icon-right"></span>
            </p>
          </div> -->
          <!-- 没有内容的时候 -->
          <span class="no-inner" v-if="searchResult.section.length==0">暂无相关科室</span>

        </div>
        <div class="search-item">
          <p>相关医生</p>
          <div class="off-list" v-for="(v,i) in searchResult.doctor" :key="i" v-if="searchResult.doctor.length>0"
            @click="changeJump('/doctorHome',{doctorId:v.id})">
            <div class="off-name">{{v.name}}</div>
            <!-- <p class="off-inner">此处是医生科简介。</p> -->
            <p class="icon-box">
              <span class="iconfont icon-right"></span>
            </p>
          </div>
          <!-- 没有内容的时候 -->
          <span class="no-inner" v-if="searchResult.doctor.length==0">暂无相关科室</span>
        </div>

      </div>


    </div>
  </div>
</template>
<script>
  import docutorItem from "@/components/docutorItem";
  import searchBox from "@/components/searchBox";
  import Xfooter from "@/components/footer"
  import {
    Flexbox,
    FlexboxItem,
    Sticky
  } from "vux";
  export default {
    data() {
      return {
        searchValue: "",
        cur: 0,
        cur1: 0,
        cur2: 0,
        activeId: -1,
        offset: 0,
        isFocus: true,
        searchResult: {
          doctor: [],
          section: []
        }
      };
    },
    components: {
      docutorItem,
      Flexbox,
      FlexboxItem,
      searchBox,
      Xfooter,
      Sticky
    },
    mounted() {
      console.log(document.getElementsByTagName("body"));
      // document.getElementsByTagName("body")[0].style.overflow = "hidden";
      this.offset = this.$refs.searchs.offsetHeight;
      // document.querySelector('.doctor-container').style.marginTop = this.offset + "px";
      let clientHeight =
        document.body.clientHeight || document.documentElement.clientHeight;
      let screenHeight = window.screen.availHeight;
      // let searchBar = this.$refs.listTop.offsetHeight;


      // this.$refs.overHeight.style.height = (screenHeight - this.offset - searchBar) + 'px';
      // this.$refs.overHeight1.style.height = (screenHeight - this.offset - searchBar) + 'px';
      // document.querySelector('.doctor-box1').style.marginTop = this.offset + searchBar + "px";
      // document.querySelectorAll('.pannel-search-hospital').forEach(v => {
      //   v.style.top = (this.offset + searchBar) + "px";
      // }) //
      // document.querySelector('.search-content').style.top=(screenHeight-this.offset)+'px'

    },
    computed: {
      platformName() {
        return this.$store.state.platformName
      }
    },
    methods: {
      allHandler(v) {
        console.log(v);

        this.activeId = v.id;
        if (this.cur == v.id) {
          this.cur = 0;

          document.getElementsByTagName("body")[0].style.overflow = "";
        } else {
          this.cur = v.id;
          //   document.getElementsByTagName("body")[0].style.overflow = "hidden";

        }
      },

      chooseTag(item, j) {
        item.choose.cur = j
      },
      focusHandler(msg) {
        console.log(msg);


        msg = !msg


        this.isFocus = msg;
        console.log(this.isFocus);
      },
      cancleHandle(msg) {
        console.log(msg);
        msg = !msg
        this.isFocus = msg;
        console.log(this.isFocus);
        this.searchResult.doctor = [];
        this.searchResult.section = []
      },
      // 搜索
      onInput(val) {
        this.$post('Patient/getDoctorOrSection', {
          platformAccount: this.platformName,
          search: val
        }).then(res => {
          if (res.code == 0) {
            // console.log(res)
            // this.searchResult=res.data;
            let a = [],
              b = [];
            res.data.forEach(v => {
              if (v.type == "section") {
                // 科室
                b.push(v)
              } else if (v.type == "doctor") {
                // 医生
                a.push(v)
              }
            })
            this.searchResult.section = b
            this.searchResult.doctor = a

            // 搜索完成保存当前用户的操作数据
            this.$store.commit('saveSearchInner', val)
          }
        })
      },
      // 科室条转
      jumpSection(item) {
        // this.changeJump('/indexSearch',{platformName:this.platformName,type:1,sectionId:item.id});
        // this.$store.commit('saveTab', {sectionName:item.name})

        this.changeJump('/indexSearch', {
          platformName: this.platformName,
          type: 2,
          sectionId: item.sectionId,
          level: item.level
        });
        if (item.type = "section") {
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
        }


      }
    }
  };

</script>
<style lang="less" scoped>
  @import url('../../styles/searchHistory');

  .active {
    color: #00a0e9 !important;
  }

  .fixed-bar {
    position: fixed;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 500;
  }

  .container {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: scroll;
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

    >img {
      width: 690px;
      height: 320px;
      border-radius: 20px;
      display: block;
      margin: 0 auto;
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

      >img {
        margin-right: 30px;
        width: 80px;
        height: 80px;
        display: block;
        border-radius: 50%;

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

        >img {
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
    position: fixed;
    // bottom: 0;
    left: 0;
    right: 0;
    z-index: 10000;

    >.pannel-left {
      flex: 1.5;
      overflow: scroll;
      background: rgba(247, 247, 247, 1);
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
      flex: 4;
      overflow: scroll;
      height: 100%;

      >li {
        display: flex;
        align-items: center;
        padding: 19.5px 30px;
        position: relative;

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
          font-weight: 500;

          // line-height: 1;
          >span {
            font-size: 24px;
            color: #999;
          }
        }

        >.online-doctor {
          font-size: 24px;
          color: #808080;
          position: absolute;
          right: 30px;

          >span {
            color: #FF5A00;


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
