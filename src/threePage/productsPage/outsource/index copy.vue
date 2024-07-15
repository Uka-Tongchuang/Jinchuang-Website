<template>
  <div class="main">
    <div class="content">
      <h1>外包服务</h1>
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
      <h1 style="font-size: 4.5rem;">启动流程</h1>

      <div class="content_box">
        <!-- //放轴线 -->
        <div class="line_box">
          <!-- //第一个步骤 -->
          <div class="box_first animate__animated" ref="boxFirst">
            <!-- //两个定位盒子 -->
            <div class="postion_box">
              <div class="top_box"></div>
              <h3>1.协议签订</h3>
              <p>
                确认服务形式、需求人数、时间地点、项目用人标准、工时待遇、服务费结算逻辑、附加条款等等
              </p>
            </div>
          </div>
          <!-- //第二个步骤 -->
          <div class="box_two animate__animated" ref="boxSecond">
            <!-- //两个定位盒子 -->
            <div class="postion_box">
              <div class="top_box"></div>
              <h3>2.人员招募/转签</h3>
              <p>启动源遣/外包人员劳动合同转签及时做好招聘及现场沟通工作</p>
            </div>
          </div>
          <!-- // 第三个步骤 -->
            <div class="box_three animate__animated" ref="boxThirdly">
            <!-- // 两个定位��子 -->
            <div class="postion_box">
              <div class="top_box"></div>
              <h3>3.劳动合同签署</h3>
              <p>10日内新合同签署，相关保险增员、入职 及人事考勤系统培训</p>
            </div>
          </div>
          <!-- // 第四个步骤 -->
            <div class="box_four animate__animated" ref="boxFourthly">
            <!-- // 两个定位��子 -->
            <div class="postion_box">
              <div class="top_box"></div>
              <h3>4. 项目执行</h3>
              <p>
                入、离、调、转等日常人事顶目管理工资表核对及发放费用支付
              </p>
            </div>
          </div>
          <!-- // 第五个步骤 -->
            <div class="box_five animate__animated" ref="boxFifth">
            <!-- // 两个定位��子 -->
            <div class="postion_box">
              <div class="top_box"></div>
              <h3>5. 监督、复盘、迭代</h3>
              <p>
                月度服务情况跟踪、留存数据盘点、策略调正等
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from "vue";
const activeStep = ref(0);
const steps = ref([
  {
    title: "1.协议签订",
    cardTitle:
      "确认服务形式 、需求人数、时间地点、项目用人标准、工时待遇、服务费结算逻辑、附加条款等",
    cardContent: "b.与客户核对并确认各岗位的面试/入职/合同签约流程",
  },
  {
    title: "2.人员招募/转签",
    cardTitle:
      "启动源遣/外包人员劳动合同转签及时做好招聘及现场̃妤犭绂蜡彳蒂卿蒞鈦鏊工作",
    cardContent: "",
  },
  {
    title: "3.劳动合同签署",
    cardTitle: "10日内新合同签署",
    cardContent: "相关保险增员、入职 及人事考勤系统培训 ",
  },
  {
    title: "4.项目执行",
    cardTitle: "入、离、调、转等日常人事顶目管理工资表核对及发放费用支付",
    cardContent: "",
  },
]);
const boxFirst = ref();
const boxSecond = ref();
const boxThirdly = ref();
const boxFourthly = ref();
const boxFifth = ref();
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
// 创建第五个Intersection Observer实例
const observerFifth = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // 检查元素是否进入可视区域
      if (entry.isIntersecting) {
        console.log("元素已进入可视区域");
        boxFifth.value.classList.add("animate__backInRight");
        boxFifth.value.style.opacity = "1";
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
  if (boxFifth.value) {
    observerFifth.observe(boxFifth.value);
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
  if (boxFifth.value) {
    observerFifth.observe(boxFifth.value);
  }
});
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-y: hidden;
  background: linear-gradient(to right,rgb(255, 255, 255),#ffffff,#b9d8e3,#ffffff,rgb(255, 255, 255));
  .content {
    background-color: #ededed;
    width: 100%;
    height: 20rem;
    margin: 0 auto;
    h1 {
      font-size: 5rem;
      text-align: center;
      line-height: 20rem;
      margin: 0;
      padding: 0;
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
    text-align: center;
    h1 {
      font-size: 2rem;
      color: rgb(0, 0, 0);
    }
    .content_box {
      width: 100%;
      height: 160rem;
      // margin: 0 auto;
      background: linear-gradient(to right,rgb(255, 255, 255),#ffffff,#b9d8e3,#ffffff,rgb(255, 255, 255));
      .line_box {
        width: 45rem;
        height: 160rem;
        margin: 0 auto;
        background-image: url("../../../assets/外包轴线.png");
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
          top: 10.4rem;
          left:48.6rem;
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
          top: 28rem;
          right: 26rem;
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
          top: 47.5rem;
          left:48.6rem;
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
        //第四个步骤
        .box_four {
          @include allClass;
          opacity: 0;
          top: 64.2rem;
          right: 26rem;
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
        //第五个步骤
        .box_five {
          @include allClass;
          opacity: 0;
          top: 83.6rem;
          left:48.6rem;
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
      }
    }
  }
}
</style>