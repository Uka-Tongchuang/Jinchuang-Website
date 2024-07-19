<template>
    <div class="cart_box_com">
      <!-- 劳务派遣卡片组件 -->
      <h2>服务优势</h2>
      <!-- 卡片布局盒子 -->
      <div class="cart_list_box">
        <div class="item_first_box item_boxs">
          <div class="icon_box"><el-icon size="6rem" color="#fff" style="padding: 1rem;"><BrushFilled /></el-icon></div>
          <div class="text">岗位类别多样</div>
          <div class="emity_box"></div>
          <div class="aboutAny">
            自2014年开展外包业务以来，目前已为众多不同行业知名企业提供行政文员、运营、客服、配送、店员、技术开发等多元化岗位外包服务。
          </div>
        </div>
        <div class="item_two_box item_boxs">
          <div class="icon_box"><el-icon size="6rem" color="#fff" style="padding: 1rem;"><BrushFilled /></el-icon></div>
          <div class="text">服务经验丰富</div>
          <div class="emity_box"></div>
          <div class="aboutAny">
            多次承接万人以上的岗位外包项目，针对项目的转签、日常服务、裁撤等均有丰富的服务和管理经验。
          </div>
        </div>
        <div class="item_three_box item_boxs">
          <div class="icon_box"><el-icon size="6rem" color="#fff" style="padding: 1rem;"><BrushFilled /></el-icon></div>
          <div class="text">方案专属定制</div>
          <div class="emity_box"></div>
          <div class="aboutAny" >
            可根据客户需求提供个性化岗位外包解决方案，以客户为导向，满足客户的个性化需求，保证服务质量。
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
      font-size: 3rem;
      text-align: center;
    }
    .cart_list_box {
      width: 100%;
      height: 34rem;
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      $color1: #7d6dbd;
      .item_boxs {
        width: 26rem;
        height: 32rem;
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
          width: 70%;
          height: 20rem;
          margin: 0 auto;
          font-size: 1.4rem;
          text-indent: 4rem;
          color: $color1;
          margin-top: 2rem;
          color: #000;
          span{
            color: #000;
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
       
      }
    
    }
  }
  </style>