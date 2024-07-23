<template>
  <div class="content">
    <LaborBanner />
    <!-- 服务模式 -->
    <div class="cart_box">
      <div class="large-box">
        <div class="small-box">
          <h1>服务模式</h1>
        </div>
        <div class="color-region top-left"></div>
        <div class="color-region top-right"></div>
        <div class="color-region bottom-left"></div>
        <div class="color-region bottom-right"></div>
      </div>
      <div class="content-left">
        <div class="content-box">
          <div class="text">转移派遣服务<br />Transfer Dispatch Service</div>
        </div>
        <div class="icon_box">
          <el-icon size="5rem" color="#307EFF" style="padding: 1rem"
            ><Promotion
          /></el-icon>
        </div>
      </div>
      <div class="content-right">
        <div class="icon_box">
          <el-icon size="5rem" color="#fff" style="padding: 1rem"
            ><List
          /></el-icon>
        </div>
        <div class="content-box">
          <div class="text">招聘派遣服务<br />Recruitment Dispatch Service</div>
        </div>
      </div>
      <div class="content-top">
        <div class="content-box">
          <div class="text">短期派遣服务<br />Short-term Dispatch Service</div>
        </div>
        <div class="icon_box">
          <el-icon size="5rem" color="#fff" style="padding: 1rem"
            ><Watch
          /></el-icon>
        </div>
      </div>
      <div class="content-bottom">
        <div class="icon_box">
          <el-icon size="5rem" color="#34dc9d" style="padding: 1rem"
            ><AlarmClock
          /></el-icon>
        </div>
        <div class="content-box">
          <div class="text">长期派遣服务<br />Long-term Dispatch Service</div>
        </div>
      </div>
    </div>
    <!-- 服务流程 -->
    <div style="position: relative;">
      <LaborService />
    </div>
    <!-- 适用场景 -->
    <div class="content-box">
      <LaborCardCom />
    </div>
    <RecruitmentValue :titleArray="state.items" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { Promotion, List, Watch, AlarmClock } from "@element-plus/icons-vue";
import LaborBanner from "../../../components/bannerList/LaborBanner.vue";
import LaborService from "../../../components/Service/LaborService.vue";
// import LaborCartComVue from "../../../components/laborComponent/LaborCartCom.vue";
import RecruitmentValue from "../../../components/serviceValue/RecruitmentValue.vue";
import LaborCardCom from "@/components/LaborCardCom.vue";
const state = reactive({
  items: [
    {
      title: "降低企业成本：",
      id: 0,
      isExpanded: false,
      content:
        "精简基础性岗位，把HR从繁琐的事务性工作中解放出来，使企业人力资源工作人员能够将更多时间投入到人力资源核心业务，为企业提供更多支持，以降低企业成本，实现效率最大化。",
    },
    {
      title: "规避用工风险：",
      id: 1,
      isExpanded: false,
      content: "全流程服务符合法律法规，提供专业指导帮助企业优化规避用工风险。",
    },
  ],
});
</script>

<style lang="scss" scoped>
.text {
  color: white;
}
.content {
  width: 100%;
  padding: 0;
  margin: 0;

  .cart_box {
    overflow: hidden;
    position: relative;
    width: 80%;
    height: 40rem;
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    background: black;
    border-radius: 7rem;
    .large-box {
      margin: auto;
      line-height: 40rem;
      position: relative;
      width: 16rem;
      height: 16rem;
      border-radius: 50%;
      padding: 50px;
      box-sizing: border-box;
      overflow: hidden;
      .small-box {
        width: 12rem;
        height: 12rem;
        border-radius: 50%;
        color: white;
        background-color: black;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        color: white;
        text-align: center;
      }

      .color-region {
        position: absolute;
        width: 50%;
        height: 50%;
        z-index: 5; /* 确保颜色区域在大盒子背景之上，但在小盒子之下 */
      }

      .top-left {
        background-color: #f5f5f5;
        top: 0;
        left: 0;
      }

      .top-right {
        background-color: #307eff;
        top: 0;
        right: 0;
      }

      .bottom-left {
        background-color: #34dc9d;
        bottom: 0;
        left: 0;
      }

      .bottom-right {
        background-color: #f5f5f5;
        bottom: 0;
        right: 0;
      }
    }
    .content-left {
      width: 40rem;
      height: 10rem;
      background: black;
      position: absolute;
      top: 6rem;
      left: 2rem;
      display: flex;
      justify-content: space-between;
      .content-box {
        background: black;
        width: 30rem;
        height: 3rem;
        font-size: 2rem;
        text-align: right;
      }
      .icon_box {
        margin-top: 1rem;
        width: 7rem;
        height: 7rem;
        background-color: white;
        border-radius: 50%;
      }
    }
    .content-right {
      width: 40rem;
      height: 10rem;
      background: black;
      position: absolute;
      top: 6rem;
      right: 2rem;
      display: flex;
      justify-content: space-between;
      .content-box {
        background: black;
        width: 30rem;
        height: 3rem;
        font-size: 2rem;
      }
      .icon_box {
        margin-top: 1rem;
        width: 7rem;
        height: 7rem;
        background-color: #307eff;
        border-radius: 50%;
      }
    }
    .content-top {
      width: 40rem;
      height: 10rem;
      background: black;
      position: absolute;
      top: 25rem;
      left: 2rem;
      display: flex;
      justify-content: space-between;
      .content-box {
        background: black;
        width: 30rem;
        height: 3rem;
        font-size: 2rem;
        text-align: right;
      }
      .icon_box {
        margin-top: 1rem;
        width: 7rem;
        height: 7rem;
        background-color: #34dc9d;
        border-radius: 50%;
      }
    }
    .content-bottom {
      width: 40rem;
      height: 10rem;
      background: black;
      position: absolute;
      top: 25rem;
      right: 2rem;
      display: flex;
      justify-content: space-between;
      .content-box {
        background: black;
        width: 30rem;
        height: 3rem;
        font-size: 2rem; 
      }
      .icon_box {
        margin-top: 1rem;
        width: 7rem;
        height: 7rem;
        background-color: white;
        border-radius: 50%;
      }
    }
  }
  .flow-box {
    width: 90%;
    min-height: 40rem;
    background-color: #6179b5;
    margin: auto;
  }
  .content-box {
    width: 80%;
    min-height: 40rem;
    background-color: #ffffff;
    margin: 2rem auto; 
  }
}
</style>
