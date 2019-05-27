
<template>
    <div class="c">
              <div class="discuess">
        <div class="flex-r discuess-title vux-1px-b" v-if="false">
          <!-- <span class="icons funbg icon-pinjia"></span> -->
          <span>评价</span>
          <p @click.stop="changeJump('/evaluateList')"><span>更多</span><span class="iconfont icon-right"></span></p>

        </div>
        <div class="discuess-inner flex-c vux-1px-b" >
          <div class="star-box flex-r">
            <span>{{evaluateItem.patientName}}</span>
            <div class="star">
              <span class="star-list funbg icon-star" v-for="star in new Number(evaluateItem.starts)" :key="star"></span>
              <!-- <span class="star-list funbg icon-star"></span>
              <span class="star-list funbg icon-star"></span>
              <span class="star-list funbg icon-star"></span>
              <span class="star-list funbg icon-star"></span> -->
            </div>
            <span>{{evaluateItem.createTime}}</span>
          </div>
          <div class="dis-tag">
            <span v-for="eva in evaluateItem.judgeLable" :key="eva">{{eva}}</span>
          </div>
          <div class="dis-inner">

            {{evaluateItem.judgeContent}}
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    props:{
        evaluateItem:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>


<style lang="less" scoped>
  .discuess {
        background-color: #fff;

        >.discuess-title {
          font-size: 28px;
          color: #666;
          align-items: center;
          padding: 30px;
          justify-content: space-between;

          >p {
            font-size: 30px;
            color: #B3B3B3;
          }

          >span {
            font-size: 30px;
            font-weight: bold;
            color: rgba(51, 51, 51, 1);
          }

          >span:last-child {
            margin-left: 15px;

          }
        }

        >.discuess-inner {
          padding: 30px;

          >.star-box {
            width: 100%;
            align-items: center;
            justify-content: space-between;
            font-size: 24px;
            color: #999;

            >.star {
              display: flex;
              align-items: center;

              >.star-list {
                width: 30px;
                height: 30px;
                display: block;
                background-image: url('../assets/images/chart/star_1.png');
              }
            }
          }

          >.dis-tag {
            margin-top: 30px;

            >span {
              background: rgba(242, 242, 242, 1);
              border-radius: 4px;
              padding: 8px 15px;
              color: #808080;
              text-align: center;
              font-size: 24px;
              line-height: 36px;
            }

            >span:not(:first-child) {
              margin-left: 18px;
            }
          }

          >.dis-inner {
            font-size: 24px;
            color: #030e13;
            margin-top: 30px;
          }
        }
      }
</style>
