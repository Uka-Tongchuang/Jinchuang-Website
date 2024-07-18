<template>
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
        <p>今创人力</p>
        <p>制定服务方案</p>
        <p>运营资质配置</p>
        <p>团建搭建及管理</p>
        <p>按照标志组织验收</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.sevce_process {
    width: 80%;
    height: 40rem;
    margin: 2rem auto;
    h1 {
      font-size: 2rem;
      height: 5rem;
    }
    .content-box {
      width: 90%;
      height: 35rem;
      margin: auto;
      display: flex;
      .content-left {
        height: 29rem;
        width: calc(30% - 6rem);
        text-align: center;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        padding: 2rem 3rem;
        border: 1px solid #6179b5;
        p {
          width: 100%;
          font-size: 1.2rem;
          line-height: 3rem;
          height: 3rem;
          background-color: #b2cefa;
          border-radius: 0.5rem;
        }
      }
      .content-center {
        height: 29rem;
        width: 40%;
        padding: 3rem;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        .content-center-top {
          width: 100%;
          height: 5rem;
          display: flex;
          justify-content: space-between;
          .singleArrow {
            width: 10rem;
            height: 4px;
            position: relative;
            top: 1.5rem;
            background-color: #6179b5;
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
            border-left: 20px solid #6179b5; /* 箭头长度*/
          }
          .content-list {
            width: 10rem;
            height: 3rem;
            line-height: 3rem;
            text-align: center;
            background-color: #c5e5ae;
            border-radius: 1rem;
            margin-bottom: 2rem;
          }
          .singleArrow2 {
            width: 10rem;
            height: 4px;
            position: relative;
            top: 1.5rem;
            background-color: #6179b5;
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
            border-right: 20px solid #6179b5; /* 箭头长度*/
          }
        }
      }
    }
  }
  </style>
