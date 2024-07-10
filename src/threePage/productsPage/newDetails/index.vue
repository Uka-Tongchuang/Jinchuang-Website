<template>
  <div class="main">
    <div class="content">
      <h1>{{ state?.title }}</h1>
    </div>
    <div class="news-subject">
      <div class="time">
        <p>{{ state?.data }}</p>
        <p>{{ state?.author }}</p>
      </div>
      <div>
        <h3>文章内容</h3>
        <div v-html="state.content"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
import { getDataApi } from "../../../api/request";
const state = reactive({
  title: "",
  data: "",
  author: "",
  content: "",
});
onMounted(async () => {
  const { data } = await getDataApi(13);
  state.title = data.title;
  state.data = data.data;
  state.author = data.author;
  state.content = data.content;
  console.log(data, "frjekifghreui");
});
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
    h1 {
      font-size: 5rem;
      text-align: center;
      line-height: 20rem;
      margin: 0;
      padding: 0;
    }
  }
  .news-subject {
    width: 80%;
    margin: 0 auto;
    .time {
      text-align: center;
    }
  }
}
</style>
