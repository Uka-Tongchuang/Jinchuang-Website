<template>
  <div class="main">
   <div class="merchant">
            <h1>{{ state?.title }}</h1>
            <p v-html="state?.content"></p>
        </div> 
    <div class="card-list">
      <el-card style="max-width: 25rem">
        <h3>用工人员招募</h3>
        <p>
          A.客户提供的用工需求和编制数量
          ，确定项目的人员画像任职要求➆鑄赛熺築叛誕贑賀魎剎腰聘人数
        </p>
        <p>B.在招聘周期内完成招募爬坡信务和客户用</p>
      </el-card>
      <el-card style="max-width: 25rem">
        <h3>日常项目管理</h3>
        <p>
          A.据服务标准要求
          ，派驻专人项目驻场进行日常管理和监督，并对每日服务情况进行实时反馈
        </p>
        <p>B.如斗殴 、抱团闹事、工伤等群体性事件应急预警和处理</p>
        <p>
          C.周/月维度核对外包人员考勤及其他考核情况，做好服务质量的评估和相应的汰换
          、补离工作
        </p>
      </el-card>
      <el-card style="max-width: 25rem">
        <h3>员工关系管理</h3>
        <p>A.薪酬标准和考勤 ，员工应发薪资、应缴税款，薪资发放</p>
        <p>B.福利标准 ，按月缴纳五险一金或商业雇主险，提供出险处置服务</p>
        <p>C.员工入转调离相关手续办理、劳动合同签订/上传备份</p>
        <p>D.员工的资料信息收集 、留档及相应管理工作</p>
      </el-card>
      <el-card style="max-width: 25rem">
        <h3>用工风险承担</h3>
        <p>
          A.医疗险
          :非因工病伤时享受疗期待遇和期满后无法从事原工作而解除合同时支付经济补偿及医疗补助费风险
        </p>
        <p>
          B.工伤:因工伤退出工作岗位期间单位仍须缴纳社保的风险，5-6级伤残且无法安排工作时支付月工伤津贴的风险和5-10级残时依法解除劳动合同支付经济次性工伤医疗补助金补偿金和伤残就业补助金的风险
        </p>
      </el-card>
    </div>
    <!-- 流程图 -->

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
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from "vue";
import dataList from '../../../utils/producDes.json' 
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
  state.title=dataList[2].data[0].title
  state.content=dataList[2].data[0].content
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
   .merchant { 
      background-color: aqua;
    width: 100%;
    height: 30rem;
    // padding-top: 7rem;
    // padding-left: 7rem;
    margin: auto;  
    h1{
        font-size: 4rem;
    } 
    p{
        font-size: 2rem;
    }
  }
  .card-list {
    width: 95%;
    margin: 1rem auto;
    display: flex;
    justify-content: space-between;
  }
  .service {
    width: 100%;
    margin: 2rem auto;
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
        .card-list {
      width: 147rem;
      height: 22.5rem ;
      margin: auto;
      background: url(../../../assets/流程图7.png);
      background-size: 100%;
        display: flex;
        justify-content: center;
        justify-items: center;
        justify-content: space-evenly;
        .card-border { 
          margin: 7rem 0 0 2rem;
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
}
</style>
