<template>
  <div class="content">
    <div class="trapezoid">
      <div class="merchant">
        <h1>{{ state?.title }}</h1>
        <p v-html="state?.content"></p>
      </div>
      <img src="../../../assets/swpOne.jpg" alt="" class="urlImg" />
    </div>

    <div class="servce_content">
      服务内容
    </div>
    <div class="sevce_process">
      服务流程
    </div>
    <div class="serve_advantage">
      服务优势

    </div>
    <!-- //服务价值 -->
    <div>
            <OutsourcingCardCom/>
        </div>

<RecruitmentValue :titleArray="state.items"/>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import dataList from "../../../utils/producDes.json";
import OutsourcingCardCom from '@/components/OutsourcingCardCom.vue';
import RecruitmentValue from '../../../components/serviceValue/RecruitmentValue.vue'
// console.log(navigator.userAgent,"1212");
const titleList = ref();
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
  .servce_content{
    width: 80%;
    height: 40rem;
    background-color: #98c478;
    margin: 2rem auto;
  }
  .sevce_process{
    width: 80%;
    height: 40rem;
    background-color: #98c478;
    margin: 2rem auto;
  }
  .serve_advantage{
    width: 80%;
    height: 40rem;
    background-color: #98c478;
    margin: 2rem auto;
  }
  .trapezoid {
    position: relative;
    width: 100%;
    height: 40rem;
    .merchant {
      background-color: #98c478;
      height: 40rem;
      width: 65%;

      clip-path: polygon(0 0, 73% 0, calc(100% - 11rem) 100%, 0 100%);
      h1 {
        padding-top: 15rem;
        margin-left: 5rem;
        font-size: 3rem;
      }
      p {
        margin-left: 5rem;
        font-size: 1.5rem;
      }
    }
    .urlImg {
      clip-path: polygon(0 0, 0 0, 100% 500%, 100% 0);
      width: 53%;
      height: 40rem;
      background: url(../../../assets/swpOne.jpg);
      position: absolute;
      top: 0;
      right: 0;
    }
  } 
}
</style>
