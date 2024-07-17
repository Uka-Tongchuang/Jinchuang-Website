<template>
  <div class="cart_box_com">
    <!-- 劳务派遣卡片组件 -->
    <h2>服务内容</h2>
    <!-- 卡片布局盒子 -->
    <div class="cart_list_box">
      <div class="item_first_box item_boxs">
        <div class="icon_box"><el-icon size="6rem" color="#ffffff" style="padding: 1rem;"><BrushFilled /></el-icon></div>
        <div class="text">人事服务案例</div>
        <div class="emity_box"></div>
        <div class="aboutAny">
          <li><span>档案管理</span></li>
          <li><span>入、离职管理</span></li>
          <li><span>劳动关系管理</span></li>
          <li><span>工会事务管理</span></li>
          <li><span>社保公积金管理</span></li>
          <li><span>薪酬福利管理</span></li>
          <li><span>绩效考核管理</span></li>
          <li><span>项证明管理</span></li>
        </div>
      </div>
      <div class="item_two_box item_boxs">
        <div class="icon_box"><el-icon size="6rem" color="#ffffff" style="padding: 1rem;"><BrushFilled /></el-icon></div>
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
        <div class="icon_box"><el-icon size="6rem" color="#ffffff" style="padding: 1rem;"><BrushFilled /></el-icon></div>
        <div class="text">员工培训管理</div>
        <div class="emity_box"></div>
        <div class="aboutAny" >
          <li><span>岗前入职培训</span></li>
          <li><span>岗位技能专项培训</span></li>
          <li><span>通用技能提升培训</span></li>
        </div>
      </div>
      <div class="item_four_box item_boxs">
        <div class="icon_box"><el-icon size="6rem" color="#ffffff" style="padding: 1rem;"><BrushFilled /></el-icon></div>
        <div class="text">招聘管理</div>
        <div class="emity_box"></div>
        <div class="aboutAny" >
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
import {BrushFilled} from "@element-plus/icons-vue"
</script>
  
  <style scoped lang="scss">
.cart_box_com {
  width: 100%;
  height: 100%;
  h2 {
    font-size: 2.4rem;
    height: 4rem;
    line-height: 6rem;
  }
  .cart_list_box {
    width: 100%;
    height: 34rem;
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    $color1: #D8E6FD;
    .item_boxs {
      width: 28rem;
      height: 36rem;
      border-radius: 2rem;
      border: 0.2rem solid $color1;
      box-shadow: 0 0 0.4rem 0.2rem $color1;
      position: relative;
      .icon_box {
        width: 8rem;
        height: 8rem;
        background-color: $color1;
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
        height: 20rem;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: -0.2rem;
        font-size: 1.52rem;
        text-indent: 4rem;
        white-space: nowrap;
        color: $color1;
        font-size: 2rem;
        span{
          color: #000;
          font-size: 1.6rem;
        }
      }
    }
    .item_two_box {
      border: 0.2rem solid #82C4B3;
      box-shadow: 0 0 0.4rem 0.2rem #82C4B3;
      .icon_box {
        background-color: #82C4B3;
      }
      .emity_box {
        background-color: #82C4B3;
      }
      .aboutAny{
        color: #82C4B3;
      }
    }
    .item_three_box {
      border: 0.2rem solid #2D8FCE;
      box-shadow: 0 0 0.4rem 0.2rem #2D8FCE;
      .icon_box {
        background-color: #2D8FCE;
      }
      .emity_box {
        background-color: #2D8FCE;
      }
      .aboutAny{
        color: #2D8FCE;
      }
    }
    .item_four_box {
      border: 0.2rem solid #6179B5;
      box-shadow: 0 0 0.4rem 0.2rem #6179B5;
      .icon_box {
        background-color: #6179B5;
      }
      .emity_box {
        background-color: #6179B5;
      }
      .aboutAny{
        color: #6179B5;
        
         span{
          color: #000;
          display: inline-block;
        }
      }
    }
  }
}
</style>