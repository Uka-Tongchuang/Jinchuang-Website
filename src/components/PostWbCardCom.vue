<template>
<div class="cart_box_com">
    <h2>适用场景</h2>

    <div>
        <div class="cart_list_box">
            <div>
                 <div class="item_first_box item_boxs">
                <div class="text">服务类<br />Serve category</div>

            </div>
            </div>
        </div> 
    </div>
</div>

</template>
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
            display: flex;
            // border: 0.2rem solid $color1;
            // box-shadow: 0 0 0.4rem 0.2rem $color1;
            background-image: linear-gradient( 0deg , rgb(233,239,242) 80%, #82C4B3 .2%);
            
            .icon_box {
                width: 12rem;
                height: 12rem;
                border-radius: 50%;
                margin: 3rem auto 1rem auto;
            }
            .text {
                width: 80%;
                height: 2.2rem;
                font-size: 1.6rem;
                margin: 0 0;
                margin-top: 2rem;
                text-align: left;
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
                margin: 0 5rem;
                display: flex;
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