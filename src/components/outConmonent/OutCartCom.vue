<template>
  <div class="cart_box_com"> 
    <h1>服务内容</h1>
    <!-- 卡片布局盒子 -->
    <div class="cart_list_box">
      <div class="item_first_box item_boxs">
        <div class="icon_box"><el-icon size="4rem" color="#fff" style="padding: 1rem;"><Briefcase /></el-icon></div>
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
        <div class="icon_box"><el-icon size="4rem" color="#2758E9" style="padding: 1rem;"><Connection /></el-icon></div>
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
        <div class="icon_box"><el-icon size="4rem" color="#fff" style="padding: 1rem;"><Postcard /></el-icon></div>
        <div class="text">员工培训管理</div>
        <div class="emity_box"></div>
        <div class="aboutAny" >
          <li><span>岗前入职培训</span></li>
              <li><span>岗位职能专项培训</span></li>
              <li><span>通用技能提升培训</span></li>
        </div>
      </div>
     
      <div class="item_four_box item_boxs">
        <div class="icon_box"><el-icon size="4rem" color="#2758E9" style="padding: 1rem;"><OfficeBuilding /></el-icon></div>
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
import {BrushFilled,Briefcase,Connection,Postcard,OfficeBuilding,Wallet} from "@element-plus/icons-vue"
</script>
  
  <style scoped lang="scss">
.cart_box_com {
  width: 100%;
  height: 100%;
  h1 {
    width: 100%;
    font-size: 3rem;
    height: 4rem;
    line-height: 4rem;
    text-align: center;
  }
  .cart_list_box {
    width: 100%;
    height: 34rem;
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    $color1: #2758E9;
    .item_boxs {
      width: 18rem;
      height: 24rem;
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
        height: 1.2rem;
        font-size: 1.2rem;
        margin: 0 auto;
        text-align: center;
        line-height: 1.2rem;
        font-weight: 800;
      }
      .emity_box {
        width: 70%;
        height: 0.5rem;
        background-color: $color1;
        margin: 0.5rem auto;
        border-radius: 0.5rem;
      }
      .aboutAny {
        width: 70%;
        height: 10rem;
        margin: 0 auto;
        font-size: 1.1rem;
        color: #000;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        li{
          width: 100%;
          span{
            display:flex;
          justify-content: center;
          }
        }
      }
    }
    .item_two_box {
        background-color: #2758E9;
      border: 0.2rem solid #2758E9;
      // box-shadow: 0 0 0.4rem 0.2rem #2D8FCE;
      .text{
        color: #fff;
          
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
          
      }
      .emity_box {
        background-color: #2758E9;
      }
     
    }
  
    .item_four_box { 
      background-color: #2758E9;
      .icon_box {
        background-color: #ffffff;
      }
      .text{
        color: #fff;
         
      }
      .emity_box {
       
        background-color: #fff;
      }
      .aboutAny{ 
      color: #fff;
      }
     
    }
  }
}
</style>