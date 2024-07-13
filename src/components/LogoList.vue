<template>
    <div class="merchant">
        合作商家
    </div>   
      <!-- <div class="carousel-items">  
        <div class="logo-item" v-for="(logo, index) in state.arr" :key="index">  
          <div class="logo-image">
            <img :src="logo.idVieo" alt="Logo">  
          </div>
        </div>  
        <! 复制前10个logo以实现无缝循环 -->  
        <!-- <div class="logo-item" v-for="(logo, index) in state.arr.slice(0, 10)" :key="state.arr.length + index">  
          <div class="logo-image">
            <img :src="logo.idVieo" alt="Logo">  
          </div>
        </div>   >
      </div>   -->

       <!-- <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="logo in state.arr" :key="logo.id">
             <img :src="logo.idVieo" alt="Logo">  
          </el-carousel-item>
        </el-carousel>
    </div>  -->
      <div class="card-list">
          <el-carousel :interval="1000" arrow="always" indicator-position="none" type="card" style="width: 100%; height: 100%;position: relative;">
            <el-carousel-item v-for="item in state.arr" :key="item.id">
              <div class="fake-card">
               <img :src="item.idVieo" alt="Logo"> 
              </div>
            </el-carousel-item>
          </el-carousel>
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
import EMS from "../assets/EMS.png"; //邮政
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
});
</script>

<style lang="scss" scoped>
::v-deep(.el-carousel__arrow--right){
  display: none !important;
}
::v-deep(.el-carousel__arrow--left){
  display: none !important;
}
.el-carousel__item[data-v-6d0c6613]:nth-child(2n+1){
  background-color: white;
} 
.el-carousel__item[data-v-6d0c6613]:nth-child(2n){
  background-color: white;
} 
.el-carousel__item--card{
  width: 20%;
}
.card-list{
  margin-top: 2rem;
}
.fake-card {
  position: absolute; 
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: inline-block;
  width: 75%; 
  height: 10rem;
  box-sizing: border-box;
  img{
    width: 100%;
    height: 100%;
  }
}

.card-content {
  height: 100%;
  background-color: #f0f0f0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
  .img-box{
    width: 10rem;
    height: 5rem;
  }
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.merchant{
    font-size: 4rem; 
    font-weight: 700;
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
