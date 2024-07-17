<template>
  <div class="main">
    <div class="trapezoid">
      <div class="merchant ">
        <h1>{{ state?.title }}</h1>
        <p v-html="state?.content"></p>
      </div>
      <img src="../../../assets/swpOne.jpg" alt="" class="urlImg">
    </div>
    <!-- 服务内容 -->
    <div class="card-list">
    <OutCartCom/>
      
    </div>
    <!-- 流程图 -->
    <!-- 适用场景 -->

    <!-- 服务流程 -->
    <div class="service">
      <h1 style="font-size: 4.5rem;text-align: center;">服务流程</h1>
          <div class="title-top" ref="switchoverBorder">
            <p @click="switchover">面试录用</p>
            <p @click="switchover1">签订协议</p>
          </div>
          <div class="card-listAll" v-if="showTime">
            <div class="card-border" v-for="(item,index) in state.flowList" :key="index">
              <div class="card-border-top">
                <p class="step">{{ item.step }}</p>
                <p class="number">{{ item.number }}</p>
              </div>
              <span>{{ item.title }}</span>
            </div>
          </div>
           <div class="card-list" v-else>
            <div class="card-border" v-for="(item,index) in state.flowList1" :key="index">
              <div class="card-border-top">
                <p class="step">{{ item.step }}</p>
                <p class="number">{{ item.number }}</p>
              </div>
              <span>{{ item.title }}</span>
            </div>
          </div>
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
import OutCartThreeValueCom from "@/components/outConmonent/OutCartThreeValueCom.vue";

const showTime =ref(true)
const switchoverBorder =ref()
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
  // 切换事件
const switchover=()=>{ 
  switchoverBorder.value.children[0].style.borderBottom="2px solid #617bc1"
  switchoverBorder.value.children[1].style.borderBottom="none"
  showTime.value=true
}
const switchover1=()=>{ 
  switchoverBorder.value.children[0].style.borderBottom="none"
  switchoverBorder.value.children[1].style.borderBottom="2px solid #617bc1"
  showTime.value=false
}
// 初始化加载下标线
onMounted(()=>{
  console.log(dataList)
  state.title=dataList[2].typetitle
  state.content=dataList[2].data[0].content as string
  switchoverBorder.value.children[0].style.borderBottom="2px solid #617bc1"
})
</script>

<style lang="scss" scoped> 
// 三角形
// .demanda {
//   display: inline-block;
//   width: 13rem;
//   height: 13rem;
//   border-top: 1rem solid #d4e1fd;
//   border-right: 1rem solid #d4e1fd;
//   transform: rotate(45deg);
//   position: absolute;
//   right: -6rem;
//   top: 3rem;
// }
.main {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-y: hidden; 
   .trapezoid {
    position: relative;
    width: 100%; 
    height: 40rem; 
    .merchant { 
      background-color: rgb(42, 42, 184);
      height: 40rem;  
      width: 65%; 
      color: #fff;
      clip-path: polygon(0 0, 73% 0, calc(100% - 11rem) 100%, 0 100%); 
      h1 {
        padding-top: 15rem;
        margin-left: 5rem;
        font-size: 3rem;
      }
      p {
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
