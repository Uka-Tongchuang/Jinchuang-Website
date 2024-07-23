<script setup>
import { ref } from 'vue'
import { VueFlow } from '@vue-flow/core'

// these are our nodes
const nodes = ref([
  { 
    id: '1',
    position: { x: 100, y: 5 },
    data: { label: '提出用人需求' },
    sourcePosition: 'right',
    type: 'input',
    style: { 
      background: 'rgb(39, 58, 233, .3)',
      border: 'none',
      borderRadius: 8,
      fontSize: 20,
    },
  },
  { 
    id: '2', 
    position: { x: 350, y: 5 },
    data: { label: '确认岗位需求' },
    sourcePosition: 'right',
    targetPosition: 'left',
    style: {
      background: '#fff',
      border: '1px solid #2758E9',
      color:'#2758E9',
      borderRadius: 8,
      fontSize: 20,
    },
  },
  { 
    id: '3', 
    position: { x: 600, y: 5 },
    data: { label: '公开招聘' },
    sourcePosition: 'right',
    targetPosition: 'left',
    style: {
      background: 'rgb(39, 58, 233, .3)',
      border: 'none',
      borderRadius: 8,
      fontSize: 20,
    },
  },
  { 
    id: '4', 
    position: { x: 850, y: 5 },
    data: { label: '面试甄选' },
    sourcePosition: 'right',
    targetPosition: 'left',
    style: {
      background: '#fff',
      border: '1px solid #2758E9',
      color:'#2758E9',
      borderRadius: 8,
      fontSize: 20,
    },
  },
  { 
    id: '5', 
    position: { x: 1100, y: 5 },
    data: { label: '用人单位复试' },
    sourcePosition: 'right',
    targetPosition: 'left',
    style: {
      background: 'rgb(39, 58, 233, .3)',
      border: 'none',
      borderRadius: 8,
      fontSize: 20,
    },
  },
  { 
    id: '6', 
    position: { x: 1350, y: 5 },
    data: { label: '正式录用' },
    sourcePosition: 'bottom',
    targetPosition: 'left',
    style: {
      background: '#fff',
      border: '1px solid #2758E9',
      color:'#2758E9',
      borderRadius: 8,
      fontSize: 20,
    },
  },
  { 
    id: '7', 
    position: { x: 1350, y: 230 },
    data: { label: '入职体检和岗前培训' },
    style: {
      background: 'rgb(39, 58, 233, .3)',
      border: 'none',
      borderRadius: 8,
      fontSize: 20,
    },
  },
  { 
    id: '8', 
    position: { x: 1350, y: 450 },
    data: { label: '签订第三方合同' },
    sourcePosition: 'left',
    targetPosition: 'top',
    style: {
      background: '#fff',
      border: '1px solid #2758E9',
      color:'#2758E9',
      borderRadius: 8,
      fontSize: 20,
    },
  },
  { 
    id: '9', 
    position: { x: 1100, y: 450 },
    data: { label: '派遣员工上岗' },
    sourcePosition: 'left',
    targetPosition: 'right',
    style: {
      background: 'rgb(39, 58, 233, .3)',
      border: 'none',
      borderRadius: 8,
      fontSize: 20,
    },
  },
  { 
    id: '10', 
    position: { x: 850, y: 450 },
    data: { label: '统一管理人事档案' },
    sourcePosition: 'left',
    targetPosition: 'right',
    style: {
      background: '#fff',
      border: '1px solid #2758E9',
      color:'#2758E9',
      borderRadius: 8,
      fontSize: 20,
    },
  },
  { 
    id: '11', 
    position: { x: 600, y: 450 },
    data: { label: '社保公积金、工资发放等人事系统' },
    sourcePosition: 'left',
    targetPosition: 'right',
    style: {
      background: 'rgb(39, 58, 233, .3)',
      border: 'none',
      borderRadius: 8,
      fontSize: 20,
    },
  },
  { 
    id: '12', 
    position: { x: 350, y: 450 },
    data: { label: '派遣员工关系维护' },
    sourcePosition: 'left',
    targetPosition: 'right',
    style: {
      background: '#fff',
      border: '1px solid #2758E9',
      color:'#2758E9',
      borderRadius: 8,
      fontSize: 20,
    },
  },
  { 
    id: '13', 
    position: { x: 100, y: 450 },
    data: { label: '协议、合同的解除及续签' },
    type: 'output',
    targetPosition: 'right',
    style: {
      background: 'rgb(39, 58, 233, .3)',
      border: 'none',
      borderRadius: 8,
      fontSize: 20,
    },
  },
])

