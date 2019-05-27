<template>
    <div class="vg">
      <messageItem :isMar="true" :isSystem="true" @click.native="changeJump('/systemMessage')"/> 
      <messageItem  @click.native="changeJump('/chartList')"/>
      <messageItem />
      <messageItem />

         <Xfooter :selected="1"/>
    </div>
</template>
<script>
import Xfooter from '@/components/footer'
import messageItem from '@/components/messageItem'
import { Search } from 'vux'
export default {
    data(){
        return {
            isFooter:0
        };
    },
    components: {
        Xfooter,
        Search ,
        messageItem
  },
  mounted(){
      this.isFooter=new Number(this.$route.query.isFooter)
  }
}
</script>
<style lang="less" scoped>
    
</style>