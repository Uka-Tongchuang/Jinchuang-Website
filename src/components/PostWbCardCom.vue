<template>
  <div class="cart_box_com">
    <h2>适用场景</h2>

    <div class="card_box">
      <!-- 上面区域 -->
      <div class=" box">
        <div>
          <li class="position1">采购助理</li>
          <li class="position2">行政文秘</li>
          <li class="position3">财务助理</li>
        </div>
        <div class="triangle-container">
          <div class="triangle-up"></div>
          <div class="triangle-text">电话客服</div>
        </div>
        <div class="triangle-container">
          <div class="triangle-up1"></div>
          <div class="triangle-text triangle-text1">线上客服</div>
        </div>
        <div class="triangle-container">
          <div class="triangle-up3"></div>
          <div class="triangle-text">办公室文员</div>
        </div>
        <div>
          <li class="position4">销售</li>
          <li class="position5">地推</li>
          <li class="position6">收银</li>
        </div>
      </div>
      <!-- 第二个区域 -->
      <div class="box1">
        <div>
          <li class="position1">服务员</li>
          <li class="position2">调酒师</li>
          <li class="position3">咖啡师</li>
        </div>
        <div class="triangle-container">
          <div class="triangle-up"></div>
          <div class="triangle-text">人事助理</div>
        </div>
        <div class="triangle-container">
          <div class="triangle-up1"></div>
          <div class="triangle-text triangle-text1">业务助理</div>
        </div>
        <div class="triangle-container">
          <div class="triangle-up triangle-up3"></div>
          <div class="triangle-text ">材料审核</div>
        </div>
        <div>
          <li class="position4">电员</li>
          <li class="position5">地推</li>
          <li class="position6">收银</li>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
