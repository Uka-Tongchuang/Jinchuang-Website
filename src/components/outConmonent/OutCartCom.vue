<template>
  <div class="cart_box_com">
    <!-- 劳务派遣卡片组件 -->
    <h2>服务内容</h2>
    <!-- 卡片布局盒子 -->
    <div class="cart_list_box">
      <div class="item_first_box item_boxs">
        <div class="icon_box">
          <el-icon size="4rem" color="#2758E9" style="padding: 1rem"
            ><Avatar
          /></el-icon>
        </div>
        <div class="text">人事服务案例</div>
        <div class="emity_box"></div>
        <div class="aboutAny">
          <li><span>档案管理</span></li>
          <li><span>入职、离职管理</span></li>
          <li><span>劳动关系管理</span></li>
          <li><span>工会事务管理</span></li>
          <li><span>社保公积金管理</span></li>
          <li><span>薪酬福利管理</span></li>
          <li><span>绩效考核管理</span></li>
          <li><span>项证明管理</span></li>
        </div>
      </div>
      <div class="item_two_box item_boxs">
        <div class="icon_box">
          <el-icon size="4rem" color="#fff" style="padding: 1rem"
            ><SetUp
          /></el-icon>
        </div>
        <div class="text">员工关系管理</div>
        <div class="emity_box"></div>
        <div class="aboutAny">
          <li><span>退工处理</span></li>
          <li><span>突发事件处理</span></li>
          <li><span>劳动争议处理</span></li>
          <li><span>工伤、工亡等特殊事件处理</span></li>
        </div>
      </div>
      <div class="item_three_box item_boxs">
        <div class="icon_box">
          <el-icon size="4rem" color="#2758E9" style="padding: 1rem"
            ><Suitcase
          /></el-icon>
        </div>
        <div class="text">员工培训管理</div>
        <div class="emity_box"></div>
        <div class="aboutAny">
          <li><span>岗前入职培训</span></li>
          <li><span>岗位技能专项培训</span></li>
          <li><span>通用技能提升培训</span></li>
        </div>
      </div>
      <div class="item_two_box item_boxs">
        <div class="icon_box">
          <el-icon size="4rem" color="#fff" style="padding: 1rem"
            ><Memo
          /></el-icon>
        </div>
        <div class="text">招聘管理</div>
        <div class="emity_box"></div>
        <div class="aboutAny">
          <li><span>人才储备</span></li>
          <li><span>精准寻访</span></li>
          <li><span>人才测评</span></li>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { SetUp,Avatar,Suitcase,Memo } from "@element-plus/icons-vue";
</script>

<style scoped lang="scss">
.cart_box_com {
  width: 80%;
  height: 100%;
  margin: 0 auto;
  h2 {
    font-size: 3rem;
    text-align: center;
  }
  .cart_list_box {
    width: 100%;
    height: 34rem;
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    $color1: #2758e9;
    .item_boxs {
      width: 28rem;
      height: 36rem;
      border-radius: 2rem;
      border: 0.2rem solid $color1;
      position: relative;
      background-color: $color1;
      .icon_box {
        width: 6rem;
        height: 6rem;
        background-color: #fff;
        border-radius: 50%;
        margin: 1rem auto 1rem auto;
      }
      .text {
        width: 80%;
        height: 1.8rem;
        font-size: 1.8rem;
        margin: 0 auto;
        text-align: center;
        line-height: 1.8rem;
        font-weight: 800;
        color: white;
      }
      .emity_box {
        width: 70%;
        height: 0.2rem;
        background-color: #fff;
        margin: 1rem auto;
        border-radius: 0.5rem;
      }
      .aboutAny {
        width: 80%;
        height: 20rem;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: -0.2rem;
        font-size: 1.52rem;
        text-indent: 4rem;
        white-space: nowrap;
        color: #fff;
        font-size: 2rem;
        span {
          color: #fff;
          font-size: 1.6rem;
        }
      }
    }
    .item_two_box {
      li {
        content: ".";
        color: #2758e9;
      }
      background-color: #fff;
      border: 0.2rem solid #2758e9;
      .icon_box {
        background-color: #2758e9;
      }
      .text {
        color: black;
      }
      .emity_box {
        background-color: #2758e9;
      }
      .aboutAny {
        color: black;
        span {
          color: black;
        }
      }
    }
    // .item_three_box {
    //   border: 0.2rem solid #2D8FCE;
    //   .icon_box {
    //     background-color: #2D8FCE;
    //   }
    //   .emity_box {
    //     background-color: #2D8FCE;
    //   }
    //   .aboutAny{
    //     color: #2D8FCE;
    //   }
    // }
    // .item_four_box {
    //   border: 0.2rem solid #6179B5;
    //   box-shadow: 0 0 0.4rem 0.2rem #6179B5;
    //   .icon_box {
    //     background-color: #6179B5;
    //   }
    //   .emity_box {
    //     background-color: #6179B5;
    //   }
    //   .aboutAny{
    //     color: #6179B5;

    //      span{
    //       color: #000;
    //       display: inline-block;
    //     }
    //   }
    // }
  }
}
</style>
