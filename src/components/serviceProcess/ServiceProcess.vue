<template>
  <div class="box">
    <div class="title">
      <h1>服务流程</h1>
    </div>
    <div class="top_box">
      <div class="left_line">
        <div class="border_box"></div>
      </div>
      <div class="banner_box">制定岗位人物完成目标，考核完成结果</div>
      <div class="right_line">
        <div class="border_box"></div>
      </div>
    </div>
    <!-- 中间盒子 -->
    <div class="center_box">
      <div class="title_first">今创人力</div>
      <div class="line_box_one">
        <div class="line_top_title">
          签订劳务合同
          <div class="border_box"></div>
        </div>
        <div class="line_bottom_title">劳动关系</div>
      </div>
      <div class="title_second">员工</div>
      <div class="line_box_two">
        <div class="line_top_title">
          驻场关系
          <div class="border_box"></div>
        </div>
        <div class="line_bottom_title">无直接关联关系</div>
      </div>
      <div class="title_box_thirth">企业</div>
    </div>
    <!-- 底部盒子 -->
    <div class="bottom_box">
        <div class="left_line">

        <div class="border_box"></div>

      </div>

      <div class="banner_box">
        合作关系，订立外包服务合同
        </div>

      <div class="right_line">

        <div class="border_box"></div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.box {
  width: 100%;
  height: 100%;
.title{
    h1{
        font-size: 3rem;
        text-align: center;
    }
}
  .top_box {
    width: 100%;
    height: 15rem;
    display: flex;
    margin-top: 1rem;
    justify-content: space-between;
    .left_line {
      width: 20%;
      height: 14rem;
      border-top-left-radius: 2rem;
      border-left: 0.4rem solid rgb(98, 133, 223);
      border-top: 0.4rem solid rgb(98, 133, 223);
      margin-left: 7rem;
      margin-top: 2.5rem;
      position: relative;
      .border_box {
        width: 0;
        height: 0;
        position: absolute;
        top: -1.1rem;
        right: -2rem;
        border: 1rem solid rgba(255, 255, 255, 0);
        border-left: 1.5rem solid rgb(98, 133, 223);
      }
    }
    .banner_box {
      width: 30%;
      height: 5rem;
      border: 0.2rem solid rgb(133, 126, 202);
      line-height: 5rem;
      font-size: 1.6rem;
      text-align: center;
      font-weight: 700;
    }
    .right_line {
      width: 20%;
      height: 14rem;
      border-top-right-radius: 2rem;
      border-right: 0.4rem solid rgb(98, 133, 223);
      border-top: 0.4rem solid rgb(98, 133, 223);
      margin-right: 7rem;
      margin-top: 2.5rem;
      position: relative;
      .border_box {
        width: 0;
        height: 0;
        position: absolute;
        top: -1.1rem;
        left: -2rem;
        border: 1rem solid rgba(255, 255, 255, 0);
        border-right: 1.5rem solid rgb(98, 133, 223);
      }
    }
  }
  .center_box {
    width: 100%;
    height: 33%;
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    .title_first {
      width: 14rem;
      height: 14rem;
      color: #fff;
      background-color: #c6c6f2;
      border-radius: 50%;
      font-size: 2rem;
      text-align: center;
      line-height: 14rem;
      margin-top: 5rem;
    }
    .line_box_one {
      width: 20%;
      height: 14rem;
    //   border: 1px solid #ccc;
      margin-top: 5rem;
      margin-left: 2rem;
      .line_top_title {
        width: 100%;
        height: 7rem;
        font-size: 1.7rem;
        text-align: center;
        line-height: 7rem;
        border-bottom: 0.4rem solid #c9c16e;
        position: relative;
        .border_box {
          width: 0;
          height: 0;
          position: absolute;
          bottom: -1.2rem;
          right: -2rem;
          border: 1rem solid rgba(255, 255, 255, 0);
          border-left: 1.5rem solid #c9c16e;
        }
      }
      .line_bottom_title {
        width: 100%;
        height: 7rem;
        font-size: 1.7rem;
        text-align: center;
        line-height: 7rem;
      }
    }
    .title_second{
        width: 14rem;
        height: 14rem;
        color: #fff;
        background-color: #c6c6f2;
        border-radius: 50%;
        font-size: 2rem;
        text-align: center;
        line-height: 14rem;
        margin-left: 2rem;
        margin-top: 5rem;
    }
    .line_box_two{
        width: 20%;
      height: 14rem;
    //   border: 1px solid #ccc;
      margin-top: 5rem;
      margin-left: 2rem;
      .line_top_title {
        width: 100%;
        height: 7rem;
        font-size: 1.7rem;
        text-align: center;
        line-height: 7rem;
        border-bottom: 0.4rem solid #c9c16e;
        position: relative;
        .border_box {
          width: 0;
          height: 0;
          position: absolute;
          bottom: -1.2rem;
          right: -2rem;
          border: 1rem solid rgba(255, 255, 255, 0);
          border-left: 1.5rem solid #c9c16e;
        }
      }
      .line_bottom_title {
        width: 100%;
        height: 7rem;
        font-size: 1.7rem;
        text-align: center;
        line-height: 7rem;
      }
    }
    .title_box_thirth{
        width: 14rem;
        height: 14rem;
        color: #fff;
        background-color: #c6c6f2;
        border-radius: 50%;
        font-size: 2rem;
        text-align: center;
        line-height: 14rem;
        margin-left: 2rem;
        margin-top: 5rem;
    }
  }
  .bottom_box {
    width: 100%;
    height: 15rem;
    display: flex;
    justify-content: space-between;
    .left_line {
      width: 20%;
      height: 14rem;
      border-bottom-left-radius: 2rem;
      border-left: 0.4rem solid rgb(98, 133, 223);
      border-bottom: 0.4rem solid rgb(98, 133, 223);
      margin-left: 7rem;
      margin-top: 1rem;
      position: relative;
      .border_box {
        width: 0;
        height: 0;
        position: absolute;
        top: 13.2rem;
        right: -2rem;
        border: 1rem solid rgba(255, 255, 255, 0);
        border-left: 1.5rem solid rgb(98, 133, 223);
      }
    }
    .banner_box {
      width: 30%;
      height: 5rem;
      border: 0.2rem solid rgb(133, 126, 202);
      line-height: 5rem;
      font-size: 1.6rem;
      text-align: center;
      font-weight: 700;
      margin-top: 12.2rem;;
    }
    .right_line {
      width: 20%;
      height: 14rem;
      border-bottom-right-radius: 2rem;
      border-right: 0.4rem solid rgb(98, 133, 223);
      border-bottom: 0.4rem solid rgb(98, 133, 223);
      margin-right: 7rem;
      margin-top: 1rem;
      position: relative;
      .border_box {
        width: 0;
        height: 0;
        position: absolute;
        top: 13.2rem;
        left: -2rem;
        border: 1rem solid rgba(255, 255, 255, 0);
        border-right: 1.5rem solid rgb(98, 133, 223);
      }
    }
  }
}
</style>