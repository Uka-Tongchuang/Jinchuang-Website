<template>
  <div class="main">
    <div class="content">
      <h1>客户案例-餐饮连锁</h1>
    </div>
    <div class="main-content">
      <el-card style="max-width: 100%">
        <div class="back" @click="goBack">{{ `<` }}返回列表</div>
        <div class="content_box">
          <h1 style="text-align: center">业务需求</h1>
          <p>
            广州某餐饮连锁品牌机构，有覆盖省内15家门店外包人员的用工需求，缺口共计270人，招聘期为30天
          </p>
          <h1 style="text-align: center">业务难点</h1>
          <div class="Business_ifficulties_box">
            <div>客户内部管理混乱，工价不统一</div>
            <div>前期货量不稳定导致人员暂存出现问题</div>
            <div>开仓人员缺口大招聘周期短</div>
          </div>
          <h1 style="text-align: center">策略及行动</h1>
          <div class="Business_ifficulties_box">
            <div>设置开仓补贴和内推奖励用以引流</div>
            <div>团队通过摆摊设点、当地招工平台宣传等方式投入招聘资源</div>
            <div>招聘过程管理：拆分每日爬坡目标，未达成需求抽调补足缺口</div>
          </div>
          <h1 style="text-align: center">交付目标</h1>
          <h1 style="text-align: center">合作模式</h1>
          <div class="module_type_box">招聘外包和劳务外包</div>
          <h1 style="text-align: center">案例成就</h1>
          <div class="Business_ifficulties_box">
            <div>7天内完成136人入职</div>
            <div>一个月后仓内劳务人数增加到250人左右</div>
            <div>人力份额在所有劳务供应商中稳居第一</div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const goBack = () => {
  router.back();
};
</script>
  
  <style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  .content {
    background-color: red;
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
  .main-content {
    width: 80%;
    height: 100%;
    margin: 2rem auto;
    .back {
      cursor: pointer;
    }
    .content_box {
      h1 {
        color: rgb(188, 14, 14);
        font-size: 2.4rem;
      }
      p {
        width: 50%;
        margin: 0 auto;
        font-size: 1.8rem;
        text-indent: 4rem;
      }
      .module_type_box {
        width: 50%;
        margin: 0 auto;
        text-align: center;
        color: #000;
        font-weight: bold;
        font-size: 2rem;
      }
      .Business_ifficulties_box {
        width: 50%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        > div {
          width: 20%;
          height: 6rem;
          border: 1px solid #ccc;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.4rem;
          padding: 2rem;
          box-shadow: 0 0 0.4rem 0.2rem #ccc;
          border-radius: 1rem;
        }
      }
    }
  }
}
</style>
  