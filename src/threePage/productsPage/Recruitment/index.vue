<template>
  <div class="main">
    <!-- banner -->
    <RecruitmentBanner />
    <!-- 服务流程 -->
    <RecruitmentService />

    <!-- 服务优势 -->
    <div class="advantage">
      <h1>服务优势</h1>
      <div class="content">
        <div class="content-box">
          <img src="../../../assets/zhaopinone.png" alt="" />
          <div class="title">
            <div class="flex-box">
              <p></p>
              <div class="title-box">
                <h2>专属服务</h2>
                <span>
                  全面的人才招聘、寻访体系及经验丰富、
                  操作规范的专业服务团队，可以为客户 提供专属服务。
                </span>
              </div>
            </div>
            <div class="flex-box">
              <p></p>
              <div class="title-box">
                <h2>丰富资源</h2>
                <span>
                  丰富的跨地区服务以 及大规模招聘经验， 可根据
                  客户需求提供定制化解决方案， 减少客户人力资源工作负担。
                </span>
              </div>
            </div>
            <div class="flex-box">
              <p></p>
              <div class="title-box">
                <h2>专人专项</h2>
                <span>
                  采取项目制的运作模式，针对不 同项目 成立招聘项目组，专人
                  专项负责， 全程实时沟通确保进度, 为客户提 供招聘全流程支持。
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="content-box">
          <div class="title">
            <div class="flex-box">
              <div class="title-box1">
                <h2 class="right">优秀人才</h2>
                <span>
                  全面的人才招聘、寻访体系及经验丰富、
                  操作规范的专业服务团队，可以为客户 提供专属服务。
                </span>
              </div>
              <p></p>
            </div>
            <div class="flex-box">
              <div class="title-box1">
                <h2 class="right">广泛招聘</h2>
                <span>
                  校园巡回招聘、企业公众号、 社群、招聘 网站等充分
                  挖掘各种简历来源渠道， 招聘场景全覆盖。
                </span>
              </div>
              <p></p>
            </div>
            <div class="flex-box">
              <div class="title-box1">
                <h2 class="right">全国覆盖</h2>
                <span>
                  服务范围覆盖全国，采用线上线下 结合的 方式，整合行业内各方面
                  的人才资源， 向客户推荐符合需求 的人才，提高 应聘者总体质量
                </span>
              </div>
              <p></p>
            </div>
          </div>
          <img src="../../../assets/zhaopintwo.png" alt="" />
        </div>
      </div>
    </div>
    <!-- 服务价值 serviceValue-->
    <!-- <div class="serviceValue">
      <div class="footer-box">
        <h1>服务价值</h1>
        <div ref="titleList">
          <div
            v-for="(item, index) in state.items"
            :key="item.id"
            @click="toggleExpand(index)"
            class="title"
            :class="{'expanded':item.isExpanded}"
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
    </div> -->
    <RecruitmentValue :titleArray="state.items" />
  </div>
</template>

<script setup lang="ts">
import swpOne from "../../../assets/th.jpg";
import { ref, reactive, onMounted, onUnmounted } from "vue";
import RecruitmentBanner from "../../../components/bannerList/RecruitmentBanner.vue";
import RecruitmentService from "../../../components/Service/RecruitmentService.vue";
import RecruitmentValue from "../../../components/serviceValue/RecruitmentValue.vue";

const titleList = ref();
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
  items: [
    {
      title: "方便操作，灵活性强",
      id: 0,
      isExpanded: false,
      content:
        "可以快速帮助企业有效地增加或减少招聘操作，以适应不断变化的业务需求。",
    },
    {
      title: "解决难题，降低风险",
      id: 1,
      isExpanded: false,
      content:
        "解决企业招人难，用人难问题，大大提高企业的运转效率，并有效降低企业用工风险。。",
    },
    {
      title: "降本增效，专注核心",
      id: 2,
      isExpanded: false,
      content:
        "提高企业人力资源部门效能，助理HR从事务性工作中解脱，专注核心工作，节省管理与时间成本。",
    },
    {
      title: "专业服务，有效控制",
      id: 3,
      isExpanded: false,
      content: "专业的招聘流程外包，高效助力企业资源管理和成本控制。。",
    },
  ],
});
// const number=ref(0)
// const toggleExpand = (index: number) => {
//   // 遍历所有项，根据id更新isExpanded
//   state.items.forEach((item,inde) => {
//     if (inde === index) {
//       number.value++
//       titleList.value.children[inde].style.height = "8rem";
//       item.isExpanded = true
//       console.log(number.value)
//       if(number.value%2 !=1){
//         titleList.value.children[inde].style.height = "5rem";
//         item.isExpanded = false
//       }
//     } else {
//       titleList.value.children[inde].style.height = "5rem";
//       item.isExpanded = false; // 如果不是当前点击的项，则隐藏其更多信息
//     }
//   });
// };
</script>

<style scoped lang="scss">
.expanded {
  height: 8rem;
}
.main {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

  .advantage {
    width: 80%; 
    margin: auto;
    h1 {
      overflow-y: hidden;
      margin: 2rem auto;
      font-size: 3rem;
      color: rgb(0, 0, 0);
    }
    .content{
      width: 80%; 
      margin: auto; 
      height: 82rem;
      .content-box{
        display: flex;
        justify-content: space-between;
        img{
          width: 40%;
          height: 50%;
        }
        .title{
          width: 40%;
         .flex-box{
          display: flex;
          justify-content: space-between;
          p{
            width: 0.5rem;
            height: 2rem;
            background-color: #82C4B3;
            margin-top: 2rem;
          }
          .title-box{
            width: 90%;
            h2{
              font-size: 2rem;
            }
            span{
              font-size: 1.5rem;
              color: #000;
              opacity: .5;
            }
          }
           .title-box1{
            width: 90%;
               text-align: right;
            h2{
              font-size: 2rem;
            }
            span{
              font-size: 1.5rem;
              color: #000;
              opacity: .5;
            } 
          }
          }
        }
      }
    }
  }
}
</style>
