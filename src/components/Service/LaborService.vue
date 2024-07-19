<template>
  <div class="service">
    <h1 >服务流程</h1>
    <div class="content-box">
      <div class="flex1">
        <div class="border-box">
          <div class="card-border-top">
            <p class="number">01</p>
          </div>
          <div class="border-rides">
            <span>提出用人需求</span>
          </div>
        </div>
        <div class="singleArrow"></div>
        <div class="border-box">
          <div class="card-border-top">
            <p class="number">02</p>
          </div>
          <div class="border-rides">
            <span>确认岗位需求</span>
          </div>
        </div>
        <div class="singleArrow"></div>
        <div class="border-box">
          <div class="card-border-top">
            <p class="number">03</p>
          </div>
          <div class="border-rides">
            <span>公开招聘</span>
          </div>
        </div>
        <div class="singleArrow"></div>
        <div class="border-box">
          <div class="card-border-top">
            <p class="number">04</p>
          </div>
          <div class="border-rides">
            <span>面试甄选</span>
          </div>
        </div>
          <div class="singleArrow"></div>
        <div class="border-box">
          <div class="card-border-top">
            <p class="number">05</p>
          </div>
          <div class="border-rides">
            <span>用人单位复试</span>
          </div>
        </div>
      </div>
      <div class="flex2"></div>
      <div class="flex3">
        <div class="border-box">
          <div class="card-border-top">
            <p class="number">06</p>
          </div>
          <div class="border-rides">
            <span>正式录用</span>
          </div>
        </div>
        <div class="singleArrow2"></div>
        <div class="border-box">
          <div class="card-border-top">
            <p class="number">07</p>
          </div>
          <div class="border-rides">
            <span>入职体检和岗前培训</span>
          </div>
        </div>
        <div class="singleArrow2"></div>
        <div class="border-box">
          <div class="card-border-top">
            <p class="number">08</p>
          </div>
          <div class="border-rides">
            <span>签订第三方合同</span>
          </div>
        </div>
        <div class="singleArrow2"></div>
        <div class="border-box">
          <div class="card-border-top">
            <p class="number">09</p>
          </div>
          <div class="border-rides">
            <span>派遣员工上岗</span>
          </div>
        </div>
        <div class="singleArrow2"></div>
        <div class="border-box">
          <div class="card-border-top">
            <p class="number">10</p>
          </div>
          <div class="border-rides">
            <span>统一管理人事档案</span>
          </div>
        </div>
      </div>
      <div class="flex4"></div>
      <div class="flex5">
        <div class="border-box">
          <div class="card-border-top">
            <p class="number">11</p>
          </div>
          <div class="border-rides">
            <span>提供社保公积金、工资发放等人事服务</span>
          </div>
        </div>
        <div class="singleArrow"></div>
        <div class="border-box">
          <div class="card-border-top">
            <p class="number">12</p>
          </div>
          <div class="border-rides">
            <span>派遣员工关系维护</span>
          </div>
        </div>
        <div class="singleArrow"></div>
        <div class="border-box">
          <div class="card-border-top">
            <p class="number">13</p>
          </div>
          <div class="border-rides">
            <span>协议、合同的解除及签订</span>
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup> 