const edges = ref([
  { 
    id: 'e1-2',
    source: '1', 
    target: '2',
  },
  { 
    id: 'e2->3',
    source: '2', 
    target: '3',
  },
  { 
    id: 'e3->4',
    source: '3', 
    target: '4',
  },
  { 
    id: 'e4->5',
    source: '4', 
    target: '5',
  },
  { 
    id: 'e5->6',
    source: '5', 
    target: '6',
  },
  { 
    id: 'e6->7',
    source: '6', 
    target: '7',
  },
  { 
    id: 'e7->8',
    source: '7', 
    target: '8',
  },
  { 
    id: 'e8->9',
    source: '8', 
    target: '9',
  },
  { 
    id: 'e9->10',
    source: '9', 
    target: '10',
  },
  { 
    id: 'e10->11',
    source: '10', 
    target: '11',
  },
  { 
    id: 'e11->12',
    source: '11', 
    target: '12',
  },
  { 
    id: 'e12->13',
    source: '12', 
    target: '13',
  },

])
</script>

<template>
  <VueFlow :nodes="nodes" :edges="edges" :default-viewport="{ zoom: 1 }" :max-zoom="1" :min-zoom="1" :pan-on-drag="false" :nodes-draggable="false" :prevent-scrolling="false">
    <!-- <Handle id="source-a" type="source" :position="Position.Right" />
    <Handle id="source-b" type="source" :position="Position.Right" />
    <Handle id="target-a" type="target" :position="Position.Left" />
    <Handle id="target-b" type="target" :position="Position.Left" /> -->

  </VueFlow>
  <div class="title-alinets">
    <p class="title-title">服务流程</p> 
    <div class="title-flex">
      <p class="color">Recruitment</p>
      <p class="color-right">Process</p>
    </div>
</div>
</template>

<style >
/* import the necessary styles for Vue Flow to work */
@import '@vue-flow/core/dist/style.css';

/* import the default theme, this is optional but generally recommended */
@import '@vue-flow/core/dist/theme-default.css';

