<template>
    <div class="merchant">
        合作商家
    </div>
  <div class="logo_list">
    <div v-for="item in state.arr" :key="item.id" class="logo-list-layout">
        <div class="main">
            <img :src="item.idVieo" alt="" />
        </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import swpOne from "../assets/th.jpg";
import { reactive } from "vue";
const state = reactive({
  arr: [
    {
      id: 1,
      idVieo: swpOne,
    },
    {
      id: 2,
      idVieo: swpOne,
    },
    {
      id: 3,
      idVieo: swpOne,
    },
    {
      id: 4,
      idVieo: swpOne,
    },
    {
      id: 5,
      idVieo: swpOne,
    },
    {
      id: 6,
      idVieo: swpOne,
    },
    {
      id: 7,
      idVieo: swpOne,
    },
    {
      id: 8,
      idVieo: swpOne,
    },
    {
      id: 9,
      idVieo: swpOne,
    },
    {
      id: 10,
      idVieo: swpOne,
    },
    {
      id: 11,
      idVieo: swpOne,
    },
    {
      id: 12,
      idVieo: swpOne,
    },
    {
      id: 13,
      idVieo: swpOne,
    },
    {
      id: 14,
      idVieo: swpOne,
    },
    {
      id: 15,
      idVieo: swpOne,
    },
    {
      id: 16,
      idVieo: swpOne,
    },
    {
      id: 17,
      idVieo: swpOne,
    },
    {
      id: 18,
      idVieo: swpOne,
    },
    {
      id: 19,
      idVieo: swpOne,
    },
    {
      id: 20,
      idVieo: swpOne,
    },
    {
      id: 21,
      idVieo: swpOne,
    },
    {
      id: 22,
      idVieo: swpOne,
    },
    {
      id: 23,
      idVieo: swpOne,
    },
    {
      id: 24,
      idVieo: swpOne,
    },
    {
      id: 25,
      idVieo: swpOne,
    },
    {
      id: 26,
      idVieo: swpOne,
    },
  ],
});
</script>

<style lang="scss" scoped>
.merchant{
    font-size: 4rem;
    color: red; 
    text-align: center;
}
.logo_list {
    margin-top: 2rem;
    width: 100%;
    height: 100%;
    display: flex;
    overflow-y: auto;
    flex-wrap: wrap; /* 允许内容换行 */
    justify-content: space-between;
    margin: 0 auto;
    -ms-overflow-style: none;  /* IE 和 Edge */  
    scrollbar-width: none; /* Firefox */  
    /* Chrome, Safari, Edge */  
    &::-webkit-scrollbar {  
        display: none;  
    }
  .logo-list-layout { 
    width: 20%;// 给子元素定宽
    height: 50%; // height: calc(100% - 40px); 用calc 用的会比较多。
    line-height: 10rem;
    .main{
        width: 4rem;
        height: 4rem;
        margin: 0 auto;
      
         img {
            width: 100%;
            height: 100%;
        }
    }
   
  }
}

  .logo_list ::-webkit-scrollbar {
       display: none;
    }
</style>
