<template>
  <div class="content">
  <FlexibleBanner/>
    <div class="process">
      <h1>服务流程</h1>
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

const titleList = ref();
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
    height: 40rem;
    margin: 0 auto;
    margin-top: 5rem;
    background-color: #82c4b3;
}    
</style>
