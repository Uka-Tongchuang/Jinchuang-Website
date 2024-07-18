<template>
  <div class="content">
  <FlexibleBanner/>
    <div class="process">
      <ProcessFiexCom/>
    </div>
    <div class="cart_box">
        <FleBleGoodCom/>
    </div>
    <RecruitmentValue :titleArray="state.items"/>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"; 
import FleBleGoodCom from '@/components/FleBleGoodCom.vue';
import FlexibleBanner from '../../../components/bannerList/FlexibleBanner.vue'
import RecruitmentValue from '../../../components/serviceValue/RecruitmentValue.vue'
import ProcessFiexCom from "@/components/service_process_fiex/ProcessFiexCom.vue"

const titleList = ref();
const state = reactive({ 
  items: [
    {
      title: "提升灵活性与绩效",
      id: 0,
      isExpanded: false,
      content:
        "有效提高组织战略灵活性与高绩效性",
    },
    {
      title: "降低成本与资源整合",
      id: 1,
      isExpanded: false,
      content: "降低企业综合成本、整合企业优势资源",
    },
    {
      title: "专注业务发展",
      id: 2,
      isExpanded: false,
      content: "释放职能部门，聚焦业务发展，提升企业效能",
    },
    {
      title: "风险防控保障",
      id: 3,
      isExpanded: false,
      content: "专业的风险防控团队，为企业权益保驾护航",
    },
  ],
});

const toggleExpand = (id: number) => {
  // 遍历所有项，根据id更新isExpanded
  state.items.forEach((item) => {
    if (item.id === id) {
      //进行渲染
      titleList.value.children[id].style.height = "8rem";
      item.isExpanded = true;
    } else {
      item.isExpanded = false; // 如果不是当前点击的项，则隐藏其更多信息
    }
  });
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  padding: 0;
  margin: 0;
  .footer {
    width: 80%;
    height: 40rem;
    margin: 3rem auto;
    background-color: #f0f0f0;
    display: flex;
    justify-content: space-between;
    .footer-box {
      width: calc(45% - 5rem);
      height: 100%;
      padding-top: 3rem;
      padding-left: 5rem;
      h1 {
        text-align: center;
      }
      .title {
        height: 5rem;
        border: 2px solid #82c4b3;
        border-left: none;
        border-right: none;
        .title-box {
          height: 3rem;
          width: 100%;
          display: flex;
          justify-content: space-between;
          span {
            font-size: 2rem;
            margin-right: 2rem;
          }
        }
      }
    }
    img {
      width: 50%;
      height: 100%;
    }
    
  }
}
.cart_box {
    width: 80%;
    height: 40rem;
    margin: 0 auto;
    margin-top: 5rem;
    }
.process{
  width: 80%;
    height: 60rem;
    margin: 0 auto;
    margin-top: 5rem;
    // background-color: #82c4b3;
}    
</style>
