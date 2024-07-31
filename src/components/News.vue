<template>
  <div class="news_box">
    <h1>公司新闻</h1>
    <div class="card_list">
      <div v-for="(item, index) in state.arr" :key="item.id">
        <el-card style="max-width: 480px; height: 700px">
          <img
            :src="item.idVieo"
            alt=""
            @mouseenter="mouseenterEvent(index)"
            @mouseleave="mouseleaveEvent(index)"
            ref="imgRef"
          />
          <p class="time">2024-06-25</p>
          <h4 class="headline">今创集团积极践行社会责任照亮乡村振兴之路</h4>
          <span class="introduce"
            >&emsp;
            &emsp;2024年6月20-21日，锐博集团参加了广州市天河区人社局组织的梅州兴宁市坭陂镇结对帮扶工作座谈会及捐</span
          >
          <el-button type="primary" class="operation" 
            >查看更多 <el-icon size="16"><Right /></el-icon></el-button
          >
        </el-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref, reactive, onMounted } from "vue"; 
import { Right  } from "@element-plus/icons-vue";
//api
const imgRef = ref();
const state = reactive({
  getNewsData: [],
  arr: [
    {
      id: 1,
      idVieo: "data:image/jpeg;base64,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",
    },
    {
      id: 2,
      idVieo: "https://th.bing.com/th?id=OIP.TqOcb_ha068A0hnDZEbrGgHaEX&w=325&h=192&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },
  ],
});
// 获取新闻数据
// 鼠标滑入事件
const mouseenterEvent = (index:number) => {
  imgRef.value[index].style.transform = "scale(1.1)";
  imgRef.value[index].style.transition = "0.2s";
  imgRef.value[index].style.borderRadius = "1rem";
};
// 鼠标离开事件
const mouseleaveEvent = (index:number) => {
  imgRef.value[index].style.transform = "scale(1)";
  imgRef.value[index].style.transition = "0.2s";
  imgRef.value[index].style.borderRadius = "0";
};
</script>

<style scoped lang="scss">
.news_box {
  width: 60%;
  height: 40rem;
  margin: 0 auto;
  background-color: beige;
  h1 {
    width: 100%;
    height: 5rem;
    text-align: center;
    line-height: 5rem;
  }
  .card_list {
    display: flex;
    justify-content: space-around;
    img {
      width: 20rem;
      height: 15rem;
      display: block;
      margin: 0 auto;
    }
    .introduce {
      font-size: 0.8rem;
      color: #909399;
      text-indent: 2rem;
    }
    .operation {
      display: block;
      margin-top: 2rem;
    }
  }
}
</style>
