<template>
  <div class="content">
    <LaborBanner />
    <!-- 服务模式 -->
    <div class="cart_box">
      <LaborCartComVue />
    </div>
    <!-- 服务流程 -->
    <LaborService />
    <!-- 服务内容 -->
    <div class="content-box">
      <h1>服务内容</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import LaborBanner from "../../../components/bannerList/LaborBanner.vue";
import LaborService from "../../../components/Service/LaborService.vue";
import LaborCartComVue from "../../../components/laborComponent/LaborCartCom.vue";
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  padding: 0;
  margin: 0;

  .cart_box {
    width: 90%;
    height: 40rem;
    margin: 0 auto;
    margin-top: 5rem;
  }
  .flow-box {
    width: 90%;
    min-height: 40rem;
    background-color: #6179b5;
    margin: auto;
  }
  .content-box {
    width: 90%;
    min-height: 40rem;
    background-color: #6179b5;
    margin: auto;
  }
}
</style>
