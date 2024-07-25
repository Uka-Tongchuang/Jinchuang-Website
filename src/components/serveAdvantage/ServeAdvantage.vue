<template>
  <div class="title_box">
    <h1>服务优势</h1>
    <el-tabs :tab-position="tabPosition" class="demo-tabs">
      <el-tab-pane
        v-for="item in state.list"
        :key="item.id"
        :label="item.label"
      >
        <p class="title">{{ item.title }}</p>
        <p class="content">{{ item.content }}</p>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { TabsInstance } from "element-plus";

const tabPosition = ref<TabsInstance["tabPosition"]>("left");
const state = reactive({
  list: [
    {
      id: 1,
      label: "降低成本",
      title: "降低成本，优化管理",
      content:
        "通过一站式外包服务，显著降低企业管理成本。一切运营管理工作，包括人力资源、物资采购、日常运维等，都由今创人力打点。此外，采用按交付结果结算的方式，企业只需关注产品和服务的最终质量，无需投入大量资源监督过程，从而简化管理流程并减少相关开支。",
    },
    {
      id: 2,
      label: "提升利润",
      title: "提升利润与经济效益",
      content:
        "外包服务使企业能专注于核心业务，从而提升整体利润。通过优化资源分配和提高效率，企业可以实现更高更快的经济回报。同时，今创人力的专业服务还能帮助企业探索新的利润增长点和市场机会，进一步增强财务表现。",
    },
    {
      id: 3,
      label: "规避风险",
      title: "管理与规避风险",
      content:
        "外包服务提供有效的用工风险规避和经营风险管理。企业通过外包可以规避与直接雇佣员工相关的法律和合规风险，并且由我们承担大部分经营风险，如市场波动和政策变化，使企业能在更稳定的环境中运营。",
    },
    {
      id: 4,
      label: "优化流程",
      title: "工作流程优化",
      content:
        "外包不仅能简化工作流程，还能提供高效的工作流程设计和实施支持。今创人力借助其专业知识和技术，能够为企业设计出更加高效、合理的工作流程，确保业务运作的流畅性，从而提高整体的工作效率和响应速度。",
    },
  ],
});
</script>
<style lang="scss" scoped>
::v-deep(.el-tabs__item) {
  text-align: center;
  height: 5rem;
  font-size: 2rem;
}
::v-deep(.el-tabs__item.is-active) {
  // color: white;
}
::v-deep(.el-tabs__nav) {
  height: 30rem;
  justify-content: space-between;
}
.title_box {
  h1 {
    font-size: 3rem;
    text-align: center;
  }
}
.demo-tabs > .el-tabs__content {
  padding: 5rem;
  color: #6b778c;
  font-size: 5rem;
  font-weight: 600;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}
.demo-tabs {
  width: 80%;
  margin: auto;
  height: 30rem;
  font-size: 1.5rem;
  .content {
    font-size: 1.2rem;
    margin-top: 5rem;
  }
}
::v-deep(.el-tabs__item:hover) {
  background-color: rgba(152, 196, 120, 1);
  color: white;
}
::v-deep(.el-tabs__item.is-active) {
  background-color: rgba(152, 196, 120, 1);
  color: white;
}
::v-deep(.el-tabs__active-bar) {
  background-color: rgba(152, 196, 120, 1);
}
::v-deep(.el-tab-pane) {
  padding-left: 5rem;
}
</style>
