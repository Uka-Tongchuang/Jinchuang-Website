<template>
  <div class="header_box">
    <div class="nav_left_box">
      <li @click="goHomeFun" class="logo_box">
        <img src="../assets/img/logotxt.png" alt="" />
      </li>
      <!-- <div class="boxShow">
        <div ref="showNone">
          <el-button type="" @click="boxShowEvent">
            <el-icon><Fold /></el-icon>
          </el-button>
        </div>
        <div ref="showBlock" style="display: none">
          <el-button type="" @click="blockEvent">
            <el-icon><CirclePlusFilled /></el-icon>
          </el-button>
        </div>
      </div> -->
      <div class="box-list" ref="boxList">
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
            <router-link :to="item.path" style="color: #000">
              {{ item.meta?.title }}
            </router-link>
          </span>
        </li>
      </div>

      <div class="boxShow">
        <el-icon size="2rem" @click="drawer = true"><Fold /></el-icon>
        <el-drawer v-model="drawer" title="" :with-header="false" size="250px">
          <el-icon
            size="2rem"
            @click="drawer = false"
            style="margin-left: 13rem"
            ><Fold
          /></el-icon>
          <el-menu
            :style="{ background: 'transparent' }"
            default-active="2"
            class="el-menu-vertical-demo"
          >
            <el-sub-menu index="1" class="first-sub-menu-item">
              <template #title>
              <span>产品服务</span>
              </template>
              <el-menu-item-group title="" class="content">
                <el-menu-item index="1-1" @click="goPersonnel">人事派遣</el-menu-item>
                <el-menu-item index="1-2" @click="golabor">劳务派遣</el-menu-item>
                <el-menu-item index="1-3" @click="goOutsourcing">岗位外包</el-menu-item>
                <el-menu-item index="1-4" @click="goRecruitment">业务外包</el-menu-item>
                <el-menu-item index="1-5" @click="goOperate">招聘流程外包</el-menu-item>
                <el-menu-item index="1-6" @click="goFiexble">灵活用工解决方案</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-menu-item index="2">
              <span @click="goFiexble1">客户案列</span>
            </el-menu-item>
            <el-menu-item index="3">
              <span @click="goFiexble2">新闻中心</span>
            </el-menu-item>
            <el-menu-item index="4">
              <span @click="goFiexble3">了解公司</span>
            </el-menu-item>
          </el-menu>
        </el-drawer>
      </div>
    </div>
    <!-- //弹出内容 -->
    <div class="showContent" v-show="showDivFlag" ref="showbox">
      <!-- //三级路由列表渲染 -->
      <div
        v-for="(item, index) in showDataArray"
        :key="index"
        @click="fourRouteFun(item)"
      >
        <router-link :to="item.path" style="color: #fff">
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
      <!-- <li> 售前电话: 100-400-600</li>   -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { CirclePlusFilled, Fold } from "@element-plus/icons-vue";
import { routerChildren } from "../router";
import { ref } from "vue";
import { ArrowDown } from "@element-plus/icons-vue";
import { gsap } from "gsap";
import { throttle } from "lodash";
//获取弹窗路由的三级路由信息   //四级路由信息
import { threeChildrenRoute, fourChildrenRoute } from "@/router/index";
import { useRouter } from "vue-router";
const boxList = ref();
const showNone = ref();
const showBlock = ref();
const drawer = ref(false);
const boxShowEvent = () => {
  console.log(boxList.value, showBlock.value);
  boxList.value.style.display = "block";
  showBlock.value.style.display = "block";
  showNone.value.style.display = "none";
};
const blockEvent = () => {
  boxList.value.style.display = "none";
  showNone.value.style.display = "block";
  showBlock.value.style.display = "none";
  console.log(1);
};
const goHomeFun = () => {
  window.location.href = "/home";
};

const router = useRouter();
//跳转人事管理
const goPersonnel = () => {
  router.push("/home/index/operate");
  drawer.value = false;
};
//跳转劳务派遣
const golabor = () => {
  router.push("/home/index/labor");
  drawer.value = false;
};
//跳转岗位外包
const goOutsourcing = () => {
  router.push("/home/index/outsource");
  drawer.value = false;
};
//跳转业务外包
const goRecruitment = () => {
  router.push("/home/index/hosting");
  drawer.value = false;
};
//跳转招聘外包流程
const goOperate = () => {
  router.push("/home/index/recruitment");
  drawer.value = false;
};

//跳转灵活用工的四级页面
const goFiexble = () => {
  router.push("/home/index/flexible");
  drawer.value = false;
};
//跳转客户案列
const goFiexble1 = () => {
  router.push("/home/special/specialHome");
  drawer.value = false;
};
//跳转新闻中心
const goFiexble2 = () => {
  router.push("/home/news/newDetailsHome");
  drawer.value = false;
};
//跳转了解公司
const goFiexble3 = () => {
  router.push("/home/about");
  drawer.value = false;
};

//二级页面划过
//弹窗
const showDivFlag = ref(false);
//弹窗数据
const showDataArray = ref(threeChildrenRoute);
//划过显示弹窗元素
const showbox = ref();
//鼠标点击nav元素
const enterProductsBtn = (item: any) => {
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
const fourRouteFuns = (item: any) => {
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
@media screen and (max-width: 2660px) {
  .boxShow {
    display: none;
  }
  .box-list {
    width: 50rem;
    display: block;
    display: flex;
  }
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
    width: 100%;
    height: 5rem;
    margin: 0;
    position: relative;
    padding: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
      text-decoration: none !important;
    }
    .showContent {
      width: 100%;
      height: 5rem;
      font-family: "微软雅黑";
      position: absolute;
      top: 100%;
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
          color: #ffffff;
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
        margin-left: -6rem;
        margin-right: 4rem;
        img {
          display: inline-block;
          width: 15rem;
          height: 15rem;
          overflow: hidden;
        }
      }
      li {
        width: 9rem;
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
        span:hover {
          color: #729edf;
          a {
            color: #729edf !important;
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
        position: relative;
        top: 3px;
        left: 5px;
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
}
@media screen and (max-width: 768px) {
  ::v-deep(.el-menu-item:focus, .el-submenu__title:focus) {
    outline: none;
    background-color: inherit;
  }
  ::v-deep(.first-sub-menu-item) {
    /* 在这里添加你的样式 */
    display: block;
  }
  ::v-deep(.el-drawer__body ul li:first-child) {
    display: inline-flex;
  }
  ::v-deep(.header_box .nav_left_box li) {
    width: 13rem !important;
  }
  ::v-deep(.el-sub-menu__title) {
    font-size: 1.5rem;
    margin-left: 0;
  }
  .content {
    z-index: 999999;
    ul li {
      font-size: 1rem;
    }
  }
  ::v-deep(.el-drawer__body) {
    ul li:first-child {
      display: block;
    }
    .el-sub-menu .el-sub-menu__icon-arrow {
      right: -1rem;
    }
  }
  .boxShow {
    margin-left: 5rem;
    display: block;
  }
  .box-list {
    display: none;
  }

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
    font-size: 100%;
    width: 100%;
    height: 5rem;
    margin: 0;
    position: relative;
    padding: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .nav_left_box {
      .box-list {
        z-index: 9999;
        width: 20rem;
        height: 100vh;
        background-color: red;
        position: fixed;
        right: 0;
        li {
          width: 100%;
          height: 3rem;
        }
      }
    }
  }
}
</style>
