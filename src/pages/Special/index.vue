<template>
  <div class="main">
    <div class="content">
      <h1>客户案例-中心仓仓储外包</h1>
    </div>
    <div class="main-content">

        <div class="requirements">
            <h2>业务需求</h2>
            <p>天津某社区团购企业客户在省内布局5个生鲜仓库·需求劳务人员500人，招聘周期为两个月</p>
        </div>
        <div class="business-requirements">
            <h2>业务难点</h2>
            <div class="business-border" style="display: flex; justify-content: space-between;">
                <div class="business-border-arr">
                    <p>招聘周期较短</p>
                </div>
                <div class="business-border-arr">
                    <p>内店区域分布广需求岗位类型繁多</p>
                </div>
                 <div class="business-border-arr">
                    <p>连锁内店资方为当地上市公司对内店人员综合素质有要求</p>
                </div>
            </div>
        </div>
        <div>
            <h2>策略及行动</h2>
            <div>
                <div>
                    <p>社招、代理商网招平台、校企合作、内推激励等展开</p>
                </div>
                <div>
                    <p>启用新媒体/社交招聘新模式，加速建立获取速度</p>
                </div>
                 <div>
                    <p>设置专项PM协助推动寻访-面试-入职流程，确保员工的高转化及留存率</p>
                </div>
            </div>
        </div>
        <div>
            <h2>合作模式</h2>
            <p>招聘外包+劳务外包</p>
        </div>
         <div>
            <h2>案例成就</h2> 
            <div>
                <div>
                    30天内究缩任公在
                </div>
                <div>超额解决客户用工问题</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
  .main-content{
    width: 60%;
    height: 100%;
    margin: 0 auto; 
    text-align: center;
    h2{
        color: red;
    }
    .requirements{
        p{
            font-size: 1.2rem;
        }
    }
    .business-requirement{
        width: 100%;
        height: 10rem;
        .business-border{
            width: 100%;
            height: 100%;  
            .business-border-arr{
                width: 5rem;
                height: 5rem;
                border: 1px solid black;
            }
        }
    }
  }
}
</style>
