<template>
  <div class="service">
    <h1>服务流程</h1>
    <el-button :icon="ArrowUp" @click="prev" class="arrowUp" circle ></el-button>
    <el-carousel
      :interval="3000"
      arrow="always"
      ref="carousel"
      style="
        margin-top: 3rem;
        height: 46rem;
        background-color: rgba(241, 245, 249, 1);
      "
      direction="vertical" 
    >
      <el-carousel-item v-for="(item, index) in 1" :key="index">
        <el-card
          style="
            width: 80%;
            margin: auto;
            height: 47rem;
            padding: 3rem 5rem;
            background-color: rgba(241, 245, 249, 1);
          "
        >
          <div class="title">01 &nbsp;{{ state.arr1.title }}</div>
          <div class="text">{{ state.arr1.text }}</div>
          <div class="text">{{ state.arr1.text2 }}</div>
          <div class="card-list">
            <div class="item" v-for="item in state.arr1.list" :key="item.id">
              <p class="id">{{ item.id }}</p>
              <p class="dest">{{ item.dest }}</p>
            </div>
          </div>
        </el-card>
      </el-carousel-item>
      <el-carousel-item v-for="(item, index) in 1" :key="index">
        <el-card
          style="
            width: 80%;
            margin: auto;
            height: 47rem;
            padding: 3rem 5rem;
            background-color: rgba(241, 245, 249, 1);
          "
        >
          <div class="title">02 &nbsp;{{ state.arr2.title }}</div>
          <div class="text">{{ state.arr2.text }}</div>
          <div class="text">{{ state.arr2.text2 }}</div>
          <div class="card-list">
            <div
              class="item item1"
              v-for="item in state.arr2.list"
              :key="item.id"
            >
              <p class="id">{{ item.id }}</p>
              <p class="dest">{{ item.dest }}</p>
            </div>
          </div>
        </el-card>
      </el-carousel-item>
      <el-carousel-item v-for="(item, index) in 1" :key="index">
        <el-card
          style="
            width: 80%;
            margin: auto;
            height: 47rem;
            padding: 3rem 5rem;
            background-color: rgba(241, 245, 249, 1);
          "
        >
          <div class="title">03 &nbsp;{{ state.arr3.title }}</div>
          <div class="text">{{ state.arr3.text }}</div>
          <div class="text">{{ state.arr3.text2 }}</div>
          <div class="card-list">
            <div
              class="item item1"
              v-for="item in state.arr3.list"
              :key="item.id"
            >
              <p class="id">{{ item.id }}</p>
              <p class="dest">{{ item.dest }}</p>
            </div>
          </div>
        </el-card>
      </el-carousel-item>
      <el-carousel-item v-for="(item, index) in 1" :key="index">
        <el-card
          style="
            width: 80%;
            margin: auto;
            height: 47rem;
            padding: 3rem 5rem;
            background-color: rgba(241, 245, 249, 1);
          "
        >
          <div class="title">04 &nbsp;{{ state.arr4.title }}</div>
          <div class="text">{{ state.arr4.text }}</div>
          <div class="text">{{ state.arr4.text2 }}</div>
          <div class="card-list">
            <div
              class="item item1"
              v-for="item in state.arr4.list"
              :key="item.id"
            >
              <p class="id">{{ item.id }}</p>
              <p class="dest">{{ item.dest }}</p>
            </div>
          </div>
        </el-card>
      </el-carousel-item>
    </el-carousel>
    <el-button circle  :icon="ArrowDown" @click="next" class="ArrowDown"
      ></el-button
    >
  </div>
