<template>
  <div class="content">
    <div class="merchant">
      <h1>{{ state?.title }}</h1>
      <p v-html="state?.content"></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import dataList from "../../utils/producDes.json";
const state = reactive<any>({
  title: "",
  content: "",
});
onMounted(() => {
  console.log(dataList);
  state.title = dataList[3].data[0].title;
  state.content = dataList[3].data[0].content;
});
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  padding: 0;
  margin: 0;
  .merchant {
    background-color: aqua;
    width: 100%;
    height: 30rem;
    // padding-top: 7rem;
    // padding-left: 7rem;
    margin: auto;
    h1 {
      font-size: 4rem;
    }
    p {
      font-size: 2rem;
    }
  }
}
</style>