</script>
<style lang="scss" scoped>
  .service {
    width: 80%; 
    margin:0 auto;
    h1 {
      text-align: center;
      overflow-y: hidden;
      margin: 2rem auto;
      font-size: 3rem;
      text-align: center;
      color: rgb(0, 0, 0);
    }
    p {
      color: black;
    }
    span {
      color: black;
      font-size: 1.4rem;
    }
    .content-box {
      width: 100%;
      min-height: 50rem;
      margin: auto;
      .flex1 {
        display: flex;
        justify-content: space-around;
        margin-top: 2rem; 
        .border-box {
          width: 18rem;
          height: 10rem; 
          position: relative;
          background: linear-gradient(to right, #9fe1fa, #f4edc9);
          box-shadow: 0 0 0.4rem 0.1rem #f4edc9;
          .card-border-top {
            display: flex;
            position: absolute;
            left: 4%;
            top: 0;
            line-height: 0.6rem;
            transform: translateX(-50%);
          }
          .border-rides {
            width: 13rem;
            height: 13rem;
            margin: 0 auto;
            line-height: 10rem; 
            text-align: center; 
          }
        }
        .singleArrow {
          width: 4rem;
          height: 10px;
          position: relative;
          top: 7rem;
          background-color: #2d8fc1;
          // transform: rotate(-40deg); 
        }
        .singleArrow::after {
          content: "";
          display: block;
          position: absolute;
          right: -20px; /* 箭头位置 */
          top: -5px; /* 箭头位置 */
          border-top: 10px solid transparent; /* 箭头高低 */
          border-bottom: 10px solid transparent; /* 箭头高低 */
          border-left: 20px solid #2d8fc1; /* 箭头长度*/
        }
      }
      .flex2 {
        float: right;
        width: 10px;
        height: 6rem;
        position: relative;
        top: 1rem;
        right: 9rem;
        background-color: #2d8fc1; 
      }

      .flex2::after {
        content: "";
        display: block;
        position: absolute;
        right: -5px; /* 箭头位置 */
        top: 6rem; /* 箭头位置 */
        border-left: 10px solid transparent; /* 箭头高低 */
        border-right: 10px solid transparent; /* 箭头高低 */
        border-top: 10px solid #2d8fc1; /* 箭头长度*/
      }
      .flex3 {
        margin-top: 8.5rem;
        display: flex;
        justify-content: space-around;
        .border-box {
          width: 17rem;
          height: 10rem; 
          position: relative;
       background-image: linear-gradient(181.2deg, rgb(181, 239, 249) 10.5%, rgb(254, 254, 254) 86.8%);
          box-shadow: 0 0 0.4rem 0.1rem #f4edc9;
          .card-border-top {
            display: flex;
            position: absolute;
            left: 3%;
            top: 0;
            line-height: 0.5rem;
            transform: translateX(-50%);
          }
          .border-rides {
            width: 13rem;
            height: 13rem;
            margin: 0 auto;
            line-height: 10rem; 
            text-align: center; 
          }
        
        }
        .singleArrow2 {
          width: 4rem;
          height: 10px;
          position: relative;
          top: 7rem;
          background-color: #2d8fc1;
          /* transform: rotate(-40deg); */ /* 旋转角度 */
        }
        .singleArrow2::after {
          content: "";
          display: block;
          position: absolute;
          right: 4rem; /* 箭头位置 */
          top: -5px; /* 箭头位置 */
          border-top: 10px solid transparent; /* 箭头高低 */
          border-bottom: 10px solid transparent; /* 箭头高低 */
          border-right: 20px solid #2d8fc1; /* 箭头长度*/
        }
      }
      .flex4 {
        width: 10px;
        height: 6rem;
        position: relative;
        top: 1rem;
        left: 16rem;
        background-color: #2d8fc1;
         transform: rotate(-40deg); 
      }

      .flex4::after {
        content: "";
        display: block;
        position: absolute;
        right: -5px; /* 箭头位置 */
        top: 6rem; /* 箭头位置 */
        border-left: 10px solid transparent; /* 箭头高低 */
        border-right: 10px solid transparent; /* 箭头高低 */
        border-top: 10px solid #2d8fc1; /* 箭头长度*/
      }
      .flex5 {
        display: flex;
        justify-content: space-between;
        padding: 0 13rem;
        margin-top: 2rem;
        .border-box {
          width: 18rem;
          height: 10rem; 
          position: relative;
          background: linear-gradient(to right, #9fe1fa, #f4edc9);
          box-shadow: 0 0 0.4rem 0.1rem #f4edc9;
          .card-border-top {
            display: flex;
            position: absolute;
            left: 3%;
            top: 0;
            line-height: 0.6rem;
            transform: translateX(-50%);
          }
          .border-rides {
            width: 13rem;
            height: 13rem;
            margin: 0 auto;
            padding-top: 4.5rem;
            text-align: center;
          }
        }
        .singleArrow {
          width: 6rem;
          height: 10px;
          position: relative;
          top: 7rem;
          background-color: #2d8fc1;
          /* transform: rotate(-40deg); */ /* 旋转角度 */
        }
        .singleArrow::after {
          content: "";
          display: block;
          position: absolute;
          right: -20px; /* 箭头位置 */
          top: -5px; /* 箭头位置 */
          border-top: 10px solid transparent; /* 箭头高低 */
          border-bottom: 10px solid transparent; /* 箭头高低 */
          border-left: 20px solid #2d8fc1; /* 箭头长度*/
        }
      }
    }
  }
</style>
