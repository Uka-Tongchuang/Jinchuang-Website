<template>
  <div class="main"> 
    <OutsourceBanner/>
    <!-- 服务内容 -->
    <div class="card-list">
    <OutCartCom/>
      
    </div>
  
    <div >
  <PostWbCardCom/>
    </div> 
    <!-- 服务流程 -->
    <div class="service——process">
      <ServiceProcess/>
    </div>
    <!-- //服务优势 -->
    <div class="service_box">
    
      <outCartSecondCom/>
    </div>

    <!-- 服务价值 -->
    <div class="serviceValue_box">
      <OutCartThreeValueCom/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from "vue";
import dataList from '../../../utils/producDes.json' 
import OutCartCom from "../../../components/outConmonent/OutCartCom.vue"
import outCartSecondCom from "../../../components/outConmonent/OutCartSecondCom.vue"
import OutsourceBanner from "../../../components/bannerList/OutsourceBanner.vue"
import OutCartThreeValueCom from "@/components/outConmonent/OutCartThreeValueCom.vue";
import PostWbCardCom from '@/components/PostWbCardCom.vue';
import ServiceProcess from "@/components/serviceProcess/ServiceProcess.vue"

const state=reactive({
    title:"",
        content:"",
  flowList:[
    {
      step:'Step',
      number:'01',
      title:'出用人需求'
    },
     {
      step:'Step',
      number:'02',
      title:'确认岗位画像'
    },
     {
      step:'Step',
      number:'03',
      title:'公开招聘'
    },
     {
      step:'Step',
      number:'04',
      title:'面试甄选'
    },
     {
      step:'Step',
      number:'05',
      title:'用人单位面试'
    },
     {
      step:'Step',
      number:'06',
      title:'正式录用'
    },
  ],
   flowList1:[
    {
      step:'Step',
      number:'07',
      title:'提出用人需求'
    },
     {
      step:'Step',
      number:'08',
      title:'确认岗位画像'
    },
     {
      step:'Step',
      number:'09',
      title:'公开招聘'
    },
     {
      step:'Step',
      number:'10',
      title:'面试甄选'
    },
     {
      step:'Step',
      number:'11',
      title:'用人单位面试'
    },
     {
      step:'Step',
      number:'12',
      title:'正式录用'
    },
    {
      step:'Step',
      number:'13',
      title:'正式录用'
    },
  ],

})

// 初始化加载下标线
onMounted(()=>{
  console.log(dataList)
  state.title=dataList[2].typetitle
  state.content=dataList[2].data[0].content as string
})
</script>

<style lang="scss" scoped>  
.main {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-y: hidden;  
  .service——process{
    width: 80%;
    height: 65rem;
    margin: 2rem auto;
    margin-top: 8rem;
    // background-color: antiquewhite;
  }
  .card-list{
    width: 80%;
    height: 45rem;
    margin: 0 auto;
  }
  .service {
    width: 100%;
    margin: 0 auto;
    .title-top{
      width: 20%;
      height: 7rem;
      margin: auto;
      display: flex; 
      justify-content: space-around;
      p{
        font-size: 1.5rem; 
      }
    }  
    h1 {
      font-size: 2rem;
      color: rgb(0, 0, 0);
    }
    
    .card-listAll {
      width: 126rem;
      height: 22.5rem ;
      margin: auto;
      background: url(../../../assets/服务流程.png);
      background-size: 100%;
        display: flex;
        justify-content: center;
        justify-items: center;
        justify-content: space-evenly;
        .card-border { 
          margin: 7rem 0 0 4rem;
          width:10rem;
          height:20rem;  
         .card-border-top{ 
          width: 5rem;
          display: flex;
          justify-content: center; 
          p{
            font-size: 1.5rem;
          }
          .step{
            border-bottom: 1px solid black;
          }
          .number{
            margin-left: 0.5rem;
          }
         }
         span{
          font-size: 1.5rem;
         }
        }
      }
       
  }
  .service_box{
    width: 80%;
    height: 40rem;
    margin: 2rem auto;
    // background-color: aqua;
  }
  .serviceValue_box{
    width: 80%;
    height: 40rem;
    margin: 2rem auto;
    // background-color: yellow;
  }
}
</style>
