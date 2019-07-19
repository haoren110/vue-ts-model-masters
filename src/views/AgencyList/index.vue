<template>
    <div class="index">
        <div class="agencyInfo">
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
        background-color: #ffffff;
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

                padding: 0px 15px;
                box-sizing: border-box;
                font-size: 13px;
                color: #0F112A;
                line-height: 24px;
                margin-top: 20px;
                .content_item{
                    margin-bottom: 20px;
                    background-color: #F7F7FD;
                    padding: 20px 8px;
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
