<template>
  <div class="trapezoid">
       <div class="merchant">
        <h1>{{ state?.title }}</h1>
        <p v-html="state?.content"></p>
       </div>
       <img src="../../assets/img/renshi.png" alt="" class="urlImg" />
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
     state.title = dataList[5].typetitle;
     state.content = dataList[5].data[0].content as string;
    });
</script>
<style lang="scss" scoped>
     @media screen and (max-width: 2660px) {
       .trapezoid {
           position: relative;
           width: 100%; 
           height: 40rem; 
           margin-top: -5rem;
           .merchant { 
            background-color: #124A7E;
            height: 40rem; 
            width: 100%; 
              color: white;
            clip-path: polygon(0 0, 73% 0, calc(100% - 11rem) 100%, 0 100%); 
            h1 {
             padding-top: 15rem;
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
            background: url(../../../assets/swpOne.jpg); 
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
    height: 20rem;
    margin-top: -5rem;
    .merchant {
      background: #2758e9;
      height: 20rem;
      width: 100%;
      color: white;
      clip-path: polygon(0 0, 73% 0, calc(100% - 11rem) 100%, 0 100%);
      h1 {
        padding-top: 8rem;
        margin-left: 1rem;
        font-size: 1.5rem;
      }
      p {
        width: 13rem;
        margin-left: 1rem;
        font-size: 0.8rem;
      }
    }
    .urlImg {
      clip-path: polygon(0 0, 0 0, 100% 500%, 100% 0);
      width: 53%;
      height: 20rem;
      background: url(../../../assets/swpOne.jpg);
      position: absolute;
      top: 0;
      right: 0;
    }
  }
}
</style>