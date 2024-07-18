<template>
<div class="title_box">
            <h1>服务优势</h1>
        </div>
    <div class="box">
        
        <div class="first_box"> 
            <div class="num_box">
                <div class="num_two">
                    <div class="num_three">
                        01
                    </div>
                </div>
                
            </div>
            <div class="content_box">
                <title>一站式外包整体结算，降低管理成本：</title>
                <p>完全按照交付结果结算，客户仅需检验产品服务质量即可，所有运营管理工作均由今创人力完成。</p>
            </div>
        </div>
        <div class="two_box">
            <div class="num_box">
                <div class="num_two">
                    <div class="num_three">
                        02
                    </div>
                </div>
                
            </div>
            <div class="content_box">
                <title>无惧经营风险，经济利益最大化：</title>
                <p>无需承担任何风险，不受政策影响，最大程度保障企业经济利益。</p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>


<style lang="scss" scoped>
 .title_box{
        h1{
            font-size: 2rem;
        }
    }
.box{
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .first_box{
        background-color: rgb(82, 222, 194);
    }
    .two_box{
        background-color: rgb(100, 113, 169);
        margin-top: 2rem;
    }
    .first_box,.two_box{
        width: 60%;
        height: 14rem;
        display: flex;
        border-radius: 1rem;
        box-shadow: 0.4rem 0.4rem 1rem 0.2rem #878787;
        .num_box{
            width: 12rem;
            height: 12rem;
            border: 0.2rem dotted #fff;
            border-radius: 50%;
           margin-top: 0.8rem;
           margin-left: 1rem;
           margin-right: 1rem;
           display: flex;
           justify-content: center;
           align-items: center;
            .num_two{
                width: 11rem;
            height: 11rem;
            border: 0.2rem solid #fff;
            // box-sizing: border-box;
            box-shadow: 0 0 0.24rem 0.1rem #fff;
            box-shadow: 0 0 -0.24rem -0.1rem #fff;
            border-radius: 50%;
            display: flex;
           justify-content: center;
           align-items: center;
            .num_three{
                width: 10rem;
            height: 10rem;
            border: 0.2rem dashed #fff;
            border-radius: 50%;
            display: flex;
           justify-content: center;
           align-items: center;
           color: #fff;
           font-size: 4rem;
            }
            }
        }
        .content_box{
            flex: 1;
            color: #fff;
            font-size: 1.4rem;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
   
}
</style>