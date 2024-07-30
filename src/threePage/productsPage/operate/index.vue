<template>
  <div class="content">
    <OperateBanner />
    <div class="card">
      <h1>服务内容</h1>
      <div class="content_cart_list_box">
        <PersonnelComCartVue />
      </div>
    </div>

    <div class="advantage">
      <div class="title">
        <h1>服务优势</h1>
        <p>
          为企业解决人力资源管理过程中的事务性 、 操作性工作， 如劳动合同代签、
          用退工申报 、 薪酬代发放 、 社保和公积金申报与缴纳办理 、
          人事档案转递和信息管理等，
          使企业人力资源工作人员能够将更多时间投入到人力资源核心业务中，
          为企业发展提供更多支持， 以降低企业成本， 实现效率最大化。
        </p>
      </div>
      <div class="imgUrl"> 
        <img src="../../../assets/youshi.png"/>
      </div>
      <div class="card-list">
        <p>专业化顾问团队</p>
        <p>数字化管理平台</p>
        <p>标准化服务流程</p>
        <p>多元化解决方案</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import OperateBanner from "../../../components/bannerList/OperateBanner.vue";
import PersonnelComCartVue from "../../../components/PersonnelManagement/PersonnelComCart.vue";
</script>

<style lang="scss" scoped>
@media screen and (max-width: 2660px) {
  .content {
  width: 100%;
  margin: 0;
  .card {
    width: 100%;
    height: 36rem;
    padding-top: 5rem;
    background: #f1f5f9;
    h1 {
      font-size: 3rem;
      text-align: center;
      color: #142e83;
    }
    .content_cart_list_box {
      width: 80%;
      height: 33rem;
      margin: 2rem auto;
      
    }
  }
  .advantage {
    width: 80%;
    height: 70rem;
    margin: auto;
    position: relative;
    display: flex;
    justify-content: space-between;
    .title {
      width: 50rem;
      margin-top: 5rem;
      h1 {
        font-size: 3rem;
        color: #142e83;
      }
      p {
        font-size: 1.6rem;
      }
    }
    .imgUrl {
      width: 60rem;
      height: 60rem;
      margin-top: 8rem;
      margin-left: 2rem;
      img{
        width: 60rem;
        height: 60rem;
      }
    }
    .card-list {
      width: 80%;
      height: 10rem;
      position: absolute;
      background: #2758e9;
      color: white;
      line-height: 6rem;
      font-size: 2rem;
      bottom: 6rem;
      left: 0;
      display: flex;
      justify-content: space-around;
      p {
        width: 23%;
        text-align: center;
        border-right: 1px solid white;
      }
      p:last-child {
        border-right: none;
      }
    }
  }
}
}
@media screen and (max-width: 768px) {
  .content {
  width: 100%;
  margin: 0;
  .card {
    min-height: 67rem;
    padding-top: 1rem; 
    h1 {
      font-size: 2rem;
      text-align: center;
      color: #142e83;
    }
    .content_cart_list_box {
      width: 95%;
      min-height: 33rem;
      margin: 0 auto;
    }
  }
  .advantage {
    width: 100%; 
    height: 50rem;
    margin: auto;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .title {
      width: 100%;
      height: 10rem;
      margin-top: 0;
      h1 {
        font-size: 2rem;
        color: #142e83;
      }
      p {
        font-size: 1.2rem;
      }
    }
    .imgUrl {
      width: 30rem;
      height: 0;
      margin-top: -12rem;
      margin-left: 0;
      img{
        width: 30rem;
        height: 30rem;
      }
    }
    .card-list { 
      width: 100%;
        height: 4rem; 
        background: #2758e9;
        color: white;
        line-height: 2rem;
        font-size: 0.8rem;
        bottom: 2rem; 
        display: flex;
        justify-content: space-around;
      p {
        width: 23%;
        text-align: center;
        border-right: 1px solid white;
      }
      p:last-child {
        border-right: none;
      }
    }
  }
}
}

</style>
