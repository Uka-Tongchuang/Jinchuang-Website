<template>
  <div class="trapezoid">
       <div class="merchant">
        <h1>{{ state?.title }}</h1>
        <p v-html="state?.content"></p>
       </div>
       <img src="../../assets/img/yewu.png" alt="" class="urlImg" />
      </div>
</template>
<script setup lang="ts" >
    import { ref, reactive, onMounted } from "vue";
    import dataList from "../../utils/producDes.json"; 
    const state = reactive({
     title: "",
     content: "",
    });
    onMounted(() => {
     console.log(dataList);
     state.title = dataList[3].typetitle;
     state.content = dataList[3].data[0].content as string;
    });
</script>
<style lang="scss" scoped>
  .trapezoid {
      position: relative;
      width: 100%; 
      height: 40rem; 
       margin-top: -5rem;
      .merchant { 
       background-color: #98c478;
       height: 40rem; 
       width: 100%; 
         color: white;
       clip-path: polygon(0 0, 73% 0, calc(100% - 11rem) 100%, 0 100%); 
       h1 {
        padding-top: 15rem;
        margin-left: 5rem;
        font-size: 3rem;
        width: 100%;
       }
       p {
         width: 50rem;
        margin-left: 5rem;
        font-size: 1.5rem;
       }
      }
      .urlImg { 
        clip-path: polygon(0 0, 0 0, 100% 500%, 100% 0); 
       width: 53%;
       height: 40rem; 
       background: url(../../../assets/swpOne.jpg); 
       position: absolute;
       top: 0;
       right: 0;
      } 
     }
</style>