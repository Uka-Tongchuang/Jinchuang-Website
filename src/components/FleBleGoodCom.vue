<template>
  <div class="advantage">
    <h1>服务优势</h1>
    <div class="content">
      <div class="content-box">
        <img src="../assets/left.png" alt="" />
        <div class="title">
          <div class="flex-box">
            <p></p>
            <div class="title-box">
              <h2>国内早起实践者</h2>
              <span>
                可以快速帮助企业、有效地增加 或减少招聘操作，以适应
                不断变化的业务需求。
              </span>
            </div>
          </div>
          <div class="flex-box">
            <p></p>
            <div class="title-box">
              <h2>合作模式多样化</h2>
              <span>
                目前可提供劳务、自然人经营所得、 个体工商户等多种业务模式，
                适用于各种业务类型。
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="content-box">
        <div class="title">
          <div class="flex-box">
            <div class="title-box1">
              <h2 class="right">服务经验服务</h2>
              <span>
                与众多知名客户合作,覆盖互联网、
                教育、零售.金融、房地产、餐饮等不同行业、
                不同岗位，有丰富的业务运营经验。
              </span>
            </div>
            <p></p>
          </div>
          <div class="flex-box">
            <div class="title-box1">
              <h2 class="right">交付能力卓越</h2>
              <span>
                遍布全国的服务网络，跨地区 高效协同助力客户成功，业务体量峰值达
                千万人次/月，最大限度满足客户业务发展要求。
              </span>
            </div>
            <p></p>
          </div>
        </div>
        <img src="../assets/right.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.advantage {
  width: 100%;
  margin: auto;
  h1 {
    padding-top: 2rem;
    margin: 0;
    overflow-y: hidden;
    font-size: 3rem;
    text-align: center;
  }
  .content {
    width: 80%;
    margin: 0 auto;
    height: 51rem;
    padding: 2.5rem;
    .content-box {
      width: 100%;
      display: flex;
      justify-content: space-between;
      img {
        width: 25rem;
        height: 25rem;
      }
      .title {
        width: calc(62% - 20rem);
        height: 25rem;
        display: flex;
        flex-wrap: wrap;
        .flex-box {
          display: flex;
          justify-content: space-between;
          p {
            width: 0.4rem;
            height: 2rem;
            background-color: #2758e9;
            margin-top: 1rem;
          }
          .title-box {
            width: 90%;
            h2 {
              font-size: 1.5rem;
            }
            span {
              font-size: 1rem;
              color: #000;
              opacity: 0.5;
            }
          }
          .title-box1 {
            width: 90%;
            text-align: right;
            h2 {
              font-size: 1.5rem;
            }
            span {
              font-size: 1rem;
              color: #000;
              opacity: 0.5;
            }
          }
        }
      }
    }
  }
}
</style>
