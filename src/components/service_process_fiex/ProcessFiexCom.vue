<template>
  <div class="main">
    <div>
      <h1>服务流程</h1>
    </div>
    <!-- //头部盒子 -->
    <div class="onbox_title">
      <div class="title_one">平台/企业</div>
      <div class="line_box">
        <div class="decs_line">
          业务项目承接
          <div class="border_box"></div>
        </div>
        <div></div>
      </div>
      <div class="title_two">服务提供者</div>
      <div class="title_three">税务局</div>
      <div style="clear: both"></div>
    </div>
    <!-- //下边的盒子 -->
    <div class="unbox_line">
      <div class="left">
        <div class="line_outside">
          <div class="border_box_outside"></div>
          <div class="line_inside">
            代发服务费
            <div class="border_box_inside"></div>
          </div>
        </div>
        <div class="title_bottom_two">
          签订商务协议(业务费用代发)<br />
          开具发票\提供发票服务
        </div>
      </div>
      <div class="center">
        <div class="cen_top">
          <div class="left_lines"><span>业务合作协议</span><div class="border_box_inside"></div></div>
          <div class="right_lines"><span>宪税证明</span><div class="border_box_inside"></div></div>
        </div>
        <div class="cen_bottom">今创人力</div>
      </div>
      <div class="right">
        <div class="line_outside">
          <div class="border_box_outside"></div>
          <div class="line_inside">
            &ensp;代报税
            <div class="border_box_inside"></div>
          </div>
        </div>
        <div class="title_bottom_first">完税证明</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  height: 100%;
