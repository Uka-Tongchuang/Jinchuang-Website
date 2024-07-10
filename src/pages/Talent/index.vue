<template>
    <div class="main">
      <div class="content">
       <h1>{{state?.title}}</h1>
      </div>
    <div>
       <p style="text-align: center;">{{state?.author}}</p>
       <p style="text-align: center;">{{state?.data}}</p>
    </div>
    <div>
       <p>文章内容</p>
       <p>{{state?.content}}</p>
    </div>
      </div>
</template>

<script setup lang="ts">
import { getDataApi } from '@/api/request';
import { onMounted, reactive,ref } from 'vue';

const state=ref()
onMounted(async()=>{
    const respose=await getDataApi();
    state.value=respose.data
    console.log(state.value,"数据库的健身卡");
    
})

</script>

<style lang="scss" scoped>
.main{
       width: 100%;
       height: 100%;
       margin: 0;
       padding: 0;
       overflow-y: hidden;
       .content{
           background-color: red;
           width: 100%;
           height: 20rem;
           margin: 0 auto; 
           h1{
               font-size: 5rem;
               text-align: center;
               line-height: 20rem;
               margin: 0;
               padding: 0;
           } 
       } }
</style>