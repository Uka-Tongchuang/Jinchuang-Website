<template>
  <div class="trapezoid">
    <div class="merchant">
      <h1>{{ state?.title }}</h1>
      <p v-html="state?.content"></p>
    </div>
    <img src="../../assets/img/swpOne.jpg" alt="" class="urlImg" />
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import dataList from "../../utils/producDes.json";
const state = reactive({
  title: "",
  content: "",
});
onMounted(() => {
  console.log(dataList);
  state.title = dataList[0].typetitle;
  state.content = dataList[0].data[0].content as string;
});
</script>
<style lang="scss" scoped>
@media screen and (max-width: 2660px) {
  .trapezoid {
    position: relative;
    width: 100%;
    height: 37rem;
    margin-top: -5rem;
    .merchant {
      background: #2758e9;
      height: 40rem;
      width: 100%;
      color: white;
      clip-path: polygon(0 0, 73% 0, calc(100% - 11rem) 100%, 0 100%);
      h1 {
        padding-top: 10rem;
        margin-left: 5rem;
        font-size: 3rem;
      }
      p {
        width: 33rem;
        margin-left: 5rem;
        font-size: 1.5rem;
      }
    }
    .urlImg {
      clip-path: polygon(0 0, 0 0, 100% 500%, 100% 0);
      width: 53%;
      height: 40rem;
      // background: url("../../../assets/swpOne.jpg");
      position: absolute;
      top: 0;
      right: 0;
    }
  }
}
@media screen and (max-width: 768px) {
  .trapezoid {
    position: relative;
    width: 100%;
    height: 30rem;
    margin-top: -5rem;
    .merchant {
      z-index: 99;
      // background: url("../../../assets/swpOne.jpg");
      object-fit: contain;
      position: absolute;
      top: 1rem;
      left: 6.5rem; 
      height: 30rem;
      width: 33rem;
      color: black;
      clip-path: polygon(0 0, 73% 0, calc(100% - 5rem) 100%, 0 100%);
      h1 {
        padding-top: 5rem;
        margin-left: 0;
        font-size: 1.5rem;
      }
      p {
        height: 15rem;
        width: 12rem;
        margin-left: 0;
        font-size: 1rem;
      }
    }
    .urlImg { 
      clip-path: polygon(0 0, 0 0, 0 500%, 132% 0);
      width: 100%;
      height: 30rem; 
    }
  }
}
</style>