//   border: 1px solid #ccc;
  h1 {
    font-size: 3rem;
    text-align: center;
  }
  .onbox_title {
    width: 100%;
    height: 5rem;
    // border-bottom: 0.2rem solid rgb(200, 151, 151);
    display: flex;
    .title_one {
      width: 20rem;
      height: 5rem;
      color: #fff;
      font-size: 1.6rem;
      background-color: rgb(97, 121, 181);
      text-align: center;
      line-height: 5rem;
    }
    .line_box {
      height: 5rem;
      margin-left: 5rem;
      .decs_line {
        width: 25rem;
        height: 2.5rem;
        font-size: 1.4rem;
        border-bottom: 0.4rem solid rgb(68, 214, 68);
        text-align: center;
        line-height: 2.5rem;
        position: relative;
        .border_box {
          width: 0;
          height: 0;
          position: absolute;
          bottom: -1.1rem;
          left: -2rem;
          border: 1rem solid rgba(255, 255, 255, 0);
          border-right: 1.5rem solid rgb(68, 214, 68);
        }
      }
    }
    .title_two {
      width: 20rem;
      height: 5rem;
      color: #fff;
      font-size: 1.6rem;
      background-color: rgb(97, 121, 181);
      text-align: center;
      line-height: 5rem;
      margin-left: 5rem;
    }
    .title_three {
      width: 20rem;
      height: 5rem;
      color: #fff;
      font-size: 1.6rem;
      background-color: rgb(97, 121, 181);
      text-align: center;
      line-height: 5rem;
      margin-left: 28.8rem;
    }
  }
  .unbox_line {
    width: 100%;
    display: flex;
    .left {
      width: 30rem;
      height: 35rem;
      margin-left: 10rem;
      margin-top: 10rem;
      // background-color: #ccc;
      text-align: center;
      .title_bottom_two {
        width: 100%;
        height: 4.5rem;
        font-size: 1.4rem;
        color: rgb(1, 1, 1);
        line-height: 2.5rem;
        padding-top: 0.5rem;
        text-align: center;
      }
      .title_bottom_first {
        width: 100%;
        height: 4.5rem;
        font-size: 1.4rem;
        color: rgb(1, 1, 1);
        line-height: 2.5rem;
        padding-top: 0.5rem;
        text-align: center;
      }
      .line_outside {
        width: 30rem;
        height: 30rem;
        border-bottom-left-radius: 2rem;
        border-left: 0.4rem solid rgb(68, 214, 68);
        border-bottom: 0.4rem solid rgb(68, 214, 68);
        position: relative;
        .border_box_outside {
          width: 0;
          height: 0;
          position: absolute;
          top: -1.4rem;
          left: -1.1rem;
          border: 1rem solid rgba(255, 255, 255, 0);
          border-bottom: 1.5rem solid rgb(68, 214, 68);
        }
        .line_inside {
          width: 28.6rem;
          height: 28.6rem;
          font-size: 1.4rem;
          line-height: 52.2rem;
          border-bottom-left-radius: 2rem;
          border-left: 0.4rem solid rgb(97, 121, 181);
          border-bottom: 0.4rem solid rgb(97, 121, 181);
          margin-left: 1rem;
          position: relative;
          .border_box_inside {
            width: 0;
            height: 0;
            position: absolute;
            right: -1.4rem;
            bottom: -1.2rem;
            overflow: hidden;
            border: 1rem solid rgba(255, 255, 255, 0);
            border-left: 1.5rem solid rgb(97, 121, 181);
          }
        }
      }
    }
    .center {
      .cen_top {
        width: 20rem;
        height: 25rem;
        margin-top: 10rem;
        margin-left: 15rem;
        margin-bottom: 1.5rem;
        display: flex;
        justify-content: space-around;
        .left_lines {
          width: 6rem;
          height: 20rem;
          font-size: 1.6rem;
          border-right: 0.4rem solid rgb(97, 121, 181);
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          span{
            writing-mode:vertical-rl;
            letter-spacing:0.5rem;
          }
          .border_box_inside{
            width: 0;
          height: 0;
          position: absolute;
          right: -1.1rem;
          top: -1.3rem;
          border: 1rem solid rgba(255, 255, 255, 0);
          border-bottom: 1.5rem solid rgb(97, 121, 181);
          }
        }
        .right_lines {
          width: 6rem;
          height: 20rem;
          font-size: 1.6rem;
          border-left: 0.4rem solid rgb(68, 214, 68);
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          span{
            writing-mode:vertical-rl;
            letter-spacing:1rem;
          }
          .border_box_inside{
            width: 0;
          height: 0;
          position: absolute;
          left: -1.15rem;
          top: -1.3rem;
          border: 1rem solid rgba(255, 255, 255, 0);
          border-bottom: 1.5rem solid rgb(68, 214, 68);
          }
        }
      }
      .cen_bottom {
        width: 20rem;
        height: 5rem;
        color: #fff;
        font-size: 1.6rem;
        background-color: rgb(97, 121, 181);
        text-align: center;
        line-height: 5rem;
        margin-left: 15rem;
      }
    }
    .right {
      width: 30rem;
      height: 35rem;
      margin-left: 10rem;
      margin-top: 10rem;
      text-align: center;
      .title_bottom_first {
        height: 5rem;
        font-size: 1.4rem;
        line-height: 5rem;
        text-align: center;
      }

      .line_outside {
        width: 30rem;
        height: 30rem;
        border-bottom-right-radius: 2rem;
        border-right: 0.4rem solid rgb(68, 214, 68);
        border-bottom: 0.4rem solid rgb(68, 214, 68);
        position: relative;
        .border_box_outside {
          width: 0;
          height: 0;
          position: absolute;
          bottom: -1.15rem;
          left: -1.5rem;
          border: 1rem solid rgba(255, 255, 255, 0);
          border-right: 1.5rem solid rgb(68, 214, 68);
        }
        .line_inside {
          width: 28.6rem;
          height: 28.6rem;
          font-size: 1.4rem;
          line-height: 52.2rem;
          border-bottom-right-radius: 2rem;
          border-right: 0.4rem solid rgb(97, 121, 181);
          border-bottom: 0.4rem solid rgb(97, 121, 181);
          margin-right: 1rem;
          position: relative;
          .border_box_inside {
            width: 0;
            height: 0;
            position: absolute;
            right: -1.15rem;
            top: -1.5rem;
            overflow: hidden;
            border: 1rem solid rgba(255, 255, 255, 0);
            border-bottom: 1.5rem solid rgb(97, 121, 181);
          }
        }
      }
    }
  }
}
</style>