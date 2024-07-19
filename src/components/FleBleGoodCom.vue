<template>
    <div class="cart_box_com">
    
        <!-- 灵活用工服务优势卡片组件 -->
    
        <h2>服务优势</h2>
    
        <!-- 卡片布局盒子 -->
    
        <div class="cart_list_box">
    
            <div class="item_first_box item_boxs">
    
                <div class="icon_box">
                    <img src="../assets/icon/huanbaogongcheng.png" class="icon_img" />
                </div>
    
                <div class="text">国内早期实践者</div>
    
                <div class="emity_box"></div>
    
                <div class="aboutAny">可以快速帮助企业、有效地增加或减少招聘操作，以适应不断变化的业务需求。</div>
    
            </div>
    
            <div class="item_two_box item_boxs">
    
                <div class="icon_box">
                    <img src="../assets/icon/hezuo.png" class="icon_img"/>
                </div>
    
                <div class="text">合作模式多样化</div>
    
                <div class="emity_box"></div>
    
                <div class="aboutAny">目前可提供劳务 、 自然人 经营所得、个体工商户等 多种业务模式，适用于各 种业务类型。</div>
    
            </div>
    
            <div class="item_three_box item_boxs">
    
                <div class="icon_box">
                    <img src="../assets/icon/fuwu.png" class="icon_img"/>
                </div>
    
                <div class="text">服务经验丰富</div>
    
                <div class="emity_box"></div>
    
                <div class="aboutAny">与众多知名客户合作，盖互联网、教育、零售、金融、房地产、餐饮等不同行业、不同岗位，有丰富的业务运营经验。</div>
    
            </div>
    
            <div class="item_four_box item_boxs">
    
                <div class="icon_box">
                    <img src="../assets/icon/jiaofu.png" class="icon_img"/>
                </div>
    
                <div class="text">交付能力卓越</div>
    
                <div class="emity_box"></div>
    
                <div class="aboutAny">遍布全国的服务网络，跨地区高效协同助力客户成功，业务体量峰值达千万人次/月，最大限度满足客户业务发展要求。</div>
    
            </div>
    
        </div>
    
    </div>
</template>
    
<script setup lang="ts">
</script>
    
<style scoped lang="scss">
.cart_box_com {
    width: 100%;
    height: 100%;
    h2 {
        font-size: 3rem;
        text-align: center;
    }
    .cart_list_box {
        width: 100%;
        height: 34rem;
        display: flex;
        justify-content: space-between;
        $color1: #82C4B3;
        .item_boxs {
            width: 24rem;
            height: 30rem;
            border-radius: 2rem;
            border: 0.2rem solid $color1;
            box-shadow: 0 0 0.4rem 0.2rem $color1;
            // .icon_box {
            //     width: 12rem;
            //     height: 12rem;
            //     background-color: $color1;
            //     border-radius: 50%;
            //     margin: 3rem auto 1rem auto;
            // }
            .text {
                width: 80%;
                height: 2.2rem;
                font-size: 1.4rem;
                margin: 0 auto;
                text-align: center;
                line-height: 2.2rem;
                font-weight: 800;
            }
            .emity_box {
                width: 70%;
                height: 1rem;
                background-color: $color1;
                margin: 1rem auto;
                border-radius: 0.5rem;
            }
            .aboutAny {
                width: 80%;
                height: 2rem;
                margin: 0 auto;
                text-align: center;
                line-height: 2rem;
                font-size: 0.8rem;
                color: #000000;
                font-size: 1.4rem;
            }
        }
        .item_two_box {
            border: 0.2rem solid #2D8FCE;
            box-shadow: 0 0 0.4rem 0.2rem #2D8FCE;
            .icon_box {
                // background-color: #2D8FCE;
            }
            .emity_box {
                background-color: #2D8FCE;
            }
        }
        .item_three_box {
            border: 0.2rem solid #6179B5;
            box-shadow: 0 0 0.4rem 0.2rem #6179B5;
            .icon_box {
                // background-color: #6179B5;
            }
            .emity_box {
                background-color: #6179B5;
            }
        }
        .item_four_box {
            border: 0.2rem solid #261F4B;
            box-shadow: 0 0 0.4rem 0.2rem #261F4B;
            .icon_box {
                // background-color: #261F4B;
            }
            .emity_box {
                background-color: #261F4B;
            }
        }
        .icon_img{
            width: 12rem;
            height: 12rem;
            margin: 1rem auto 2rem auto;
            margin-left: 6rem;
        }
    }
}
</style>