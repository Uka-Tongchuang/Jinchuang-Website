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
        <!-- <div class="logo-item" v-for="(logo, index) in state.arr.slice(0, 10)" :key="state.arr.length + index">  
          <div class="logo-image">
            <img :src="logo.idVieo" alt="Logo">  
          </div>
        </div>   -->
      </div>  
    </div>  
  </div> 
</template>

<script setup lang="ts">
import swpOne from "../assets/th.jpg";
import ajisen from "../assets/ajisen-ramen.jpg"; //味千拉面
import alibaba from "../assets/Alibaba.png"; //阿里
import ane from "../assets/ane.jpg"; //安能
import boss from "../assets/boss.png"; //boss
import corporation from "../assets/corporation.jpg"; //中储粮
import cotti from "../assets/cotti.png"; //库迪咖啡
import dingtalk from "../assets/DingTalk.png"; //钉钉
import ems from "../assets/ems.png"; //邮政
import favicon from "../assets/favicon.png"; //抖音
import luckin from "../assets/luckin.png"; // 瑞幸
import meitaun from "../assets/meituan.png";  //美团
import miduoduo from "../assets/miduoduo.png"; //米多多
import quick from "../assets/quick.webp"; //快手
import sfexpress from "../assets/S.F. Express.png"; //顺丰
import simple from "../assets/simple.jpg"; //朴朴
import tasting from "../assets/tasting.jpg"; //点米
import taobao from "../assets/taobao.png"; //淘宝
import { reactive } from "vue";
const state = reactive({
  arr: [
    {
      id: 1,
      idVieo: favicon,
    },
    {
      id: 2,
      idVieo: luckin,
    },
    {
      id: 3,
      idVieo: ajisen,
    },
    {
      id: 4,
      idVieo: cotti,
    },
    {
      id: 5,
      idVieo: cotti,
    },
    {
      id: 6,
      idVieo: corporation,
    },
    {
      id: 7,
      idVieo: sfexpress,
    },
    {
      id: 8,
      idVieo: simple,
    },
    {
      id: 9,
      idVieo: meitaun,
    },
    {
      id: 10,
      idVieo: boss,
    },
    {
      id: 11,
      idVieo: tasting,
    },
    {
      id: 12,
      idVieo: ems,
    },
    {
      id: 13,
      idVieo: ane,
    },
    {
      id: 14,
      idVieo: dingtalk,
    },
    {
      id: 15,
      idVieo: alibaba,
    },
    {
      id: 16,
      idVieo: taobao,
    },
    {
      id: 17,
      idVieo: ems,
    },
    {
      id: 18,
      idVieo: miduoduo,
    },
    {
      id: 19,
      idVieo: swpOne,
    },
    {
      id: 20,
      idVieo: quick,
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
  margin-left: 4rem;
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
    width: 7rem;
    height: 7rem;
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
