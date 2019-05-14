<template>
    <div class="vg">
      <messageItem :isMar="true" :isSystem="true" @click.native="changeJump('/systemMessage')"/> 
      <messageItem />
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
        return {};
    },
    components: {
        Xfooter,
        Search ,
        messageItem
  }
}
</script>
<style lang="less" scoped>
    
</style>