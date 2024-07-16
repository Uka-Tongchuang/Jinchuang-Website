<template>
    <div class="cart_box_com">
    
        <!-- 招聘流程外包卡片组件 -->
    
        <h2>服务价值</h2>
    
        <!-- 卡片布局盒子 -->
    
        <div class="cart_list_box">
    
            <div class="item_first_box item_boxs">
    
                <div class="icon_box">
                    <img src="../assets/icon/easy.png" class="icon_img" />

                </div>
    
                <div class="text">方便操作，灵活性强</div>
    
                <div class="emity_box"></div>
    
                <div class="aboutAny">可以快速帮助企业有效地增加或减少招聘操作，以适应不断变化的业务需求。</div>
    
            </div>
    
            <div class="item_two_box item_boxs">
    
                <div class="icon_box">
                    <img src="../assets/icon/fengxian.png" class="icon_img" />
                </div>
    
                <div class="text">解决难题，降低风险</div>
    
                <div class="emity_box"></div>
    
                <div class="aboutAny">解决企业招人难，用人难问题，大大提高企业的运转效率，并有效降低企业用工风险。</div>
    
            </div>
    
            <div class="item_three_box item_boxs">
    
                <div class="icon_box">
                    <img src="../assets/icon/low.png" class="icon_img" />

                </div>
    
                <div class="text">降本增效，专注核心</div>
    
                <div class="emity_box"></div>
    
                <div class="aboutAny">提高企业人力资源部门效能，助理HR从事务性工作中解脱，专注核心工作，节省管理与时间成本。</div>
    
            </div>
    
            <div class="item_four_box item_boxs">
    
                <div class="icon_box">
                    <img src="../assets/icon/zhuanye.png" class="icon_img" />

                </div>
    
                <div class="text">专业服务，有效控制</div>
    
                <div class="emity_box"></div>
    
                <div class="aboutAny">专业的招聘流程外包，高效助力企业资源管理和成本控制。</div>
    
            </div>
    
        </div>
    
    </div>
</template>
    
<script setup lang="ts">

</script>
    
<style scoped lang="scss">
.cart_box_com {
    width: 90%;
    height: 100%;
    margin: 0 auto;

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
            margin-left: -0.3rem;
            margin-top: -0.8rem;
        }
    }
}
</style>