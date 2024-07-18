<template>
  <div class="home_child_box">
    <!-- 第一块区域————————轮播图 -->
    <div >
      <el-carousel height="40rem" autoplay :interval="3000">
        <el-carousel-item v-for="item in arr.arr" :key="item.id">
          <div class="description_box">
          </div>
          <img :src="item.idVieo" alt="" style="display: block; width: 100%; height: 100%; margin: 0; padding: 0;"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 第二块区域——————公司宣传 -->
    <div class="main_content">
      <Company/>
    </div>
    <!-- 第三块区域——————业务 -->
    <div class="main_merchant">
      <ProductsCom />
    </div>
    <!-- 第四块区域——————公司成就 -->
    <div class="company-achievement"> 
      <CompanyAchievement/>
    </div>
      <!-- 第五块区域——————合作商家 -->
     <div class="business-partner">
       <LogoList/>
     </div>
    
  </div>
</template>

<script setup lang="ts">
import Company from "./Company.vue";
import ProductsCom from "./ProductsCom.vue";
import CompanyAchievement from "./CompanyAchievement.vue";
import LogoList from "./LogoList.vue";
import swpOne from "../assets/swpOne.jpg";
import swpTwo from "../assets/swpTwo.jpg";
import homePage from "../assets/img/homePage.png";
import homePage2 from "../assets/img/homePage2.png";
import { reactive } from "vue";
const arr = reactive({
  arr: [
    {
      id: 1,
      idVieo: homePage,
    },
    {
      id: 2,
      idVieo: homePage2,
    },
  ],
});
</script>

<style scoped lang="scss">
.demonstration {
  color: var(--el-text-color-secondary);
}
.home_child_box{
  width: 100%;
  height: 100%;
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
.description_box{
  position: fixed;
  top: 5rem;
  left: 30rem;
  width: 60%;
  height: 100%;
  margin: 10rem auto;
  .description{
    font-size: 2rem;
    font-weight: 700;
  }
}
// 第二个区域
.main_content {
  width: 100%;
  height: 32rem;
  background: url("../assets/main.jpg") 100%;
  margin: 5rem 0 ;
}
// 第三个区域

// 第四个区域
.business-partner{
 width: calc(100% - 4rem);
 height:20rem; 
 margin: 0 auto; 
}
.company-achievement{
  background: url(../assets/ditu.png) no-repeat 100%;
background-position: center;
 width: calc(60% - 4rem);
 height: 50rem; 
 margin: 0 auto; 
}
</style>
