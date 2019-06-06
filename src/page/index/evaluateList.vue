<template>
  <div class="evaluate">
      <evaluateItem :evaluateItem="v" v-for="(v,i) in evaluateArr" :key="i"/>
  </div>
</template>
<script>
import evaluateItem from "@/components/evaluateItem";
export default {
  components:{
    evaluateItem
  },
  data(){
    return {
      evaluateArr:[],
      pageSize:10,
      pageNum:1,
    }
  },
  computed:{
    platformName(){
      return this.$store.state.platformName
    }
  },
  mounted(){
    this.getDoctorEvaluate();
  },
  methods:{
     // 获取医生的评价
      getDoctorEvaluate() {
        this.$post('doctor/getDoctorJudge', {
          platformAccount: this.platformName,
          doctorId: this.$route.query.doctorId,
          limit: this.pageSize,
          page: this.pageNum
        }).then(res => {
          // console.log(res)
          if (res.code == 0) {
            res.data.forEach(v=>{
              if(v.patientName) v.patientName=this.coverName(v.patientName);
              if(v.judgeLable){
                 v.judgeLable=v.judgeLable.split(',');
              }
             
            })
             this.evaluateArr = res.data;
          }
        })
      },
       coverName(str){
      //  return   str.substr(0,1)+"*"+str.substr(str.length-1,str.length);
       return   str.substr(0,1)+"**";
      },
  }
  
}
</script>
