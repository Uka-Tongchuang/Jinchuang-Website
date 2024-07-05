<template>
  <div class="header_box">
    <div class="nav_left_box">
      <li @click="goHomeFun">logo</li>
      <li v-for="(item, index) in routerChildren" :key="index">
        <router-link  :to="item.path"
          >{{ item.meta?.title }}
          <el-icon v-show="item.children && item.children.length !== 0"
            ><ArrowDown
          /></el-icon>
        </router-link>
      </li>
    </div>
    <div class="nav_right_box">
      <li><span></span> 售前电话: 100-400-600</li>
      <span class="showDemo">预约演示</span>
      <span class="loginSty">登录</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { routerChildren } from "../router";
import { ArrowDown } from "@element-plus/icons-vue";


const goHomeFun=()=>{
  window.location.href = "/home"
}
</script> 

<style scoped lang="scss">
.header_box {
//   background-color: rgb(160, 172, 71);
  li {
    list-style-type: none;
    padding: 0;
  }
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .nav_left_box {
    width: 46%;
    height: 100%;
    display: flex;
    margin: 0 100px;
    justify-content: space-around;
    align-items: center;
    li{
      cursor: pointer;
    }
    li:hover {
      a {
        color: aqua !important;
        .el-icon {
          color: aqua !important;
        }
      }
    }
    .el-icon {
      position: relative !important;
      top: 3px !important;
      left: 5px !important;
      color: #b4b4b4;
    }
  }
  .nav_right_box {
    display: flex;
    width: 28%;
    height: 100%;
    margin-right: 100px;
    justify-content: space-around;
    align-items: center;
    span {
      display: inline-block;
      width: 16px;
      height: 16px;
      position: relative;
      top: 2px;
      background-image: url("../assets/th.jpg");
      background-size: 100% 100%;
    }
    .showDemo{
        width:20%;
        height: 2rem;
        color: #fff;
        background: rgb(68, 190, 218);
        line-height: 2rem;
        text-align: center;
        border: none;
        border-radius: 20px;
    }
    .loginSty{
        width:20%;
        height: 2rem;
        color: #000000;
        background: rgb(255, 255, 255);
        line-height: 2rem;
        text-align: center;
        border: 1px solid rgb(68, 190, 218);
        border-radius: 20px;
        transition: 0.2s;
    }
    .loginSty:hover{
        color: #fff;
        background-color: rgb(68, 190, 218);
    }
  }
}
</style>