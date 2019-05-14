<template>
  <div class="visit-date">
    <!-- 就诊时间选择 -->
    <div class="title">
      <span>住院日期：</span>
      <span>2017-07-21</span>
    </div>
    <div class="date-list">
        <div class="week flex-r">
            <span v-for="v in week" :key="v">{{v}}</span>
        </div>
        <div class="date">
            <span>30</span>
        </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: [],
        week: ["日",'一', "二", "三", "四", "五", "六" ],
        day:[]
      }
    },
    mounted() {
      this.getDefaultTime();
      console.log(this.getWeekDate())
      this.getCountDays()
    },
    methods: {
      getDefaultTime() {
        const date = new Date();
        //默认时间
        const Y = date.getFullYear();
        const M = date.getMonth() + 1;
        const D = date.getDate();
        const H = date.getHours();
        const Min = date.getMinutes();
        // console.log(M, D, H, Min);
        this.value = [Y, M, D, H, Min];
        this.day=D
      },
      showTime() {
        const date = new Date();
        const years = [];
        const months = [];
        const days = [];
        const hours = [];
        const minutes = [];
        const timer = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;
        for (let i = date.getFullYear(); i <= date.getFullYear() + 1; i++) {
          years.push(i);
        }
        // console.log(date.getMonth());
        for (let i = 1; i <= 12; i++) {
          if (i < 10) i = "0" + i;
          months.push(i);
        }
        for (let i = 1; i <= 31; i++) {
          if (i < 10) i = "0" + i;
          days.push(i);
        }
        for (let i = 0; i <= 23; i++) {
          if (i < 10) i = "0" + i;
          hours.push(i);
        }
        for (let i = 0; i <= 59; i++) {
          if (i < 10) i = "0" + i;
          minutes.push(i);
        }
        this.years = years;
        this.months = months;
        this.days = days;
        this.hours = hours;
        this.minutes = minutes;
      },
    //   获取当前是周几
      getWeekDate() {
        var now = new Date();
        var day = now.getDay();
        //    var weeks = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
        var weeks = new Array("日",'一', "二", "三", "四", "五", "六" )
        let arr=[];
        weeks.forEach((v,i)=>{
            if(i<day){
                arr.push(v)
            }
        })
        // console.log(arr);
        let newWeeks=[...weeks.splice(day,7),...arr];
        // console.log(newWeeks)
        // var week = weeks[day];
        this.week= newWeeks;

      },

      confirmBtn() {
        this.isShow = false;
        this.$emit("changeShow", this.isShow);
      },
      cancleBtn() {
        this.isShow = false;
        this.$emit("changeShow", this.isShow);
      },
      getCountDays(time=new Date().getTime()) {
        var curDate = new Date(time);
        /* 获取当前月份 */
        var curMonth = curDate.getMonth();
        // console.log(curMonth);
        /*  生成实际的月份: 由于curMonth会比实际月份小1, 故需加1 */
        curDate.setMonth(curMonth + 1);
        /* setDate 传0 返回上个月的天数 eg setDate(2018,2,0)* 二月份的天数/
        curDate.setDate(0);
        /* 返回当月的天数 */
        console.log(curDate.getDate())
        return curDate.getDate();
      },
      mGetDate(year, month) {
        var d = new Date(year, month, 0);
        return d.getDate();
      },
      bindChange({
        mp
      }) {
        this.value = mp.detail.value;
        this.year = this.years[this.value[0]];
        this.month = this.months[this.value[1]];
        this.day = this.days[this.value[2]];
        this.hour = this.hours[this.value[3]];
        this.minute = this.minutes[this.value[4]];
        let time = `${this.year}-${this.month}-${this.day} ${this.hour}:${
        this.minute
      }:00`;
        let D = [];
        for (let i = 1; i <= 31; i++) {
          if (i < 10) i = "0" + i;
          D.push(i);
        }
        this.days = D.splice(0, this.mGetDate(this.year, this.month));
        this.$emit("selTime", time);
      }

    }
  }

</script>
<style lang="less" scoped>
.visit-date{
    background-color: #fff;
    font-size: 26px;
    color: #666;
    >.title{
        margin-bottom: 15px;
        // margin-top: 15px;
    }
    >.date-list{
        >.week{
            font-size: 34px;
            color: #333;
            >span{
                display: block;
                width: 100%/7; 
                text-align: center;
            }
           
        }
        >.date{
            font-size: 30px;
            color: #333;
            >span{
                display: block;
                width: 100%/7; 
                text-align: center;
            }
        }
    }

}
</style>
