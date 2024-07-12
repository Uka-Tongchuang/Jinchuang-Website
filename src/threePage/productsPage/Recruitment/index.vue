<template>
  <div class="main">
    <div class="applications">
      <h1>招聘业务</h1>
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
      <h1 style="font-size: 4.5rem">服务明细</h1>
      <div class="content_box">
        <!-- //放轴线 -->
        <div class="line_box">
          <!-- //第一个步骤 -->
          <div class="box_first animate__animated" ref="boxFirst">
            <!-- //两个定位盒子 -->
            <div class="postion_box">
              <div class="top_box"></div>
              <h3>1.前期对接工作</h3>
              <p>
                a. 通过项目启动，核对用人需求、岗位职责与录用标准<br/>
                b. 与客户核对并确认各岗位的面试/入职/合同签约流程
              </p>
            </div>
          </div>
          <!-- //第二个步骤 -->
          <div class="box_two animate__animated" ref="boxSecond">
            <!-- //两个定位盒子 -->
            <div class="postion_box">
              <div class="top_box"></div>
              <h3>2.人员寻访</h3>
              <p>
                a. 外部代理招聘渠道<br/>
                b. 通过公司内部网招渠道<br/>
                c. 通过校招、招聘会等渠道<br/>
                d. 矩阵视频，直播带货
              </p>
            </div>
          </div>
          <!-- // 第三个步骤 -->
          <div class="box_three animate__animated" ref="boxThirdly">
            <!-- // 两个定位��子 -->
            <div class="postion_box">
              <div class="top_box"></div>
              <h3>3.面试邀约及入职</h3>
              <p>
                a. 进行线上、线下面试及面试辅导<br/>
                b. 岗前培训及试岗工作、上岗通知及入职须知宣导<br/>
                c. 整理与沟通、共享招聘数据和台账，做相关分析
              </p>
            </div>
          </div>
          <!-- // 第四个步骤 -->
          <div class="box_four animate__animated" ref="boxFourthly">
            <!-- // 两个定位��子 -->
            <div class="postion_box">
              <div class="top_box"></div>
              <h3>4. 项目执行</h3>
              <p>入、离、调、转等日常人事顶目管理工资表核对及发放费用支付</p>
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
const boxFirst = ref();
const boxSecond = ref();
const boxThirdly = ref();
const boxFourthly = ref();
// 创建第一个Intersection Observer实例
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // 检查元素是否进入可视区域
      if (entry.isIntersecting) {
        console.log("元素已进入可视区域");
        // 在这里执行你的操作
        //第一个区域
        boxFirst.value.classList.add("animate__backInRight");
        boxFirst.value.style.opacity = "1";
      }
    });
  },
  {
    rootMargin: "0px", // 你可以根据需要调整这个值
    threshold: [1], // 当目标元素至少有10%进入视口时触发回调
  }
);
// 创建第二个Intersection Observer实例
const observerSec = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // 检查元素是否进入可视区域
      if (entry.isIntersecting) {
        console.log("元素已进入可视区域");
        boxSecond.value.classList.add("animate__backInLeft");
        boxSecond.value.style.opacity = "1";
      }
    });
  },
  {
    rootMargin: "0px", // 你可以根据需要调整这个值
    threshold: [1], // 当目标元素至少有10%进入视口时触发回调
  }
);
// 创建第三个Intersection Observer实例
const observerThree = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // 检查元素是否进入可视区域
      if (entry.isIntersecting) {
        console.log("元素已进入可视区域");
        boxThirdly.value.classList.add("animate__backInRight");
        boxThirdly.value.style.opacity = "1";
      }
    });
  },
  {
    rootMargin: "0px", // 你可以根据需要调整这个值
    threshold: [1], // 当目标元素至少有10%进入视口时触发回调
  }
);
// 创建第四个Intersection Observer实例
const observerFourthly = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // 检查元素是否进入可视区域
      if (entry.isIntersecting) {
        console.log("元素已进入可视区域");
        boxFourthly.value.classList.add("animate__backInLeft");
        boxFourthly.value.style.opacity = "1";
      }
    });
  },
  {
    rootMargin: "0px", // 你可以根据需要调整这个值
    threshold: [1], // 当目标元素至少有10%进入视口时触发回调
  }
);
// 组件挂载后设置监听
onMounted(() => {
  if (boxFirst.value) {
    observer.observe(boxFirst.value);
  }
  if (boxSecond.value) {
    observerSec.observe(boxSecond.value);
  }
  if (boxThirdly.value) {
    observerThree.observe(boxThirdly.value);
  }
  if (boxFourthly.value) {
    observerFourthly.observe(boxFourthly.value);
  }
});

