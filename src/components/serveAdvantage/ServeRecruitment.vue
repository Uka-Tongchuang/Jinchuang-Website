<template>
  <div class="advantage">
    <h1>服务优势</h1>
    <div class="content">
      <div class="content-box">
        <img src="../../assets/zhaopinone.png" alt="" />
        <div class="title">
          <div class="flex-box">
            <p></p>
            <div class="title-box">
              <h2>专属服务</h2>
              <span>
                全面的人才招聘、寻访体系及经验丰富、
                操作规范的专业服务团队，可以为客户 提供专属服务。
              </span>
            </div>
          </div>
          <div class="flex-box">
            <p></p>
            <div class="title-box">
              <h2>丰富资源</h2>
              <span>
                丰富的跨地区服务以 及大规模招聘经验， 可根据
                客户需求提供定制化解决方案， 减少客户人力资源工作负担。
              </span>
            </div>
          </div>
          <div class="flex-box">
            <p></p>
            <div class="title-box">
              <h2>专人专项</h2>
              <span>
                采取项目制的运作模式，针对不 同项目 成立招聘项目组，专人
                专项负责， 全程实时沟通确保进度, 为客户提 供招聘全流程支持。
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="content-box">
        <div class="title">
          <div class="flex-box">
            <div class="title-box1">
              <h2 class="right">优秀人才</h2>
              <span>
                全面的人才招聘、寻访体系及经验丰富、
                操作规范的专业服务团队，可以为客户 提供专属服务。
              </span>
            </div>
            <p></p>
          </div>
          <div class="flex-box">
            <div class="title-box1">
              <h2 class="right">广泛招聘</h2>
              <span>
                校园巡回招聘、企业公众号、 社群、招聘 网站等充分
                挖掘各种简历来源渠道， 招聘场景全覆盖。
              </span>
            </div>
            <p></p>
          </div>
          <div class="flex-box">
            <div class="title-box1">
              <h2 class="right">全国覆盖</h2>
              <span>
                服务范围覆盖全国，采用线上线下 结合的 方式，整合行业内各方面
                的人才资源， 向客户推荐符合需求 的人才，提高 应聘者总体质量
              </span>
            </div>
            <p></p>
          </div>
        </div>
        <img src="../../assets/zhaopintwo.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.advantage {
  width: 80%;
  margin: auto;
  h1 {
    overflow-y: hidden;
    font-size: 3rem;
    text-align: center;
  }
  .content {
    width: 80%;
    margin: auto;
    height: 82rem;
    .content-box {
      display: flex;
      justify-content: space-between;
      img {
        width: 40%;
        height: 50%;
      }
      .title {
        width: 40%;
        .flex-box {
          display: flex;
          justify-content: space-between;
          p {
            width: 0.5rem;
            height: 2rem;
            background-color: #82c4b3;
            margin-top: 2rem;
          }
          .title-box {
            width: 90%;
            h2 {
              font-size: 2rem;
            }
            span {
              font-size: 1.5rem;
              color: #000;
              opacity: 0.5;
            }
          }
          .title-box1 {
            width: 90%;
            text-align: right;
            h2 {
              font-size: 2rem;
            }
            span {
              font-size: 1.5rem;
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
