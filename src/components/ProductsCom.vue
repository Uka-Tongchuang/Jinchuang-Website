<template>
  <div class="prouct_box">
    <!-- 业务，产品服务模块 -->
    <h1>业务系统，产品服务</h1>
    <div class="modules_box">
      <!-- //招聘类服务 -->
      <!-- //上部分 -->
      <div class="top_box">
        <div class="modukrs_boxs">
          <div class="box_tip_icon">
            <el-icon size="6rem" color="#fff" style="padding: 2rem"
              ><Avatar
            /></el-icon>
          </div>
          <span>人事管理</span>
          <p>委托招聘、招聘流程外包人才引进与劳务中介</p>
          <button @click="goPersonnel">了解更多</button>
        </div>

        <div class="modukrs_boxs two">
          <div class="box_tip_icon">
            <el-icon size="6rem" color="#fff" style="padding: 2rem"
              ><WalletFilled
            /></el-icon>
          </div>
          <span>劳务派遣</span>
          <p>岗位，业务流程外包人力资源外包</p>
          <button @click="golabor">了解更多</button>
        </div>

        <div class="modukrs_boxs three">
          <div class="box_tip_icon">
            <el-icon size="6rem" color="#fff" style="padding: 2rem"
              ><Briefcase
            /></el-icon>
          </div>
          <span>岗位外包</span>
          <p>岗位，业务流程外包人力资源外包</p>
          <button @click="goOutsourcing">了解更多</button>
        </div>
        <div class="modukrs_boxs four">
          <div class="box_tip_icon">
            <el-icon size="6rem" color="#fff" style="padding: 2rem"
              ><BrushFilled
            /></el-icon>
          </div>
          <span>业务外包</span>
          <p>委托招聘、招聘流程外包人才引进与劳务中介</p>
          <button @click="goRecruitment">了解更多</button>
        </div>
      </div>
      <!-- //下部分 -->
      <div class="bottom_box">
        <div class="modukrs_boxs five">
          <div class="box_tip_icon">
            <el-icon size="6rem" color="#fff" style="padding: 2rem"
              ><UserFilled
            /></el-icon>
          </div>
          <span>招聘流程外包</span>
          <p>委托招聘、招聘流程外包人才引进与劳务中介</p>
          <button @click="goOperate">了解更多</button>
        </div>

        <div class="modukrs_boxs six">
        
            <div class="box_tip_icon">
              <el-icon size="6rem" color="#fff" style="padding: 2rem"
                ><Platform
              /></el-icon>
            </div>
            <span>灵活用工解决方案</span>
            <p>多元化的灵活用工结算解决方案</p>
            <button @click="goFiexble">了解更多</button>
          
        </div>
        <div class="modukrs_boxs seven" @click="goFind">
          <span>更多服务</span>
          <span>等待你的发现 →</span>
        </div>
        <div class="modukrs_boxs eight"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  Avatar,
  WalletFilled,
  Briefcase,
  BrushFilled,
  UserFilled,
  Platform,
} from "@element-plus/icons-vue";
import "animate.css";
// const flagDiv = ref(true);
const router = useRouter();
//跳转人事管理
const goFind = () => {
  router.push("/home/index/operate");
};
// const enterDiv = () => {
//   flagDiv.value = false;
// };
//跳转人事管理
const goPersonnel = () => {
  router.push("/home/index/operate");
};
//跳转劳务派遣
const golabor = () => {
  router.push("/home/index/labor");
};
//跳转岗位外包
const goOutsourcing = () => {
  router.push("/home/index/outsource");
};
//跳转业务外包
const goRecruitment = () => {
  router.push("/home/index/hosting");
};
//跳转招聘外包流程
const goOperate = () => {
  router.push("/home/index/recruitment");
};

//跳转灵活用工的四级页面
const goFiexble = () => {
  router.push("/home/index/flexible");
};
//招聘业务
// const goFourRectuitment = () => {
//   router.push("/home/index/flexible/fourectuitments");
// };
// //新媒体带货
// const goFourNews = () => {
//   router.push("/home/index/flexible/foruenews");
// };
// //就业街小圆桌
// const goFourEmployment = () => {
//   router.push("/home/index/flexible/fouremployment");
// };
</script>

