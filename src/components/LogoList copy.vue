<template>
  <div class="content">
    <div class="merchant">
        合作商家
    </div> 
    <div class="slider">
    <div class="slide-track">
        <div class="slide" v-for="item in state.arr" :key="item.id">
          <img :src="item.idVieo" height="100" width="250" alt="" />
        </div>
      </div>
    </div>  
  </div>
</template>

<script setup lang="ts">
import swpOne from "../assets/th.jpg";
import ajisen from "../assets/拉面.png"; //味千拉面
import alibaba from "../assets/阿里巴巴.png"; //阿里
import ane from "../assets/安能.png"; //安能
import boss from "../assets/boss.png"; //boss
import huoguo from "../assets/1718.png"
import corporation from "../assets/中储粮.png"; //中储粮
import cotti from "../assets/咖啡.png"; //库迪咖啡
import dingtalk from "../assets/钉钉.png"; //钉钉
import ems from "../assets/邮政.png"; //邮政
import EMS from "../assets/ems.png"; //邮政
import favicon from "../assets/抖音.png"; //抖音
import luckin from "../assets/瑞幸.png"; // 瑞幸
import meitaun from "../assets/美团.png";  //美团
import miduoduo from "../assets/米多多.png"; //米多多
import quick from "../assets/快手.png"; //快手
import sfexpress from "../assets/顺丰.png"; //顺丰
import simple from "../assets/朴朴.png"; //朴朴
import tasting from "../assets/点米科技.png"; //点米
import taobao from "../assets/淘宝.png"; //淘宝
import changzuimao from "../assets/微信图片_20240711181538.png"; //淘宝
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
      idVieo: huoguo,
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
    arr1:[
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
    arr2:[
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
    arr3:[
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
    arr4:[
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
    ]
});
</script>

<style lang="scss" scoped>
.content{
  width: 80%;
  margin: 0 auto;
}
.merchant{
    font-size: 4rem; 
    font-weight: 700;
    text-align: center;
}
 @-webkit-keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}
.slider {

  background: white;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  height: 100px;
  margin:2rem auto;
  overflow: hidden;
  position: relative; 
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
  -webkit-animation: scroll 40s linear infinite;
          animation: scroll 40s linear infinite;
  display: flex;
  width: calc(250px * 14);
}
.slider .slide {
  height: 100px;
  width: 250px;
}
</style>
