<template>
  <div class="main">
    <div class="trapezoid">
      <div class="merchant">
        <h1>{{ state?.title }}</h1>
        <p v-html="state?.content"></p>
      </div>
      <img src="../../../assets/swpOne.jpg" alt="" class="urlImg" />
    </div>
    <!-- <div class="cart_box">
    
        <ZpwbCardCom/>

    </div>
    <div class="content">
      <p>
        通过就业街小圆桌系统、职播播人才直播平台，我们为企业和个人提供全方位的人力资源服务，涵盖人才招聘、人才培
        训以及直播带岗等多个方面，以全流程人才解决方案帮助企业应对“人怎么来”的种种难题
      </p>
    </div> -->
    <!-- <div class="card-list">
      <div v-for="item in state.arr" :key="item.id" class="card-title">
        <el-card>
          <p class="title">{{ item.title }}</p>
          <div class="img">
            <img :src="item.idVieo" />
          </div>
        </el-card>
      </div>
    </div> -->
    <!-- 服务流程 -->
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
    <!-- 服务优势 -->
     <div class="advantage">
      <h1>服务优势</h1>
     </div>
     <!-- 服务价值 -->
    <div class="footer">
      <div class="footer-box">
        <h1>服务价值</h1>
        <div ref="titleList">
          <div
            v-for="item in state.items"
            :key="item.id"
            @click="toggleExpand(item.id)"
            class="title"
          >
            <div class="title-box">
              <p>{{ item.title }}</p>
              <span>{{ item.isExpanded ? "-" : "+" }}</span>
            </div>
            <div v-if="item.isExpanded" class="details">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
      <img src="../../../assets/swpTwo.jpg" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import swpOne from "../../../assets/th.jpg";
import { ref, reactive, onMounted, onUnmounted } from "vue";
import dataList from "../../../utils/producDes.json";
import ZpwbCardCom from "../../../components/ZpwbCardCom.vue";

const titleList = ref();
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
  items: [
    {
      title: "降低企业成本：",
      id: 0,
      isExpanded: false,
      content:
        "精简基础性岗位，把HR从繁琐的事务性工作中解放出来，使企业人力资源工作人员能够将更多时间投入到人力资源核心业务，为企业提供更多支持，以降低企业成本，实现效率最大化。",
    },
    {
      title: "规避用工风险：",
      id: 1,
      isExpanded: false,
      content: "全流程服务符合法律法规，提供专业指导帮助企业优化规避用工风险。",
    },
    {
      title: "说明：",
      id: 2,
      isExpanded: false,
      content: "这一个部分做成模块卡片，点击卡片后会显示详细信息",
    },
  ],
});
onMounted(() => {
  console.log(dataList);
  state.title = dataList[4].typetitle;
  state.content = dataList[4].data[0].content as string;
});
const toggleExpand = (id: number) => {
  // 遍历所有项，根据id更新isExpanded
  state.items.forEach((item) => {
    if (item.id === id) {
      //进行渲染
      titleList.value.children[id].style.height = "8rem";
      item.isExpanded = true
    } else { 
      item.isExpanded = false; // 如果不是当前点击的项，则隐藏其更多信息
    }
  });
};
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
    height: 40rem;
    .merchant {
      background-color: #2d8fce;
      height: 40rem;
      width: 65%;
      color: white;
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
  .service {
    width: 80%;
    margin:5rem auto;
    h1 {
      text-align: center;
      overflow-y: hidden;
      margin: 2rem auto;
      font-size: 2rem;
      color: rgb(0, 0, 0);
    }
    p {
      color: white;
    }
    span {
      color: white;
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
  .advantage{
     width: 80%;
      min-height: 40rem;
      background-color: #6179b5;
      margin: auto;
  }
  .footer {
    width: 80%;
    height: 40rem;
    margin: 3rem auto;
    background-color: #f0f0f0;
    display: flex;
    justify-content: space-between;
    .footer-box {
      width: calc(45% - 5rem);
      height: 100%;
      padding-top: 3rem;
      padding-left: 5rem;
      h1 {
        text-align: center;
      }
      .title {
        height: 5rem;
        border: 2px solid #82c4b3;
        border-left: none;
        border-right: none;
        .title-box {
          height: 3rem;
          width: 100%;
          display: flex;
          justify-content: space-between;
          span {
            font-size: 2rem;
            margin-right: 2rem;
          }
        }
      }
    }
    img {
      width: 50%;
      height: 100%;
    }
    
  }
}

</style>
