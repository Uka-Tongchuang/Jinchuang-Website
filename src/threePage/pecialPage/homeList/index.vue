<template>
  <div class="main">
    <div class="content">
      <h1>客户案例-列表</h1>
    </div>
    <div class="text">
      <div class="div_con_first" @click="goCenterDetail">
        <div class="img">
          <img
            src="https://tse3-mm.cn.bing.net/th/id/OIP-C.FtncE8ymUEgfU5H9L_6Y2QHaFj?w=241&h=181&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt=""
          />
        </div>
        <div class="divs_f">
          <h3>客户案例--中心仓仓储外包</h3>
          <p>
            天津某社区团购企业客户在省内布局5个生鲜仓库，需求劳务人员500人，招聘周期为两个月
          </p>
        </div>
      </div>

      <div class="clear" style="clear: both"></div>

      <div class="div_con_two" @click="goFootCase">
        <div class="img">
          <img
            src="https://tse1-mm.cn.bing.net/th/id/OIP-C.SAJRuFisYwwDakU0QHNPbQHaEo?w=259&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt=""
          />
        </div>
        <div class="divs_f">
          <h3>客户案例--餐饮连锁</h3>
          <p>
            广州某餐饮连锁品牌机构，有覆盖省内15家门店外包人员的用工需求，缺口共计270人，招聘期为30天
          </p>
        </div>
      </div>
      <div class="clear" style="clear: both"></div>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
// 跳转到客户案例-中心仓库
const goCenterDetail = () => {
  router.push("/home/special/specialfirst");
};
//跳转客户案例--餐饮
const goFootCase = () => {
  router.push("/home/special/specialsecond");
};
</script>
  
  <style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-y: hidden;
  .content {
    background-color: #ededed;
    width: 100%;
    height: 20rem;
    margin: 0 auto;
    position: relative;
    p {
      margin-top: 2rem;
    }
    h1 {
      font-size: 5rem;
      text-align: center;
      line-height: 20rem;
      margin: 0;
      padding: 0;
    }
  }
  .text {
    width: 80%;
    margin: 2rem auto;
    .div_con_first {
      width: 100%;
      height: 20rem;
      border: 1px solid hsl(0, 0%, 90%);
      box-shadow: 0.2rem 0.2rem 0.4rem 0.05rem #606060;
      cursor: pointer;
      .img {
        float: left;
        width: 20%;
        height: 20rem;
        margin-right: 10rem;
        img {
          width: 14rem;
          height: 14rem;
          margin-top: 3rem;
          margin-left: 3rem;
        }
      }
      .divs_f {
        width: 70%;
        height: 100%;
        float: left;
        h3 {
          margin-top: 5rem;
          font-size: 2rem;
        }
        p {
          margin-top: 2rem;
          font-size: 1.6rem;
        }
      }
    }
    .div_con_two {
      width: 100%;
      height: 20rem;
      border: 1px solid #e6e6e6;
      box-shadow: 0.2rem 0.2rem 0.4rem 0.05rem #606060;
      margin: 5rem 0 0 0;
      cursor: pointer;
      .img {
        float: left;
        width: 20%;
        height: 20rem;
        margin-right: 10rem;
        img {
          width: 14rem;
          height: 14rem;
          margin-top: 3rem;
          margin-left: 3rem;
        }
      }
      .divs_f {
        width: 70%;
        height: 100%;
        float: left;
        h3 {
          margin-top: 5rem;
          font-size: 2rem;
        }
        p {
          margin-top: 2rem;
          font-size: 1.6rem;
        }
      }
    }
  }
}
</style>
  