<template>
  <div class="nav_back_box">
    <div class="tipBox">
      <div>在线咨询</div>
      <div>电话沟通</div>
      <div>预约演示</div>
    </div>

    <div class="icon_tip_box" @mouseenter="overIcon" @mouseleave="leaveIcon" @click="goTopBtnFun">
      <el-icon  :color="icon" size="1.46rem"><Top /></el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Top } from "@element-plus/icons-vue";
import {ref,onUnmounted} from "vue"

const icon=ref()
//延时器
const setTimeIcon=ref()
//划入icon
const overIcon=()=>{
    //因为动画过渡时间为0.5秒 所以需要在背景填充完成后在改变颜色 也可以在相对应的时间进行改变（根据自身需求）
    //tip:需要在组件卸载阶段吧延时器清除掉
    setTimeIcon.value= setTimeout(() => {
        icon.value="#dff"
    }, 500);
}
// 划出icon
const leaveIcon=()=>{
     icon.value="#000"
     //划出清除延时器  --  (效果优化)
     clearTimeout(setTimeIcon.value)
}
//回到顶部
const goTopBtnFun=()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}

//卸载阶段
onUnmounted(()=>{
    clearTimeout(setTimeIcon.value)
})
</script>

<style scoped lang="scss">
@media screen and (max-width: 2660px) {

  .nav_back_box {
    width: 5rem;
    height: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .tipBox {
      width: 5rem;
      height: 18rem;
      display: flex;
      flex-direction: column;
      border-radius: 2.5rem;
      background: #fffdfdcb;
      box-shadow: 0 0 0.1rem 0.1rem #ccc;
      > div {
        font-size: 0.8rem;
        width: 80%;
        flex: 1;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #ccc;
        cursor: pointer;
      }
      > div:nth-child(3) {
        border-bottom: none ;
      }
    }
    .icon_tip_box {
      width: 5rem;
      height: 5rem;
      margin-top: 1rem;
      line-height: 6rem;
      position: relative;
      overflow: hidden;
      text-align: center;
      background: #fffdfdcb;
      border-radius: 2.5rem;
      box-shadow: 0 0 0.1rem 0.1rem #ccc;
      cursor: pointer;
    }
    .icon_tip_box::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0;
      background-color: #108be2;
      /* 这里不直接应用animation，因为动画将在hover状态下触发 */
      transition: height 0.5s ease-in-out;
    }
    .icon_tip_box:hover::before {
      height: 100%; /* 在hover状态下改变高度，触发transition效果 */
    }
  }
}
@media screen and (max-width: 768px) {

  .nav_back_box {
    width: 4rem;
    height: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .tipBox {
      width: 4rem;
      height: 18rem;
      display: flex;
      flex-direction: column;
      border-radius: 2.5rem;
      background: #fffdfdcb;
      box-shadow: 0 0 0.1rem 0.1rem #ccc;
      > div {
        font-size: 0.8rem;
        width: 80%;
        flex: 1;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #ccc;
        cursor: pointer;
      }
      > div:nth-child(3) {
        border-bottom: none ;
      }
    }
    .icon_tip_box {
      width: 3rem;
      height: 3rem;
      margin-top: 0rem;
      line-height: 4rem;
      position: relative;
      overflow: hidden;
      text-align: center;
      background: #fffdfdcb;
      border-radius: 2.5rem;
      box-shadow: 0 0 0.1rem 0.1rem #ccc;
      cursor: pointer;
    }
    .icon_tip_box::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0;
      background-color: #108be2;
      /* 这里不直接应用animation，因为动画将在hover状态下触发 */
      transition: height 0.5s ease-in-out;
    }
    .icon_tip_box:hover::before {
      height: 100%; /* 在hover状态下改变高度，触发transition效果 */
    }
  }
}
</style>