<template>
  <div class="content">
  <HostingBanner/>
    <div class="servce_content">
      <OutsurceFuWuCard/>
    </div>
    <div class="sevce_process">
      <h1>服务流程</h1>
      <div class="content-box">
        <!-- 左边盒子 -->
        <div class="content-left">
          <p>企业客服</p>
          <p>发展业务需求</p>
          <p>服务质量及过程监督</p>
          <p>按照标志组织验收</p>
        </div>
        <!-- 中间盒子 -->
        <div class="content-center">
          <div class="content-center-top">
            <div class="singleArrow"></div>
            <div class="content-list">签订合作协议</div>
            <div class="singleArrow2"></div>
          </div>
          <div class="content-center-top">
            <div class="singleArrow"></div>
            <div class="content-list">交付结果</div>
            <div class="singleArrow2"></div>
          </div>
        </div>
        <!-- 右边盒子 -->
        <div class="content-left">
          <p>万古人力</p>
          <p>制定服务方案</p>
          <p>运营资质配置</p>
          <p>团建搭建及管理</p>
          <p>按照标志组织验收</p>
        </div>
      </div>
    </div>
    <!-- 服务优势 -->
    <div class="serve_advantage">
      
      <ServeAdvantageCom/>
    </div>
    <!-- //服务价值 -->
    <div class="serve_value_box">
            <OutsourcingCardCom/>
        </div>


  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import dataList from "../../../utils/producDes.json";
import OutsourcingCardCom from '@/components/OutsourcingCardCom.vue';
import OutsurceFuWuCard from '@/components/OutsourceFuWuCard.vue';
import ServeAdvantageCom from "@/components/serveAdvantage/ServeAdvantage.vue"
import HostingBanner from '../../../components/bannerList/HostingBanner.vue'
// console.log(navigator.userAgent,"1212");
// const titleList = ref();
const state = reactive({
  title: "",
  content: "",
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
  state.title = dataList[3].typetitle;
  state.content = dataList[3].data[0].content as string;
}); 
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  padding: 0;
  margin: 0;
  .servce_content{
    width: 80%;
    height: 46rem;
    background-color: #ffffff;
    margin: 2rem auto;
  }
  .sevce_process{
    width: 80%;
    height: 40rem; 
    margin: 2rem auto;
    h1{
      font-size: 2rem;
      height: 5rem;
    }
    .content-box{
      width: 90%;
      height: 35rem;
      margin: auto; 
      display: flex;
      .content-left{
        height: 29rem;
        width: calc(30% - 6rem); 
        text-align: center; 
        display: flex; 
        flex-flow: column; 
        justify-content: space-between;
        padding:2rem 3rem;
        border: 1px solid #6179B5;
        p{  
          width: 100%;
          font-size: 1.2rem;
          line-height: 3rem;
          height:3rem; 
          background-color:#B2CEFA; 
          border-radius: 0.5rem;
        }
      }
      .content-center{
        height: 29rem;
        width: 40%;
        padding: 3rem;
        display: flex; 
        flex-flow: column;
        justify-content: space-between; 
        .content-center-top{
          width: 100%;
          height: 5rem;
          display: flex;
          justify-content: space-between;
          .singleArrow {
          width: 10rem;
          height: 4px;
          position: relative; 
          top: 1.5rem;
          background-color: #6179B5;
          // transform: rotate(-40deg); 
        }
        .singleArrow::after {
          content: "";
          display: block;
          position: absolute;
          right: -20px; /* 箭头位置 */
          top: -7px; /* 箭头位置 */
          border-top: 10px solid transparent; /* 箭头高低 */
          border-bottom: 10px solid transparent; /* 箭头高低 */
          border-left: 20px solid #6179B5; /* 箭头长度*/
        }
        .content-list{
          width: 10rem;
          height: 3rem;
          line-height: 3rem;
          text-align: center; 
          background-color: #C5E5AE;
          border-radius: 1rem;
          margin-bottom: 2rem;
        }
         .singleArrow2 {
          width: 10rem;
          height: 4px;
          position: relative; 
          top: 1.5rem;
          background-color: #6179B5;
          /* transform: rotate(-40deg); */ /* 旋转角度 */
        }
        .singleArrow2::after {
          content: "";
          display: block;
          position: absolute;
          right: 10rem; /* 箭头位置 */
          top: -7px; /* 箭头位置 */
          border-top: 10px solid transparent; /* 箭头高低 */
          border-bottom: 10px solid transparent; /* 箭头高低 */
          border-right: 20px solid #6179B5; /* 箭头长度*/
        }
        }
      }
    }
  }
  .serve_advantage{
    width: 80%;
    height: 40rem;
    // background-color: #98c478;
    margin: 5rem auto 2rem;
  }
  .trapezoid {
    position: relative;
    width: 100%;
    height: 40rem;
    .merchant {
      background-color: #6179b5;
      height: 40rem;
      width: 65%;
      color: #fff;
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
}
</style>
