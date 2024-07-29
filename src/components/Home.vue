<template>
  <div class="home_child_box">
    <!-- 第一块区域————————轮播图 -->
    <div>
      <el-carousel  autoplay :interval="3000">
        <el-carousel-item v-for="item in arr.arr" :key="item.id">
          <div class="description_box"></div>
          <img
            :src="item.idVieo"
            alt=""
            style="
              display: block;
              width: 100%;
              height: 100%;
              margin: 0;
              padding: 0;
            "
          />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 第二块区域——————公司宣传 -->
    <div class="main_content">
      <Company />
    </div>
    <!-- 第五块区域——————合作商家 -->
    <div class="business-partner">
      <LogoList />
    </div>
    <!-- 第三块区域——————业务 -->
    <div class="main_merchant">
      <ProductsCom />
    </div>
    <!-- 第四块区域——————公司成就 -->
    <div class="company-achievement">
      <CompanyAchievement />
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
import homePage from "../assets/img/homebanner.png";
import homePage2 from "../assets/img/homebanner.png";
import { reactive } from "vue";
const arr = reactive({
  arr: [
    {
      id: 1,
      idVieo: homePage,
    },
    // {
    //   id: 2,
    //   idVieo: homePage2,
    // },
  ],
});
</script>

<style scoped lang="scss">
@media screen and (max-width: 2660px) {
  ::v-deep(.el-carousel__container){
    height: 50rem;
  }
  .demonstration {
    color: var(--el-text-color-secondary);
  }
  .home_child_box {
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
  .description_box {
    position: fixed;
    top: 5rem;
    left: 30rem;
    width: 60%;
    height: 100%;
    margin: 10rem auto;
    .description {
      font-size: 2rem;
      font-weight: 700;
    }
  }
  // 第二个区域
  .main_content {
    width: 70%;
    height: 34rem;
    background: url("../assets/main.jpg") 100%;
    margin: 0 auto;
    position: relative;
    top: -16rem;
    z-index: 99;
  }
  // 第三个区域
  .main_merchant {
    width: 100%;
    height: 75rem;
    background-color: rgb(241, 245, 249);
    margin-top: -16rem;
  }
  // 第五个区域
  .business-partner {
    width: calc(100% - 4rem);
    height: 20rem;
    margin: 0 auto;
    margin-top: 0rem;
    margin-bottom: 7.5rem;
  }

  .company-achievement {
    position: relative;
    height: 50vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-items: center;
    background: url(../assets/ditu.png) no-repeat 100%;
    background-size: contain;
    background-position: center;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  .company-achievement::before {
    content: " ";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    // width: 100%;
    // height: 100%;
    // opacity: 0.5;
    background-color: rgba(255, 255, 255, 0.6);
  }
}
@media screen and (max-width: 768px) {
   ::v-deep(.el-carousel__container){
    height: 20rem;
  }
  .main_content{
    width: 80%;
    height: 46rem;
    top: -3rem;
  }
   .business-partner{
    height: 0;
    margin-top: 9rem;
   }
   .main_merchant{
    min-height: 95rem;
    margin-top: 0;
   }
}
</style>
