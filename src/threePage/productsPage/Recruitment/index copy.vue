<template>
  <div class="main">
    <div class="trapezoid">
      <div class="merchant">
        <h1>{{ state?.title }}</h1>
        <p v-html="state?.content"></p>
      </div>
      <img src="../../../assets/swpOne.jpg" alt="" class="urlImg" />
    </div>
    <div class="content">
      <p>
        通过就业街小圆桌系统、职播播人才直播平台，我们为企业和个人提供全方位的人力资源服务，涵盖人才招聘、人才培
        训以及直播带岗等多个方面，以全流程人才解决方案帮助企业应对“人怎么来”的种种难题
      </p>
    </div>
    <div class="card-list">
      <div v-for="item in state.arr" :key="item.id" class="card-title">
        <el-card>
          <p class="title">{{ item.title }}</p>
          <div class="img">
            <img :src="item.idVieo" />
          </div>
        </el-card>
      </div>
    </div>
    <div class="service">
      <h1 style="font-size: 4.5rem">服务流程</h1>
      <div class="content-box">
        <div class="flex1">
          <div class="border-box">
            <div class="card-border-top">
              <p class="step">step</p>
              &emsp;
              <p class="number">01</p>
            </div>
            <div class="border-rides">
              <span>出用人需求</span>
            </div>
          </div>
          <div class="singleArrow"></div>
          <div class="border-box">
            <div class="card-border-top">
              <p class="step">step</p>
              &emsp;
              <p class="number">01</p>
            </div>
            <div class="border-rides2">
              <span>出用人需求</span>
            </div>
          </div>
          <div class="singleArrow"></div>
          <div class="border-box">
            <div class="card-border-top">
              <p class="step">step</p>
              &emsp;
              <p class="number">01</p>
            </div>
            <div class="border-rides3">
              <span>出用人需求</span>
            </div>
          </div>
          <div class="singleArrow"></div>
          <div class="border-box">
            <div class="card-border-top">
              <p class="step">step</p>
              &emsp;
              <p class="number">01</p>
            </div>
            <div class="border-rides4">
              <span>出用人需求</span>
            </div>
          </div>
        </div>
        <div class="flex2"></div>
        <div class="flex3">
          <div class="border-box">
            <div class="card-border-top">
              <p class="step">step</p>
              &emsp;
              <p class="number">01</p>
            </div>
            <div class="border-rides">
              <span>出用人需求</span>
            </div>
          </div>
          <div class="singleArrow2"></div>
          <div class="border-box">
            <div class="card-border-top">
              <p class="step">step</p>
              &emsp;
              <p class="number">01</p>
            </div>
            <div class="border-rides2">
              <span>出用人需求</span>
            </div>
          </div>
          <div class="singleArrow2"></div>
          <div class="border-box">
            <div class="card-border-top">
              <p class="step">step</p>
              &emsp;
              <p class="number">01</p>
            </div>
            <div class="border-rides3">
              <span>出用人需求</span>
            </div>
          </div>
          <div class="singleArrow2"></div>
          <div class="border-box">
            <div class="card-border-top">
              <p class="step">step</p>
              &emsp;
              <p class="number">01</p>
            </div>
            <div class="border-rides4">
              <span>出用人需求</span>
            </div>
          </div>
          <div class="singleArrow2"></div>
          <div class="border-box">
            <div class="card-border-top">
              <p class="step">step</p>
              &emsp;
              <p class="number">01</p>
            </div>
            <div class="border-rides5">
              <span>出用人需求</span>
            </div>
          </div>
        </div>
        <div class="flex4"></div>
        <div class="flex5">
          <div class="border-box">
            <div class="card-border-top">
              <p class="step">step</p>
              &emsp;
              <p class="number">01</p>
            </div>
            <div class="border-rides">
              <span>出用人需求</span>
            </div>
          </div>
          <div class="singleArrow"></div>
          <div class="border-box">
            <div class="card-border-top">
              <p class="step">step</p>
              &emsp;
              <p class="number">01</p>
            </div>
            <div class="border-rides2">
              <span>出用人需求</span>
            </div>
          </div>
          <div class="singleArrow"></div>
          <div class="border-box">
            <div class="card-border-top">
              <p class="step">step</p>
              &emsp;
              <p class="number">01</p>
            </div>
            <div class="border-rides3">
              <span>出用人需求</span>
            </div>
          </div>
          <div class="singleArrow"></div>
          <div class="border-box">
            <div class="card-border-top">
              <p class="step">step</p>
              &emsp;
              <p class="number">01</p>
            </div>
            <div class="border-rides4">
              <span>出用人需求</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import swpOne from "../../../assets/th.jpg";
