<template>
  <div class="vg">
    
    <div class="search-inner" ref="searchs">
      <searchBox  @focusHandler="focusHandler"  />
    </div>
    <!-- 广告图 -->
    <div class="advert-box">
      <img src="../../assets/images/inquiry/f_logo.png" alt="">
    </div>
    <!-- 咨询记录，我的医生 -->
    <ul class="infor-list">
      <li class="vux-1px-r">
        <img src="../../assets/images/inquiry/record.png" alt="">
        <div class="my-text">
          <p>咨询记录</p>
          <span>点击查看</span>
        </div>
      </li>
      <li>
        <img src="../../assets/images/inquiry/doctor.png" alt="">
        <div class="my-text">
          <p>我的医生</p>
          <span>点击查看</span>
        </div>
      </li>
    </ul>
    <!-- 热门科室 -->
    <div class="hot-sections">
      <div class="title-box vux-1px-b">
        <span>热门科室</span>
        <p>更多 <span class="iconfont icon-right"></span> </p>

      </div>
      <ul class="section-list">
        <li v-for="v in 8" :key="v">
          <img src="../../assets/images/inquiry/head.jpg" alt="">
          <p> 呼吸内科</p>
          <span>1位医生在线</span>
        </li>
      </ul>
    </div>
    <!-- 热门医生 -->
       <div class="hot-sections">
      <div class="title-box vux-1px-b">
        <span>热门医生</span>
        <p @click.stop="changeJump('/indexSearch',{isFocus:0})">更多 <span class="iconfont icon-right"></span> </p>

      </div>
    <docutorItem v-for="v in 5" :key="v" />
    </div>

    <Xfooter />
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
        offset:0
      };
    },
    components: {
      docutorItem,
      Flexbox,
      FlexboxItem,
      searchBox,
      Xfooter,Sticky
    },
    mounted() {
      this.$nextTick(()=>{
         console.log(document.getElementsByTagName("body"));
      // document.getElementsByTagName("body")[0].style.overflow = "hidden";
      console.log(this.$refs.searchs.offsetHeight)
      this.offset=this.$refs.searchs.offsetHeight;
      document.querySelector('.vg').style.paddingTop=this.offset+"px";
      } )
     
     
    
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
          document.getElementsByTagName("body")[0].style.overflow = "hidden";
          // document.querySelector('.pannel-search-hospital').style.top=this.offset+"px";
        }
      },

      chooseTag(item, j) {
        item.choose.cur = j
      },
      focusHandler(msg){
        this.changeJump('/indexSearch1')
      }
    }
  };

</script>
<style lang="less" scoped>
  .active {
    color: #00a0e9 !important;
  }

  .vg {
    padding-bottom: 110px
  }
.search-inner{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}
.search-inner::after{
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
