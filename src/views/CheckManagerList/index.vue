<template>
    <div class="index">
        <div class="item">
            <img src="../../assets/img/My/my_image_headphoto.png" />
            <div class="item_name">
            <p class="staff_name">张远<span class="staff_position">商务经理</span></p>
             <p class="staff_area">北区&nbsp;&nbsp;甘宁青</p>
             <p class="staff_btn">他负责区域的各代表考核&nbsp;&nbsp;<span style="color: #4A77AF;">查看</span></p>
            </div>
            <p class="item_last">100分</p>
        </div>
        <div class="item">
            <img src="../../assets/img/My/my_image_headphoto.png" />
            <div class="item_name">
                <p class="staff_name">张远<span class="staff_position">商务经理</span></p>
                <p class="staff_area">北区&nbsp;&nbsp;甘宁青</p>
                <p class="staff_btn">他负责区域的各代表考核&nbsp;&nbsp;<span style="color: #4A77AF;">查看</span></p>
            </div>
            <p class="item_last">100分</p>
        </div>
        <div class="item">
            <img src="../../assets/img/My/my_image_headphoto.png" />
            <div class="item_name">
                <p class="staff_name">张远<span class="staff_position">商务经理</span></p>
                <p class="staff_area">北区&nbsp;&nbsp;甘宁青</p>
                <p class="staff_btn">他负责区域的各代表考核&nbsp;&nbsp;<span style="color: #4A77AF;" @click="show=true;">查看</span></p>
            </div>
            <p class="item_lasts"><span style="color: #4A77AF;">去考核</span>></p>
        </div>
        <van-popup
                v-model="show"
                round
                position="bottom"
                :style="{ height: '77%' }">
            <div class="indexs">
                <div class="items">
                    <img src="../../assets/img/My/my_image_headphoto.png" />
                    <div class="item_name">
                        <p class="staff_name">张远<span class="staff_position">代表</span></p>
                        <p class="staff_btn">考核该名代表<span style="color: #A2A4BE;">></span></p>
                    </div>
                    <p class="item_last">100分</p>
                </div>
                <div class="items">
                    <img src="../../assets/img/My/my_image_headphoto.png" />
                    <div class="item_name">
                        <p class="staff_name">张远<span class="staff_position">代表</span></p>
                        <p class="staff_btn">考核该名代表<span style="color: #A2A4BE;">></span></p>
                    </div>
                    <p class="item_last">100分</p>
                </div> <div class="items">
                <img src="../../assets/img/My/my_image_headphoto.png" />
                <div class="item_name">
                    <p class="staff_name">张远<span class="staff_position">代表</span></p>
                    <p class="staff_btn">考核该名代表<span style="color: #A2A4BE;">></span></p>
                </div>
                <p class="item_last">100分</p>
            </div> <div class="items">
                <img src="../../assets/img/My/my_image_headphoto.png" />
                <div class="item_name">
                    <p class="staff_name">张远<span class="staff_position">代表</span></p>
                    <p class="staff_btn">考核该名代表<span style="color: #A2A4BE;">></span></p>
                </div>
                <p class="item_last">100分</p>
            </div> <div class="items">
                <img src="../../assets/img/My/my_image_headphoto.png" />
                <div class="item_name">
                    <p class="staff_name">张远<span class="staff_position">代表</span></p>
                    <p class="staff_btn">考核该名代表<span style="color: #A2A4BE;">></span></p>
                </div>
                <p class="item_last">100分</p>
            </div> <div class="items">
                <img src="../../assets/img/My/my_image_headphoto.png" />
                <div class="item_name">
                    <p class="staff_name">张远<span class="staff_position">代表</span></p>
                    <p class="staff_btn">考核该名代表<span style="color: #A2A4BE;">></span></p>
                </div>
                <p class="item_last">100分</p>
            </div>

            </div>
        </van-popup>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                show:false
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
            /*line-height: 64px;*/
            color: #0F112A;
            padding: 14px;
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
                .staff_name{
                    color: #0F112A;
                    font-weight: bold;
                    .staff_position{
                        display: inline-block;
                        background-color: #F96144;
                        font-size: 13px;
                        color: #ffffff;
                        font-weight: normal;
                        padding: 2px 4px;
                        margin-left: 12px;
                        border-radius: 2px;
                    }
                }
                .staff_area{
                    font-size: 13px;
                    line-height: 36px;
                }
                .staff_btn{
                    font-size: 12px;
                    color: #9FA1BC;
                }
            }
            .item_last{
                width: 60px;
                color: #F96144;
                line-height: 50px;
            }
            .item_lasts{
                width: 60px;
                line-height: 50px;
                color: #A2A4BE;
            }
        }
    }
    .indexs{
        min-height: 100vh;
        background-color: #F7F7FD;
        padding: 20px;
        .items{
            display: flex;
            background-color: #ffffff;
            border-radius: 2px;
            /*line-height: 64px;*/
            color: #0F112A;
            padding: 12px 14px;
            margin-bottom: 14px;
            img{
                /*margin-top: 9px;*/
                width: 45px;
                height: 45px;
            }
            .item_name{
                font-size: 16px;
                font-weight: 400;
                flex: 1;
                margin-left: 10px;
                .staff_name{
                    color: #0F112A;
                    font-weight: bold;
                    .staff_position{
                        display: inline-block;
                        background-color: #FFBA14;
                        font-size: 13px;
                        color: #ffffff;
                        font-weight: normal;
                        padding: 2px 4px;
                        margin-left: 12px;
                        border-radius: 2px;
                    }
                }
                .staff_area{
                    font-size: 13px;
                    line-height: 36px;
                }
                .staff_btn{
                    font-size: 12px;
                    color: #4A77AF;
                    margin-top: 8px;
                }
            }
            .item_last{
                width: 60px;
                color: #F96144;
                line-height: 50px;
            }
            .item_lasts{
                width: 60px;
                line-height: 50px;
                color: #A2A4BE;
            }
        }


    }
</style>