.vue-flow{
  height: 40rem;
  width: 85%;
  margin:7rem auto 0 auto;
}
.vue-flow__node-input{
  width: 14rem;
  height: 8rem;
  line-height: 8rem;
  font-size: 1rem;
}
.vue-flow__node-output{
  width: 14rem !important;
  height: 8rem;
  line-height: 8rem;
  font-size: 1rem;
}
.vue-flow__node-default{
  width: 14rem;
  height: 8rem;
  line-height: 8rem;
   font-size: 0.9rem;
}
.title-alinets{
  position: absolute;
  top: 14rem;
  left: 60rem;
}
.title-title{
  margin: 0;
  font-weight: 700;
  text-align: center;
  font-size: 2.5rem;
}
.title-flex{
  width: 17rem;
  height: 3rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
} 
.color{
  text-align: center;
  line-height: 2.5rem;
  width: 10rem;
  height: 100%;
  padding-top: 0.5rem;
  background-color:rgba(39, 88, 233, 0.3);
  border-radius: 5rem;
}
.color-right{
  text-align: center;
  line-height: 2.5rem;
  width: 7em;
  height: 100%;
  padding-top: 0.5rem;
}
</style>
<!-- <template>
  <div class="service">
    <h1 >服务流程</h1>
    <div class="content-box">
      <div class="flex1">
        <div class="border-box">
          <div class="card-border-top">
            <p class="number">01</p>
          </div>
          <div class="border-rides">
            <span>提出用人需求</span>
          </div>
        </div>
        <div class="singleArrow"></div>
        <div class="border-box">
          <div class="card-border-top">
            <p class="number">02</p>
          </div>
          <div class="border-rides">
            <span>确认岗位需求</span>
          </div>
        </div>
        <div class="singleArrow"></div>
        <div class="border-box">
          <div class="card-border-top">
            <p class="number">03</p>
          </div>
          <div class="border-rides">
            <span>公开招聘</span>
          </div>
        </div>
        <div class="singleArrow"></div>
        <div class="border-box">
          <div class="card-border-top">
            <p class="number">04</p>
          </div>
          <div class="border-rides">
            <span>面试甄选</span>
          </div>
        </div>
          <div class="singleArrow"></div>
        <div class="border-box">
          <div class="card-border-top">
            <p class="number">05</p>
          </div>
          <div class="border-rides">
            <span>用人单位复试</span>
          </div>
        </div>
      </div>
      <div class="flex2"></div>
      <div class="flex3">
        <div class="border-box">
          <div class="card-border-top">
            <p class="number">06</p>
          </div>
          <div class="border-rides">
            <span>正式录用</span>
          </div>
        </div>
        <div class="singleArrow2"></div>
        <div class="border-box">
          <div class="card-border-top">
            <p class="number">07</p>
          </div>
          <div class="border-rides">
            <span>入职体检和岗前培训</span>
          </div>
        </div>
        <div class="singleArrow2"></div>
        <div class="border-box">
          <div class="card-border-top">
            <p class="number">08</p>
          </div>
          <div class="border-rides">
            <span>签订第三方合同</span>
          </div>
        </div>
        <div class="singleArrow2"></div>
        <div class="border-box">
          <div class="card-border-top">
            <p class="number">09</p>
          </div>
          <div class="border-rides">
            <span>派遣员工上岗</span>
          </div>
        </div>
        <div class="singleArrow2"></div>
        <div class="border-box">
          <div class="card-border-top">
            <p class="number">10</p>
          </div>
          <div class="border-rides">
            <span>统一管理人事档案</span>
          </div>
        </div>
      </div>
      <div class="flex4"></div>
      <div class="flex5">
        <div class="border-box">
          <div class="card-border-top">
            <p class="number">11</p>
          </div>
          <div class="border-rides">
            <span>提供社保公积金、工资发放等人事服务</span>
          </div>
        </div>
        <div class="singleArrow"></div>
        <div class="border-box">
          <div class="card-border-top">
            <p class="number">12</p>
          </div>
          <div class="border-rides">
            <span>派遣员工关系维护</span>
          </div>
        </div>
        <div class="singleArrow"></div>
        <div class="border-box">
          <div class="card-border-top">
            <p class="number">13</p>
          </div>
          <div class="border-rides">
            <span>协议、合同的解除及签订</span>
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup> 


