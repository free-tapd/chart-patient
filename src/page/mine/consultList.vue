<template>
    <div class="consult-list vg">
        <p class="going">进行中</p>
        <chartList v-for="v in 3" :key="v"/>
        <p class="going">已完成</p>
            <chartList v-for="v in 3" :key="v"/>
    </div>
</template>
<script>
import chartList from "@/components/chartList"
export default {
    components:{
        chartList
    }
}
</script>
<style lang="less" scoped>
.going{
    padding: 23px 30px;
font-size:30px;
font-weight:400;
color:rgba(128,128,128,1);
}
</style>
