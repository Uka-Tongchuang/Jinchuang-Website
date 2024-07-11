<template>
  <div class="main">
    <div class="content">
      <h1>客户案例-列表</h1>
    </div>
    <div class="text">
      <el-card
        style="max-width: 100%; position: relative; cursor: pointer"
        @click="goCenterDetail"
      >
        <template #header>客户案例--中心仓仓储外包</template>

        <div class="conten">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            style="width: 20"
          />
          <div class="desc_box">
            <h3>客户案例--中心仓仓储外包</h3>
          </div>
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            style="
              width: 70%;
              height: 18rem;
              position: absolute;
              left: 20%;
              bottom: 3rem;
              z-index: '66';
            "
          />
        </div>
      </el-card>

      <el-card
        style="
          max-width: 100%;
          position: relative;
          margin-top: 2rem;
          cursor: pointer;
        "
        @click="goFootCase"
      >
        <template #header>客户案例--餐饮连锁</template>

        <div class="conten">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            style="width: 20"
          />
          <div class="desc_box">
            <h3>客户案例--餐饮连锁</h3>
          </div>
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            style="
              width: 70%;
              height: 18rem;
              position: absolute;
              left: 20%;
              bottom: 3rem;
              z-index: '66';
            "
          />
        </div>
      </el-card>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
// 跳转到客户案例-中心仓库
const goCenterDetail = () => {
  router.push("/home/special/specialfirst");
};
//跳转客户案例--餐饮
const goFootCase = () => {
  router.push("/home/special/specialsecond");
};
</script>
  
  <style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-y: hidden;
  .content {
    background-color: red;
    width: 100%;
    height: 20rem;
    margin: 0 auto;
    position: relative;
    h1 {
      font-size: 5rem;
      text-align: center;
      line-height: 20rem;
      margin: 0;
      padding: 0;
    }
  }
  .text {
    width: 80%;
    margin: 2rem auto;
  }
}
</style>
  