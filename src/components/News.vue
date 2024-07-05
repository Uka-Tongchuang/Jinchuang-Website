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
          <el-button type="primary" class="operation" @click="detailsEvent(e)"
            >查看更多 <el-icon size="16"><Right /></el-icon></el-button
          >
        </el-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import swpOne from "../assets/swpOne.jpg";
import swpTwo from "../assets/swpTwo.jpg";
import { ref, reactive, onMounted } from "vue"; 
import { Right  } from "@element-plus/icons-vue";
//api
import { getDataApi } from "@/api/request";
const imgRef = ref();
const state = reactive({
  getNewsData: [],
  arr: [
    {
      id: 1,
      idVieo: swpOne,
    },
    {
      id: 2,
      idVieo: swpTwo,
    },
  ],
});
// 获取新闻数据
onMounted(async () => {
  const {data} = await getDataApi();
  console.log("1232", data);
  state.getNewsData=data.data
});
// 鼠标滑入事件
const mouseenterEvent = (index) => {
  imgRef.value[index].style.transform = "scale(1.1)";
  imgRef.value[index].style.transition = "0.2s";
  imgRef.value[index].style.borderRadius = "1rem";
};
// 鼠标离开事件
const mouseleaveEvent = (index) => {
  imgRef.value[index].style.transform = "scale(1)";
  imgRef.value[index].style.transition = "0.2s";
  imgRef.value[index].style.borderRadius = "0";
};
// 查看详情
const detailsEvent = (e) => {
  console.log(e);
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
