<template>
    <div class="index">
        <div class="backColor">

        </div>
        <div class="my_content">
            <div class="content_item">
                <div class="item_left"><img src="../../assets/img/My/my_image_headphoto.png"/></div>
                <div class="item_right">
                    <p class="item_name">张远<span class="name_type">代表</span></p>
                    <p>北区&nbsp;&nbsp;甘宁青</p>

                </div>
            </div>
            <div class="phone"><img src="../../assets/img/My/my_icon_telephone@2x.png"/><p style="flex: 1;">联系我们</p><a href="tel:4008167576">400-816-7576</a></div>
            <div class="version"><img src="../../assets/img/My/my_icon_banben.png"/><p style="flex: 1;">版本信息</p><p style="color: #A2A4BE;">></p></div>
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

<script>
    import icon1 from '@/assets/img/homepage_tabbar_home_highlights.png';
    import icon2 from '@/assets/img/homepage_tabbar_home_highlights.png';
    import icon3 from '@/assets/img/homepage_tabbar_home_pres.png';
    import icon4 from '@/assets/img/homepage_tabbar_home_pres.png';
    export default {
        name: "index",
        data() {
            return {
                active: 1,
                imgList:[
                    {active:icon1,normal:icon2,name:'首页',path:'/Index'},
                    {active:icon3,normal:icon4,name:'我的',path:'/My'}
                ],

            }
        },
    }
</script>

<style scoped lang='less'>
    .index{
        min-height: 100vh;
        background-color: #F7F7FD;
        .backColor{
            background-color: #4A77AF;
            width: 100%;
            height: 94px;
        }
        .my_content{
            padding: 20px;
            margin-top: -60px;
            .content_item{
             display: flex;
                background-color: #ffffff;
                padding: 20px 16px;
                .item_left{
                    margin-right: 20px;
                    img{
                        width: 70px;
                        height: 70px;
                    }
                }
                .item_right{
                    line-height: 30px;
                    margin-top: 10px;
                    color: #0F112A;
                    font-size: 13px;
                    .item_name{
                        font-size: 18px;
                        font-weight: bold;
                        .name_type{
                            display: inline-block;
                            background-color: #FFB413;
                            color: #ffffff;
                            font-size: 13px;
                            font-weight: normal;
                            margin-left: 10px;
                            padding: 0 4px;
                            line-height: 20px;
                            border-radius: 4px;
                        }
                    }
                }
            }
            .phone{
                display: flex;
                background-color: #ffffff;
                margin-top: 15px;
                line-height: 52px;
                padding: 0 16px;
                font-weight: 400;
                border-radius: 2px;
                img{
                    width: 20px;
                    height: 20px;
                    margin: 16px 10px 0 0;
                }
                a{
                    width: 110px;
                    color: #4A77AF;
                }
            }
            .version{
                display: flex;
                background-color: #ffffff;
                margin-top: 15px;
                line-height: 52px;
                padding: 0 16px;
                font-weight: 400;
                border-radius: 2px;
                img{
                    width: 20px;
                    height: 20px;
                    margin: 16px 10px 0 0;
                }
            }
        }
    }

</style>
