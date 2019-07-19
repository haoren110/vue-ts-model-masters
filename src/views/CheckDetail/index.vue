<template>
    <div class="index">
        <p><span class="span_left">非客观原因断货，一次扣20分。</span><span class="span_right">100分</span></p>
        <p><span class="span_left">协助地办对托管医院二次返利，KA合作谈判好(5分)中(0分)，差(-5分)。</span><span class="span_right">100分</span></p>
        <p><span class="span_left">非客观原因断货，一次扣20分。 拷贝 2</span><span class="span_right">100分</span></p>
        <p><span class="span_left">2019年6月份考核记录</span><span class="span_right">100分</span ></p>
    </div>
</template>

<script>
    export default {
        name: "index",
        methods:{
            goDetail(){
                this.$router.push({name:'ScoreDetail'})
            }
        }
    }
</script>

<style scoped lang="less">
    .index{
        min-height: 100vh;
        background-color: #F7F7FD;
        padding: 20px;
        p{
            display: flex;
            justify-content: space-between;
            background-color: #ffffff;
            margin-bottom: 15px;
            /*line-height: 52px;*/
            color: #0F112A;
            font-size: 13px;
            padding: 20px 16px;
            .span_left{
              max-width: 80%;
            }
            .span_right{
                color: #F96144;
            }
        }
    }
</style>
