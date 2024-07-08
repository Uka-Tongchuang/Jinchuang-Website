<template>
  <div class="Company_box">
    <!-- 公司宣传模块 -->
    <div class="img_box">
      <img src="../assets/图片1.png" alt="" />
    </div>
    <div class="text_box">
        <p>
            成都今创人力资源有限公司是万古人力旗下独立运营的人力公司,是一家综合性人力资源服务集团；
        </p>
      
        <p>旗下分支机构和服务网点覆盖全国各地等一二线主要地市；与国内多家行业领军企业深入合作，拥有四个地市人力资源平台经济产业园运营权。</p>
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
  // background-color: #f00;
  margin-top: 1rem;
  border: 1px solid #ccc;
  box-shadow: 0 0 0.05rem 0.01rem #ccc;
  border-radius: 1rem;
  .img_box{
    float: left;
    width: 40%;
    height: 100%;
    margin-left: 1rem;
    img{
        width: 100%;
        height: 95%;
    }
  }
  .text_box{
    float: left;
    width: 50%;
    font-size: 1.6rem;
    margin-left: 4rem;
    p{
        margin-top: 5rem;
    }
  }
}
</style>