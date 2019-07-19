<template>
    <div class="Index">
        <img src="../../assets/img/homepage_banner.png" class="banner"/>
        <!-- one -->
        <ul class="con">
            <router-link tag="li" :to="{name: 'NoticeList',params: {userId:userId}}">
                <div class="icon">
                    <img src="../../assets/img/homepage_icon_tongzhi.png" alt="">
                </div>
                <span>通知公告</span>
            </router-link>
            <router-link tag="li" :to="{name: 'CheckDelegateList'}">
                <div class="icon">
                    <img src="../../assets/img/homepage_icon_kaohe.png" alt="">
                </div>
                <span>商务考核</span>
            </router-link>

            <router-link tag="li" :to="{name: 'applyMoneyBack'}" >
                <div class="icon">
                    <img src="../../assets/img/homepage_icon_liuxiang.png" alt="">
                </div>
                <span>商务流向</span>
            </router-link>
            <router-link tag="li" :to="{name: 'applyMoneyBack'}" >
                <div class="icon">
                    <img src="../../assets/img/homepage_icon_zhengce.png" alt="">
                </div>
                <span>商务政策</span>
            </router-link>
        </ul>
        <div class="agencyInfo">
            <div class="agencyInfo_head">
                <div class="head_bar"></div><p class="head_title">待办事项<span class="head_info">(共3条待查看)</span></p>
                <div class="head_right" @click="goList"><p>查看全部待办></p></div>
            </div>
            <div class="agencyInfo_content">
                <div class="content_item">
                    <p><span class="cheng">[商务考核]</span>您的商务考核已开始，请开始考核评分。</p>
                    <p>5分钟前</p>
                </div>
                <div class="content_item">
                    <p><span class="lan">[商务考核]</span>您的商务考核已开始，请开始考核评分。</p>
                    <p>5分钟前</p>
                </div>
                <div class="hui content_item">
                    <p><span>[商务考核]</span>您的商务考核已开始，请开始考核评分。</p>
                    <p>5分钟前</p>
                </div>
            </div>
        </div>
        <van-tabbar v-model="active" route safe-area-inset-bottom>
            <van-tabbar-item  v-for="(item,index) in imgList" :key="index" :to="item.path">
                <span>{{item.name}}</span>
                <img
                        slot="icon"
                        slot-scope="props"
                        :src="props.active ? item.active : item.normal"
                >
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script lang="ts">
    import { Component, Vue, Prop, Watch, Provide, Inject } from 'vue-property-decorator'
    import { State, Getter, Mutation, Action } from 'vuex-class'
    import { IndexData } from '@/interface/dataIF'
    import MyVantUI from '@/MyVantUI'
    import { Route } from 'vue-router';
    import SlideBar from '../../components/SlideBar/index.vue';
    import icon1 from '@/assets/img/homepage_tabbar_home_highlight.png';
    import icon2 from '@/assets/img/homepage_tabbar_home_highlight.png';
    import icon3 from '@/assets/img/homepage_tabbar_my_pre.png';
    import icon4 from '@/assets/img/homepage_tabbar_my_pre.png';
    import icon5 from '@/assets/img/homepage_icon_tongzhi.png';
    import icon6 from '@/assets/img/homepage_icon_kaohe.png';
    import icon7 from '@/assets/img/homepage_icon_liuxiang.png';
    import icon8 from '@/assets/img/homepage_icon_zhengce.png';
    @Component({
        name: 'index',
    })
    export default class Index extends MyVantUI {
        private indexData: IndexData // 定义Index data的类型
        private active: number = 0;
        private userId: number = 337096;
        private imgLists: Array = [
            {active:icon5,normal:icon2,name:'通知公告s',path:'/NoticeList'},
            {active:icon6,normal:icon4,name:'商务考核',path:'/My'},
            {active:icon7,normal:icon4,name:'商务流向',path:'/My'},
            {active:icon8,normal:icon4,name:'商务政策',path:'/My'}
        ];
        private imgList: Array = [
            {active:icon1,normal:icon2,name:'首页',path:'/Index'},
            {active:icon3,normal:icon4,name:'我的',path:'/My'}
        ];
        constructor() {
            super()
            this.indexData = {
                name: '王一扬',
                age: 27,
                sex: 1
            }
        }
        changeName(): string {
            this.indexData.name = ''
            return this.indexData.name
        }
        goList(){
            this.$router.push({name: 'AgencyList'})
        }
        public created() {
        }
        beforeRouteLeave(to: Route, from: Route, next: Function) {
            from.meta.keepAlive = false //（如果不需要再缓存当前组件，设置为false即可）
            next()
        }


    }
</script>

<style scoped lang='less'>
.Index {
  padding: 20px;
    background-color: #ffffff;
    box-sizing: border-box;
    min-height: 100vh;
    .banner{
        width: 100%;
        height: 100%;
        display: block;
    }
    .con {
        padding: 0 10px;
        height: 135px;
        background-color: #fff;
        .flex-vc();
        justify-content: space-between;
        li {
            height: 100%;
            width: 20vw;
            .flex-v-c();
            color: #454765;
            font-size: 13px;
            font-family:FZLTZHK--GBK1-0;
            font-weight:600;
            position: relative;
            .icon {
                height: 40px;
                width: 40px;
                margin-bottom: 10px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    .agencyInfo{
        .agencyInfo_head{
            display: flex;
            .head_bar{
                background-color: #4A77AF;
                width: 4px;
                height: 15px;
                margin-top: 3px;
                margin-right: 10px;
            }
            .head_title{
                color: #0F112A;
                font-size: 16px;
                font-weight: 600;
                flex: 1;
                line-height: 21px;
                .head_info{
                    font-size: 12px;
                    font-weight: normal;
                }
            }
            .head_right{
                width: 85px;
                font-size: 12px;
                line-height: 21px;
            }
        }
        .agencyInfo_content{
            background-color: #F7F7FD;
            padding: 20px 15px;
            box-sizing: border-box;
            font-size: 13px;
            color: #0F112A;
            line-height: 24px;
            margin-top: 20px;
            .content_item{
                margin-bottom: 20px;
            }
        }
       .cheng{
           color: #F96144;
       }
        .lan{
            color: #4A77AF;
        }
        .hui{
            color: #9FA1BC;
        }
    }
}

</style>
