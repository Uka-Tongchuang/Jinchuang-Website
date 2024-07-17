<template>
  <div class="main">
    <!-- banner -->
    <RecruitmentBanner/>
    <!-- 服务流程 -->
    <RecruitmentService/>

    <!-- 服务优势 -->
     <div class="advantage">
      <h1>服务优势</h1>
     </div>
     <!-- 服务价值 serviceValue-->
    <!-- <div class="serviceValue">
      <div class="footer-box">
        <h1>服务价值</h1>
        <div ref="titleList">
          <div
            v-for="(item, index) in state.items"
            :key="item.id"
            @click="toggleExpand(index)"
            class="title"
            :class="{'expanded':item.isExpanded}"
          >
            <div class="title-box">
              <p>{{ item.title }}</p>
              <span>{{ item.isExpanded ? "-" : "+" }}</span>
            </div>
            <div v-if="item.isExpanded" class="details">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div> 
    </div> -->
    <RecruitmentValue :titleArray="state.items"/>
  </div>
</template>

<script setup lang="ts">
import swpOne from "../../../assets/th.jpg";
import { ref, reactive, onMounted, onUnmounted } from "vue";  
import RecruitmentBanner from "../../../components/bannerList/RecruitmentBanner.vue"
import  RecruitmentService from '../../../components/Service/RecruitmentService.vue'
import  RecruitmentValue from '../../../components/serviceValue/RecruitmentValue.vue'

const titleList = ref();
const state = reactive({
  getNewsData: [], 
  arr: [
    {
      id: 1,
      title: "社招",
      idVieo: swpOne,
    },
    {
      id: 2,
      title: "网招",
      idVieo: swpOne,
    },
    {
      id: 3,
      title: "校招",
      idVieo: swpOne,
    },
    {
      id: 4,
      title: "新媒体带岗",
      idVieo: swpOne,
    },
    {
      id: 5,
      title: "猎头",
      idVieo: swpOne,
    },
  ],
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
// const number=ref(0)
// const toggleExpand = (index: number) => {
//   // 遍历所有项，根据id更新isExpanded
//   state.items.forEach((item,inde) => {
//     if (inde === index) { 
//       number.value++
//       titleList.value.children[inde].style.height = "8rem";
//       item.isExpanded = true 
//       console.log(number.value)
//       if(number.value%2 !=1){
//         titleList.value.children[inde].style.height = "5rem";
//         item.isExpanded = false
//       }
//     } else { 
//       titleList.value.children[inde].style.height = "5rem";
//       item.isExpanded = false; // 如果不是当前点击的项，则隐藏其更多信息
//     }
//   }); 
// };
</script>

<style scoped lang="scss">
.expanded{
  height: 8rem;
}
.main {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
 
 
  .advantage{
     width: 80%;
      min-height: 40rem;
      background-color: #6179b5;
      margin: auto;
  }

}

</style>
