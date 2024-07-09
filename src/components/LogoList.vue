<template>
    <div class="merchant">
        合作商家
    </div>
    <div class="logo-carousel">  
    <div class="carousel-wrapper">  
      <div class="carousel-items">  
        <div class="logo-item" v-for="(logo, index) in state.arr" :key="index">  
          <div class="logo-image">

            <img :src="logo.idVieo" alt="Logo">  
          </div>
        </div>  
        <!-- 复制前10个logo以实现无缝循环 -->  
        <div class="logo-item" v-for="(logo, index) in state.arr.slice(0, 10)" :key="state.arr.length + index">  
          <div class="logo-image">

            <img :src="logo.idVieo" alt="Logo">  
          </div>
        </div>  
      </div>  
    </div>  
  </div> 
</template>

<script setup lang="ts">
import swpOne from "../assets/th.jpg";
import { reactive } from "vue";
const state = reactive({
  arr: [
    {
      id: 1,
      idVieo: swpOne,
    },
    {
      id: 2,
      idVieo: swpOne,
    },
    {
      id: 3,
      idVieo: swpOne,
    },
    {
      id: 4,
      idVieo: swpOne,
    },
    {
      id: 5,
      idVieo: swpOne,
    },
    {
      id: 6,
      idVieo: swpOne,
    },
    {
      id: 7,
      idVieo: swpOne,
    },
    {
      id: 8,
      idVieo: swpOne,
    },
    {
      id: 9,
      idVieo: swpOne,
    },
    {
      id: 10,
      idVieo: swpOne,
    },
    {
      id: 11,
      idVieo: swpOne,
    },
    {
      id: 12,
      idVieo: swpOne,
    },
    {
      id: 13,
      idVieo: swpOne,
    },
    {
      id: 14,
      idVieo: swpOne,
    },
    {
      id: 15,
      idVieo: swpOne,
    },
    {
      id: 16,
      idVieo: swpOne,
    },
    {
      id: 17,
      idVieo: swpOne,
    },
    {
      id: 18,
      idVieo: swpOne,
    },
    {
      id: 19,
      idVieo: swpOne,
    },
    {
      id: 20,
      idVieo: swpOne,
    },
    {
      id: 21,
      idVieo: swpOne,
    },
    {
      id: 22,
      idVieo: swpOne,
    },
    {
      id: 23,
      idVieo: swpOne,
    },
    {
      id: 24,
      idVieo: swpOne,
    },
    {
      id: 25,
      idVieo: swpOne,
    },
    {
      id: 26,
      idVieo: swpOne,
    },
  ],
});
</script>

<style lang="scss" scoped>
.merchant{
    font-size: 4rem;
    color: red; 
    text-align: center;
}

.logo-carousel {  
  margin-top: 1rem;
  overflow: hidden;  
  position: relative;  
  height: 15rem; /* 例如，如果每个logo高度是50px，则这里是100px */  
  width: 100%; /* 或者你需要的宽度 */  
}  
  
.carousel-wrapper {  
  height: 100%;  
  display: flex;  
  flex-direction: column;  
  align-items: center; /* 如果需要水平居中 */  
}  
  
.carousel-items {  
  display: flex;  
  flex-wrap: wrap;  
  animation: scrollUp 10s linear infinite; /* 根据需要调整动画时长 */  
}  
  
.logo-item {  
  width: calc(100% / 5); /* 假设容器宽度足够，每个logo占据20%的宽度 */  
  height:10rem;  
  box-sizing: border-box;  
  /* 可以添加padding, margin等样式来调整logo之间的间距 */  
}  
  .logo-image{
    width: 5rem;
    height: 5rem;
  }
.logo-item img {  
  width: 100%;  
  height: 100%;  
  display: block; /* 移除图片下方的默认间隙 */  
}  
  
@keyframes scrollUp {  
  0% {  
    transform: translateY(0);  
  }  
  100% {  
    transform: translateY(-10rem); /* 向上移动两行的距离 */  
  }  
} 
</style>
