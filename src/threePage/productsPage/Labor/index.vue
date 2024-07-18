<template>
  <div class="content">
    <LaborBanner />
    <!-- 服务模式 -->
    <div class="cart_box">
      <LaborCartComVue />
    </div>
    <!-- 服务流程 -->
    <LaborService />
    <!-- 服务内容 -->
    <div class="content-box">
      <LaborCardCom/>
    </div>
    <RecruitmentValue :titleArray="state.items"/>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import LaborBanner from "../../../components/bannerList/LaborBanner.vue";
import LaborService from "../../../components/Service/LaborService.vue";
import LaborCartComVue from "../../../components/laborComponent/LaborCartCom.vue";
import  RecruitmentValue from '../../../components/serviceValue/RecruitmentValue.vue'
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
    {
      title: "说明：",
      id: 2,
      isExpanded: false,
      content: "这一个部分做成模块卡片，点击卡片后会显示详细信息",
    },
  ],
});
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  padding: 0;
  margin: 0;

  .cart_box {
    width: 80%;
    height: 40rem;
    margin: 0 auto;
    margin-top: 5rem;
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
    margin: auto;
    margin-bottom: 4rem;
  }
}
</style>
