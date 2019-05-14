<template>
    <div class="header flex-r">
        <div class="select-address flex-r" @click="departments">
            <span class="address-title">石家庄市  河北医科大学第二医院 </span>
            <span class="triangle_border_up"> </span>

        </div>
        <span class="iconfont icon-buzutixing" style="font-size:17px;"></span>
    </div>
</template>
<script>
export default {
    methods:{
        departments(){
            this.$emit('selHospital',"")
        }
    }
}
</script>
<style lang="less">
    @import url('../styles/base.less');
    .header{
        padding: 0 24px;
        font-size: 29px;
        height:88px;
        background:rgba(255,255,255,1);
        justify-content: space-between;
        align-items: center;
        &>.select-address{ 
            &>.address-title{
                margin-right: 15px;
            }
            color: @baseColor;
             justify-content: space-between;
             align-items: center;
        }
    }

</style>