<template>
  <div class="content">
    <OperateBanner />
    <div class="card">
      <h1>服务内容</h1>
      <div class="content_cart_list_box">
       <PersonnelComCartVue/>
      </div>
    </div>

    <div class="advantage">
      <div class="title">
        <h1>服务优势</h1>
        <p>
          服务优势服务优势服务优势服务优势服务优势服务优势服务优势服务优势服务优势服务优势服务优势服务优势服务优势
        </p>
      </div>
      <div class="imgUrl">
        <img src="../../../assets/swpOne.jpg" alt="" />
      </div>
      <div class="card-list">
        <p>专业化顾问团队</p>
        <p>数字化管理平台</p>
        <p>标准化服务流程</p>
        <p>多元化解决方案</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import OperateBanner from "../../../components/bannerList/OperateBanner.vue";
import PersonnelComCartVue from "../../../components/PersonnelManagement/PersonnelComCart.vue";
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  padding: 0;
  margin: 0;

  .card {
    width: 80%;
    height: 50rem;
    margin: 2rem auto;
    h1{
      font-size: 4rem;
    }
    .content_cart_list_box{
      width: 100%;
      height: 40rem;
    }
  }
  .advantage {
    width: 80%;
    height: 70rem;
    margin: auto;
    position: relative;
    display: flex;
    justify-content: space-between;
    .title {
      width: 50rem;
      margin-top: 5rem;
      h1 {
        font-size: 4rem;
      }
      p {
        font-size: 2rem;
      }
    }
    .imgUrl {
      width: 50rem;
      height: 70rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .card-list {
      width: 80%;
      height: 10rem;
      position: absolute;
      background-color: black;
      color: white;
      line-height: 6rem;
      opacity: 0.4;
      font-size: 2rem;
      bottom: 6rem;
      left: 0;
      display: flex;
      justify-content: space-around;
      p {
        width: 23%;
        text-align: center;
        border-right: 1px solid white;
      }
      p:last-child {
        border-right: none;
      }
    }
  }
}
</style>
