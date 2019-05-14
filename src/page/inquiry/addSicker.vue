<template>
  <div class="vg">
    <div class="df">
      <div class="add-sick">
        <p class="add-sick-title vux-1px-b">选择就诊人</p>
        <ul class="add-person">
          <li @click="changeJump('/addSickerMessage')">
            <span class="iconfont icon-jiahao" style="color:#666;"></span>
          </li>
        </ul>
      </div>
      <!-- list2 -->
      <div class="add-sick">
        <p class="add-sick-title vux-1px-b">病情描述 <span class="example-title" @click="isEx=!isEx">(参考样例)</span></p>
        <ul class="sick-inner">
          <li>
            1.症状、疾病和身体状况<br>
            2.症状发生的时间、症状、部位、持续时间、有无伴随症状<br>
            3.吃过什么药物<br>
            4.如就诊过，提供医生诊断、治疗经过<br>
            5.既往病史
            <p class="example-text"> 0/500</p>
          </li>
          <li></li>
        </ul>
        <!-- 上传照片 -->
        <div class="add-proto vux-1px-t">
          <p>上传照片</p>
          <div class="file-img-box">
            <div class="file-img">
              <span class="iconfont icon-jiahao" style="color:#aaa;"></span>
            </div>
            <div class="info-title">
              <p class="info1">添加照片(可选)</p>
              <p class="info2">
                可添加患处、病历、检查单，请保证图片清晰
                (限5张）
              </p>
            </div>
          </div>
          <!-- <span>病症部位，检查报告等辅助资料（限X张）</span> -->
        </div>
        <!-- 接受协议 -->

        <div class="protocol vux-1px-t" @click="isReceive=!isReceive">
          <span class="funbg icon-prococal" :class="{'icon-nprococal':!isReceive}"></span>
          <span>接收<span style="color:#2D9FF1;">
              《河北医科大学第二医院在线问诊协议》
            </span> </span>
        </div>
        <!-- <div class="protocol" v-if="cur==0" @click="cur=0">
        <span class="funbg icon-nprococal"></span>
        <span>接收协议</span>
      </div> -->
      </div>
    </div>

    <div class="footer-btn vux-1px-t">
      <div class="total-money">
        <span>合计:</span>
        <span>{{30|formatMoney}}</span>
      </div>
      <div class="dis-btn">立即咨询</div>
    </div>
    <!-- 参考样例弹窗 -->
    <div class="cover" v-if="isEx">
      <div class="example-box">
        <p class="ex-title">病情描述(参考样例)</p>
        <ul class="ex-inner">
          <li>
            <p>主要症状：</p>
            <span>咽部异物感6月 </span>
          </li>
          <li>
            <p>既往病史：</p>
            <span> 否认“肝炎”、“结核”、“菌痢”等传染病史，有手术、数学、外伤史，否认青霉素、青霉素过敏史。 </span>
          </li>
          <li>
            <p>检查单：</p>
            <span> 鼻咽黏膜光滑，咽隐窝无新生物。口咽黏膜慢性充血，咽后壁淋巴滤泡明显增生，咽侧索肥厚。双扁桃体1度肿大，表面无干酪性分泌物，舌扁桃体增生。双侧梨状窝清晰。                  
            </span>
          </li>
          <li>
            <p>既往诊治记录：</p>
            <span> 慢性咽炎，开了草珊瑚含片和冬凌草片</span>
          </li>
        </ul>
      </div>
      <div class="close-box funbg" @click="isEx=!isEx"></div>
    </div>
    <!-- 温馨提示 -->
    <div class="cover" v-if="isWarm">
      <div class="warm-prompt">
        <p>温馨提示</p>
        <div class="warm-inner">
          <p>
            1. 该咨询服务仅提供相关建议；
          </p>
          <p>2. 危急重病患者，请立即到医院进行治疗。</p>
        </div>
        <div class="sure-btn" @click="isWarm=!isWarm">确定</div>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        isReceive: true,
        isEx: false,
        isWarm:true
      }
    }
  };

