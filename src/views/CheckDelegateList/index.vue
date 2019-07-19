<template>
    <div class="index">
        <div class="item">
           <img src="../../assets/img/My/my_image_headphoto.png" />
            <p class="item_name">张远</p>
            <p class="item_last">100分</p>
        </div>
        <div class="item">
            <img src="../../assets/img/My/my_image_headphoto.png" />
            <p class="item_name">张远</p>
            <p class="item_last">100分</p>
        </div>
        <div class="item" @click="goDetail">
            <img src="../../assets/img/My/my_image_headphoto.png" />
            <p class="item_name">张远</p>
            <p class="item_last">100分</p>
        </div>
        <div class="item" @click="goCheck">
            <img src="../../assets/img/My/my_image_headphoto.png" />
            <p class="item_name">张远</p>
            <p class="item_lasts" ><span style="color: #4A77AF;">去考核</span>></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        methods:{
            goCheck(){
                this.$router.push({name:'CheckDelegateDetail'})
            },
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
    .item{
      display: flex;
        background-color: #ffffff;
        border-radius: 2px;
        line-height: 64px;
        color: #0F112A;
        padding: 0 14px;
        margin-bottom: 20px;
        img{
            margin-top: 9px;
            width: 45px;
            height: 45px;
        }
        .item_name{
            font-size: 16px;
            font-weight: 400;
            flex: 1;
            margin-left: 10px;
        }
        .item_last{
            width: 60px;
            color: #F96144;
        }
        .item_lasts{
            width: 60px;
            color: #A2A4BE;
        }
    }
}
</style>
