<template>
  <div class="prouct_box">
    <!-- 业务，产品服务模块 -->
    <h1>业务系统，产品服务</h1>
    <div class="modules_box">
      <!-- //招聘类服务 -->
      <!-- //上部分 -->
      <div class="top_box">
        <div class="modukrs_boxs">
          <div class="box_tip_icon"></div>
          <span>人事管理</span>
          <p>委托招聘、招聘流程外包<br />人才引进与劳务中介</p>
          <button @click="goPersonnel">了解更多</button>
        </div>

        <div class="modukrs_boxs two">
          <div class="box_tip_icon"></div>
          <span>劳务派遣</span>
          <p>岗位，业务流程外包<br />人力资源外包</p>
          <button @click="golabor">了解更多</button>
        </div>

        <div class="modukrs_boxs three">
          <div class="box_tip_icon"></div>
          <span>岗位外包</span>
          <p>岗位，业务流程外包<br />人力资源外包</p>
          <button @click="goOutsourcing">了解更多</button>
        </div>
      </div>
      <!-- //下部分 -->
      <div class="bottom_box four">
        <div class="modukrs_boxs">
          <div class="box_tip_icon"></div>
          <span>业务外包</span>
          <p>委托招聘、招聘流程外包<br />人才引进与劳务中介</p>
          <button @click="goRecruitment">了解更多</button>
        </div>

        <div class="modukrs_boxs five">
          <div class="box_tip_icon"></div>
          <span>招聘流程外包</span>
          <p>委托招聘、招聘流程外包<br />人才引进与劳务中介</p>
          <button @click="goOperate">了解更多</button>
        </div>

        <div class="modukrs_boxs six">
          <div v-if="flagDiv" class="showImg animate__animated animate__fadeIn">
            <div class="box_tip_icon"></div>
            <span>灵活用解决方案</span>
            <p>多元化的灵活用工<br />结算解决方案</p>
            <button @click="enterDiv">了解更多</button>
          </div>
          <div v-else class="showMou animate__animated animate__flipInY">
            <div @click="goFourRectuitment"><el-icon><Guide /></el-icon><text>招聘业务</text></div>
            <div @click="goFourNews"><el-icon><Guide /></el-icon><text>新媒体带货</text></div>
            <div @click="goFourEmployment"><el-icon><Guide /></el-icon><text>就业街小圆桌</text></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import {Guide} from "@element-plus/icons-vue"
import "animate.css";
const flagDiv = ref(true);
const router = useRouter();
const enterDiv = () => {
  flagDiv.value = false;
};
//跳转人事管理
const goPersonnel = () => {
  router.push("/home/index/ersonnel");
};
//跳转劳务派遣
const golabor = () => {
  router.push("/home/index/labor");
};
//跳转岗位外包
const goOutsourcing = () => {
  router.push("/home/index/outsource");
};
//跳转业务外包
const goRecruitment = () => {
  router.push("/home/index/hosting");
};
//跳转招聘外包流程
const goOperate = () => {
  router.push("/home/index/recruitment");
};

//跳转灵活用工的四级页面
//招聘业务
const goFourRectuitment = () => {
  router.push("/home/index/flexible/fourectuitments");
};
//新媒体带货
const goFourNews = () => {
  router.push("/home/index/flexible/foruenews");
};
//就业街小圆桌
const goFourEmployment = () => {
  router.push("/home/index/flexible/fouremployment");
};
</script>