</script>
<style lang="scss" scoped>
  .service {
    width: 80%; 
    margin:0 auto;
    h1 {
      text-align: center;
      overflow-y: hidden;
      margin: 2rem auto;
      font-size: 3rem;
      text-align: center;
      color: rgb(0, 0, 0);
    }
    p {
      color: black;
    }
    span {
      color: black;
      font-size: 1.4rem;
    }
    .content-box {
      width: 100%;
      min-height: 50rem;
      margin: auto;
      .flex1 {
        display: flex;
        justify-content: space-around;
        margin-top: 2rem; 
        .border-box {
          width: 18rem;
          height: 10rem; 
          position: relative;
          background: linear-gradient(to right, #9fe1fa, #f4edc9);
          box-shadow: 0 0 0.4rem 0.1rem #f4edc9;
          .card-border-top {
            display: flex;
            position: absolute;
            left: 4%;
            top: 0;
            line-height: 0.6rem;
            transform: translateX(-50%);
          }
          .border-rides {
            width: 13rem;
            height: 13rem;
            margin: 0 auto;
            line-height: 10rem; 
            text-align: center; 
          }
        }
        .singleArrow {
          width: 4rem;
          height: 10px;
          position: relative;
          top: 7rem;
          background-color: #2d8fc1;
          // transform: rotate(-40deg); 
        }
        .singleArrow::after {
          content: "";
          display: block;
          position: absolute;
          right: -20px; /* 箭头位置 */
          top: -5px; /* 箭头位置 */
          border-top: 10px solid transparent; /* 箭头高低 */
          border-bottom: 10px solid transparent; /* 箭头高低 */
          border-left: 20px solid #2d8fc1; /* 箭头长度*/
        }
      }
      .flex2 {
        float: right;
        width: 10px;
        height: 6rem;
        position: relative;
        top: 1rem;
        right: 9rem;
        background-color: #2d8fc1; 
      }

      .flex2::after {
        content: "";
        display: block;
        position: absolute;
        right: -5px; /* 箭头位置 */
        top: 6rem; /* 箭头位置 */
        border-left: 10px solid transparent; /* 箭头高低 */
        border-right: 10px solid transparent; /* 箭头高低 */
        border-top: 10px solid #2d8fc1; /* 箭头长度*/
      }
      .flex3 {
        margin-top: 8.5rem;
        display: flex;
        justify-content: space-around;
        .border-box {
          width: 17rem;
          height: 10rem; 
          position: relative;
       background-image: linear-gradient(181.2deg, rgb(181, 239, 249) 10.5%, rgb(254, 254, 254) 86.8%);
          box-shadow: 0 0 0.4rem 0.1rem #f4edc9;
          .card-border-top {
            display: flex;
            position: absolute;
            left: 3%;
            top: 0;
            line-height: 0.5rem;
            transform: translateX(-50%);
          }
          .border-rides {
            width: 13rem;
            height: 13rem;
            margin: 0 auto;
            line-height: 10rem; 
            text-align: center; 
          }
        
        }
        .singleArrow2 {
          width: 4rem;
          height: 10px;
          position: relative;
          top: 7rem;
          background-color: #2d8fc1;
          /* transform: rotate(-40deg); */ /* 旋转角度 */
        }
        .singleArrow2::after {
          content: "";
          display: block;
          position: absolute;
          right: 4rem; /* 箭头位置 */
          top: -5px; /* 箭头位置 */
          border-top: 10px solid transparent; /* 箭头高低 */
          border-bottom: 10px solid transparent; /* 箭头高低 */
          border-right: 20px solid #2d8fc1; /* 箭头长度*/
        }
      }
      .flex4 {
        width: 10px;
        height: 6rem;
        position: relative;
        top: 1rem;
        left: 16rem;
        background-color: #2d8fc1;
         transform: rotate(-40deg); 
      }

      .flex4::after {
        content: "";
        display: block;
        position: absolute;
        right: -5px; /* 箭头位置 */
        top: 6rem; /* 箭头位置 */
        border-left: 10px solid transparent; /* 箭头高低 */
        border-right: 10px solid transparent; /* 箭头高低 */
        border-top: 10px solid #2d8fc1; /* 箭头长度*/
      }
      .flex5 {
        display: flex;
        justify-content: space-between;
        padding: 0 13rem;
        margin-top: 2rem;
        .border-box {
          width: 18rem;
          height: 10rem; 
          position: relative;
          background: linear-gradient(to right, #9fe1fa, #f4edc9);
          box-shadow: 0 0 0.4rem 0.1rem #f4edc9;
          .card-border-top {
            display: flex;
            position: absolute;
            left: 3%;
            top: 0;
            line-height: 0.6rem;
            transform: translateX(-50%);
          }
          .border-rides {
            width: 13rem;
            height: 13rem;
            margin: 0 auto;
            padding-top: 4.5rem;
            text-align: center;
          }
        }
        .singleArrow {
          width: 6rem;
          height: 10px;
          position: relative;
          top: 7rem;
          background-color: #2d8fc1;
          /* transform: rotate(-40deg); */ /* 旋转角度 */
        }
        .singleArrow::after {
          content: "";
          display: block;
          position: absolute;
          right: -20px; /* 箭头位置 */
          top: -5px; /* 箭头位置 */
          border-top: 10px solid transparent; /* 箭头高低 */
          border-bottom: 10px solid transparent; /* 箭头高低 */
          border-left: 20px solid #2d8fc1; /* 箭头长度*/
        }
      }
    }
  }
</style> -->
