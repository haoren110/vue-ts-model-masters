<template>
    <div class="index">
        <!--<img src="../../assets/img/pingfen_image_bg@2x.png" class="back_img"/>-->
        <div class="back_img score_info ">
            <p class="score_num">95</p>
            <p class="score_name">张远</p>
            <p class="score_area">北区  甘宁青  代表</p>
            <div class="score_time">六月份考核</div>
        </div>
        <div class="score_line">
        <van-cell-group >
            <van-cell title="考核详情" is-link to="HistoryScoreList"  value="明细"/>
            <van-cell title="历史考核记录" is-link to="index" />
            <van-cell title="负责区域各代表考核分数" is-link to="index" />
        </van-cell-group>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="less">
    .index{
        min-height: 100vh;
        background-color: #F7F7FD;
        position: relative;
        /*padding-top: 232px;*/
        .back_img{
            position: relative;
            /*width: 100%;*/
            /*top: 0;*/
            /*left: 0;*/
            width: 100%;
            height: 232px;
            /*z-index: 1;*/
            background-image: url("../../assets/img/pingfen_image_bg@2x.png");
            background-size: cover;
        }
        .score_info{
          z-index: 2;
          text-align: center;
            padding-top: 36px;
          color: #ffffff;
            .score_num{
                font-size:60px;
                font-family:ArialMT;
                font-weight:400;
                /*margin-top: 36px;*/
            }
            .score_name{
                font-size:18px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                line-height: 30px;
            }
            .score_area{
                font-size:13px;
                font-family:PingFangSC-Regular;
                font-weight:400;
            }
            .score_time{
                background-image: url("../../assets/img/pingfen_image_month@2x.png");
                background-size: cover;
                background-position:center center;
                width: 125px;
                text-align: right;
                font-size: 13px;
                height: 35px;
                line-height: 35px;
                padding-right: 10px;
                position: absolute;
                right: 0;
                top: 25%;
            }
        }
        .score_line{

        }
    }

</style>
