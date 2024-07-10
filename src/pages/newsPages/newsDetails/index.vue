<template>
  <div class="main">
    <div class="content">
      <h1>新闻标题</h1>
    </div>
    <div class="text">
      <div v-for="item in state.newsList" :key="item.id" class="text-content">
        <div class="img">
          <img :src="item.idVieo" alt="" />
        </div>
        <p @click="toDetails(item.id)">{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import swpOne from "@/assets/swpOne.jpg";
import { useRouter } from "vue-router";
const router = useRouter();
const state = reactive({
  newsList: [
    {
      id: 1,
      idVieo: swpOne,
      content: "gntrgtgbtbnhtbtbltlbtblbtb",
    },
    {
      id: 2,
      idVieo: swpOne,
      content: "gntrgtgbtbnhtbtbltlbtblbtb",
    },
    {
      id: 3,
      idVieo: swpOne,
      content: "gntrgtgbtbnhtbtbltlbtblbtb",
    },
  ],
});
const toDetails = (index) => {
  router.push({ path: `/home/news/newDetailsList/${index}` });
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
    margin: 5rem auto;
    .text-content {
      widows: 40rem;
      min-height: 10rem;
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
      .img {
        width: 10rem;
        height: 7rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
