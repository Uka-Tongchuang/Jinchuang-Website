<template>
  <div class="cart_box_com">
    <!-- 劳务派遣卡片组件 -->
    <h2>服务模式</h2>
    <!-- 卡片布局盒子 -->
    <div class="cart_list_box">
      <div class="item_first_box item_boxs">
        <div v-if="flagFirst" class="animate__animated animate__fadeIn">
          <div class="icon_box"></div>
          <div class="text">转移派遣服务<br />Transfer Dispatch Service</div>
          <div class="emity_box"></div>
          <div class="aboutAny" @click="showFirst">了解更多</div>
        </div>
        <div v-else class="animate__animated animate__slideInUp">
          <div class="texts">转移派遣服务</div>
          <div class="emity_box"></div>
          <div class="text_box">
            转移派遣服务旨在帮助企业将现有员工的雇佣关系转移至今创人力。通过这种方式，企业可以降低人力资源管理成本和风险，专注于核心业务。今创人力将负责这些员工的劳动合同管理、薪酬发放、社会保险、档案管理以及劳务纠纷处理，确保员工待遇和福利不变。
          </div>
          <div class="closeBtn" @click="backList">{{ "<" }}返回</div>
        </div>
      </div>
      <div class="item_two_box item_boxs">
        <div v-if="flagSecond" class="animate__animated animate__fadeIn">
            <div class="icon_box"></div>
        <div class="text">招聘派遣服务<br />Recruitment Dispatch Service</div>
        <div class="emity_box"></div>
        <div class="aboutAny" @click="anoutTwoBtn">了解更多</div>
        </div>
        <div v-else class="animate__animated animate__slideInUp">
          <div class="texts">招聘派遣服务</div>
          <div class="emity_box"></div>
          <div class="text_box">
            招聘派遣服务为企业提供从招聘到员工派遣的全流程解决方案。今创人力根据企业的需求，筛选和招聘符合条件的临时性、辅助性或替代性岗位员工，并负责这些员工的劳动合同管理、薪酬发放、社会保险、档案管理及劳务纠纷处理，确保企业获得高效、可靠的人力资源支持。
          </div>
          <div class="closeBtn" @click="backListSecond">{{ "<" }}返回</div>
        </div>
        
      </div>
      <div class="item_three_box item_boxs">
        <div v-if="flagThirty"  class="animate__animated animate__fadeIn">
            <div class="icon_box"></div>
        <div class="text">短期派遣服务<br />Short-term Dispatch Service</div>
        <div class="emity_box"></div>
        <div class="aboutAny" @click="anoutThreeBtn">了解更多</div>
        </div>
        <div v-else class="animate__animated animate__slideInUp">
          <div class="texts">短期派遣服务</div>
          <div class="emity_box"></div>
          <div class="text_box">
            短期派遣服务适用于企业需要在特定时间段内补充临时人力资源的情况。今创人力为企业提供灵活的短期员工派遣服务，负责短期员工的劳动合同管理、薪酬发放、社会保险、档案管理及劳务纠纷处理，帮助企业应对短期业务需求或项目高峰期。
          </div>
          <div class="closeBtn" @click="backListThree">{{ "<" }}返回</div>
        </div>
        
      </div>
      <div class="item_four_box item_boxs">
        <div v-if="flagFourth" class="animate__animated animate__fadeIn">
            <div class="icon_box"></div>
        <div class="text">长期派遣服务<br />Long-term Dispatch Service</div>
        <div class="emity_box"></div>
        <div class="aboutAny" @click="aboutFourBtn">了解更多</div>
        </div>
        <div v-else class="animate__animated animate__slideInUp">
          <div class="texts">长期派遣服务</div>
          <div class="emity_box"></div>
          <div class="text_box">
            长期派遣服务专为需要长期补充特定岗位人员的企业设计。今创人力为企业派遣符合要求的长期员工，负责他们的劳动合同管理、薪酬发放、社会保险、档案管理以及劳务纠纷处理，确保企业在人力资源管理方面的稳定性和连续性，同时减少管理负担和成本。
          </div>
          <div class="closeBtn" @click="backListFour">{{ "<" }}返回</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const flagFirst = ref(true);
