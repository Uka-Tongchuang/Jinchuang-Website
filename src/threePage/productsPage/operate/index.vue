<template>
   <div class="content">
        <div class="merchant">
            <h1>{{ state.title }}</h1>
            <p v-html="state.content"></p>
        </div> 
        <div class="card">
            <h1>服务内容</h1>
            <!-- 卡片 -->
        </div>
         <div class="advantage">
            <div class="title">
                <h1>服务优势</h1>
                <p>服务优势服务优势服务优势服务优势服务优势服务优势服务优势服务优势服务优势服务优势服务优势服务优势服务优势</p>
            </div> 
            <div class="imgUrl">
                <img src="../../../assets/swpOne.jpg" alt="">
            </div>
            <div class="card-list">
                <p>专业化顾问团队</p>
                <p>数字化管理平台</p>
                <p>标准化服务流程</p>
                <p>多元化解决方案</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"> 
import { ref,reactive} from 'vue'
    const state=reactive({
        title:"产品介绍",
        content:"为企业解决人力资源管理过程中<br/>的事务性、操作性工作，如劳动合同代签、<br/>用退工申报、社保和公积金申报与缴纳办理、人事档案<br/>传递和信息管理等，使企业人力资源工作人员能够将更多时间投入到人力<br/>资源核心业务中，为企业发展提供更多支持，以降低企业成本，实现效率最大化"
    })
</script>

<style lang="scss" scoped>
.content {
  width: 100%; 
  .merchant { 
      background-color: aqua;
    width: 100%;
    height: 30rem;
    padding-top: 7rem;
    padding-left: 7rem;
    margin: auto;  
    h1{
        font-size: 4rem;
    } 
    p{
        font-size: 2rem;
    }
  }
  .card{
    width: 80%;
    height: 40rem; 
    margin: auto;
  }
  .advantage{
    width: 80%;
    height: 70rem; 
    margin: auto;
    position: relative;
    display: flex;
    justify-content: space-between;
    .title{ 
        width: 50rem;
        margin-top: 5rem;
        h1{
            font-size: 4rem;
        }
        p{
            font-size: 2rem;
        }
    }
    .imgUrl{
        width: 50rem;
        height: 70rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .card-list{
        width: 80%;
        height: 10rem;
        position: absolute;
        background-color: black;
        color: white;
        line-height: 6rem;
        opacity: .4;
        font-size: 2rem;
        bottom: 6rem;
        left: 0;
        display: flex;
        justify-content: space-around;
        p{
            width: 23%;
            text-align: center;
            border-right: 1px solid white;
        }
        p:last-child{
            border-right: none;
        }
    }

}
}
</style>