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
          <router-link :to="item.path" style="color: #000;">
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
        <router-link  :to="item.path" style="color: #fff;">
          <span>{{ item.meta?.title }}</span> 
        </router-link>
        <!-- <span v-else>
          {{ item.meta?.title
          }}<el-icon class="icon_two" :class="showFourDiv ? 'is-rotateds' : ''"
            ><ArrowDown
          /></el-icon>
        </span> -->
      </div>

      <!-- //四级弹窗 -->
      <!-- <div class="content_box_four" v-show="showFourDiv" ref="showFourbBox">
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
      </div> -->
    </div>

    <div class="nav_right_box">
      <li><span></span> 售前电话: 100-400-600</li>
      <span class="showDemo loginSty">预约演示</span>
      
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
// const showFourbBox = ref();
const fourRouteFuns = (item: ChildrenRouteItemType) => {
 
  // //判断是否点击的用工
  // if (item.meta.title === "灵活用工解决方案") {
  //   showFourDiv.value = !showFourDiv.value;
  //   //动画
  //   gsap.from(showFourbBox.value, {
  //     height: "0rem",
  //     duration: 0.5, // 动画持续时间，单位秒
  //   });
  // } else {
    //跳转隐藏两个盒子
    showDivFlag.value = false;
    showFourDiv.value = false;
  // }
};
const fourRouteFun = throttle(fourRouteFuns, 500);

// const goFourRoute = () => {
//   showDivFlag.value = false;
//   showFourDiv.value = false;
// };
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
    height: 5rem;
    font-family: "微软雅黑";
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 0;
    opacity: 0.98;
    background-color: #a4bfe2;
    z-index: 66;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.3rem;
    .content_box_four {
      position: absolute;
      width: 16.66%;
      height: 12rem;
      background-color: #cbcbcb;
      z-index: 66;
      right: 0;
      top: 5rem;
      display: flex;
      flex-direction: column;
      border-top: 1px solid #ccc;
      align-items: center;
      .show_div_list {
        width: 100%;
        flex: 1;
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;
       
      }
    }
    > div {
      
      flex: 1;
      width: 100%;
      height: 100%;
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        color: #fff;
        justify-content: center;
      }
      span {
        display: inline-block;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #000000;
      }
      span:hover {
        color: #ffffff ;
        cursor: pointer;
        box-sizing: border-box;
        // border-bottom: .4rem solid #f3fafe;
        background-color: #729edf;
      }
    }
    
  }

  li {
    list-style-type: none;
    padding: 0;
  }
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
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
        width: 8.6rem;
        height: 8.2rem;
        overflow: hidden;
      }
    }
    li {
      flex: 1;
      cursor: pointer;
      display: flex;
      font-size: 1.6rem;
      font-weight: 500;
      font-family: "微软雅黑";
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
      span:hover{
        color: #729edf;
        a{
          color: #729edf!important;
        }
      }
      a {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
      }
    }
 
    .el-icon {
      position: relative ;
      top: 3px ;
      left: 5px ;
      color: #b4b4b4;
    }
  }
  .nav_right_box {
    display: flex;
    width: 24%;
    height: 100%;
    margin-right: 15rem;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    span {
      display: inline-block;
      width: 16px;
      height: 16px;
      position: relative;
      top: 2px;
      background-image: url("../assets/th.jpg");
      background-size: 100% 100%;
    }
   
    .loginSty {
      width: 10rem;
      height: 3rem;
      font-size: 1.4rem;
      color: #000000;
      background: rgb(255, 255, 255);
      line-height: 3rem;
      text-align: center;
      border: 1px solid #729edf;
      border-radius: 2rem;
      transition: 0.4s;
      cursor: pointer;
    }
    .loginSty:hover {
      color: #fff;
      background-color: #729edf;
    }
  }
}
</style>
