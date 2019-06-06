<template>
    <div class="c">
        <!-- 门诊 -->
        <!-- a1a9dc002e964b1fbc226bfd161b1d90 -->
        <button @click="changeJump('/index',{pf:'jkhb',ch:'wechat_service_number',exp:'1',isFooter:0,token:'0e9cf2f974114873acde5948c919dac4'})"> go index</button>
        <button @click="changeJump('/index',{pf:'jkhb',ch:'wechat_service_number',exp:'1',isFooter:0})"> go index (没有token)</button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>

</style>

