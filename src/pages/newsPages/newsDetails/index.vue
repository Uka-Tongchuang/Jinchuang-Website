<template>
  <div class="main">
    <div class="content">
      <h1>新闻标题</h1>
    </div>
    <div class="text">
      <div v-if="!state || state.length <= 0"> <el-empty description="暂无数据,请稍后..." /></div>

      <el-card style="max-width: 100%">
        <div
        v-for="(item, index) in state"
        :key="index"
        class="text-content"
        @click="toDetails(item.id)"
      >
        <div class="img">
          <img :src="item.media" alt="" />
        </div>
        <div class="right_news">
          <h3>{{ item.title }}</h3>
          <p><span>日期：</span>{{ item.data }}</p>
          <div v-html="item.content" class="content_news_box"></div>
          <div class="type_box">{{ item.type }}</div>
        </div>
      </div>
  </el-card>
     
      <!-- //清除浮动解决父元素高度塌陷 -->
      <div style="clear: both"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { newsHotApi } from "@/api/request";
import { useRouter } from "vue-router";
const router = useRouter();
let state = ref();
const toDetails = (index: number) => {
  router.push(`/home/news/newDetailsList/${index}`);
};
onMounted(async () => {
  const { data } = await newsHotApi();
  // console.log(data);
  state.value = data.content;
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
    background-color: #ededed;
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
  //新闻列表盒子
  .text {
    width: 120rem;
    margin: 0 auto;
    margin-top: 5rem;
    .text-content {
      width: 100%;
      height: 10rem;
      border-bottom: 1px solid #ccc;
      margin: 2rem 0;
      display: flex;
      cursor: pointer;
      .img {
        width: 20rem;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 8rem;
          height: 8rem;
        }
      }
      .right_news {
        width: 100rem;
        h3 {
          padding: 0;
          line-height: 0.8rem;
        }
        p {
          line-height: 0.8rem;
          color: #444444;
          span {
            font-weight: bold;
          }
        }
        .content_news_box {
          width: 99rem;
          height: 2rem;
          margin-top: -1rem;
          display: -webkit-box;
          -webkit-line-clamp: 1; /* 限制显示的行数 */
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 1rem; /* 行高，根据需要调整 */
          
        }
       
        .type_box{
          height: 0rem;
          padding-top: 2rem;
          color: #ccc;
        }
      }
    }
  }
}
</style>
