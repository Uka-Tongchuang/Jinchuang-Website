<template>
  <div class="cart_box_com">
    <h2>服务内容</h2>
    <div class="content">
      <div class="content-list">
        <li>
          <div class="list-top"></div>
          <div>人员招聘</div>
          <div class="list-bottom"></div>
        </li>
        <li>
          <div class="list-top"></div>
          <div>资源配置</div>
          <div class="list-bottom"></div>
        </li>
        <li>
          <div class="list-top"></div>
          <div>办公场所</div>
          <div class="list-bottom"></div>
        </li>
        <li>
          <div class="list-top"></div>
          <div>团队搭建</div>
          <div class="list-bottom"></div>
        </li>
        <li>
          <div class="list-top"></div>
          <div>业务运营</div>
          <div class="list-bottom"></div>
        </li>
      </div>
      <div class="content-center">
        <img src="../assets/yuanhuan.png" alt="" />
        <div class="icon_box">
          <img src="../assets/logo/zhaopin.png" alt="" />
        </div>
        <div class="icon_box1">
          <img src="../assets/logo/guanli.png" alt="" />
        </div>
      </div>
      <div class="content-list">
        <li>
          <div class="list-top"></div>
          <div>人事管理</div>
          <div class="list-bottom"></div>
        </li>
        <li>
          <div class="list-top"></div>
          <div>薪酬管理</div>
          <div class="list-bottom"></div>
        </li>
        <li>
          <div class="list-top"></div>
          <div>福利管理</div>
          <div class="list-bottom"></div>
        </li>
        <li>
          <div class="list-top"></div>
          <div>绩效管理</div>
          <div class="list-bottom"></div>
        </li>
        <li>
          <div class="list-top"></div>
          <div>风险管理</div>
          <div class="list-bottom"></div>
        </li>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  BrushFilled,
  Briefcase,
  Connection,
  Postcard,
  OfficeBuilding,
  Wallet,
} from "@element-plus/icons-vue";

</script>
<style scoped lang="scss">
li {
  list-style: none;
  font-size: 1.2rem;
}
.cart_box_com {
  width: 80%;
  height: 100%;
  margin: 0 auto;

  h2 {
    font-size: 3rem;
    height: 3rem;
    line-height: 10rem;
    text-align: center;
  }
  .content {
    height: 28rem;
    display: flex;
    justify-content: space-between;
    .content-center {
      margin-top: 6rem;
      width: 44rem;
      height: 24rem;
      display: flex;
      line-height: 44rem;
      position: relative;
      .icon_box {
        width: 6rem;
        height: 6rem;
        position: absolute;
        top: -28%;
        left: 20%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .icon_box1 {
        width: 6rem;
        height: 6rem;
        position: absolute;
        top: -28%;
        left: 67%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .content-list {
      padding: 5rem;
      width: 30rem;
      height: 30rem;
      text-align: center;
      li {
        width: 100%;
        height: 6rem;
        display: flex;
        justify-items: center;
        justify-content: center;
        .list-top {
          width: 0.5rem;
          height: 0.5rem;
          border-top: 1px solid #307eff;
          border-left: 1px solid #307eff;
        }
        div {
          width: 5rem;
        }
        .list-bottom {
          margin-top: 1.1rem;
          width: 0.5rem;
          height: 0.5rem;
          border-bottom: 1px solid #307eff;
          border-right: 1px solid #307eff;
        }
      }
    }
  }
}
</style>
