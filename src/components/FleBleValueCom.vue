<template>
    <div class="cart_box_com">
    
        <!-- 灵活用工服务优势卡片组件 -->
    
        <h2>服务价值</h2>
    
        <!-- 卡片布局盒子 -->
    
        <div class="cart_list_box">
    
            <div class="item_first_box item_boxs">
    
                <div class="icon_box"></div>
    
                <div class="text">有效提高组织战略灵活性与高绩效性</div>
    
                <div class="emity_box"></div>
    
    
            </div>
    
            <div class="item_two_box item_boxs">
    
                <div class="icon_box"></div>
    
                <div class="text">降低企业综合成本、整合企业优势资源</div>
    
                <div class="emity_box"></div>
    
    
            </div>
    
            <div class="item_three_box item_boxs">
    
                <div class="icon_box"></div>
    
                <div class="text">释放职能部门，聚焦业务发展，提升企业效能</div>
    
                <div class="emity_box"></div>
    
    
            </div>
    
            <div class="item_four_box item_boxs">
    
                <div class="icon_box"></div>
    
                <div class="text">专业的风险防控团队，为企业权益保驾护航</div>
    
                <div class="emity_box"></div>
    
    
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
        font-size: 2rem;
        height: 4rem;
        line-height: 6rem;
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
            .icon_box {
                width: 12rem;
                height: 12rem;
                background-color: $color1;
                border-radius: 50%;
                margin: 3rem auto 1rem auto;
            }
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
                background-color: #2D8FCE;
            }
            .emity_box {
                background-color: #2D8FCE;
            }
        }
        .item_three_box {
            border: 0.2rem solid #6179B5;
            box-shadow: 0 0 0.4rem 0.2rem #6179B5;
            .icon_box {
                background-color: #6179B5;
            }
            .emity_box {
                background-color: #6179B5;
            }
        }
        .item_four_box {
            border: 0.2rem solid #261F4B;
            box-shadow: 0 0 0.4rem 0.2rem #261F4B;
            .icon_box {
                background-color: #261F4B;
            }
            .emity_box {
                background-color: #261F4B;
            }
        }
    }
}
</style>