<template>
  <div class="prouct_box">
    <!-- 业务，产品服务模块 -->
    <h1>业务系统，产品服务</h1>
    <div class="modules_box">
      <div>
        <img src="../assets/th.jpg" alt="" />
        <span>外包类服务</span>
        <p>岗位，业务流程外包<br />人力资源外包</p>
      </div>
      <div v-show="false">
        <img src="../assets/th.jpg" alt="" />
        <span>劳务派遣服务</span>
        <p>事务性劳务派遣服务<br />聚焦派遣员工的劳动</p>
      </div>
      <div>
        <img src="../assets/th.jpg" alt="" />
        <span>社保托管平台</span>
        <p>单工伤与商业保险代理<br />一站式人力资源托管</p>
      </div>
      <div>
        <img src="../assets/th.jpg" alt="" />
        <span>招聘类服务</span>
        <p>委托招聘、招聘流程外包<br />人才引进与劳务中介</p>
      </div>
      <div>
        <img src="../assets/th.jpg" alt="" />
        <span>产业区园区运营</span>
        <p>主导经营地方产业园区<br />落地服务与税收政策</p>
      </div>

      <div @mouseenter="enterDiv" @mouseleave="leaveDiv" class="show_box">
        <div v-if="flagDiv" class="showImg">
          <img src="../assets/th.jpg" alt="" />
          <span>灵活用工服务</span>
          <p>多元化的灵活用工<br />结算解决方案</p>
        </div>
        <div v-else class="showMou">
            <div>招聘业务</div>
            <div>新媒体带货</div>
            <div>就业街小圆桌</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const flagDiv = ref(true);

const enterDiv = () => {
  flagDiv.value = false;

};
const leaveDiv = () => {
  flagDiv.value = true;
 
};
</script>

<style scoped lang="scss">
.prouct_box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  h1 {
    width: 100%;
    height: 5rem;
    text-align: center;
    line-height: 5rem;
    font-size: 2.6rem;
    color: #f00;
  }
  .modules_box {
    width: 100%;
    height: calc(100% - 5rem);
    // background-color: rgb(59, 110, 155);
    display: flex;
    justify-content: space-between;
    > div:hover {
      box-shadow: 0 0 0.12rem 0.12rem #ccc;
    }
    .show_box{
        .showImg{
            width: 100%;
            height: 100%;
            display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
        }
    }
    .showMou{
        width: 100%;
            height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        div{
            width: 70%;
            height: 1.5rem;
            text-align: center;
            line-height: 1.5rem;
            // box-sizing: border-box;
            border: 4px solid #1b1a1a;
            margin: 2.5rem 0;
        }
       
    }
    > div {
      width: 15%;
      height: 100%;
      // background-color: #f00;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      border: 1px solid #ccc;
      border-radius: 1rem;

      img {
        width: 5rem;
        height: 5rem;
        position: relative;
        top: 1rem;
      }
      span {
        font-weight: bold;
        position: relative;
        top: 2rem;
      }
      p {
        position: relative;
        top: -2rem;
        text-align: center;
      }
    }
  }
}
</style>