<style scoped lang="scss">
@media screen and (max-width: 2660px) {
  .prouct_box {
    width: 80%;
    height: 75rem;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 2rem;
    h1 {
      width: 100%;
      height: 3rem;
      text-align: center;
      line-height: 3rem;
      font-size: 3rem;
      color: rgb(11, 11, 11);
    }
    .modules_box {
      width: 100%;
      height: 70rem;
      $color: rgb(39, 88, 223);
      @mixin spanCss {
        display: block;
        width: 10rem;
        height: 4rem;
        font-size: 2.2rem;
        white-space: nowrap;
        line-height: 4rem;
        text-overflow: normal;
        font-weight: bold;
        text-align: center;
      }
      @mixin butonCss {
        width: 18rem;
        height: 5rem;
        background-color: #fff;
        border-radius: 0.6rem;
        font-size: 1.8rem;
        cursor: pointer;
        font-weight: bold;
      }
      .top_box {
        width: 100%;
        height: 30rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .modukrs_boxs {
          width: 26rem;
          height: 30rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .box_tip_icon {
            width: 10rem;
            height: 10rem;
            background-color: $color;
            border-radius: 50%;
            box-shadow: 0 0 0.3rem 0.24rem rgb(182, 181, 192);
          }
          span {
            @include spanCss;
            width: 12rem;
            border-bottom: 0.5rem solid $color;
          }
          p {
            font-size: 1.3rem;
            width: 80%;
            height: 2.8rem;
            line-height: 1.4rem;
            margin: 1rem auto;
            text-align: center;
          }
          button {
            @include butonCss;
            color: $color;
            border: 0.15rem solid $color;
            color: $color;
            transition: 0.4s;
          }
          button:hover {
            background-color: $color;
            color: #fff;
          }
        }
        .two {
          .box_tip_icon {
            background-color: $color;
          }
          span {
            @include spanCss;
            width: 12rem;
            border-bottom: 0.5rem solid $color;
          }
          button {
            @include butonCss;
            color: $color;
            border: 0.15rem solid $color;
            transition: 0.4s;
          }
          button:hover {
            background-color: $color;
            color: #fff;
          }
        }
        .three {
          .box_tip_icon {
            background-color: $color;
          }
          span {
            @include spanCss;
            width: 12rem;
            border-bottom: 0.5rem solid $color;
          }
          button {
            @include butonCss;
            color: $color;
            border: 0.15rem solid $color;
            transition: 0.4s;
          }
          button:hover {
            background-color: $color;
            color: #fff;
          }
        }
      }
      .bottom_box {
        width: 100%;
        height: 30rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 2rem;
        .modukrs_boxs {
          width: 26rem;
          height: 30rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .box_tip_icon {
            width: 10rem;
            height: 10rem;
            background-color: $color;
            border-radius: 50%;
            box-shadow: 0 0 0.3rem 0.24rem rgb(182, 181, 192);
          }
          span {
            @include spanCss;
            border-bottom: 0.5rem solid $color;
          }
          p {
            font-size: 1.3rem;
            width: 80%;
            height: 2.8rem;
            line-height: 1.4rem;
            margin: 1rem auto;
            text-align: center;
          }
          button {
            @include butonCss;
            color: $color;
            border: 0.15rem solid $color;
            color: $color;
            transition: 0.4s;
          }
          button:hover {
            background-color: $color;
            color: #fff;
          }
        }
        .five {
  
          .box_tip_icon {
            background-color: $color;
          }
          span {
            @include spanCss;
            width: 18rem;
            border-bottom: 0.5rem solid $color;
          }
          button {
            @include butonCss;
            color: $color;
            border: 0.15rem solid $color;
            transition: 0.4s;
          }
          button:hover {
            background-color: $color;
            color: #fff;
          }
        }
        .six {
            .box_tip_icon {
              background-color: $color;
            }
            span {
              @include spanCss;
              width: 18rem;
            border-bottom: 0.5rem solid $color;
             
            }
            button {
              @include butonCss;
              color: $color;
              border: 0.15rem solid $color;
              transition: 0.4s;
            }
            button:hover {
              background-color: $color;
              color: #fff;
            }
          }
          .seven{
            span{
              border: none;
            }
            span:nth-child(1){
              text-indent: -1rem;
            }
            span:nth-child(2) {
              text-decoration: underline;
              cursor: pointer;
            }
          }
          .seven:hover{
            span{
              color: rgb(39, 88, 223);
            }
          }
      }
    }
    .showMou {
      width: 100%;
      height: 100%;
      border-radius: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: self-start;
      div {
        width: 70%;
        height: 5rem;
        margin: 0 auto;
        border: 0.2rem solid rgb(18, 74, 126);
        color: rgb(18, 74, 126);
        font-size: 1.8rem;
        font-weight: bold;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-radius: 1.4rem;
        cursor: pointer;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .prouct_box {
    width: 100%;
    min-height: 105rem;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 2rem;
    h1 {
      width: 100%;
      height: 3rem;
      text-align: center;
      line-height: 3rem;
      font-size: 2rem;
      color: rgb(11, 11, 11);
    }
    .modules_box {
      width: 100%;
      min-height: 70rem;
      $color: rgb(39, 88, 223);
      @mixin spanCss {
        display: block;
        width: 9rem;
        height: 4rem;
        font-size: 1.5rem;
        white-space: nowrap;
        line-height: 4rem;
        text-overflow: normal;
        font-weight: bold;
        text-align: center;
      }
      @mixin butonCss {
        width: 12rem;
        height: 4rem;
        background-color: #fff;
        border-radius: 0.6rem;
        font-size: 1.8rem;
        cursor: pointer;
        font-weight: bold;
      }
      .top_box {
        width: 100%;
        min-height: 56rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        .modukrs_boxs {
          width: 12rem;
          height: 30rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .box_tip_icon {
            width: 10rem;
            height: 10rem;
            background-color: $color;
            border-radius: 50%;
            box-shadow: 0 0 0.3rem 0.24rem rgb(182, 181, 192);
          }
          span {
            @include spanCss;
            width: 12rem;
            border-bottom: 0.5rem solid $color;
          }
          p {
            font-size: 1.3rem;
            width: 80%;
            height: 5rem;
            line-height: 1.4rem;
            margin: 1rem auto;
            text-align: center;
          }
          button {
            @include butonCss;
            color: $color;
            border: 0.15rem solid $color;
            color: $color;
            transition: 0.4s;
          }
          button:hover {
            background-color: $color;
            color: #fff;
          }
        }
        .two {
          .box_tip_icon {
            background-color: $color;
          }
          span {
            @include spanCss;
            width: 12rem;
            border-bottom: 0.5rem solid $color;
          }
          button {
            @include butonCss;
            color: $color;
            border: 0.15rem solid $color;
            transition: 0.4s;
          }
          button:hover {
            background-color: $color;
            color: #fff;
          }
        }
        .three {
          .box_tip_icon {
            background-color: $color;
          }
          span {
            @include spanCss;
            width: 12rem;
            border-bottom: 0.5rem solid $color;
          }
          button {
            @include butonCss;
            color: $color;
            border: 0.15rem solid $color;
            transition: 0.4s;
          }
          button:hover {
            background-color: $color;
            color: #fff;
          }
        }
      }
      .bottom_box {
        width: 100%;
        height: 60rem;
        display: flex;  
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 2rem;
        .modukrs_boxs {
          width: 12rem;
          height: 30rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .box_tip_icon {
            width: 10rem;
            height: 10rem;
            background-color: $color;
            border-radius: 50%;
            box-shadow: 0 0 0.3rem 0.24rem rgb(182, 181, 192);
          }
          span {
            @include spanCss;
            border-bottom: 0.5rem solid $color;
          }
          p {
            font-size: 1.3rem;
            width: 80%;
            height: 3.8rem;
            line-height: 1.4rem;
            margin: 1rem auto;
            text-align: center;
          }
          button {
            @include butonCss;
            color: $color;
            border: 0.15rem solid $color;
            color: $color;
            transition: 0.4s;
          }
          button:hover {
            background-color: $color;
            color: #fff;
          }
        }
        .five {
  
          .box_tip_icon {
            background-color: $color;
          }
          span {
            @include spanCss;
            width: 10rem;
            border-bottom: 0.5rem solid $color;
          }
          button {
            @include butonCss;
            color: $color;
            border: 0.15rem solid $color;
            transition: 0.4s;
          }
          button:hover {
            background-color: $color;
            color: #fff;
          }
        }
        .six {
            .box_tip_icon {
              background-color: $color;
            }
            span {
              @include spanCss;
              width: 10rem;
            border-bottom: 0.5rem solid $color;
             
            }
            button {
              @include butonCss;
              color: $color;
              border: 0.15rem solid $color;
              transition: 0.4s;
            }
            button:hover {
              background-color: $color;
              color: #fff;
            }
          }
          .seven{
            display: none;
            span{
              border: none;
            }
            span:nth-child(1){
              text-indent: -1rem;
            }
            span:nth-child(2) {
              text-decoration: underline;
              cursor: pointer;
            }
          }
          .seven:hover{
            span{
              color: rgb(39, 88, 223);
            }
          }
      }
    }
    .showMou {
      width: 100%;
      height: 100%;
      border-radius: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: self-start;
      div {
        width: 70%;
        height: 5rem;
        margin: 0 auto;
        border: 0.2rem solid rgb(18, 74, 126);
        color: rgb(18, 74, 126);
        font-size: 1.8rem;
        font-weight: bold;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-radius: 1.4rem;
        cursor: pointer;
      }
    }
  }
}
</style>