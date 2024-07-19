<template>
  <div class="content">
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
import ajisen from "../assets/ajisen.png"; //味千拉面
import alibaba from "../assets/alibaba.png"; //阿里
import ane from "../assets/ane.png"; //安能
import boss from "../assets/boss.png"; //boss
import huoguo from "../assets/huoguo.png";
import corporation from "../assets/corporation.png"; //中储粮
import cotti from "../assets/cotti.png"; //库迪咖啡
import dingtalk from "../assets/dingtalk.png"; //钉钉
import ems from "../assets/EMSA.png"; //邮政
import EMS from "../assets/EMS.png"; //邮政
import favicon from "../assets/favicon.png"; //抖音
import luckin from "../assets/luckin.png"; // 瑞幸
import meitaun from "../assets/meitaun.png"; //美团
import miduoduo from "../assets/miduoduo.png"; //米多多
import quick from "../assets/quick.png"; //快手
import sfexpress from "../assets/sfexpress.png"; //顺丰
import simple from "../assets/simple.png"; //朴朴
import tasting from "../assets/tasting.png"; //点米
import taobao from "../assets/taobao.png"; //淘宝
import changzuimao from "../assets/changzuimao.png"; //长嘴猫
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
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  margin: 0 auto;
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
  // box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  height: 100px;
  margin: -0auto;
  overflow: hidden;
  position: relative;
  top: -6rem;
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
