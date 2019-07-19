<template>
    <div class="index">
        <p @click="goDetail"><span class="span_left">2019年6月份考核记录</span><span class="span_right">100分</span ></p>
        <p><span class="span_left">2019年6月份考核记录</span><span class="span_right">100分</span ></p>
        <p><span class="span_left">2019年6月份考核记录</span><span class="span_right">100分</span ></p>
        <p><span class="span_left">2019年6月份考核记录</span><span class="span_right">100分</span ></p>
    </div>
</template>

<script>
    export default {
        name: "index",
        methods:{
            goDetail(){
                this.$router.push({name:'CheckDetail'})
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
