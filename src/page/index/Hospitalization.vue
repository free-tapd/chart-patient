<template>
  <div class="vg">
    <!-- <x-header :left-options="{backText: '',showBack: true}">
      住院导航
      <a slot="right">
        <span class="iconfont icon-fenxiang"></span>
      </a>
    </x-header> -->
    <div class="content">
      <div class="bg-picture">
        <!-- 标注信息 -->
        <!-- https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg -->
        <div class="hospital-message flex-r">
          <div class="message-left">
            <p>河北省医科大学第二医院</p>
            <p>
              <span>三甲医院</span>
              <span class="appointment-num">预约量2.1万</span>
            </p>
          </div>
          <div class="message-right flex-c">
            <span class="iconfont icon-guanzhu"></span>
            <p>收藏</p>
          </div>
        </div>
      </div>
      <!-- 定位icon -->
      <div class="go-address flex-r">
        <div class="address-message flex-r vux-1px-r">
          <span class="iconfont icon-dingwei" style="color:#B3B3B3"></span>
          <h6>河北省石家庄市和平路215号</h6>
        </div>
        <i class="icons icon-phone"></i>
      </div>
      <!-- 预约list -->
      <ul class="navigation-map flex-r">
        <li class="flex-c">
          <i></i>
          <span>预约挂号</span>
        </li>
        <li class="flex-c">
          <i class="icon-map"></i>
          <span>地图导航</span>
        </li>
        <li class="flex-c">
          <i class="icon-floor"></i>
          <span>楼层导航</span>
        </li>
      </ul>
      <!-- 医院交通 -->
      <div class="hospital-traffic">
        <h6>医院交通</h6>
        <p>
          <span>
            1.市内： 可乘4、20、8、17、110路、76路东行100
            米路北或省二院站下车即到。
          </span>
        </p>
        <p>
          <span>2.东院区： 乘88路公交车到省二院站下车即到。</span>
        </p>
      </div>
      <!-- 特色科室 -->
      <div class="hospital-traffic">
        <h6>特色科室</h6>
        <p>
          <span>心血管内科、心脏大血管外科、神经内科</span>
        </p>
      </div>
      <!-- 医院简介 -->
      <div class="hospital-traffic">
        <h6>医院简介</h6>
        <p>
          <span>
            河北医科大学第二医院前身为1918年1月成立的直隶公立医学专门学校附设诊所，1920年扩建为医院，1958年迁至石家庄市，2013年设 .... 区，北院区、西山医养一体化医院、正定新区医院正在建设中。
            医院是一所集医疗、教学、科研、保健、康复、急救为一体的综合性三级甲等医院，为亚洲国际救援会员单位、国家级爱婴医院、首批全国百姓放心示范医院，国家药物临床试验机构，卫生部腔镜培训基地，卫生部冠心病介入治疗培训基地，中华医学会腹腔镜内镜学培训基地，河北省神经内科、麻醉、急诊、影像、核医学、检验、护理、病历等多个省级质量控制中心所在单位。
            医院编制床位2816张，2016年门急诊总量243万人次；年出院病人15万人次；完成大中手术3万台。
            医院人才济济，技术力量雄厚。拥有中国工程院院士1人、河北省高端人才1人，博士生导师24人，享受国务院特殊津贴专家、省管专家、省有突出贡献中青年专家78人。
            医院科室专业齐全，综合实力雄厚，其中心血管内科
          </span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { XHeader } from "vux";

export default {
  data() {
    return {
      tabArr: [
        {
          id: 1,
          title: "待支付"
        },
        {
          id: 2,
          title: "已支付"
        }
      ],
      isPay: true
    };
  },

  components: {
    XHeader
  },
  methods: {
    getItem(item) {
      console.log(item);
      if (item.id == 1) {
        // 待支付
        this.isPay = true;
      } else {
        // 已支付
        this.isPay = false;
      }
    }
  }
};
</script>

<style lang="less" scoped>
@color: #42a0e2;

.icons {
  width: 34px;
  height: 36px;
  align-items: center;
  justify-content: center;
  // border-radius: 50%;
  color: #fff;
  font-size: 24px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.icon-map {
  background-image: url("../../assets/images/map_daohang.png") !important;
}
.icon-floor {
  background-image: url("../../assets/images/lc_daohang.png") !important;
}
.icon-phone {
  background-image: url("../../assets/images/phone.png");
}

.bg-top {
  height: 115px;
  //   position: relative;
  background-color: @color;
}
.content {
  > .bg-picture {
    height: 279px;
    background-image: url("https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    position: relative;
    > .hospital-message {
      justify-content: space-between;
      align-items: center;
      height: 57px;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      color: #fff;
      font-size: 26px;
      padding: 15px 30px;
      > .message-left {
        & .appointment-num {
          margin-left: 30px;
        }
        > p:last-child {
          width: 110%;
          transform: scale(0.9);
          & > span:first-child {
            opacity: 0.5;
          }
        }
      }
      > .message-right {
        align-items: center;
        justify-content: center;

        & > p {
          transform: scale(0.9);
          opacity: 0.5;
        }
      }
    }
  }
  > .go-address {
    box-shadow: 0px 1px 0px 0px rgba(230, 230, 230, 1);
    background-color: #fff;
    margin-bottom: 10px;
    padding: 30px;
    color: #808080;
    font-size: 26px;
    align-items: center;
    justify-content: space-between;
    & > i {
      flex: 1;
    }
    > .address-message {
      flex: 3;
      align-items: center;
      > h6 {
        margin-left: 15px;
      }
    }
  }
  > .navigation-map {
    box-shadow: 0px 1px 0px 0px rgba(230, 230, 230, 1),
      0px -1px 0px 0px rgba(230, 230, 230, 1);
    padding: 30px 0;
    background-color: #fff;
    margin-bottom: 10px;
    > li:not(:first-child) {
      border-left: 1px solid #d7d7d7;
    }
    > li {
      flex: 1;
      align-items: center;
      justify-content: center;

      > i {
        display: block;
        width: 90px;
        height: 90px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        background-image: url("../../assets/images/appoint-gh.png");
      }
      > span {
        margin-top: 22px;
        font-size: 13px;
        color: #333;
      }
    }
  }
  > .hospital-traffic {
    box-shadow: 0px 1px 0px 0px rgba(230, 230, 230, 1),
      0px -1px 0px 0px rgba(230, 230, 230, 1);
    background-color: #fff;
    margin-bottom: 10px;
    padding: 30px;
    > h6 {
      line-height: 26px;
      color: #333;
      font-size: 26px;
      padding-left: 30px;
      border-left: 4px solid @color;
      margin-bottom: 36px;
    }
    > p {
      color: #808080;
      font-size: 22px;
    }
    > p:first-child {
      // padding-top: 36px;
    }
  }

  > .medicine-list-box {
    position: relative;

    > .medicine-list {
      padding: 35px 30px;
      justify-content: space-between;
      list-style: none;
      font-size: 30px;
      color: #333;
      background-color: #fff;
      box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.1);
    }
  }

  > .waring {
    // align-items: center;
    // margin: 0 auto;
    //   width: 95%;
    padding: 30px;
    margin-top: 35px;
    font-size: 24px;
    color: #666;

    > .waring-text {
      margin-top: 9px;
      color: #ff2400;
      font-size: 50px;
      margin-right: 15px;
    }
  }
}
</style>
