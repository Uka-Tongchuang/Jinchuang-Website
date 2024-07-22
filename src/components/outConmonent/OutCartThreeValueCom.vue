<template>
  <div class="cart_box——value_com">
    <!-- 劳务派遣卡片组件 -->
    <h2>服务价值</h2>
    <!-- 卡片布局盒子 -->
    <div class="cart_list">
      <div class="content-list">
        <div class="title">
          <h1>解决方案</h1>
          <p>01</p>
        </div>
        <li>一站式解决方案</li>
        <li>专业风险管控</li>
        <li>风险有效隔离</li>
      </div>
      <div class="content-list">
        <div class="title">
          <h1>覆盖范围</h1>
          <p>02</p>
        </div>
        <li>服务覆盖全国</li>
        <li>人员配置灵活</li>
        <li>降低企业成本</li>
      </div>
      <div class="content-list">
        <div class="title">
          <h1>专业团队</h1>
          <p>03</p>
        </div>
        <li>专业服务团队</li>
        <li>高效获取人才</li>
        <li>支持业务运行</li>
      </div>
      <div class="content-list">
        <div class="title">
          <h1>提升效率</h1>
          <p>04</p>
        </div>
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
  width: 80%;
  height: 100%;
  margin: 0 auto;
  h2 {
    font-size: 3rem;
   text-align: center;
   padding-top: 3rem;
  }
  .cart_list {
    width: 100%;
    height: 34rem;
    display: flex;
    justify-content: space-between; 
   .content-list{
        width: 20%;
        height: 12rem; 
        margin-top: 1rem;
        // background-image: linear-gradient( 110.6deg , #6179B5 49%, #2D8FCE .7%);
        // background: linear-gradient(to bottom,#f09,#0ff,#f90);
        // box-shadow: 0 0 0.2rem 0.1rem rgb(187, 187, 187);
        display: flex;
        flex-direction: column;
        font-size: 1.6rem;
        padding: 4rem 2rem;
        justify-content: space-around; 
        color: black;
         text-align: center;
        font-weight: 600;
        li{
            margin-left: 1rem;
            list-style:none; 
            font-size: 1.3rem;
            line-height: 5rem; 
        }
        .title{ 
          position: relative;
          h1{
            font-weight: 700;
            font-size: 2rem;
          }
          p{
            position: absolute;
            left: 45%;
            top: -3rem;
            color: white; /* 文本颜色为白色 */  
            text-shadow: -1px -1px 0 #2758E9, 1px -1px 0 #2758E9, -1px 1px 0 #fff, 1px 1px 0 #fff; /* 在文本的每个边缘添加红色阴影 */  
            font-size: 2.5rem; /* 根据需要调整字体大小 */  
            font-weight: bold; /* 可选：使文本看起来更粗，以便更好地与阴影形成对比 */  
          }
        }
    }
  }
}
</style>