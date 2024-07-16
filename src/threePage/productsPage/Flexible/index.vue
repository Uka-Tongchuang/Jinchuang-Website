<template>
  <div class="content">
    <div class="trapezoid">
      <div class="merchant">
        <h1>{{ state?.title }}</h1>
        <p v-html="state?.content"></p>
      </div>
      <img src="../../../assets/swpOne.jpg" alt="" class="urlImg" />
    </div>
    <div class="cart_box">
        <FleBleGoodCom/>
    </div>
    <div class="footer">
      <div class="footer-box">
        <h1>服务价值</h1>
        <div ref="titleList">
          <div
            v-for="item in state.items"
            :key="item.id"
            @click="toggleExpand(item.id)"
            class="title"
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
      <img src="../../../assets/swpTwo.jpg" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import dataList from "../../../utils/producDes.json";
import FleBleGoodCom from '@/components/FleBleGoodCom.vue';

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
  console.log(dataList);
  state.title = dataList[5].typetitle;
  state.content = dataList[5].data[0].content;
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
  .trapezoid {
    position: relative;
    width: 100%;
    height: 40rem;
    .merchant {
      background-color: #261f4b;
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
    width: 90%;
    height: 40rem;
    margin: 0 auto;
    margin-top: 5rem;
    }
</style>
