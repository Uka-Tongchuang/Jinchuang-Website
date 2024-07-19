<template>
  <div class="Company_box">
    <!-- 公司宣传模块 -->
    <div class="img_box">
      <img src="../assets/bannerHome.png" alt="" />
    </div>
    <div class="text_box">
      <h2>成都今创人力资源有限公司</h2>
      <p>
        “今创人力”，是一家致力于全球为企业客户提供全面人力资源服务解决方案的专业公司 ，业务范围涵盖，人事管理、劳务派遣、岗位外包、灵活用工等在内的一站式人力资源综合解决方案。
        旗下分支机构和服务网点覆盖全国各地等一二线主要地市；与国内多家行业领军企业深入合作，拥有四个地市人力资源平台经济产业园运营权；
        成都今创人力资源有限公司是万古人力旗下独立运营的人力公司,是一家综合性人力资源服务集团。
      </p>
    </div>
    <div style="clear: both"></div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.Company_box {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  box-shadow: 0.3rem 0.3rem 0.3rem 0.1rem rgb(222, 226, 230);
  background: rgb(239, 244, 249);
  .img_box {
    float: left;
    width: 40%;
    height: 100%;
    margin-left: 1rem;
    img {
      display: block;
      width: 30rem;
      height: 26rem;
      margin-top: 4rem;
      margin-left: 2rem;
    }
  }
  .text_box {
    width: 50%;
    float: left;
    font-size: 1.6rem;
    margin-left: 4rem;
    h2{
      margin-left: 2rem;
      margin-top: 3.8rem;
    }
    p {
      font-size: 1.2rem;
      margin-left: 2rem;
      margin-top: 1rem;
      line-height: 3rem;
    }
  }
}
</style>