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
                <div class="content_type">考核中</div>
            </div>
        </div>
        <div class="check_content">
            <p class="check_info">请您对他进行考核，共考核5项，总分为100分。</p>
            <div class="check_item">
                <p class="check_info">1、非客观原因断货，一次扣20分。</p>
                <p class="check_num"><van-stepper v-model="value" step="2" /></p>
                <p class="check_bottom"></p>
            </div>
            <div class="check_item">
                <p class="check_info">1、非客观原因断货，一次扣20分。</p>
                <p class="check_num"><van-stepper v-model="value" step="2" /></p>
                <p class="check_bottom"></p>
            </div>
            <div class="check_item">
                <p class="check_info">1、非客观原因断货，一次扣20分。</p>
                <p class="check_num"><van-stepper v-model="value" step="2" /></p>
                <p class="check_bottom" style="height: 0;"></p>
            </div>
        </div>
        <div class="submit_btn">提交</div>
        <div class="pop_index">
            <div class="pop_content">
                <div class="pop_head">
                    <img src="../../assets/img/delete.png" class="close_btn"/>
                    <p class="head_score">95</p>
                    <p class="head_info">商务考核评分</p>
                </div>
                <div class="pop_mid">
                    <p>您好，确认无误即可提交， 感谢您的认真考核~</p>

                </div>
                <div class="pop_btn">
                    <div class="btn_item">返回修改</div>
                    <div class="btn_item lan">确认提交</div>
                </div>
            </div>
        </div>
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
                imgList:[
                    {active:icon1,normal:icon2,name:'首页',path:'/Index'},
                    {active:icon3,normal:icon4,name:'我的',path:'/My'}
                ],
                value:2

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
                .content_type{
                    border: 1px solid #F96144;
                    color: #F96144;
                    line-height: 30px;
                    height: 34px;
                    margin: 20px 0 0 40px;
                    padding: 0px 12px;
                    border-radius: 15px;
                }
            }

        }
        .check_content{
            .check_info{
                color: #9FA1BC;
                font-size: 13px;
                line-height:24px;
                text-align: center;
            }
            .check_item{
                background-color: #ffffff;
                padding: 10px 20px;
                margin: 0 20px;
                .check_info{
                    font-size: 13px;
                    color: #0F112A;
                    text-align: left;
                }
                .check_num{
                    text-align: right;
                }
                .check_bottom{
                    margin-top: 8px;
                    height:1px;
                    background:#DADAED;
                    width: 100%;
                }

            }
        }
        .submit_btn{
            width: 100%;
            height: 49px;
            color: #ffffff;
            font-size: 16px;
            text-align: center;
            line-height: 49px;
            background-color: #4A77AF;
            margin-top: 30px;
        }
        /********
        弹框
        *****/
        .pop_index{
            width: 100%;
            height: 100%;
            position: absolute;
            background-color: rgba(0,0,0,0.6);
            top: 0;
            left: 0;
            .pop_content{
                width: 80%;
                margin-left: 10%;
                margin-top: 45%;
                height: 300px;
                background-color: #ffffff;
                .pop_head{
                    width: 100%;
                    height: 110px;
                    background-color: #4A77AF;
                    text-align: left;
                    .head_score{
                        font-size:50px;
                        font-family:ArialMT;
                        font-weight:bold;
                        color:rgba(255,255,255,1);
                        text-align: center;
                        margin-top: -20px;
                    }
                    img{
                        width: 22px;
                        height: 22px;
                        margin: 8px 0 0 7px;
                    }
                    .head_info{
                        font-size:13px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        line-height:24px;
                        text-align: center;
                    }
                }
                .pop_mid{
                    font-size:16px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(15,17,42,1);
                    line-height:24px;
                    margin-top: 40px;
                    padding: 0 40px;

                }
                .pop_btn{
                    display: flex;
                    justify-content: space-around;
                    margin-top: 40px;
                    font-size: 13px;
                    .btn_item{
                        padding: 12px 20px;
                        border: 1px solid #666666;
                        border-radius:20px;
                    }
                    .lan{
                        background-color: #4A77AF;
                        color: #ffffff;
                        border: 0;
                    }
                }
            }
        }
    }

</style>