<style scoped lang="scss">
.prouct_box {
  width: 80%;
  height: 100rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  h1 {
    width: 100%;
    height: 5rem;
    text-align: center;
    line-height: 5rem;
    font-size: 3rem;
    color: rgb(11, 11, 11);
  }
  .modules_box {
    width: 100%;
    height: 90rem;
    $color: rgb(197, 229, 174);
      $color2: rgb(130, 196, 179);
      $color3: rgb(83, 169, 187);
      $color4:rgb(179, 167, 133);
      $color5:rgb(57,112,172);
      $color6:rgb(18,74,126);
      @mixin spanCss {
        display: block;
        width: 10rem;
        height: 2rem;
        font-size: 2.2rem;
        white-space: nowrap;
        line-height: 2rem;
        text-overflow: normal;
        font-weight: bold;
        margin-left: 2rem;
        padding-left: 1rem;
        margin-top: 1rem;
        padding-bottom: 1rem;
      }
      @mixin butonCss {
        width: 18rem;
        height: 5rem;
        background-color: #fff;
        border-radius: 0.6rem;
        font-size: 1.8rem;
        cursor: pointer;
        margin-left: 4rem;
        margin-top: 1rem;
        font-weight: bold;
      }
    .top_box {
      width: 100%;
      height: 45rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      .modukrs_boxs {
        width: 26rem;
        height: 30rem;
        border: 0.2rem solid $color;
        border-radius: 2rem;
        box-shadow: 0 0 0.3rem 0.2rem $color;
        .box_tip_icon {
          width: 10rem;
          height: 10rem;
          background-color: $color;
          border-radius: 50%;
          margin: 3rem 0 0 2rem;
          box-shadow: 0 0 0.3rem 0.24rem  rgb(182, 181, 192);
        }
        span {
          @include spanCss;
          border-bottom: 0.5rem solid $color;
        }
        p {
          font-size: 1.4rem;
          width: 80%;
          margin: 0 auto;
          text-align: center;
          margin-top: 1rem;
        }
        button {
          @include butonCss;
          color: $color;
          border: 0.15rem solid $color;
          color: $color;
        }
      }
      .two {
        border: 0.2rem solid $color2;
        box-shadow: 0 0 0.3rem 0.2rem $color2;
        .box_tip_icon {
          background-color: $color2;
        }
        span {
          @include spanCss;
          border-bottom: 0.5rem solid $color2;
        }
        button {
          @include butonCss;
          color: $color2;
          border: 0.15rem solid $color2;
        }
      }
      .three {
        border: 0.2rem solid $color3;
        box-shadow: 0 0 0.3rem 0.2rem $color3;
        .box_tip_icon {
          background-color: $color3;
        }
        span {
          @include spanCss;
          border-bottom: 0.5rem solid $color3;
        }
        button {
          @include butonCss;
          color: $color3;
          border: 0.15rem solid $color3;
        }
      }
    }
    .bottom_box {
      width: 100%;
      height: 45rem;
      display: flex;
      justify-content: space-between;
      .modukrs_boxs {
        width: 26rem;
        height: 30rem;
        border: 0.2rem solid $color4;
        border-radius: 2rem;
        box-shadow: 0 0 0.3rem 0.2rem $color4;
        .box_tip_icon {
          width: 10rem;
          height: 10rem;
          background-color: $color4;
          border-radius: 50%;
          margin: 3rem 0 0 2rem;
          box-shadow: 0 0 0.2rem 0.2rem rgb(200, 200, 200);
        }
        span {
          display: block;
          width: 10rem;
          height: 2rem;
          font-size: 2.2rem;
          white-space: nowrap;
          line-height: 2rem;
          text-overflow: normal;
          font-weight: bold;
          border-bottom: 0.5rem solid $color4;
          margin-left: 2rem;
          padding-left: 1rem;
          margin-top: 1rem;
          padding-bottom: 1rem;
        }
        p {
          font-size: 1.4rem;
          width: 80%;
          margin: 0 auto;
          text-align: center;
          margin-top: 1rem;
        }
        button {
          width: 18rem;
          height: 5rem;
          background-color: #fff;
          color: $color4;
          border: 0.15rem solid $color4;
          border-radius: 0.6rem;
          font-size: 1.8rem;
          cursor: pointer;
          margin-left: 4rem;
          margin-top: 1rem;
          font-weight: bold;
        }
      }
      
      .five{
        border: 0.2rem solid $color5;
        box-shadow: 0 0 0.3rem 0.2rem $color5;
        .box_tip_icon {
          background-color: $color5;
        }
        span {
          @include spanCss;
          border-bottom: 0.5rem solid $color5;
        }
        button {
          @include butonCss;
          color: $color5;
          border: 0.15rem solid $color5;
        }
      }
      .six{
        border: 0.2rem solid $color6;
        box-shadow: 0 0 0.3rem 0.2rem $color6;
        .box_tip_icon {
          background-color: $color6;
        }
        span {
          @include spanCss;
          border-bottom: 0.5rem solid $color6;
        }
        button {
          @include butonCss;
          color: $color6;
          border: 0.15rem solid $color6;
        }
      }
    }
  }
  .showMou{
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
   align-items: self-start;
    div{
      width: 70%;
      height: 5rem;
      margin: 0 auto;
      border: 0.2rem solid rgb(18,74,126);
      color: rgb(18,74,126);
      font-size: 1.8rem;
      font-weight: bold;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-radius: 1.4rem;
      cursor: pointer;
    }
  }
}
</style>