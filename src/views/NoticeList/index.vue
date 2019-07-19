<template>
    <div class="index">
        <div class="notice_item" @click="goDetail(96655622)">
            <div class="item_img"><img :src="icon"/></div>
            <div>
                <p>关于步长制药2019年度第三季度工作汇报会议的事项通知。</p>
                <p class="item_bottom"><span>253人已读</span><span>2019.06.28</span></p>
            </div>
        </div>
        <div class="notice_item">
            <div class="item_img"><img :src="icon"/></div>
            <div>
                <p>关于步长制药2019年度第三季度工作汇报会议的事项通知。</p>
                <p class="item_bottom"><span>253人已读</span><span>2019.06.28</span></p>
            </div>
        </div>
        <div class="notice_item" style="color:#9FA1BC;">
            <div class="item_img"><img :src="icon"/></div>
            <div>
                <p>关于步长制药2019年度第三季度工作汇报会议的事项通知。</p>
                <p class="item_bottom"><span>253人已读</span><span>2019.06.28</span></p>
            </div>
        </div>
        <div class="notice_item" style="color:#9FA1BC;">
            <div class="item_img"><img :src="icon"/></div>
            <div>
                <p>关于步长制药2019年度第三季度工作汇报会议的事项通知。</p>
                <p class="item_bottom"><span>253人已读</span><span>2019.06.28</span></p>
            </div>
        </div>
    </div>
</template>

<script>
    import icon from '@/assets/img/tongzhi_icon.png';
    export default {
        name: "index",
        data(){
            return{
                icon:icon
            }
        },
        methods:{
            goDetail(id){
                this.$router.push({name:'NoticeDetail',params:{id}})
            }
        }
    }
</script>

<style scoped lang="less">
.index{
    min-height: 100vh;
    padding: 20px;
    background-color: #F7F7FD;
    .notice_item{
        display: flex;
        background-color: #ffffff;
        padding: 16px 10px 10px 10px;
        font-size: 13px;
        line-height: 20px;
        margin-bottom: 15px;
        border-radius: 2px;
        .item_img{
            width: 39px;
            height: 39px;
            margin-right: 15px;
        }
        .item_bottom{
            color: #9FA1BC;
            font-size: 12px;
            margin-top: 8px;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>
