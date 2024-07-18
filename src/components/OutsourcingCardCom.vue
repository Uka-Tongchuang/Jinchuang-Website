<template>
  <div class="cart_box_com">
    <!-- 业务外包卡片组件 -->

    <h2>服务价值</h2>

    <!-- 卡片布局盒子 -->

    <div class="cart_list_box">
      <div class="item_six_box item_boxs">
        <div class="icon_box">
          <img src="../assets/icon/up.png" class="icon_img" />
        </div>

        <div class="text">提升企业利润</div>

        <div class="emity_box"></div>
      </div>
      <div class="item_first_box item_boxs">
        <div class="icon_box">
          <img src="../assets/icon/lowmoney.png" class="icon_img" />
        </div>

        <div class="text">降低管理成本</div>

        <div class="emity_box"></div>
      </div>

      <div class="item_two_box item_boxs">
        <div class="icon_box">
          <img src="../assets/icon/fengxian.png" class="icon_img" />
        </div>

        <div class="text">降低经营风险</div>

        <div class="emity_box"></div>
      </div>

      <div class="item_three_box item_boxs">
        <div class="icon_box">
          <img src="../assets/icon/guibi.png" class="icon_img" />
        </div>

        <div class="text">规避用工风险</div>

        <div class="emity_box"></div>
      </div>

      <div class="item_four_box item_boxs">
        <div class="icon_box">
          <img src="../assets/icon/process.png" class="icon_img" />
        </div>

        <div class="text">提供工作流程</div>

        <div class="emity_box"></div>
      </div>
      <div class="item_five_box item_boxs">
        <div class="icon_box">
          <img src="../assets/icon/jianhua.png" class="icon_img" />
        </div>

        <div class="text">简化工作流程</div>

        <div class="emity_box"></div>
      </div>
    </div>
  </div>
</template>
    
<script setup lang="ts">
</script>
    
<style scoped lang="scss">
.cart_box_com {
  width: 80%;
  height: 100%;
  margin: 0 auto;
  h2 {
    font-size: 2rem;
    height: 4rem;
    line-height: 6rem;
  }
  .cart_list_box {
    width: 100%;
    height: 22rem;
    display: flex;
    justify-content: space-between;
    $color1: #82c4b3;
    .item_boxs {
      width: 16rem;
      height: 16rem;
      border-radius: 2rem;
      border: 0.2rem solid $color1;
      box-shadow: 0 0 0.4rem 0.2rem $color1;
      .icon_box {
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
        margin: 1rem auto 1rem auto;
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
        margin: 0.1rem auto;
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
      border: 0.2rem solid #2d8fce;
      box-shadow: 0 0 0.4rem 0.2rem #2d8fce;
      .icon_box {
      }
      .emity_box {
        background-color: #2d8fce;
      }
    }
    .item_three_box {
      border: 0.2rem solid #6179b5;
      box-shadow: 0 0 0.4rem 0.2rem #6179b5;
      .icon_box {
      }
      .emity_box {
        background-color: #6179b5;
      }
    }
    .item_four_box {
      border: 0.2rem solid #261f4b;
      box-shadow: 0 0 0.4rem 0.2rem #261f4b;
      .icon_box {
      }
      .emity_box {
        background-color: #261f4b;
      }
    }
    .item_five_box {
      border: 0.2rem solid #124a7e;
      box-shadow: 0 0 0.4rem 0.2rem #124a7e;
      .icon_box {
      }
      .emity_box {
        background-color: #124a7e;
      }
    }
    .item_six_box {
      border: 0.2rem solid #d8e6fd;
      box-shadow: 0 0 0.4rem 0.2rem #d8e6fd;
      .icon_box {
        
      }
      .emity_box {
        background-color: #d8e6fd;
      }
    }
    .icon_img {
      width: 8rem;
      height: 8rem;
      margin: 1rem auto 2rem auto;
      margin-left: -0.3rem;
      margin-top: 0rem;
    }
  }
}
</style>