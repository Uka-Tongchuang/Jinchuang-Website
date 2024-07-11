<template>
  <div class="header_box">
    <div class="nav_left_box">
      <li @click="goHomeFun" class="logo_box">
        <img src="../assets/logo.png" alt="" />
      </li>
      <li
        v-for="(item, index) in routerChildren"
        :key="index"
        @click="enterProducts(item)"
      >
        <span v-if="item.meta?.title === '产品服务'">
          {{ item.meta?.title }}
          <el-icon class="icon_two" :class="showDivFlag ? 'is-rotated' : ''"
            ><ArrowDown
          /></el-icon>
        </span>
        <span v-else>
          <router-link :to="item.path">
            {{ item.meta?.title }}
          </router-link>
        </span>
      </li>
    </div>
    <!-- //弹出内容 -->
    <div class="showContent" v-show="showDivFlag" ref="showbox">
      <!-- //三级路由列表渲染 -->
      <div
        v-for="(item, index) in showDataArray"
        :key="index"
        @click="fourRouteFun(item)"
      >
        <router-link v-if="!item.children" :to="item.path">
          <span>{{ item.meta?.title }}</span>
        </router-link>
        <span v-else>
          {{ item.meta?.title
          }}<el-icon class="icon_two" :class="showFourDiv ? 'is-rotateds' : ''"
            ><ArrowDown
          /></el-icon>
        </span>
      </div>
      <!-- //四级弹窗 -->
      <div class="content_box_four" v-show="showFourDiv" ref="showFourbBox">
        <div
          v-for="(item, index) in fourChildrenRoute"
          :key="index"
          class="show_div_list"
          @click="goFourRoute"
        >
          <router-link :to="item.path">
            <span>{{ item.meta?.title }}</span>
          </router-link>
        </div>
      </div>
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
import { ref } from "vue";
import { ArrowDown } from "@element-plus/icons-vue";
import { ChildrenRouteItemType } from "@/typeFile/type";
import { gsap } from "gsap";
import { throttle } from "lodash";
//获取弹窗路由的三级路由信息   //四级路由信息
import { threeChildrenRoute, fourChildrenRoute } from "@/router/index";

const goHomeFun = () => {
  window.location.href = "/home";
};

//二级页面划过
//弹窗
const showDivFlag = ref(false);
//弹窗数据
const showDataArray = ref(threeChildrenRoute);
//划过显示弹窗元素
const showbox = ref();
//鼠标点击nav元素
const enterProductsBtn = (item: ChildrenRouteItemType) => {
  //判断是否点击的产品
  if (item.meta.title === "产品服务") {
    showDivFlag.value = !showDivFlag.value;
    //动画
    gsap.from(showbox.value, {
      height: 0,
      duration: 0.5, // 动画持续时间，单位秒
    });
  } else {
    showDivFlag.value = false;
    showFourDiv.value = false;
  }
};
//防抖函数
const enterProducts = throttle(enterProductsBtn, 500);
//四级页面弹窗
const showFourDiv = ref(false);
const showFourbBox = ref();
const fourRouteFuns = (item: ChildrenRouteItemType) => {
 
  //判断是否点击的用工
  if (item.meta.title === "用工模块") {
    showFourDiv.value = !showFourDiv.value;
    //动画
    gsap.from(showFourbBox.value, {
      height: "0rem",
      duration: 0.5, // 动画持续时间，单位秒
    });
  } else {
    //跳转隐藏两个盒子
    showDivFlag.value = false;
    showFourDiv.value = false;
  }
};
const fourRouteFun = throttle(fourRouteFuns, 500);

const goFourRoute = () => {
  showDivFlag.value = false;
  showFourDiv.value = false;
};
</script>

<style scoped lang="scss">
.icon_two {
  transition: transform 0.2s ease-in-out;
}
.is-rotated {
  transform: rotateX(180deg);
}
.is-rotateds {
  transform: rotateX(180deg);
}
.header_box {
  //   background-color: rgb(160, 172, 71);
  margin: 0;
  padding: 0.5rem 0 0 0 ;
  position: relative;
  // border-bottom: 1px solid #ccc;
  .showContent {
    width: 100%;
    height: 3rem;
    position: absolute;
    top: 100%;
    left: 0;
    opacity: 0.98;
    background-color: #189beb;
    z-index: 66;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .content_box_four {
      position: absolute;
      width: 25%;
      height: 9rem;
      background-color: #b4b4b4;
      z-index: 66;
      right: 0;
      top: 3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      .show_div_list {
        width: 100%;
        flex: 1;
        background-color: #fff;
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;
        a {
          color: #f00 !important;
        }
      }
    }
    // >div:hover{
    //   background-color: #fdddf5;
    // }
    > div {
      color: #fff;
      flex: 1;
      width: 100%;
      height: 100%;
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      span {
        display: inline-block;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      span:hover {
        color: #7b04e2 !important;
        cursor: pointer;
      }
    }
    a {
      color: #fff !important;
    }
  }

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
    .logo_box {
      width: 100%;
      height: 100%;
      img {
        display: inline-block;
        width: 100%;
        height: calc(100% + 2rem);
        overflow: hidden;
      }
    }
    li {
      flex: 1;
      cursor: pointer;
      display: flex;
      font-size: 1.4rem;
      font-family: 'Courier New', Courier, monospace;
      height: 100%;
      justify-content: center;
      align-items: center;
      span {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        a {
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: center;
        }
      }
      a {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
      }
    }
    li:hover {
      a {
        color: aqua !important;
      }
      span {
        color: aqua;
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
    .showDemo {
      width: 20%;
      height: 2rem;
      color: #fff;
      background: rgb(68, 190, 218);
      line-height: 2rem;
      text-align: center;
      border: none;
      border-radius: 20px;
    }
    .loginSty {
      width: 20%;
      height: 2rem;
      color: #000000;
      background: rgb(255, 255, 255);
      line-height: 2rem;
      text-align: center;
      border: 1px solid rgb(68, 190, 218);
      border-radius: 20px;
      transition: 0.2s;
    }
    .loginSty:hover {
      color: #fff;
      background-color: rgb(68, 190, 218);
    }
  }
}
</style>
