<template>
  <div class="vg">

    <div class="search-inner" ref="searchs">
      <searchBox :isFocus="isFocus" @focusHandler="focusHandler" />
    </div>
    <!-- 广告图 -->
    
    <!-- 按需搜索 -->
    <div class="doctor-container" v-show="!isFocus">
         <div class="search-box">
      <div class="vux-1px-b fixed-bar" ref="listTop" :style="{top:offset+'px'}">
        <flexbox>
          <flexbox-item @click.native="allHandler(v)" v-for=" (v,i) in tabArr" :key="i">
            <div class="flex-demo" :class="{'active':cur==v.id}">
              <p>{{v.title}}</p>
              <span class="icon-top funbg" :class="{'active-icon':cur==v.id}"></span>
            </div>
          </flexbox-item>
          <!-- <flexbox-item @click.native="officeHandler">
            <div class="flex-demo">
              <p>科室</p>
              <span class="icon-top funbg"></span>
            </div>
          </flexbox-item>
          <flexbox-item @click.native="hospitalHandler">
            <div class="flex-demo">
              <p>医院</p>
              <span class="icon-top funbg"></span>
            </div>
          </flexbox-item>-->
        </flexbox>
      </div>
      <!-- 按照医院查询 -->
      <!-- <div :class="{'cover':cur==3}" @click="cur=0"> -->
      <div class="pannel-search-hospital" ref="overHeight1" v-show="cur==3">
        <!-- 1 -->
        <ul class="pannel-left">
          <li>全部</li>
          <li>保定</li>
          <li v-for="(v,i) in 10" :key="v" :class="{'active-item':cur2==i}" @click.stop="cur2=i">邯郸</li>
        </ul>
        <!-- 2 -->
        <ul class="pannel-right">
          <li class="flex-r" v-for="v in 10" :key="v">
            <img src="../../assets/images/logo1.png" alt>
            <div class="hospital-name">
              <p>河北医科大学第二医院</p>
              <span>三级甲等</span>
            </div>
          </li>
        </ul>
      </div>
      <!-- </div> -->
      <!-- 按照科室查询 -->
      <!-- <div :class="{'cover':cur==2}" @click="cur=0"> -->
      <div class="pannel-search-hospital pannel-search-department" ref="overHeight" v-show="cur==2">
        <!-- 1 -->
        <ul class="pannel-left">

          <li v-for="(v,i) in 10" :key="i" :class="{'active-item':cur1==i}" @click.stop="cur1=i">内科</li>
        </ul>
        <!-- 2 -->
        <ul class="pannel-right">
          <li class="flex-r" v-for="v in 10" :key="v">
            <!-- <img src="../../assets/images/logo1.png" alt> -->
            <div class="hospital-name">
              <!-- <p>河北医科大学第二医院</p> -->
              <!-- <span>全部</span> -->
              泌尿科
            </div>
            <p class="online-doctor"> <span>124</span> 
                            位医生在线
                        </p>
          </li>
        </ul>
      </div>
      <!-- </div> -->
      <div :class="{'cover':cur==1}" @click="cur=0">

        <div class="pannel-search-hospital pannel-search-all" v-show="cur==1">
          <ul class="choose-from">
            <li v-for="(v,i) in chooseArr" :key="i">
              <p class="choose-title">{{v.title}}</p>
              <div class="choose-list">
                <span v-for="(r,j) in v.choose.chooseList" :key="j" :class="{'active-choose':v.choose.cur==j}"
                  @click.stop="chooseTag(v,j)">{{r.chooseTitle}}</span>
                <!-- <span></span> -->
              </div>
            </li>
          </ul>
          <div class="choose-btn">
            <span>重置</span>
            <span>确定</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 医生列表 -->
    <div class="doctor-box1" >
         <docutorItem v-for="v in 5" :key="v" />
    </div>
   
    <!-- <div :class="{'cover':cur==activeId}" @click="cur=0"></div> -->
    <!-- <Xfooter /> -->
    </div>
   
    <!-- search history -->
    <div class="container" :style="{top:offset+'px'}" v-show="false">
      <div class="search-content">
        <div class="search-item">
          <p>相关科室</p>
          <div class="off-list vux-1px-b">
            <div class="off-name">妇产科</div>
            <p class="off-inner">此处是妇产科简介。</p>
            <p class="icon-box">
              <span class="iconfont icon-right"></span>
            </p>
          </div>
          <div class="off-list">
            <div class="off-name">妇产科</div>
            <p class="off-inner">此处是妇产科简介。</p>
            <p class="icon-box">
              <span class="iconfont icon-right"></span>
            </p>
          </div>
          <!-- 没有内容的时候 -->
          <!-- <span class="no-inner">暂无相关科室</span> -->

        </div>
        <div class="search-item">
          <p>相关医生</p>
          <!-- <div class="off-list vux-1px-b">
                    <div class="off-name">妇医生</div>
                    <p class="off-inner">此处是医生科简介。</p>
                    <p class="icon-box">
                        <span class="iconfont icon-right"></span>
                    </p>
                </div> -->
          <!-- 没有内容的时候 -->
          <span class="no-inner">暂无相关科室</span>
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
        tabArr: [{
            id: 1,
            title: "综合排序"
          },
          {
            id: 2,
            title: "全部科室"
          },
          {
            id: 3,
            title: "全部医院"
          }
        ],
        chooseArr: [{
            id: 1,
            title: "按咨询量",
            choose: {
              cur: 0,
              chooseList: [{
                  chooseTitle: "从高到底",
                  isClick: false
                },
                {
                  chooseTitle: "从低到高",
                  isClick: false
                }
              ]
            }
          },
          {
            id: 2,
            title: "按好评量",
            choose: {
              cur: 0,
              chooseList: [{
                  chooseTitle: "从高到底",
                  isClick: false
                },
                {
                  chooseTitle: "从低到高",
                  isClick: false
                }
              ]
            }
          },
          {
            id: 3,
            title: "医生状态",
            choose: {
              cur: 0,
              chooseList: [{
                  chooseTitle: "在线医生",
                  isClick: false
                },
                {
                  chooseTitle: "全部医生",
                  isClick: false
                }
              ]
            }
          }
        ],
        cur: 0,
        cur1: 0,
        cur2: 0,
        activeId: -1,
        offset: 0,
        isFocus: false
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
      document.querySelector('.doctor-container').style.marginTop = this.offset + "px";
      let clientHeight =
        document.body.clientHeight || document.documentElement.clientHeight;
      let screenHeight = window.screen.availHeight;
      let searchBar = this.$refs.listTop.offsetHeight;


      this.$refs.overHeight.style.height = (screenHeight - this.offset - searchBar) + 'px';
      this.$refs.overHeight1.style.height = (screenHeight - this.offset - searchBar) + 'px';
      document.querySelector('.doctor-box1').style.marginTop=this.offset+searchBar+"px";
      document.querySelectorAll('.pannel-search-hospital').forEach(v => {
        v.style.top = (this.offset + searchBar) + "px";
      }) //

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
          this.changeJump('/indexSearch1');

      }
    }
  };

</script>
<style lang="less" scoped>
@import url('../../styles/searchHistory');
  .active {
    color: #00a0e9 !important;
  }
.fixed-bar{
    position: fixed;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 500;
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
        >.online-doctor{font-size: 24px;
        color:#808080; position: absolute;
                right: 30px;
            >span{
                color:#FF5A00;
               
                
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
