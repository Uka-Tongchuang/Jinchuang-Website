<template>
    <div class="cart_box_com"> 
      <!-- 卡片布局盒子 -->
      <div class="cart_list_box">
        <div class="item_first_box item_boxs">
          <div class="icon_box"><el-icon size="4rem" color="#fff" style="padding: 1rem;"  class="size"><Briefcase /></el-icon></div>
          <div class="text">社会保险和住房公积金服务</div>
          <div class="emity_box"></div>
          <div class="aboutAny">
            Social Insurance and Housing Provident Fund Services
          </div>
        </div>
        <div class="item_two_box item_boxs">
          <div class="icon_box"><el-icon size="4rem" color="#2758E9" style="padding: 1rem;" class="size"><Connection /></el-icon></div>
          <div class="text">员工关系管理</div>
          <div class="emity_box"></div>
          <div class="aboutAny">
            Employee Relationship Management
          </div>
        </div>

        <div class="item_three_box item_boxs">
          <div class="icon_box"><el-icon size="4rem" color="#fff" style="padding: 1rem;" class="size"><Postcard /></el-icon></div>
          <div class="text">健康体检服务</div>
          <div class="emity_box"></div>
          <div class="aboutAny" >
            Health Examination Services
          </div>
        </div>
       
        <div class="item_four_box item_boxs">
          <div class="icon_box"><el-icon size="4rem" color="#2758E9" style="padding: 1rem;" class="size"><OfficeBuilding /></el-icon></div>
          <div class="text">商业保障服务</div>
          <div class="emity_box"></div>
          <div class="aboutAny" >
            Commercial Insurance Services
          </div>
        </div>

        <div class="item_five_box item_boxs">
          <div class="icon_box"><el-icon size="4rem" color="#fff" style="padding: 1rem;" class="size"><Wallet /></el-icon></div>
          <div class="text">人事档案</div>
          <div class="emity_box"></div>
          <div class="aboutAny" >
            Personnel File Management
          </div>
        </div>

      </div>
    </div>
  </template>
    
    <script setup lang="ts">
  import { ref } from "vue";
  import {BrushFilled,Briefcase,Connection,Postcard,OfficeBuilding,Wallet} from "@element-plus/icons-vue"
  </script>
    
  <style scoped lang="scss">
  @media screen and (max-width: 2660px) {
 
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
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
        $color1: #2758E9;
        .item_boxs {
          width: 15rem;
          height: 19rem;
          border-radius: 2rem;
          border: 0.2rem solid $color1;
          // box-shadow: 0 0 0.4rem 0.2rem $color1;
          position: relative;
          .icon_box {
            width: 6rem;
            height: 6rem;
            background-color: $color1;
            border-radius: 50%;
            margin: 1rem auto 1rem auto;
          }
          .text {
            width: 80%;
            height: 2.4rem;
            font-size: 1.2rem;
            margin: 0 auto;
            text-align: center;
            line-height: 1.8rem;
            font-weight: 800;
          }
          .emity_box {
            width: 70%;
            height: 0.2rem;
            background-color: $color1;
            margin: 1.5rem auto;
            border-radius: 0.5rem;
          }
          .aboutAny {
            width: 70%;
            height: 20rem;
            margin: 0 auto;
            font-size: 0.9rem;
            margin-top: 2rem;
            color: #000;
            text-align: center;
            font-weight: 800;
          }
        }
        .item_two_box {
            background-color: #2758E9;
          border: 0.2rem solid #2758E9;
          // box-shadow: 0 0 0.4rem 0.2rem #2D8FCE;
          .text{
            color: #fff;
              line-height: 4rem;
          }
          .icon_box {
            background-color: #ffffff;
          }
          .emity_box { 
            background-color: #fff;
          }
         .aboutAny{
          color: #fff;
          }
        }
        .item_three_box {
          border: 0.2rem solid #2758E9;
          // box-shadow: 0 0 0.4rem 0.2rem #6179B5;
          .icon_box {
            background-color: #2758E9;
          }
          .text{
              line-height: 4rem;
          }
          .emity_box {
            background-color: #2758E9;
          }
         
        }
      
        .item_four_box { 
          background-color: #2758E9;
          // box-shadow: 0 0 0.4rem 0.2rem #124A7E;
          .icon_box {
            background-color: #ffffff;
          }
          .text{
            color: #fff;
              line-height: 4rem;
          }
          .emity_box {
           
            background-color: #fff;
          }
          .aboutAny{ 
          color: #fff;
          }
         
        }
        .item_five_box {
          border: 0.2rem solid #2758E9;
          // box-shadow: 0 0 0.4rem 0.2rem #2758E9;
          .icon_box {
            background-color: #2758E9;
          }
          .text{
              line-height: 4rem;
          }
          .emity_box {
            background-color: #2758E9;
          }
         
        }
      }
    }
}
  @media screen and (max-width: 768px) {
 
    .cart_box_com {
      width: 100%;
      min-height: 33rem;
      h2 {
        font-size: 2rem;
        height: 4rem;
        line-height: 6rem;
      }
      .cart_list_box {
        width: 100%;
        min-height: 34rem;
        margin-top: 2rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        $color1: #2758E9;
        .item_boxs {
          width: 11rem;
          height: 17rem;
          border-radius: 2rem;
          border: 0.2rem solid $color1;
          // box-shadow: 0 0 0.4rem 0.2rem $color1;
          position: relative;
          margin-top: 0.5rem;
          .icon_box {
            width: 4rem;
            height: 4rem;
            background-color: $color1;
            border-radius: 50%;
            margin: 1rem auto 1rem auto;
            .size{
              font-size: 2rem !important;
            }
          }
          .text {
            width: 80%;
            height: 3.4rem;
            font-size: 1.2rem;
            margin: 0 auto;
            text-align: center;
            line-height: 1.5rem;
            font-weight: 800;
          }
          .emity_box {
            width: 70%;
            height: 0.2rem;
            background-color: $color1;
            margin: auto;
            border-radius: 0.5rem;
          }
          .aboutAny {
            width: 70%;
            height: 20rem;
            margin: 0 auto;
            font-size: 0.9rem;
            margin-top: 2rem;
            color: #000;
            text-align: center;
            font-weight: 800;
          }
        }
        .item_two_box {
            background-color: #2758E9;
          border: 0.2rem solid #2758E9;
          // box-shadow: 0 0 0.4rem 0.2rem #2D8FCE;
          .text{
            color: #fff;
              line-height: 1rem;
          }
          .icon_box {
            background-color: #ffffff;
          }
          .emity_box { 
            background-color: #fff;
          }
         .aboutAny{
          color: #fff;
          }
        }
        .item_three_box {
          border: 0.2rem solid #2758E9;
          // box-shadow: 0 0 0.4rem 0.2rem #6179B5;
          .icon_box {
            background-color: #2758E9;
          }
          .text{
              line-height: 1rem;
          }
          .emity_box {
            background-color: #2758E9;
          }
         
        }
      
        .item_four_box { 
          background-color: #2758E9;
          // box-shadow: 0 0 0.4rem 0.2rem #124A7E;
          .icon_box {
            background-color: #ffffff;
          }
          .text{
            color: #fff;
              line-height: 1rem;
          }
          .emity_box {
           
            background-color: #fff;
          }
          .aboutAny{ 
          color: #fff;
          }
         
        }
        .item_five_box {
          border: 0.2rem solid #2758E9;
          // box-shadow: 0 0 0.4rem 0.2rem #2758E9;
          .icon_box {
            background-color: #2758E9;
          }
          .text{
              line-height: 1rem;
          }
          .emity_box {
            background-color: #2758E9;
          }
         
        }
      }
    }
}
  </style>