</script>
<style lang="less" scoped>
  .df::after {
    display: table;
    content: '';
  }

  .dis-btn {
    text-align: center;
    height: 88px;
    // position: fixed;
    // left: 22px;
    // right: 22px;
    // bottom: 22px;
    background: rgba(66, 160, 226, 1);
    border-radius: 6px;
    font-size: 34px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 88px;
    width: 340px;
    height: 88px;
    background: rgba(27, 156, 251, 1);
    border-radius: 10px;
  }

  .add-sick {
    &::after {
      display: table;
      content: '';
    }

    padding: 0 23px;
    background-color: #fff;
    margin-bottom: 22px;

    >.add-sick-title {
      font-size: 28px;
      font-weight: 500;
      color: #4D4D4D;
      padding: 20px 0;
      position: relative;

      >.example-title {
        font-size: 28px;
        font-weight: 500;
        color: rgba(51, 157, 229, 1);
        line-height: 65px;
        position: absolute;
        right: 0;
      }
    }

    >.add-person {
      padding: 30px 0;

      >li {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 149px;
        height: 66px;
        background: rgba(238, 238, 238, 1);
        border-radius: 4px;
      }
    }

    >.sick-inner {
      padding: 30px 0;
      font-size: 26px;
      color: #999;

      >li {
        >.example-text {
          text-align: right;
        }
      }

    }

    >.add-proto {
      padding: 30px 0;

      >p {
        font-size: 30px;
        color: #333;
      }

      >.file-img-box {
        margin: 30px 0;
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;

        >.file-img {
          width: 90px;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px dashed #aaa;
          margin-right: 20px;
        }

        >.info-title {

          width: 478px;
          font-size: 24px;
          color: #666;

          >.info1 {
            line-height: 1;
            font-size: 30px;
            font-weight: 500;
            color: #333;
          }
        }
      }

      >span {
        font-size: 22px;
        color: #999;
      }
    }

    >.protocol {
      padding: 30px 23px;
      ;
      display: flex;
      align-items: center;
      font-size: 26px;
      color: #333;
      background-color: #f5f5f5;
      margin: 0 -23px;

      >span:first-child {
        width: 36px;
        height: 36px;
        display: block;
        margin-right: 12px;
      }
    }
  }

  .footer-btn {
    padding: 0 30px;
    height: 124px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px -1px 0px 0px rgba(230, 230, 230, 1);
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;

    >.total-money {
      font-size: 24px;

      >span:first-child {
        font-weight: bold;
      }

      >span:last-child {
        font-size: 30px;
        color: #FF5345;
        font-weight: bold;
      }

    }
  }

  .cover {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @W: 600px;
  @H: 727px;

  .example-box {
    width: @W;
    height: @H;
    background: rgba(255, 255, 255, 1);
    border-radius: 20px;
    // padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    >.ex-title {
      font-size: 34px;
      color: #333;
      padding: 25px 0;
      font-weight: bold;

    }

    >.ex-inner {
      overflow: scroll;
      margin: 0 auto;
      width: 520px-60;
      height: 573-60px;
      background: rgba(247, 247, 247, 1);
      border-radius: 10px;
      padding: 30px;

      >li {

        // display: flex;
        // align-items: center;flex-wrap: wrap;
        font-size: 28px;
        color: #339DE5;

        >p {
          display: inline-block;
        }

        >span {
          color: #808080;
        }
      }

      >li:not(:first-child) {
        margin-top: 20px;
      }
    }
  }

  .close-box {
    margin-top: 70px;
    width: 80px;
    height: 80px;
    background-image: url('../../assets/images/inquiry/hurt_remove.png');
  }

  .warm-prompt {
    width: 600px;
    height: 440px;
    background: rgba(255, 255, 255, 1);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    >p {
      font-size: 34px;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      line-height: 65px;
      padding: 40px 0;
      background: linear-gradient(-13deg, rgba(234, 234, 234, 1) 0%, rgba(216, 216, 216, 1) 100%);
      -webkit-background-clip: text;
      // -webkit-text-fill-color:transparent;
    }

    >.warm-inner {
      width: 457px;
      color: #808080;
      font-size: 28px;
      font-weight: 400;
      line-height: 50px;
    }

    >.sure-btn {
      position: absolute;
      width: 300px;
      height: 88px;
      background: rgba(45, 159, 241, 1);
      border-radius: 10px;
      bottom: 50px;
      left: 50%;
      margin-left: -150px;
      text-align: center;
      line-height: 88px;
      color: #fff;
      font-size: 34px;
    }
  }

  .icon-prococal {
    background-image: url("../../assets/images/jzr_ico_chose_set@2x.png");
  }

  .icon-nprococal {
    background-image: url("../../assets/images/jzr_ico_chose_nor@2x.png");
  }

</style>
