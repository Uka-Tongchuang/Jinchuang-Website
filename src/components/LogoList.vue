<template>
  <div class="content">
    <div class="slider">
      <div class="slide-track">
        <div class="slide" v-for="item,index in arr2" :key="index">
          <img :src="item.idVieo" class="img" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import swpOne from "../assets/th.jpg";
import ajisen from "../assets/logo/logo/ajisen.jpg"; //味千拉面
import alibaba from "../assets/logo/logo/alibaba.jpg"; //阿里
import ane from "../assets/logo/logo/anneng.jpg"; //安能
import boss from "../assets/logo/logo/boss.jpg"; //boss
import huoguo from "../assets/logo/logo/huoguo.jpg";
import corporation from "../assets/logo/logo/corporation.jpg"; //中储粮
import cotti from "../assets/logo/logo/cotti.jpg"; //库迪咖啡
import dingtalk from "../assets/logo/logo/dingtalk.jpg"; //钉钉
import ems from "../assets/logo/logo/youzhen.jpg"; //邮政
import EMS from "../assets/logo/logo/chinayou.jpg"; //邮政
import favicon from "../assets/logo/logo/favicon.jpg"; //抖音
import luckin from "../assets/logo/logo/luckin.jpg"; // 瑞幸
import meitaun from "../assets/logo/logo/meitaun.jpg"; //美团
import miduoduo from "../assets/logo/logo/miduoduo.jpg"; //米多多
import quick from "../assets/logo/logo/quick.jpg"; //快手
import sfexpress from "../assets/logo/logo/sfexpress.jpg"; //顺丰
import simple from "../assets/logo/logo/simple.jpg"; //朴朴
import tasting from "../assets/logo/logo/tasting.jpg"; //点米
import taobao from "../assets/logo/logo/taobao.jpg"; //淘宝
import changzuimao from "../assets/logo/logo/changzuimao.jpg"; //长嘴猫
import { reactive,computed } from "vue";
const state = reactive({
  arr: [
    { 
      idVieo: favicon,
    },
    { 
      idVieo: luckin,
    },
    { 
      idVieo: ajisen,
    },
    { 
      idVieo: cotti,
    },
    { 
      idVieo: huoguo,
    },
    { 
      idVieo: corporation,
    },
    { 
      idVieo: sfexpress,
    },
    { 
      idVieo: simple,
    },
    { 
      idVieo: meitaun,
    },
    { 
      idVieo: boss,
    },
    { 
      idVieo: tasting,
    },
    { 
      idVieo: EMS,
    },
    { 
      idVieo: ane,
    },
    { 
      idVieo: dingtalk,
    },
    { 
      idVieo: alibaba,
    },
    { 
      idVieo: taobao,
    },
    { 
      idVieo: ems,
    },
    { 
      idVieo: miduoduo,
    },
    { 
      idVieo: changzuimao,
    },
    { 
      idVieo: quick,
    },
  ],
  arr1: [
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
      idVieo: huoguo,
    },
  ],
  arr2: [
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
  ],
  arr3: [
    {
      id: 11,
      idVieo: tasting,
    },
    {
      id: 12,
      idVieo: EMS,
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
  ],
  arr4: [
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
      idVieo: changzuimao,
    },
    {
      id: 20,
      idVieo: quick,
    },
  ],
});

const repeatedImageArrays = computed(() => {
  let result = [];
  for (let i = 0; i < 10; i++) {
    result.push(state.arr); 
  }
  return result;
}); 
const arr=repeatedImageArrays.value.flat()
const arr2:any[]=[]
arr.map((item)=>{ 
  arr2.push(item)
}) 
</script>

<style lang="scss" scoped>

@media screen and (max-width: 768px) {
 
}
@mixin white-gradient {
	background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
}

.content {
  width: 100%;
  margin: 0 auto;
}



@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.slider {
  background: white;
  // box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  height: 12rem;
  width: 100%;
  margin: auto;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-items: center;
  top: -10rem;
}
.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.slider::before {
  left: 0;
  top: 0;
}
.slider .slide-track {
  -webkit-animation: scroll 800s linear infinite;
  animation: scroll 800s linear infinite;
  display: flex;
  width: calc(25rem * 200);
}
.slider .slide {
  height: 5rem;
  width: fit-content;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 2vw;
  margin-right: 2vw;
  .img{
    height: 100%;
    width: auto;
  }
}
</style>