import { ref, reactive, onMounted, onUnmounted } from "vue";
import dataList from "../../../utils/producDes.json";

const state = reactive({
  getNewsData: [],
  title: "",
  content: "",
  arr: [
    {
      id: 1,
      title: "社招",
      idVieo: swpOne,
    },
    {
      id: 2,
      title: "网招",
      idVieo: swpOne,
    },
    {
      id: 3,
      title: "校招",
      idVieo: swpOne,
    },
    {
      id: 4,
      title: "新媒体带岗",
      idVieo: swpOne,
    },
    {
      id: 5,
      title: "猎头",
      idVieo: swpOne,
    },
  ],
  nodes: [
    { id: 1, name: "Node 1", type: "card", x: 100, y: 100 },
    { id: 2, name: "Node 2", type: "card", x: 200, y: 100 },
    { id: 3, name: "Node 3", type: "card", x: 300, y: 100 },
    { id: 4, name: "Node 4", type: "card", x: 400, y: 100 },
    { id: 5, name: "Node 5", type: "card", x: 500, y: 100 },
    { id: 6, name: "Node 6", type: "card", x: 600, y: 100 },
    { id: 7, name: "Node 7", type: "card", x: 700, y: 100 },
    { id: 8, name: "Node 8", type: "card", x: 800, y: 100 },
    { id: 9, name: "Node 9", type: "card", x: 900, y: 100 },
    { id: 10, name: "Node 10", type: "card", x: 1000, y: 100 },
    { id: 11, name: "Node 11", type: "card", x: 1100, y: 100 },
    { id: 12, name: "Node 12", type: "card", x: 1200, y: 100 },
    { id: 13, name: "Node 13", type: "card", x: 1300, y: 100 },
  ],
});
onMounted(() => {
  console.log(dataList);
  state.title = dataList[3].typetitle;
  state.content = dataList[3].data[0].content;
});
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  .trapezoid {
    position: relative;
    width: 100%;
    height: 30rem;
    .merchant {
      background-color: blue;
      height: 40rem;
      width: 65%;

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
  .content {
    width: 70%;
    height: 5rem;
    margin: 0 auto;
    p {
      font-size: 1.5rem;
    }
  }
  .card-list {
    width: 90%;
    height: 13rem;
    margin: 7rem auto;
    display: flex;
    justify-content: space-between;
    .card-title {
      width: 15rem;
      text-align: center;
      margin: 0 auto;
      .img {
        width: 5rem;
        height: 5rem;
        margin: 1rem auto;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .service {
    width: 80%;
    margin: auto;
    h1 {
      text-align: center;
      overflow-y: hidden;
      margin: 2rem auto;
      font-size: 2rem;
      color: rgb(0, 0, 0);
    }
    .content-box {
      width: 100%;
      min-height: 60rem;
      margin: auto;
      .flex1 {
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;
        padding: 0 13rem;
        .border-box {
          width: 18rem;
          height: 18rem;
          border-radius: 50%;
          position: relative;
          background: linear-gradient(to right, #9fe1fa, #f4edc9);
          box-shadow: 0 0 0.4rem 0.1rem #f4edc9;
          .card-border-top {
            display: flex;
            position: absolute;
            left: 50%;
            top: 0;
            line-height: 0.6rem;
            transform: translateX(-50%);
          }
          .border-rides {
            width: 13rem;
            height: 13rem;
            margin: 0 auto;
            line-height: 13rem;
            margin-top: 2.5rem;
            background-color: #82c4b3;
            box-shadow: 0 0 0.4rem 0.1rem #82c4b3;
            text-align: center;
            border-radius: 50%;
          }
          .border-rides2 {
            width: 13rem;
            height: 13rem;
            margin: 0 auto;
            line-height: 13rem;
            margin-top: 2.5rem;
            text-align: center;
            border-radius: 50%;
            background-color: #6179b5;
            box-shadow: 0 0 0.4rem 0.1rem #6179b5;
          }
          .border-rides4 {
            width: 13rem;
            height: 13rem;
            margin: 0 auto;
            line-height: 13rem;
            margin-top: 2.5rem;
            text-align: center;
            border-radius: 50%;
            background-color: #98c478;
            box-shadow: 0 0 0.4rem 0.1rem #98c478;
          }
          .border-rides3 {
            width: 13rem;
            height: 13rem;
            margin: 0 auto;
            line-height: 13rem;
            margin-top: 2.5rem;
            text-align: center;
            border-radius: 50%;
            background-color: #124a7e;
            box-shadow: 0 0 0.4rem 0.1rem #124a7e;
          }
        }
        .singleArrow {
          width: 6rem;
          height: 10px;
          position: relative;
          top: 10rem;
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
      .flex2 {
        float: right;
        width: 10px;
        height: 6rem;
        position: relative;
        top: 1rem;
        right: 15rem;
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
          height: 17rem;
          border-radius: 50%;
          position: relative;
          background: linear-gradient(to right, #9fe1fa, #f4edc9);
          box-shadow: 0 0 0.4rem 0.1rem #f4edc9;
          .card-border-top {
            display: flex;
            position: absolute;
            left: 50%;
            top: 0;
            line-height: 0.5rem;
            transform: translateX(-50%);
          }
          .border-rides {
            width: 13rem;
            height: 13rem;
            margin: 0 auto;
            line-height: 13rem;
            margin-top: 2.5rem;
            background-color: #2d8fce;
            box-shadow: 0 0 0.4rem 0.1rem #2d8fce;
            text-align: center;
            border-radius: 50%;
          }
          .border-rides2 {
            width: 13rem;
            height: 13rem;
            margin: 0 auto;
            line-height: 13rem;
            margin-top: 2.5rem;
            text-align: center;
            border-radius: 50%;
            background-color: #261f4b;
            box-shadow: 0 0 0.4rem 0.1rem #261f4b;
          }
          .border-rides4 {
            width: 13rem;
            height: 13rem;
            margin: 0 auto;
            line-height: 13rem;
            margin-top: 2.5rem;
            text-align: center;
            border-radius: 50%;
            background-color: #6179b5;
            box-shadow: 0 0 0.4rem 0.1rem #6179b5;
          }
          .border-rides3 {
            width: 13rem;
            height: 13rem;
            margin: 0 auto;
            line-height: 13rem;
            margin-top: 2.5rem;
            text-align: center;
            border-radius: 50%;
            background-color: #82c4b3;
            box-shadow: 0 0 0.4rem 0.1rem #82c4b3;
          }
          .border-rides5 {
            width: 13rem;
            height: 13rem;
            margin: 0 auto;
            line-height: 13rem;
            margin-top: 2.5rem;
            text-align: center;
            border-radius: 50%;
            background-color: #124a7e;
            box-shadow: 0 0 0.4rem 0.1rem #124a7e;
          }
        }
        .singleArrow2 {
          width: 7rem;
          height: 10px;
          position: relative;
          top: 10rem;
          background-color: #2d8fc1;
          /* transform: rotate(-40deg); */ /* 旋转角度 */
        }
        .singleArrow2::after {
          content: "";
          display: block;
          position: absolute;
          right: 7rem; /* 箭头位置 */
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
          height: 18rem;
          border-radius: 50%;
          position: relative;
          background: linear-gradient(to right, #9fe1fa, #f4edc9);
          box-shadow: 0 0 0.4rem 0.1rem #f4edc9;
          .card-border-top {
            display: flex;
            position: absolute;
            left: 50%;
            top: 0;
            line-height: 0.6rem;
            transform: translateX(-50%);
          }
          .border-rides {
            width: 13rem;
            height: 13rem;
            margin: 0 auto;
            line-height: 13rem;
            margin-top: 2.5rem;
            background-color: #82c4b3;
            box-shadow: 0 0 0.4rem 0.1rem #82c4b3;
            text-align: center;
            border-radius: 50%;
          }
          .border-rides2 {
            width: 13rem;
            height: 13rem;
            margin: 0 auto;
            line-height: 13rem;
            margin-top: 2.5rem;
            text-align: center;
            border-radius: 50%;
            background-color: #6179b5;
            box-shadow: 0 0 0.4rem 0.1rem #6179b5;
          }
          .border-rides4 {
            width: 13rem;
            height: 13rem;
            margin: 0 auto;
            line-height: 13rem;
            margin-top: 2.5rem;
            text-align: center;
            border-radius: 50%;
            background-color: #98c478;
            box-shadow: 0 0 0.4rem 0.1rem #98c478;
          }
          .border-rides3 {
            width: 13rem;
            height: 13rem;
            margin: 0 auto;
            line-height: 13rem;
            margin-top: 2.5rem;
            text-align: center;
            border-radius: 50%;
            background-color: #124a7e;
            box-shadow: 0 0 0.4rem 0.1rem #124a7e;
          }
        }
        .singleArrow {
          width: 6rem;
          height: 10px;
          position: relative;
          top: 10rem;
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
}
</style>
