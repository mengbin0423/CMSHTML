<template>
    <div class="container">
        <h1>个人信息</h1>
        <ul>
            <li><span>姓名:</span><i>蒙*</i></li>
            <li><span>性别:</span><i>男</i></li>
            <li><span>身份证号:</span><i>642224*******2817</i></li>
            <li><span>手机号码:</span><i>156****6053</i></li>
            <li><span>地址:</span><i>浙江省杭州市余杭区</i></li>
        </ul>
    </div>
</template>
<style lang='less' scoped>
    .container{
        background: #FFFFFF;
        margin-left:20px;
        width:auto;
        height:auto;
        padding: 20px;
        ul{
            width:100%;
            height:auto;
            margin-top:20px;
            li{
                width:100%;
                height:50px;
                span{
                    width:100px;
                    height:50px;
                    line-height:50px;
                    text-align: right;
                    display: inline-block;
                }
                i{
                    font-style:normal;
                    margin-left:10px;
                }
            }
        }
    }
</style>
