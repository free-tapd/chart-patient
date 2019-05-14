<template>
    <div class="info-list flex-r vux-1px-b">
        <div class="img-box">
            <img src="https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg" alt="">
        </div>
        <div class="info-title flex-c">
            <p>当爸爸教训孩子，妈妈该在旁边做点啥，4点建议</p>
            <div class="tag-list flex-r">
                <p>
                    <span> 育儿 1小时前</span>
                </p>
                <p class="read-info"> 阅读 <span> 15322</span></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
@w:150px;
    .info-list{
        padding: 30px;
        align-content: flex-start;
        justify-content: flex-start;
        >.img-box{
          flex:1;
            width: @w;
            height: @w;
            >img{
                width:100% ;
                // height: auto;
                height: 100%;
                display: block;
                border-radius: 10px;
            }
        }
        >.info-title{
            align-items: baseline;
            justify-content: space-between;
            flex:2;
              margin-left: 30px;
            font-size: 32px;
            color: #333;
            >.tag-list{
                color: #999;
                font-size: 24px;
                >.read-info{
                    margin-left: 30px;
                }
            }
        }
    }
    
</style>