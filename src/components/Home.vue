<template>
  <div class="home_child_box">
    <!-- 第一块区域————————轮播图 -->
    <div class="block text-center">
      <el-carousel height="40rem" autoplay :interval="3000">
        <el-carousel-item v-for="item in arr.arr" :key="item.id">
          <h2>文本显示</h2>
          <img :src="item.idVieo" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 第二块区域——————公司宣传 -->
    <div class="main_content">
      <h4>公司宣传广告</h4>
    </div>
    <!-- 第三块区域——————公司宣传 -->
    <div class="main_merchant">
      <h4>公司合作商家</h4>
    </div>
    <News/>
  </div>
</template>

<script setup lang="ts">
import  News  from "./News.vue";
import swpOne from "../assets/swpOne.jpg";
import swpTwo from "../assets/swpTwo.jpg";

import { reactive } from "vue";
const arr = reactive({
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
</script>

<style scoped lang="scss">
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.Slideshow_img {
  width: 100%;
  height: 100%;
}
// 第二个区域
.main_content {
  width: 100%;
  height: 600px;
  background: url("../assets/main.jpg") 100%;
}
// 第三个区域
.main_merchant {
  width: 100%;
  height: 600px;
  background: url("../assets/Slideshow.jpeg") 100%;
}
</style>