</template>
<script lang="ts" setup>
import {ArrowUp,ArrowDown} from '@element-plus/icons-vue'
import { ref, reactive } from "vue";
const state = reactive({
  arr1: {
    title: "需求分析和准备",
    text: "与客户进行深入交流，以准确了解客户的具体需求，包括但不限于企业文化、岗位职责、期望的候选人资质以及业务目标等。通过开展详细的会议、问卷调查和一对一的访谈，收集关键的信息，确保后续招聘流程顺利进行的基础，精确把握客户的需求和预期。",
    text2:
      "并且我们会将这些信息汇总并进行深入分析，以识别和澄清可能存在的任何疑问或需求的歧义，以确保所有信息都被正确理解和应用。在与客户签署正式协议后，成立专项项目组，负责整个招聘流程的执行和管理。",
    list: [
      {
        id: "01",
        dest: "初步了解客户需求",
      },
      {
        id: "02",
        dest: "按需求进行评估调查及岗位分析",
      },
      {
        id: "03",
        dest: "根据专业的招聘项目建议",
      },
      {
        id: "04",
        dest: "签署合作协议",
      },
      {
        id: "05",
        dest: "成立专项项目组",
      },
    ],
  },

  arr2: {
    title: "收集与筛选候选人",
    text: "项目组团队会采用多渠道策略，例如社招、网招、校招、新媒体带岗、猎头等，通过多元化方法，最大限度地覆盖目标人群，吸引多样化的候选人。以此不仅增加获取顶尖人才的机会，而且有助于发现并收集那些未积极寻求新机会但符合要求的被动候选人信息，确保能覆盖到最广泛的人才库。",
    text2:
      "此外，项目组还会进行市场和行业研究，以确保招聘策略与当前市场条件相匹配，并且根据行业趋势的变化，实时调整招聘计划以吸引最合适的候选人。收集到的简历会经过严格筛选，保留符合岗位要求的候选人，为客户提供高质量的候选简历。",
    list: [
      {
        id: "06",
        dest: "多渠道收集挖掘简历",
      },
      {
        id: "07",
        dest: "按客户需求筛选简历",
      },
      {
        id: "08",
        dest: "人才筛选",
      },
      {
        id: "09",
        dest: "简历推送至客户公司",
      },
    ],
  },
  arr3: {
    title: "客户评审与聘用",
    text: "项目组将根据客户的具体要求，准备并安排面试，确保每位候选人都能充分展示其专业技能与个人素质。在面试阶段，客户将有机会深入了解候选人的专业背景、工作经验及其解决问题的能力。客户可以进行内部讨论，评估候选人是否符合公司的文化和技术需求。在确定了心仪候选人后，团队将验证候选人的教育背景、工作历史及任何必要的资质证明，确保其信息的真实性与有效性。",
    text2:
      "背景调查确认无误，客户可以与候选人就职位细节进行协商，包括薪资、职责、入职时间等。在双方满意且同意所有条款后，正式发出聘用邀请。",
    list: [
      {
        id: "10",
        dest: "客户面试",
      },
      {
        id: "11",
        dest: "确定双方意向",
      },
      {
        id: "12",
        dest: "候选人背景调查",
      },
      {
        id: "13",
        dest: "岗位匹配成功",
      },
    ],
  },
  arr4: {
    title: "项目跟踪与服务保障",
    text: "为确保新员工能够无缝融入公司，团队将提供入职指导和初期的工作支持，包括协助新员工理解公司文化、工作流程及其角色的具体职责。同时，项目组也会与客户保持紧密沟通，解决任何与新员工相关的初期问题，以确保双方满意度。服务通常涵盖试用期内的任何关键问题处理，帮助员工顺利过渡到其新角色。",
    text2:
      "随着新员工的试用期结束，项目组将进行费用结算，并启动招聘项目的总结阶段。项目组将收集客户反馈、分析招聘流程中的每个步骤，并评估招聘的效果与效率，识别成功的策略和需改进的地方。以此增强客户信任，也为招聘团队提供了宝贵的经验和见解，以便在未来的项目中提供更优质的服务。",
    list: [
      {
        id: "14",
        dest: "服务后续保障",
      },
      {
        id: "15",
        dest: "费用结算",
      },
      {
        id: "16",
        dest: "跟踪总结项目流程",
      },
      {
        id: "17",
        dest: "优化未来项目",
      },
    ],
  },
});

const carousel = ref();

function prev() {
  carousel.value.prev();
}

function next() {
  carousel.value.next();
}
</script>
<style lang="scss" scoped>
.arrowUp{
  z-index: 99999999;
  position: absolute;
  right: 9.8rem;
  top: 25.8rem;
}
.ArrowDown{
  z-index: 99999999;
  position: absolute;
  right: 9.8rem;
  bottom: 22rem;
}
::v-deep(.el-carousel__container) {
  height: 70rem !important;
}
::v-deep(.el-card) {
  border: none;
  box-shadow: none;
}
::v-deep(.el-carousel__indicators--right) {
  right: 10rem;
}
::v-deep(.el-carousel__button) {
  background-color: #2758e9;
}
.service {
  background-color: rgba(241, 245, 249, 1);
  width: 100%;
  height: 60rem;
  position: relative;
  margin: 0 auto;
  h1 {
    padding-top: 2rem;
    overflow-y: hidden;
    font-size: 3rem;
    text-align: center;
    margin-bottom: 2rem;
  }
  .title {
    line-height: 8rem;
    font-size: 2rem;
    font-weight: 700;
  }
  .text {
    line-height: 2rem;
    font-size: 1.5rem;
  }
  .card-list {
    margin-top: 5rem;
    width: 100%;
    height: 30rem;
    display: flex;
    justify-content: space-between;
    .item {
      display: flex;
      justify-content: space-around;
      width: 18%;
      height: 29%;
      background-color: rgba(39, 88, 233, 0.3);
      border-radius: 2rem;
      .id {
        width: 10%;
        float: left;
        color: white;
        padding-left: 1rem;
        font-size: 1.5rem;
      }
      .dest {
        width: 90%;
        float: left;
        line-height: 6rem;
        text-align: center;
        font-size: 1.5rem;
      }
    }
    .item1 {
      width: 22%;
    }
  }
}
</style>
