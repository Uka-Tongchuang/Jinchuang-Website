<template>
  <div class="content">
    <div class="trapezoid">
      <div class="merchant">
        <h1>{{ state?.title }}</h1>
        <p v-html="state?.content"></p>
      </div>
      <img src="https://ts1.cn.mm.bing.net/th/id/R-C.1ad2e780a73aa5b625eaa68e22ce3a3c?rik=nvCwpLIU%2ffvwkA&riu=http%3a%2f%2fimg.nnngu.com%2fuploads%2f20200828%2fFlK_HbLsCxESLxmEo-fYpIeIW8BA.jpeg&ehk=hE5IHpSaA3CWY%2bzxgW%2bnMuAIq%2fJrnMCqnXbBE0qMQbI%3d&risl=&pid=ImgRaw&r=0" alt="" class="urlImg" />
    </div>

    <div class="servce_content">
      <OutsurceFuWuCard/>
    </div>
    <div class="sevce_process">
      服务流程
    </div>
    <div class="serve_advantage">
      
      <ServeAdvantageCom/>
    </div>
    <!-- //服务价值 -->
    <div class="serve_value_box">
            <OutsourcingCardCom/>
        </div>

<RecruitmentValue :titleArray="state.items"/>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import dataList from "../../../utils/producDes.json";
import OutsourcingCardCom from '@/components/OutsourcingCardCom.vue';
import RecruitmentValue from '../../../components/serviceValue/RecruitmentValue.vue';
import OutsurceFuWuCard from '@/components/OutsourceFuWuCard.vue';
import ServeAdvantageCom from "@/components/serveAdvantage/ServeAdvantage.vue"
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
  .servce_content{
    width: 80%;
    height: 50rem;
    background-color: #ffffff;
    margin: 2rem auto;
  }
  .sevce_process{
    width: 80%;
    height: 40rem;
    background-color: #c49a78;
    margin: 2rem auto;
  }
  .serve_advantage{
    width: 80%;
    height: 40rem;
    // background-color: #98c478;
    margin: 2rem auto;
  }
  .trapezoid {
    position: relative;
    width: 100%;
    height: 40rem;
    .merchant {
      background-color: #6179b5;
      height: 40rem;
      width: 65%;
      color: #fff;
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
