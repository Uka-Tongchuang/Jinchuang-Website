<template>
  <div class="main">
     <div class="merchant">
        <h1>{{ state?.title }}</h1>
        <p v-html="state?.content"></p>
    </div> 
    <div class="content">
      <p>
        通过就业街小圆桌系统、职播播人才直播平台，我们为企业和个人提供全方位的人力资源服务，涵盖人才招聘、人才培
        训以及直播带岗等多个方面，以全流程人才解决方案帮助企业应对“人怎么来”的种种难题
      </p>
    </div>
    <div class="card-list">
      <div v-for="item in state.arr" :key="item.id" class="card-title">
        <el-card>
          <p class="title">{{ item.title }}</p>
          <div class="img">
            <img :src="item.idVieo" />
          </div>
        </el-card>
      </div>
    </div>
    <div class="service">
      <h1 style="font-size: 4.5rem">服务流程</h1> 
    </div>
  </div>
</template>

<script setup lang="ts">
import swpOne from "../../../assets/th.jpg";
import { ref, reactive, onMounted, onUnmounted } from "vue";  
import dataList from '../../../utils/producDes.json'


const state = reactive({
  getNewsData: [],
  title:'',
  content:'',
  arr: [
    {
      id: 1,
      title: "社招",
      idVieo: swpOne,
    },
    {
      id: 2,
      title: "网招",
      idVieo: swpOne,
    },
    {
      id: 3,
      title: "校招",
      idVieo: swpOne,
    },
    {
      id: 4,
      title: "新媒体带岗",
      idVieo: swpOne,
    },
    {
      id: 5,
      title: "猎头",
      idVieo: swpOne,
    },
  ],
});
onMounted(()=>{
        console.log(dataList)
        state.title=dataList[3].typetitle
        state.content=dataList[3].data[0].content
    })
</script>

<style scoped lang="scss">
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.main {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
   .merchant { 
      background-color: aqua;
    width: 100%;
    height: 30rem;
    // padding-top: 7rem;
    // padding-left: 7rem;
    margin: auto;  
    h1{
        font-size: 4rem;
    } 
    p{
        font-size: 2rem;
    }
  }
  .content {
    width: 70%;
    height: 5rem;
    margin: 0 auto;
    p {
      font-size: 1.5rem;
    }
  }
  .card-list {
    width: 90%;
    height: 13rem;
    margin: 1rem auto;
    display: flex;
    justify-content: space-between;
    .card-title {
      width: 15rem;
      text-align: center;
      margin: 0 auto;
      .img {
        width: 5rem;
        height: 5rem;
        margin: 1rem auto;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .service {
    width: 80%;
    height: auto;
    margin: 2rem auto;
    text-align: center;
    overflow-y: hidden;
    h1 {
      font-size: 2rem;
      color: rgb(0, 0, 0);
    }
    .content_box {
      width: 70%;
      height: 100rem;
      margin: 0 auto;
      // background-color: antiquewhite;
      .line_box {
        width: 30%;
        height: 100rem;
        margin: 0 auto;
        background-image: url("../../../assets/Group 28(1).png");
        background-size: 100% 100%;
        position: relative;
        @mixin allClass() {
          width: 22rem;
          height: 12rem;
          position: absolute;
          border: 2px solid #000;
          z-index: 66;
        }
        //第一个步骤
        .box_first {
          @include allClass;
          opacity: 0;
          top: 5.8rem;
          right: -28rem;
          background-color: #ffffff;
          position: relative;
          .postion_box {
            @include allClass;
            bottom: 0.5rem;
            left: 0.5rem;
            background-color: #e3e9ec;
            .top_box {
              width: 4rem;
              height: 0.5rem;
              background-color: #606060;
              position: absolute;
              top: 0;
              left: 50%;
              transform: translateX(-50%);
            }
            h3 {
              padding-top: 1rem;
              font-size: 1.4rem;
            }
            p {
              width: 70%;
              margin: 0 auto;
              color: #777b7d;
            }
          }
        }
        //第二个步骤
        .box_two {
          @include allClass;
          opacity: 0;
          top: 15.5rem;
          left: -24rem;
          background-color: #ffffff;
          position: relative;
          .postion_box {
            @include allClass;
            background-color: #e3e9ec;
            right: 0.5rem;
            bottom: 0.5rem;
            .top_box {
              width: 4rem;
              height: 0.5rem;
              background-color: #606060;
              position: absolute;
              top: 0;
              left: 50%;
              transform: translateX(-50%);
            }
            h3 {
              padding-top: 1rem;
              font-size: 1.4rem;
            }
            p {
              width: 70%;
              margin: 0 auto;
              color: #777b7d;
            }
          }
        }
        //第三个步骤
        .box_three {
          @include allClass;
          opacity: 0;
          top: 26rem;
          right: -28rem;
          background-color: #ffffff;
          position: relative;
          .postion_box {
            @include allClass;
            bottom: 0.5rem;
            left: 0.5rem;
            background-color: #e3e9ec;
            .top_box {
              width: 4rem;
              height: 0.5rem;
              background-color: #606060;
              position: absolute;
              top: 0;
              left: 50%;
              transform: translateX(-50%);
            }
            h3 {
              font-size: 1.4rem;
            }
            p {
              width: 70%;
              margin: 0 auto;
              color: #777b7d;
            }
          }
        }
        //第四个步骤
        .box_four {
          @include allClass;
          opacity: 0;
          top: 35.8rem;
          left: -24rem;
          background-color: #ffffff;
          position: relative;
          .postion_box {
            @include allClass;
            background-color: #e3e9ec;
            right: 0.5rem;
            bottom: 0.5rem;
            .top_box {
              width: 4rem;
              height: 0.5rem;
              background-color: #606060;
              position: absolute;
              top: 0;
              left: 50%;
              transform: translateX(-50%);
            }
            h3 {
              padding-top: 1rem;
              font-size: 1.4rem;
            }
            p {
              width: 70%;
              margin: 0 auto;
              color: #777b7d;
            }
          }
        }
      }
    }
  }
}
</style>