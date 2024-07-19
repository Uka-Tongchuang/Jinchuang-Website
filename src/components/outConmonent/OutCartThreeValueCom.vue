<template>
  <div class="cart_box——value_com">
    <!-- 劳务派遣卡片组件 -->
    <h2>服务价值</h2>
    <!-- 卡片布局盒子 -->
    <div class="cart_list">
      <div>
        <li>一站式解决方案</li>
        <li>专业风险管控</li>
        <li>风险有效隔离</li>
      </div>
      <div>
        <li>服务覆盖全国</li>
        <li>人员配置灵活</li>
        <li>降低企业成本</li>
      </div>
      <div>
        <li>专业服务团队</li>
        <li>高效获取人才</li>
        <li>支持业务运行</li>
      </div>
      <div>
        <li>摆脱事务工作</li>
        <li>专注核心业务</li>
        <li>提升终端效率</li>
      </div>
    </div>
  </div>
</template>
    
    <script setup lang="ts">
</script>
    
    <style scoped lang="scss">
.cart_box——value_com {
  width: 100%;
  height: 100%;
  margin-top: 6rem;
  h2 {
    font-size: 3rem;
   text-align: center;
  }
  .cart_list {
    width: 100%;
    height: 34rem;
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    >div{
        width: 16rem;
        height: 12rem;
        border-radius: 50%;
        margin-top: 1rem;
        background-image: linear-gradient( 110.6deg , #6179B5 49%, #2D8FCE .7%);
        // background: linear-gradient(to bottom,#f09,#0ff,#f90);
        box-shadow: 0 0 0.2rem 0.1rem rgb(187, 187, 187);
        display: flex;
        flex-direction: column;
        font-size: 1.6rem;
        padding: 4rem 2rem;
        justify-content: space-around;
        align-items: self-start;
        color: #fff;
        font-weight: 600;
        li{
            margin-left: 1rem;
        }
    }
  }
}
</style>