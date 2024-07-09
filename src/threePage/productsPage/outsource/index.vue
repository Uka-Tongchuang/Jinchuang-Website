<template>
    <div class="main">
       <div class="content">
        <h1>外包服务</h1>
       </div>
       <div  class="card-list">
             <el-card style="max-width: 25rem"> 
                <h3>用工人员招募</h3>
                <p>A.客户提供的用工需求和编制数量 ，确定项目的人员画像任职要求➆鑄赛熺築叛誕贑賀魎剎腰聘人数</p>
                <p>B.在招聘周期内完成招募爬坡信务和客户用</p>
            </el-card>
             <el-card style="max-width: 25rem"> 
                <h3>日常项目管理</h3>
                <p>A.据服务标准要求 ，派驻专人项目驻场进行日常管理和监督，并对每日服务情况进行实时反馈</p>
                <p>B.如斗殴 、抱团闹事、工伤等群体性事件应急预警和处理</p>
                <p>C.周/月维度核对外包人员考勤及其他考核情况，做好服务质量的评估和相应的汰换 、补离工作</p>
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
                <p>A.医疗险 :非因工病伤时享受疗期待遇和期满后无法从事原工作而解除合同时支付经济补偿及医疗补助费风险</p>
                <p>B.工伤:因工伤退出工作岗位期间单位仍须缴纳社保的风险，5-6级伤残且无法安排工作时支付月工伤津贴的风险和5-10级残时依法解除劳动合同支付经济次性工伤医疗补助金补偿金和伤残就业补助金的风险</p>
            </el-card>
       </div>
       <div class="service">
        <h1>启动流程</h1>
        <div>
 <div class="process-flow">  
    <!-- 步骤容器 -->  
    <div class="steps-container">  
      <!-- 第一个步骤 -->  
      <div class="step animate__backInRight animate__animated" style="--step-index: 1;">
        <div class="step-line-arr" style="--line-direction: right;"></div>  
        <div class="step-content-placeholder">
            <h4>1.协议签订</h4>
            <p> 确认服务形式 、需求人数、时间地点、项目用人标准、工时待遇、服务费结算逻辑、附加条款等</p>
        </div>  
      </div>  
  
      <!-- 第二个步骤 -->  
      <div class="step animate__backInLeft animate__animated" style="--step-index: 2;">  
        <div class="step-line" style="--line-direction: left;"></div>  
        <div class="step-content-placeholder-arr">
            <h4>2.人员招募/转签</h4>
            <p>启动源遣/外包人员劳动合同转签及时做好招聘及现场̃妤犭绂蜡彳蒂卿蒞鈦鏊工作</p>
        </div>  
      </div>  
  
      <!-- 第三个步骤 -->  
      <div class="step animate__backInRight animate__animated" style="--step-index: 3;">  
        <div class="step-line-arr" style="--line-direction: right;"></div>  
        <div class="step-content-placeholder">
            <h4>3.劳动合同签署</h4>
            <p>
                10日内新合同签署相关保险增员、入职 及人事考勤系统培训
            </p>
        </div>  
      </div>  
  
      <!-- 第四个步骤 -->  
      <div class="step animate__backInLeft animate__animated" style="--step-index: 4;">  
        <div class="step-line" style="--line-direction: left;"></div>  
        <div class="step-content-placeholder-arr">
            <h4>4.项目执行</h4>
            <p>入、离、调、转等日常人事顶目管理工资表核对及发放费用支付</p>
        </div>  
      </div> 
       <!-- 第四个步骤 -->  
       <div class="step animate__backInRight animate__animated" style="--step-index: 5;">  
        <div class="step-line-arr" style="--line-direction: right;"></div>  
        <div class="step-content-placeholder">
            <h4>5. 监督、复盘、迭代</h4>
            <p>
                月度服务情况跟踪、留存数据盘点、策略调整等
            </p>
        </div>  
      </div>  
    </div>  
  
    <!-- 卡片内容区域（这里仅为示意，实际中可能需要更复杂的布局） -->  
    <div class="card-contents">  
      <!-- 你可以在这里放置实际的卡片内容 -->  
      <!-- 例如，为每个步骤的卡片内容创建一个Vue组件或插槽 -->  
    </div>  
  </div> 
        </div>
          
       </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const activeStep = ref(0);
const steps = ref([
  { title: '1.协议签订', cardTitle: '确认服务形式 、需求人数、时间地点、项目用人标准、工时待遇、服务费结算逻辑、附加条款等', cardContent: 'b.与客户核对并确认各岗位的面试/入职/合同签约流程' },
  { title: '2.人员招募/转签', cardTitle: '启动源遣/外包人员劳动合同转签及时做好招聘及现场̃妤犭绂蜡彳蒂卿蒞鈦鏊工作', cardContent: '' },
  { title: '3.劳动合同签署', cardTitle: '10日内新合同签署', cardContent: '相关保险增员、入职 及人事考勤系统培训 ' },
  { title: '4.项目执行', cardTitle: '入、离、调、转等日常人事顶目管理工资表核对及发放费用支付', cardContent: '' },
]);
</script>

<style lang="scss" scoped>
  .main{
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
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
        }
        .card-list{
            width: 95%;
            margin:1rem auto;
            display: flex;
            justify-content: space-between;
        }
         .service{
            width: 80%;
            margin: 2rem auto;
            text-align: center;
            h1{
                font-size: 2rem;
                color: red;
            } 
        }
    }


    .process-flow {  
  display: flex;  
  flex-direction: column;  
  align-items: center;  
  position: relative;  
}  
  
.steps-container {  
  display: flex;  
  flex-direction: column;  
  align-items: center;  
  position: relative;  
  width: 100%;  
}  
  
.step {  
  position: relative;  
  width: 50%;  
  text-align: center;  
}  
  
.step:nth-child(odd) {  
  align-self: self-end;  
  
}  
  
.step:nth-child(even) {  
  align-self: auto;  
  
}  
 .step-line-arr {
     position: absolute;  
    width:5%;  
    height: 2px;  
    background-color: black;  
    top: 58%;  
    right: 50%;
    transform: translateY(-50%); 
    right: 95%;
  }
// .step-number {  
//   font-size: 24px;  
//   font-weight: bold;  
//   margin-bottom: 20px;  
// }  
  
.step-line {  
  position: absolute;  
  width:5%;  
  height: 2px;  
  background-color: black;  
  top: 58%;  
  right: 50%;
  transform: translateY(-50%);  
}  
  
.step-line[--line-direction="right"] {  
  right: 0;  
}  
  
.step-line[--line-direction="left"] {  
  left: 0;  
}  
  
.step-content-placeholder {  
  /* 这里仅作为占位符，实际中应替换为卡片组件或内容 */  
  border: 1px solid #ccc;  
  padding: 20px;  
  margin-top: 20px;  
  width: 15rem; /* 根据需要调整 */ 
  margin-left: 5%; 
} 
.step-content-placeholder-arr {  
  /* 这里仅作为占位符，实际中应替换为卡片组件或内容 */  
  border: 1px solid #ccc;  
  padding: 20px;  
  margin-top: 20px;  
  width: 15rem; /* 根据需要调整 */ 
  margin-left: 8%; 
} 
.card-contents{
    width: 2px;
    height: 60rem;
    background-color: red;
    position: absolute;
    }

</style>