// 组件卸载前移除监听
onUnmounted(() => {
  if (boxFirst.value) {
    observer.unobserve(boxFirst.value);
  }
  if (boxSecond.value) {
    observerSec.observe(boxSecond.value);
  }
  if (boxThirdly.value) {
    observerThree.observe(boxThirdly.value);
  }
  if (boxFourthly.value) {
    observerFourthly.observe(boxFourthly.value);
  }
});
const state = reactive({
  getNewsData: [],
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
});
// const activeStep = ref(0);
// const steps = ref([
//   { title: '1.前期对接工作', cardTitle: 'a.通过项目启动，核对用人需求、岗位职责与录用标准', cardContent: 'b.与客户核对并确认各岗位的面试/入职/合同签约流程' },
//   { title: '2.人员寻访', cardTitle: 'a.外部代理招聘渠道', cardContent: 'b.通过公司内部网招渠道' },
//   { title: '3.面试邀约及入职', cardTitle: 'a.进行线上、线下面试及面试辅导', cardContent: 'b.岗前培训及试岗工作、上岗通知及入职须知宣导' },
//   { title: '4.交付、个保温及离补', cardTitle: 'a.确保员工稳定性，及时答疑化解工作中问题', cardContent: 'b.做好离职补招工作，避免用人压力' },
// ]);
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  .applications {
    width: 100%;
    height: 30rem;
    background-color: #ededed;
    h1 {
      font-size: 5rem;
      text-align: center;
      line-height: 30rem;
      margin: 0;
      padding: 0;
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
    margin: 1rem auto;
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
    height: auto;
    margin: 2rem auto;
    text-align: center;
    overflow-y: hidden;
    h1 {
      font-size: 2rem;
      color: rgb(0, 0, 0);
    }
    .content_box {
      width: 70%;
      height: 100rem;
      margin: 0 auto;
      // background-color: antiquewhite;
      .line_box {
        width: 30%;
        height: 100rem;
        margin: 0 auto;
        background-image: url("../../../assets/Group 28(1).png");
        background-size: 100% 100%;
        position: relative;
        @mixin allClass() {
          width: 22rem;
          height: 12rem;
          position: absolute;
          border: 2px solid #000;
          z-index: 66;
        }
        //第一个步骤
        .box_first {
          @include allClass;
          opacity: 0;
          top: 5.8rem;
          right: -28rem;
          background-color: #ffffff;
          position: relative;
          .postion_box {
            @include allClass;
            bottom: 0.5rem;
            left: 0.5rem;
            background-color: #e3e9ec;
            .top_box {
              width: 4rem;
              height: 0.5rem;
              background-color: #606060;
              position: absolute;
              top: 0;
              left: 50%;
              transform: translateX(-50%);
            }
            h3 {
              padding-top: 1rem;
              font-size: 1.4rem;
            }
            p {
              width: 70%;
              margin: 0 auto;
              color: #777b7d;
            }
          }
        }
        //第二个步骤
        .box_two {
          @include allClass;
          opacity: 0;
          top: 15.5rem;
          left: -24rem;
          background-color: #ffffff;
          position: relative;
          .postion_box {
            @include allClass;
            background-color: #e3e9ec;
            right: 0.5rem;
            bottom: 0.5rem;
            .top_box {
              width: 4rem;
              height: 0.5rem;
              background-color: #606060;
              position: absolute;
              top: 0;
              left: 50%;
              transform: translateX(-50%);
            }
            h3 {
              padding-top: 1rem;
              font-size: 1.4rem;
            }
            p {
              width: 70%;
              margin: 0 auto;
              color: #777b7d;
            }
          }
        }
        //第三个步骤
        .box_three {
          @include allClass;
          opacity: 0;
          top: 26rem;
          right: -28rem;
          background-color: #ffffff;
          position: relative;
          .postion_box {
            @include allClass;
            bottom: 0.5rem;
            left: 0.5rem;
            background-color: #e3e9ec;
            .top_box {
              width: 4rem;
              height: 0.5rem;
              background-color: #606060;
              position: absolute;
              top: 0;
              left: 50%;
              transform: translateX(-50%);
            }
            h3 {
              font-size: 1.4rem;
            }
            p {
              width: 70%;
              margin: 0 auto;
              color: #777b7d;
            }
          }
        }
        //第四个步骤
        .box_four {
          @include allClass;
          opacity: 0;
          top: 35.8rem;
          left: -24rem;
          background-color: #ffffff;
          position: relative;
          .postion_box {
            @include allClass;
            background-color: #e3e9ec;
            right: 0.5rem;
            bottom: 0.5rem;
            .top_box {
              width: 4rem;
              height: 0.5rem;
              background-color: #606060;
              position: absolute;
              top: 0;
              left: 50%;
              transform: translateX(-50%);
            }
            h3 {
              padding-top: 1rem;
              font-size: 1.4rem;
            }
            p {
              width: 70%;
              margin: 0 auto;
              color: #777b7d;
            }
          }
        }
      }
    }
  }
}
</style>