li {
  list-style: none;
}
.cart_box_com {
  width: 60%;
  height: 100%;
  margin: 0 auto;
   
  h2 {
    font-size: 3rem;
    text-align: center;
  }
  .card_box {
    // position: absolute;
    // top: 8rem;
    // left: 39rem; 
    margin: 0 auto;
    width: 43rem;
    height: 40rem;
    font-size: 1.2rem; 
    .box {
      margin: auto;
      display: flex; 
      position: relative;
      .triangle-container {
        margin-right: -8.8rem; 
        position: relative;
        display: inline-block; /* 或者其他适当的显示类型 */
        text-align: center; /* 使内部文本居中（如果三角形上方有文本的话） */
      }

      .triangle-up {
        position: relative;
        width: 0;
        height: 0;
        border-left: 10rem solid transparent;
        border-right: 10rem solid transparent;
        border-bottom: 18rem solid #bfcdf9;
      }
      .triangle-up1 {
        position: relative;
        width: 0;
        height: 0;
        border-left: 10rem solid transparent;
        border-right: 10rem solid transparent;
        border-top: 18rem solid #2758e9;
      }
      .triangle-up3 {
         position: relative;
        width: 0;
        height: 0;
        border-left: 10rem solid transparent;
        border-right: 10rem solid transparent;
        border-bottom: 18rem solid #3d69b1;
      }
      .triangle-text {
        position: absolute;
        top: 60%; /* 根据需要调整，使文本垂直居中于三角形 */
        left: 50%;
        transform: translate(-50%, -50%); /* 使文本水平和垂直居中 */
        color: white; /* 根据需要设置文本颜色 */
        width: 100%; /* 根据需要调整，确保文本宽度适应三角形 */
        text-align: center; /* 确保文本在容器内居中 */
        line-height: 0; /* 去除文本的默认行高，可能需要调整 */
        font-size: 1.2rem; /* 设置文本大小 */
        font-weight: bold; /* 设置文本样式，可选 */
        margin-top: 1em; /* 根据需要调整，使文本位于三角形内部或上方 */
      }
      .triangle-text1{
        top: 20%;
      }
      .position1{
        width: 10rem;
        position: absolute;
        top: 0rem;
        left: -3rem; 
        border-bottom: 0.1rem solid #3d69b1; 
      }
      .position1::after {  
        content: ''; /* 伪元素需要内容，即使它是空的 */  
        position: absolute;  
        bottom: -0.35rem; /* 放置在容器的底部 */  
        right: 0; /* 放置在容器的右边 */  
        width: 0.7rem; /* 实心圆的直径 */  
        height: 0.7rem; /* 实心圆的高度（与宽度相同以形成圆） */  
        background-color: #3d69b1; /* 实心圆的颜色 */  
        border-radius: 50%; /* 使元素成为圆形 */  
    }
       .position1::after {  
        content: ''; /* 伪元素需要内容，即使它是空的 */  
        position: absolute;  
        bottom: -0.35rem; /* 放置在容器的底部 */  
        right: 0; /* 放置在容器的右边 */  
        width: 0.7rem; /* 实心圆的直径 */  
        height: 0.7rem; /* 实心圆的高度（与宽度相同以形成圆） */  
        background-color: #3d69b1; /* 实心圆的颜色 */  
        border-radius: 50%; /* 使元素成为圆形 */  
    }
       .position2::after {  
        content: ''; /* 伪元素需要内容，即使它是空的 */  
        position: absolute;  
        bottom: -0.35rem; /* 放置在容器的底部 */  
        right: 0; /* 放置在容器的右边 */  
        width: 0.7rem; /* 实心圆的直径 */  
        height: 0.7rem; /* 实心圆的高度（与宽度相同以形成圆） */  
        background-color: #3d69b1; /* 实心圆的颜色 */  
        border-radius: 50%; /* 使元素成为圆形 */  
    }
       .position3::after {  
        content: ''; /* 伪元素需要内容，即使它是空的 */  
        position: absolute;  
        bottom: -0.35rem; /* 放置在容器的底部 */  
        right: 0; /* 放置在容器的右边 */  
        width: 0.7rem; /* 实心圆的直径 */  
        height: 0.7rem; /* 实心圆的高度（与宽度相同以形成圆） */  
        background-color: #3d69b1; /* 实心圆的颜色 */  
        border-radius: 50%; /* 使元素成为圆形 */  
    }
     
      .position4::after {  
        content: ''; /* 伪元素需要内容，即使它是空的 */  
        position: absolute;  
        bottom: -0.35rem; /* 放置在容器的底部 */  
        left: 0; /* 放置在容器的右边 */  
        width: 0.7rem; /* 实心圆的直径 */  
        height: 0.7rem; /* 实心圆的高度（与宽度相同以形成圆） */  
        background-color: #3d69b1; /* 实心圆的颜色 */  
        border-radius: 50%; /* 使元素成为圆形 */  
    }
      .position5::after {  
        content: ''; /* 伪元素需要内容，即使它是空的 */  
        position: absolute;  
        bottom: -0.35rem; /* 放置在容器的底部 */  
        left: 0; /* 放置在容器的右边 */  
        width: 0.7rem; /* 实心圆的直径 */  
        height: 0.7rem; /* 实心圆的高度（与宽度相同以形成圆） */  
        background-color: #3d69b1; /* 实心圆的颜色 */  
        border-radius: 50%; /* 使元素成为圆形 */  
    }
     .position6::after {  
        content: ''; /* 伪元素需要内容，即使它是空的 */  
        position: absolute;  
        bottom: -0.35rem; /* 放置在容器的底部 */  
        left: 0; /* 放置在容器的右边 */  
        width: 0.7rem; /* 实心圆的直径 */  
        height: 0.7rem; /* 实心圆的高度（与宽度相同以形成圆） */  
        background-color: #3d69b1; /* 实心圆的颜色 */  
        border-radius: 50%; /* 使元素成为圆形 */  
    }
      .position2{
        width: 10rem;
        position: absolute;
        top: 7rem;
        left: -7rem;
         border-bottom: 0.1rem solid #3d69b1; 
      }
      .position3{
        width: 10rem;
        position: absolute;
        top: 14rem;
        left: -10.5rem;
         border-bottom: 0.1rem solid #3d69b1; 
      }
      .position4{
        text-align: right;
         width: 10rem;
        position: absolute;
        top: 0rem;
        left: 35rem;
         border-bottom: 0.1rem solid #3d69b1; 
      }
      .position5{
          position: absolute;
          top: 7rem;
          left: 39rem;
          text-align: right;
          width: 10rem;
         border-bottom: 0.1rem solid #3d69b1; 
      }
      .position6{
         text-align: right;
         width: 10rem;
        position: absolute;
        top: 14rem;
        left: 43rem;
         border-bottom: 0.1rem solid #3d69b1; 
      }
    }
    .box1 {
        margin:1rem auto;
        display: flex; 
        position: relative;
      .triangle-container {
        margin-right: -8.8rem;
        position: relative;
        display: inline-block; /* 或者其他适当的显示类型 */
        text-align: center; /* 使内部文本居中（如果三角形上方有文本的话） */
      }

      .triangle-up {
        position: relative;
        width: 0;
        height: 0;
        border-left: 10rem solid transparent;
        border-right: 10rem solid transparent;
        border-top: 18rem solid #bfcdf9;
      }
      .triangle-up1 {
        position: relative;
        width: 0;
        height: 0;
        border-left: 10rem solid transparent;
        border-right: 10rem solid transparent;
        border-bottom: 18rem solid #2758e9;
      }
      .triangle-up3 {
         position: relative;
        width: 0;
        height: 0;
        border-left: 10rem solid transparent;
        border-right: 10rem solid transparent;
        border-top: 18rem solid #3d69b1;
      }
      .triangle-text {
        position: absolute;
        top: 30%; /* 根据需要调整，使文本垂直居中于三角形 */
        left: 50%;
        transform: translate(-50%, -50%); /* 使文本水平和垂直居中 */
        color: white; /* 根据需要设置文本颜色 */
        width: 100%; /* 根据需要调整，确保文本宽度适应三角形 */
        text-align: center; /* 确保文本在容器内居中 */
        line-height: 0; /* 去除文本的默认行高，可能需要调整 */
        font-size: 1.2rem; /* 设置文本大小 */
        font-weight: bold; /* 设置文本样式，可选 */
        margin-top: 1em; /* 根据需要调整，使文本位于三角形内部或上方 */
      }
      .triangle-text1{
        top: 70%;
      }
       .position1{
        position: absolute;
        top: 1rem;
        left: -10.5rem; 
          width: 10rem;
         border-bottom: 0.1rem solid #3d69b1; 
      }
       .position2{
        position: absolute;
        top: 9rem;
        left: -8rem; 
          width: 10rem;
         border-bottom: 0.1rem solid #3d69b1; 
      }
       .position3{
        position: absolute;
        top: 15rem;
        left: -4rem; 
          width: 10rem;
         border-bottom: 0.1rem solid #3d69b1; 
      }
       .position4{
        position: absolute;
        top: 1rem;
        left: 43rem;
           text-align: right;
          width: 10rem;
         border-bottom: 0.1rem solid #3d69b1; 
      }
       .position5{
        position: absolute;
        top: 10rem;
        left: 39.5rem;
           text-align: right;
          width: 10rem;
         border-bottom: 0.1rem solid #3d69b1; 
      }
       .position6{
        position: absolute;
        top: 15rem;
        left: 35rem;
           text-align: right;
          width: 10rem;
         border-bottom: 0.1rem solid #3d69b1; 
      }
  .position1::after {  
        content: ''; /* 伪元素需要内容，即使它是空的 */  
        position: absolute;  
        bottom: -0.35rem; /* 放置在容器的底部 */  
        right: 0; /* 放置在容器的右边 */  
        width: 0.7rem; /* 实心圆的直径 */  
        height: 0.7rem; /* 实心圆的高度（与宽度相同以形成圆） */  
        background-color: #3d69b1; /* 实心圆的颜色 */  
        border-radius: 50%; /* 使元素成为圆形 */  
    }
      .position2::after {  
        content: ''; /* 伪元素需要内容，即使它是空的 */  
        position: absolute;  
        bottom: -0.35rem; /* 放置在容器的底部 */  
        right: 0; /* 放置在容器的右边 */  
        width: 0.7rem; /* 实心圆的直径 */  
        height: 0.7rem; /* 实心圆的高度（与宽度相同以形成圆） */  
        background-color: #3d69b1; /* 实心圆的颜色 */  
        border-radius: 50%; /* 使元素成为圆形 */  
    }
      .position3::after {  
        content: ''; /* 伪元素需要内容，即使它是空的 */  
        position: absolute;  
        bottom: -0.35rem; /* 放置在容器的底部 */  
        right: 0; /* 放置在容器的右边 */  
        width: 0.7rem; /* 实心圆的直径 */  
        height: 0.7rem; /* 实心圆的高度（与宽度相同以形成圆） */  
        background-color: #3d69b1; /* 实心圆的颜色 */  
        border-radius: 50%; /* 使元素成为圆形 */  
    }
      .position4::after {  
        content: ''; /* 伪元素需要内容，即使它是空的 */  
        position: absolute;  
        bottom: -0.35rem; /* 放置在容器的底部 */  
        left: 0; /* 放置在容器的右边 */  
        width: 0.7rem; /* 实心圆的直径 */  
        height: 0.7rem; /* 实心圆的高度（与宽度相同以形成圆） */  
        background-color: #3d69b1; /* 实心圆的颜色 */  
        border-radius: 50%; /* 使元素成为圆形 */  
    }
      .position5::after {  
        content: ''; /* 伪元素需要内容，即使它是空的 */  
        position: absolute;  
        bottom: -0.35rem; /* 放置在容器的底部 */  
        left: 0; /* 放置在容器的右边 */  
        width: 0.7rem; /* 实心圆的直径 */  
        height: 0.7rem; /* 实心圆的高度（与宽度相同以形成圆） */  
        background-color: #3d69b1; /* 实心圆的颜色 */  
        border-radius: 50%; /* 使元素成为圆形 */  
    }
      .position6::after {  
        content: ''; /* 伪元素需要内容，即使它是空的 */  
        position: absolute;  
        bottom: -0.35rem; /* 放置在容器的底部 */  
        left: 0; /* 放置在容器的右边 */  
        width: 0.7rem; /* 实心圆的直径 */  
        height: 0.7rem; /* 实心圆的高度（与宽度相同以形成圆） */  
        background-color: #3d69b1; /* 实心圆的颜色 */  
        border-radius: 50%; /* 使元素成为圆形 */  
    }
    }
  }
}
</style>