const flagSecond = ref(true);
const flagThirty = ref(true);
const flagFourth = ref(true);

const showFirst = () => {
  flagFirst.value = false;
};
const backList = () => {
  flagFirst.value = true;
};

const anoutTwoBtn=()=>{
    flagSecond.value = false;
}
const backListSecond=()=>{
    flagSecond.value = true;
}

const anoutThreeBtn=()=>{
    flagThirty.value = false;
}
const backListThree=()=>{
    flagThirty.value = true;
}

const aboutFourBtn=()=>{
    flagFourth.value=false
}
const backListFour=()=>{
    flagFourth.value=true
}
</script>

<style scoped lang="scss">
.cart_box_com {
  width: 100%;
  height: 100%;
  h2 {
    font-size: 2rem;
    height: 4rem;
    line-height: 6rem;
  }
  .cart_list_box {
    width: 100%;
    height: 34rem;
    display: flex;
    justify-content: space-between;
    $color1: #fcc;
    .item_boxs {
      width: 24rem;
      height: 30rem;
      border-radius: 2rem;
      border: 0.2rem solid $color1;
      box-shadow: 0 0 0.4rem 0.2rem $color1;
      position: relative;
      .closeBtn {
        width: 3rem;
        height: 3rem;
        background-color: rgb(235, 212, 188);
        position: absolute;
        line-height: 3rem;
        top: -0.5rem;
        left: 1.4rem;
        font-size: 1rem;
        color: #fff;
        border-radius: 50%;
        text-align: left;
        cursor: pointer;
      }
      .texts {
        width: 80%;
        height: 2.2rem;
        font-size: 1.4rem;
        margin: 0 auto;
        text-align: center;
        line-height: 2.2rem;
        font-weight: 800;
        margin-top: 2rem;
      }
      .text_box {
        width: 70%;
        margin: 2.4rem auto;
        font-size: 1.2rem;
        text-indent: 2rem;
        line-height: 2rem;
      }
      .icon_box {
        width: 12rem;
        height: 12rem;
        background-color: $color1;
        border-radius: 50%;
        margin: 3rem auto 1rem auto;
      }
      .text {
        width: 80%;
        height: 4.4rem;
        font-size: 1.4rem;
        margin: 0 auto;
        text-align: center;
        line-height: 2.2rem;
        font-weight: 800;
        margin-bottom: 2.6rem;
      }
      .emity_box {
        width: 70%;
        height: 1rem;
        background-color: $color1;
        margin: 1rem auto;
        border-radius: 0.5rem;
      }
      .aboutAny {
        width: 80%;
        height: 2rem;
        margin: 0 auto;
        text-align: center;
        line-height: 2rem;
        font-size: 0.8rem;
        color: #666;
        cursor: pointer;
        text-decoration: underline;
        font-size: 1.4rem;
      }
    }
    .item_two_box {
      border: 0.2rem solid #f09;
      box-shadow: 0 0 0.4rem 0.2rem #f09;
      .icon_box {
        background-color: #f09;
      }
      .emity_box {
        background-color: #f09;
      }
    }
    .item_three_box {
      border: 0.2rem solid #f93;
      box-shadow: 0 0 0.4rem 0.2rem #f93;
      .icon_box {
        background-color: #f93;
      }
      .emity_box {
        background-color: #f93;
      }
    }
    .item_four_box {
      border: 0.2rem solid rgb(43, 51, 135);
      box-shadow: 0 0 0.4rem 0.2rem rgb(43, 51, 135);
      .icon_box {
        background-color: rgb(43, 51, 135);
      }
      .emity_box {
        background-color: rgb(43, 51, 135);
      }
    }
  }
}
</style>