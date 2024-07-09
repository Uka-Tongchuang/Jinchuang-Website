<template>
  <div class="header_box">
    <div class="nav_left_box">
      <li @click="goHomeFun">logo</li>
      <li
        v-for="(item, index) in routerChildren"
        :key="index"
        @mouseenter="enterProducts(item)"
        @mouseleave="leaveChildren"
      >
        <span v-if="item.children && item.children.length !== 0">
          {{ item.meta?.title }}
          <el-icon><ArrowDown /></el-icon>
        </span>
        <span v-else>
          <router-link :to="item.path">
            {{ item.meta?.title }}
          </router-link>
        </span>
      </li>
    </div>
    <!-- //弹出内容 -->
    <div
      class="showContent"
      v-show="showDivFlag"
      @mouseenter="flagShowDiv"
      @mouseleave="leaveFlagShowDiv"
      ref="showbox"
    >
      <li v-for="(item, index) in showDataArray" :key="index">
        <ul v-if="item.children && item.children.length !== 0">
          <li>
            {{ item.meta?.title }} <el-icon><ArrowDown /></el-icon>
          </li>
          <li v-for="(item, index) in fourChildrenRoute" :key="index">
            <router-link @click="goRouteBack" :to="item.path">{{
              item.meta?.title
            }}</router-link>
          </li>
        </ul>
        <p v-else>
          <router-link @click="goRouteBackFirst" :to="item.path">
            {{ item.meta?.title }}
          </router-link>
        </p>
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
import { ref } from "vue";
import { ArrowDown } from "@element-plus/icons-vue";
import { ChildrenRouteItemType } from "@/typeFile/type";
import { gsap } from "gsap";

//获取弹窗路由的三级路由信息   //四级路由信息
import { threeChildrenRoute, fourChildrenRoute } from "@/router/index";

const goHomeFun = () => {
  window.location.href = "/home";
};

//二级页面划过
//定义一个延时定时器
const timer = ref<any>(null);
//弹窗
const showDivFlag = ref(false);
//弹窗数据
const showDataArray = ref(threeChildrenRoute);
// console.log(showDataArray);
//划过显示弹窗
const showbox = ref();
//鼠标进入nav元素
const enterProducts = (item: ChildrenRouteItemType) => {
  clearTimeout(timer.value);
  showbox.value.style.height = "30rem";
  showbox.value.style.opacity = 1;
  gsap.from(showbox.value, {
    height: 0,
    duration: 0.5, // 动画持续时间，单位秒
  });
  gsap.from(showbox.value, {
    opacity: 0,
    duration: 0.5, // 动画持续时间，单位秒
  });
  
  //弹窗数据等于划过的元素的子级路由
  showDataArray.value = item.children;
  //判断有没有自己子级路由 有的话就显示弹窗，没有的话就不显示
  if (item.children && item.children.length > 0) {
    showDivFlag.value = true;
    // console.log(item);
    //弹窗数据等于划过的元素的子级路由
    showDataArray.value = item.children;
  } else {
    showDivFlag.value = false;
  }
};
const leaveChildren = () => {
  // showDivFlag.value=false;
  timer.value = setTimeout(() => {
    // console.log("定时器");
    showDivFlag.value = false;
  }, 200);
};
//弹出层显示
const flagShowDiv = () => {
  clearTimeout(timer.value);
  showDivFlag.value = true;
};

//弹出层关闭
const leaveFlagShowDiv = () => {
  timer.value = setTimeout(() => {
    // console.log("定时器");
    showDivFlag.value = false;
  }, 300);
};

//点击路由跳转后关闭弹窗
const goRouteBackFirst = () => {
  // clearTimeout(timer.value)
  showDivFlag.value = false;
  console.log(1);
};
const goRouteBack = () => {
  clearTimeout(timer.value);
  showDivFlag.value = false;
};
</script> 

<style scoped lang="scss">
.header_box {
  //   background-color: rgb(160, 172, 71);
  position: relative;
  .showContent {
    width: 100%;
    height: 30rem;
    position: absolute;
    top: 100%;
    left: 0;
    opacity: .98;
    background-color: #189beb;
    z-index: 66;
    display: flex;
    justify-content: space-around;
    > li {
      > p {
        font-weight: bold;
        
        a{
          color: #ffffff!important;
          font-size: 2.2rem;
        }
      }
      ul{
        li:nth-child(1){
          font-weight: bold;
          color: #ffffff;
          font-size: 2.2rem;
          cursor: pointer;
        }
        li{
          line-height: 5rem;
          a{
            font-size: 1.8rem;
          }
          a:hover{
            color: rgb(68, 0, 255)!important;
          }
        }
      }
    }

    .fourDiv {
      width: 100%;
      height: 20rem;
      position: absolute;
      top: 0;
      right: 0;
      background-color: #d11a8b;
    }
    li {
      line-height: 3rem;
      color: #ffffff;
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
    li {
      flex: 1;
      cursor: pointer;
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
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