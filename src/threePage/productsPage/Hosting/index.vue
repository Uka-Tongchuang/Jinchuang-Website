<template>
  <div class="content">
    <HostingBanner />
    <div class="servce_content">
      <OutsurceFuWuCard />
    </div>
    <!-- 服务流程 -->
   <HostingService/>
    <!-- 服务优势 -->
    <div class="serve_advantage">
      <ServeAdvantageCom />
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import dataList from "../../../utils/producDes.json"; 
import OutsurceFuWuCard from "@/components/OutsourceFuWuCard.vue";
import ServeAdvantageCom from "@/components/serveAdvantage/ServeAdvantage.vue";
import HostingBanner from "../../../components/bannerList/HostingBanner.vue";
import HostingService from "../../../components/Service/HostingService.vue"
// console.log(navigator.userAgent,"1212");
// const titleList = ref();
const state = reactive({
  title: "",
  content: "",
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
onMounted(() => {
  state.title = dataList[3].typetitle;
  state.content = dataList[3].data[0].content as string;
});
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  padding: 0;
  margin: 0;
  .servce_content {
    background-color: #F1F5F9;
    width: 100%;
    height: 44rem;
    margin: 2rem auto;
  }
  
  .serve_advantage {
    width: 80%;
    height: 40rem;
    // background-color: #98c478;
    margin: 5rem auto 2rem;
  }
  
}
</style>
