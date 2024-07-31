<template>
  <div class="main">
    
    <div class="content">
      <h1>{{ state?.title }}</h1>
    </div>
    
    <div class="news-subject">
      <el-card style="max-width: 100%">
        <div @click="goBackBtn" style="cursor: pointer;">
      {{ `<` }} 返回列表
    </div>
        <img :src="state?.media" alt="">
        <p>日期：{{ state?.data }}</p>
        <p>作者：{{ state?.author }}</p>
        <h3>文章内容</h3>
        <div v-html="state?.content" style="text-indent:2rem"></div>
  </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute,useRouter } from "vue-router";
const route=useRoute()
// console.log(route);
const router=useRouter()
const id=ref(route.params.id)
const state = ref({
  title: '标题',
  media: 'https://th.bing.com/th?id=OIP.CrKeUBnJx0CfPSoIDAijVgHaFJ&w=299&h=208&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
  data: '2022.08.11',
  author: '暂无',
  content: '<p>文章内容</p>'
});

const goBackBtn=()=>{
  router.back()
}
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
    margin: 2rem auto;
    .time {
      text-align: center;
    }
  }
}
</style>
