<template>
  <div class="main">
    <div class="content">
      <h1>客户案例-中心仓仓储外包</h1>
    </div>
    <div class="main-content">
      <el-card style="max-width: 100%">
        <div class="back" @click="goBack">{{ `<` }}返回列表</div>
        <div class="content_box">
          <h1 style="text-align: center">业务需求</h1>
          <p>
            天津某社区团购企业客户在省内布局5个生鲜仓库，需求劳务人员500人，招聘周期为两个月
          </p>
          <h1 style="text-align: center">业务难点</h1>
          <div class="Business_ifficulties_box">
            <div>招聘周期较短</div>
            <div>门店区域分布广、需求岗位类型繁多</div>
            <div>连锁门店资方为当地上市公司，对门店人员综合素质有要求</div>
          </div>
          <h1 style="text-align: center">策略及行动</h1>
          <div class="Business_ifficulties_box">
            <div>社招、代理网招平台、校企合作、内推激励等展开</div>
            <div>启用新媒体/社交招聘新模式，加速简历获取速度</div>
            <div>
              设置专项PM协助推动寻访-面试-入职流程，确保员工的高转化及留存率
            </div>
          </div>
          <h1 style="text-align: center">交付目标</h1>
          <h1 style="text-align: center">合作模式</h1>
          <div class="module_type_box">招聘外包和劳务外包</div>
          <h1 style="text-align: center">案例成就</h1>
          <div class="Business_ifficulties_box">
            <div>30天内完成72人在职的满编任务</div>
            <div>超额解决客户用工问题</div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const goBack = () => {
  router.back();
};
</script>
  
  <style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  .content {
    background-color: red;
    width: 100%;
    height: 20rem;
    margin: 0 auto;
    h1 {
      font-size: 5rem;
      text-align: center;
      line-height: 20rem;
      margin: 0;
      padding: 0;
    }
  }
  .main-content {
    width: 80%;
    height: 100%;
    margin: 2rem auto;
    .back {
      cursor: pointer;
    }
    .content_box {
      h1 {
        color: rgb(188, 14, 14);
        font-size: 2.4rem;
      }
      p {
        width: 50%;
        margin: 0 auto;
        font-size: 1.8rem;
        text-indent: 4rem;
      }
      .module_type_box {
        width: 50%;
        margin: 0 auto;
        text-align: center;
        color: #000;
        font-weight: bold;
        font-size: 2rem;
      }
      .Business_ifficulties_box {
        width: 50%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        > div {
          width: 20%;
          height: 6rem;
          border: 1px solid #ccc;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.4rem;
          padding: 2rem;
          box-shadow: 0 0 0.4rem 0.2rem #ccc;
          border-radius: 1rem;
        }
      }
    }
  }
}
</style>
  