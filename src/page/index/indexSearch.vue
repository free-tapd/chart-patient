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
                <p class="ellipsis">{{v.title}}</p>
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
        <div class="pannel-search-hospital" ref="overHeight1" v-show="cur==3&&$route.query.platformName=='jkhb'">
          <!-- 1 -->
          <ul class="pannel-left">
            <li v-for="(v,i) in areaArr" :key="i" :class="{'active-item':cur2==i}" @click.stop="clickHospital(v,i)">
              {{v.cityName}}</li>
          </ul>
          <!-- 2 -->
          <ul class="pannel-right">
            <!-- <li>全部医院</li> -->
            <li class="flex-r" v-for="(v,i) in hospitalArr" :key="i" @click="searchHospital(v)">
              <figure>
                <img :src="v.hospitalLogo" :alt="v.hospitalName" style="font-size:12px;">
              </figure>
              
              <div class="hospital-name">
                <p>{{v.hospitalName}}</p>
                <span>{{v.hospitalLevel}}</span>
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

            <li v-for="(v,i) in firSectionArr" :key="i" :class="{'active-item':cur1==i}"
              @click.stop="clickSection(v,i)">{{v.sectionName}}</li>
          </ul>
          <!-- 2 -->
          <ul class="pannel-right">
            <li class="flex-r" v-for="(v,i) in twoSectionArr" :key="i" @click="searchSection(v)">
              <div class="hospital-name" :class="{'active-item':twoCur1==i}">
                {{v.sectionName}}
              </div>
              <p class="online-doctor"> <span>{{v.doctorOnline}}</span>
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
                  <span v-for="(r,j) in v.choose.chooseList" :key="j" :class="{'active-choose':cur0==r.i}"
                    @click.stop="chooseTag(v,j)">{{r.chooseTitle}}</span>
                  <!-- <span></span> -->
                </div>
              </li>
            </ul>
            <div class="choose-btn">
              <span @click.stop="cur0=-1">重置</span>
              <span @click.stop="sureSearch">确定</span>
            </div>
          </div>
        </div>
        <!-- 全部职称 -->

        <div class="professional" v-show="cur==3&&$route.query.platformName!='jkhb'">
          <ul>
            <li class="flex-r vux-1px-b" v-for="(v,i) in professionalArr" :key="i" @click="clickProfessional(v,i)">
              <span> {{v.titleName}}</span>
              <i class="iconfont icon-iconfontcheck" style="color:#2D9FF1" v-if="professionalIndex==i"></i>
            </li>
          </ul>
        </div>

      </div>
      <!-- 医生列表 -->
      <div class="doctor-box1" style="position:relative">
        <docutorItem v-for="(v,i) in doctorList" :doctorItem="v" :key="i" @doctorDetail="doctorDetail" />
        <div class="no-doctor" v-if="doctorList.length==0">
          <span class="bg-image"></span>
          <span class="no-text"> 暂无医生</span>
        </div>
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
    mapMutations,
    mapState
  } from "vuex"
  import {
    Flexbox,
    FlexboxItem,
    Sticky
  } from "vux";
  import {
    log
  } from 'util';
  export default {
    data() {
      return {
        tabArr: [{
            id: 2,
            title: "全部科室"
          },
          {
            id: 3,
            title: "全部医院"
          },
          {
            id: 1,
            title: "综合排序"
          }
        ],
        chooseArr: [{
            id: 1,
            title: "按咨询量",
            choose: {
              cur: 0,
              chooseList: [{
                  i: 1,
                  chooseTitle: "从高到底",
                  isClick: false,
                  leval: 1,
                },
                {
                  i: 2,
                  chooseTitle: "从低到高",
                  isClick: false,
                  leval: 0
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
                  i: 3,
                  chooseTitle: "从高到底",
                  isClick: false,
                  leval: 1
                },
                {
                  i: 4,
                  chooseTitle: "从低到高",
                  isClick: false,
                  leval: 0
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
                  i: 5,
                  chooseTitle: "在线医生",
                  isClick: false,
                  leval: 1
                },
                {
                  i: 6,
                  chooseTitle: "全部医生",
                  isClick: false,
                  leval: 0
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
        isFocus: false,
        doctorList: [],
        firSectionArr: [],
        twoSectionArr: [],
        areaArr: [],
        hospitalArr: [],
        cur0: -1,
        professionalIndex: 0,
        professionalArr: [],
        twoCur1: 0,
        chooseItem: {
          id: 1,
          tab: "desc"
        },
        allOnlineDoctor:0
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
    computed: {
      platformName() {
        return this.$store.state.platformName
      },
      ...mapState(['tabMessage'])
    },
    created() {
      // this.initIsHospital();
      // 推荐医生的列表
      this.getIntroDoctorList();
      // 获取一级科室
      this.getFirstSection();
      // 获取地区
      this.getArea();
      this.getProfessional();
    },
    mounted() {
      console.log(document.getElementsByTagName("body"));
      // document.getElementsByTagName("body")[0].style.overflow = "hidden";
      this.offset = this.$refs.searchs.offsetHeight;
      document.querySelector('.doctor-container').style.marginTop = this.offset + "px";
      let clientHeight =
        document.body.clientHeight || document.documentElement.clientHeight;
        console.log('body');
        
        console.log(clientHeight);
        
      let screenHeight = window.screen.availHeight;
      let searchBar = this.$refs.listTop.offsetHeight;

      /*ios clientHeight-1 解决底部超出手机浏览器*/ 
      this.$refs.overHeight.style.height = (clientHeight-1 - this.offset - searchBar) + 'px';
      this.$refs.overHeight1.style.height = (clientHeight-1- this.offset - searchBar) + 'px';
      document.querySelector('.doctor-box1').style.marginTop = this.offset + searchBar + "px";
      document.querySelectorAll('.pannel-search-hospital').forEach(v => {
        v.style.top = (this.offset + searchBar) + "px";
      }) //

      this.initIsHospital();
      console.log('點錢的tabarr');
      
      console.log(this.tabMessage);
      
    },
    methods: {
      ...mapMutations(['saveTab']),
      allHandler(v) {
        console.log(v);

        this.activeId = v.id;
        if (this.cur == v.id) {
          this.cur = 0;

          // document.getElementsByTagName("body")[0].style.overflow = "";
        } else {
          this.cur = v.id;
          //   document.getElementsByTagName("body")[0].style.overflow = "hidden";

        }

        // this.initIsHospital()
      },
      // 初始化判断是职称还是医院
      initIsHospital() {
        // 如果是健康河北的话是平台，当前应该显示医院，否则则显示职称
        // 路由传来当前平台的信息
        // 初始化判断
        let {
          level,
          sectionId
        } = this.$route.query;
        let a = [...this.tabArr];
        if (this.$route.query.platformName == "jkhb" && this.platformName == "jkhb") {
          this.tabArr = a;
        } else {
          a[1] = {
            id: 3,
            title: "全部职称"
          }
          this.tabArr = a
        }
        // console.log(this.tabArr);
        // 点击全部科室过来的
        if (this.$route.query.type == 1) {
          this.cur = 2
        }
        // if携带的sectionId过来的
        /** 
         * @當傳入的是一級科室 level==1
         * this.getFirstSection()
         * 已經做了判斷
         * 
        */


          if(level==2){
             this.filterDoctor(sectionId)
       
          
            this.upDataTab(0,this.tabMessage.secondSectionName)
          }else{

          }

      },
      // 选择标签
      chooseTag(item, j) {
        this.cur0 = item.choose.chooseList[j].i;
        let a = "";
        if (item.id == 3) {
          // this.filterDoctor("", "", item.choose.chooseList[j].leval, 3)
          a = item.choose.chooseList[j].leval;
        } else {
          a = item.choose.chooseList[j].leval ? "desc" : "asc"
          // this.filterDoctor("", "", a, item.id)
        }
        console.log(a);

        this.chooseItem.tab = a;
        this.chooseItem.id = item.id
      },
      sureSearch() {
        // order flag
        console.log(this.chooseItem);
        if(this.cur0==-1){
            this.cur=0;
        }else{
              this.filterDoctor( this.$store.state.tabMessage.secondSectionId, this.$store.state.tabMessage.hospitalId, this.chooseItem.tab, this.chooseItem.id)
        
        }
        // this.filterDoctor("", "", this.chooseItem.tab, this.chooseItem.id)
      },
      focusHandler(msg) {
        this.changeJump('/indexSearch1');

      },
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
      // 获取一级科室
      getFirstSection() {
        this.$post('doctor/getFirstSectionList', {
          platformAccount: this.platformName
        }).then(res => {
          // console.log(res)
          if (res.code == 0) {
            // res.data.unshift({
            //   sectionName: "全部",
            //   sectionId: ""
            // })
          
           
            this.firSectionArr = res.data;
            this.allOnlineDoctor=0
            res.data.forEach(v=>{this.allOnlineDoctor+= parseInt(v.doctorOnline)})
            let {
              level,
              sectionId
            } = this.$route.query;
            console.log(level,sectionId);
            
            if (level == '1') {
              this.cur = 2;
              // this.tabArr[0].title = this.tabMessage.firstSectionName
              // 定位一级科室
              this.firSectionArr.forEach((v, i) => {
                if (v.sectionId == sectionId) {
                  this.cur1 = i
                }
              })
              this.getTwoSection(sectionId)
            }else{
              this.getTwoSection(this.firSectionArr[0].sectionId)
            }
            
          }
        })
      },
      // 获取二级科室
      getTwoSection(sectionId) {
        this.$post('doctor/getSecondSectionList', {
          platformAccount: this.platformName,
          sectionId
        }).then(res => {
          if (res.code == 0) {
              if(res.data.length==0){
               this.$vux.toast.text('暂无数据')
            }
            res.data.unshift({
              sectionName: "全部",
              sectionId: "",
              doctorOnline:this.allOnlineDoctor
            })
            this.twoSectionArr = res.data;
            // this.initIsHospital();
          }
        })
      },
      // 点击一级菜单，获取二级菜单的内容
      clickSection(item, index) {
        this.cur1 = index
        this.getTwoSection(item.sectionId);
        
        this.$store.commit('saveTab', {
          firstSectionName: item.sectionName,
          firstSectionId:item.id
        })
      },
      // 获取地区
      getArea() {
        this.$post('doctor/getCityList', {
          platformAccount: this.platformName
        }).then(res => {
          if (res.code == 0) {
            this.areaArr = res.data;
            this.getCityHospital(this.areaArr[0].cityId);
          }
        })
      },
      // 获取区域下面的hospital
      getCityHospital(cityId) {
        this.$post('doctor/getHospitalListByCityId', {
          platformAccount: this.platformName,
          cityId
        }).then(res => {
          if (res.code == 0) {
              if(res.data.length==0){
               this.$vux.toast.text('暂无数据')
            }
            this.hospitalArr = res.data;
          }
        })
      },
      // 点击一级菜单，获取二级菜单的内容
      clickHospital(item, index) {
        this.cur2 = index
        this.getCityHospital(item.cityId);
        this.saveTab({
          cityId:item.cityId,
          cityName:item.cityName
        })
      },

      // 根据条件筛选
      filterDoctor(sectionId = "", hospitalId = "", order = "", flag = "", titleId = "") {
        if(this.tabMessage.secondSectionId) sectionId=this.tabMessage.secondSectionId;
        if(this.tabMessage.hospitalName) hospitalId=this.tabMessage.hospitalId
        this.$post('doctor/getDoctorList', {
          platformAccount: this.platformName,
          sectionId,
          hospitalId,
          order,
          flag,
          titleId,
        }).then(res => {
          if (res.code == 0) {
            this.doctorList=[];
            this.doctorList = res.data;
            this.cur = 0;
          }

        })
      },
      // 點擊科室篩選條件
      searchSection(item){
              this.saveTab({
            secondSectionName: item.sectionName,
            secondSectionId: item.sectionId
          })
          this.filterDoctor(item.sectionId)
       
          
          this.upDataTab(0,this.tabMessage.secondSectionName)
       
      },
      // 點擊醫院篩選醫院
      searchHospital(item){ 
          this.saveTab({
            hospitalName: item.hospitalName,
            hospitalId: item.hospitalId
          })
        this.filterDoctor("",item.hospitalId)
        
          this.upDataTab(1,this.tabMessage.hospitalName)
       
      },
      // 获取全部职称
      getProfessional() {
        this.$post('doctor/getTitleList').then(res => {
          if (res.code == 0) {
            this.professionalArr = res.data;
          }
        })
      },
      // 更新當前的tab的title
      upDataTab(n,name){
        this.tabArr[n].title=name
      },
      // 点击职称
      clickProfessional(item, index) {
        this.professionalIndex = index
        this.filterDoctor("", "", "", "", item.titleId)
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
    background-color: #fff !important;
    color: #00a0e9 !important;
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
      // line-height: 88px;
      font-weight: 400;
      font-size: 24px;
      color: #333;

      >span {
        width: 16px;
        height: 16px;
        display: block;
        margin-left: 24px;
        // transition: all linear 0.5s;
      }
    }
  }

  // 职称
  .professional {
    height: 540px;
    background-color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 10000;

    >ul {
      overflow: scroll;
      height: 100%;

      >li {
        justify-content: space-between;
        align-items: center;
        font-size: 32px;
        color: #333;
        padding: 30px;
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

        >figure {
          width: 68px;
          height: 68px;
          display: block;
          border-radius: 50%;
          margin-right: 30px;
          >img{
            width: 100%;
            height: 100%;
            display: block;
          }
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
