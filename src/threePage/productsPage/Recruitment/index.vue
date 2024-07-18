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
      title: "方便操作，灵活性强",
      id: 0,
      isExpanded: false,
      content:
        "可以快速帮助企业有效地增加或减少招聘操作，以适应不断变化的业务需求。",
    },
    {
      title: "解决难题，降低风险",
      id: 1,
      isExpanded: false,
      content: "解决企业招人难，用人难问题，大大提高企业的运转效率，并有效降低企业用工风险。。",
    },
    {
      title: "降本增效，专注核心",
      id: 2,
      isExpanded: false,
      content: "提高企业人力资源部门效能，助理HR从事务性工作中解脱，专注核心工作，节省管理与时间成本。",
    },
    {
      title: "专业服务，有效控制",
      id: 3,
      isExpanded: false,
      content: "专业的招聘流程外包，高效助力企业资源管理和成本控制。。",
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
