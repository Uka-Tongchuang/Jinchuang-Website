<template>
  <div class="advantage">
    <h1>服务优势</h1>
    <div class="content">
      <div class="content-box">
       <div class="img">
         <img src="../../assets/zhaopinone.png" alt="" />
       </div>
       
        <div class="title">
          <div class="flex-box">
            <p></p>
            <div class="title-box">
              <h2>专属服务</h2>
              <span>
                全面的人才招聘、寻访体系及经验丰富、操作规范的专业服务团队，可以为客户提供专属服务。我们的团队由业内资深的招聘专家组成，熟悉各行各业的招聘需求和流程。我们不仅提供招聘服务，还会为客户进行人才市场分析、薪酬调研等增值服务。我们致力于通过精准的人才匹配和高效的招聘流程，帮助客户快速找到合适的人才，提升企业竞争力。
              </span>
            </div>
          </div>
          <div class="flex-box">
            <p></p>
            <div class="title-box">
              <h2>丰富资源</h2>
              <span>
                丰富的跨地区服务以及大规模招聘经验，可根据客户需求提供定制化解决方案，减少客户人力资源工作负担。我们的资源网络覆盖全国各大城市和主要行业，通过多年的积累，我们拥有了庞大的人才数据库和广泛的合作渠道。我们可以根据客户的具体需求，灵活调整招聘策略和渠道，为客户提供最合适的人才解决方案。我们也积极利用大数据和人工智能技术，提升招聘效率和精准度。
              </span>
            </div>
          </div>
          <div class="flex-box">
            <p></p>
            <div class="title-box">
              <h2>专人专项</h2>
              <span>
                采取项目制的运作模式，针对不同项目成立招聘项目组，专人专项负责，全程实时沟通确保进度，为客户提供招聘全流程支持。我们理解每个项目的独特性和复杂性，因此我们为每个项目指派专门的项目经理和团队，确保项目按时保质完成。我们与客户保持密切联系，及时反馈招聘进展和市场变化，确保招聘工作的透明度和客户的参与度。我们不仅关注招聘结果，更关注客户的满意度和长期合作关系的建立。
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
                全面的人才招聘、寻访体系及经验丰富、操作规范的专业服务团队，可以为客户提供专属服务。我们的团队不仅包括行业资深招聘专家，还具备多年的猎头和人才寻访经验。我们通过严谨的筛选流程和科学的人才评估方法，确保推荐的每一位候选人都符合客户的岗位需求和企业文化。我们还为高端人才提供职业发展咨询，帮助他们与客户企业实现双赢。
              </span>
            </div>
            <p></p>
          </div>
          <div class="flex-box">
            <div class="title-box1">
              <h2 class="right">广泛招聘</h2>
              <span>
                校园巡回招聘、企业公众号、社群、招聘网站等充分挖掘各种简历来源渠道，招聘场景全覆盖。我们通过多样化的招聘活动，覆盖从校园到职场的各个阶段，确保为客户找到不同层次和背景的人才。我们利用现代化的招聘工具和社交媒体平台，提高招聘信息的传播效率和影响力。我们还与多所知名高校建立了长期合作关系，第一时间获取优秀毕业生资源。
              </span>
            </div>
            <p></p>
          </div>
          <div class="flex-box">
            <div class="title-box1">
              <h2 class="right">全国覆盖</h2>
              <span>
                服务范围覆盖全国，采用线上线下结合的方式，整合行业内各方面的人才资源，向客户推荐符合需求的人才，提高应聘者总体质量。我们在全国各地设有办事处和合作伙伴，确保可以为客户提供本地化的招聘服务。我们利用先进的招聘管理系统，实时跟踪和分析招聘数据，优化招聘流程和策略。我们还为异地求职者提供迁移支持，帮助他们顺利融入新工作环境
              </span>
            </div>
            <p></p>
          </div>
        </div>
      <div class="img">
          <img src="../../assets/zhaopintwo.png" alt="" />
      </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.advantage {
  width: 100%;
  height: 90rem;
  margin: auto;
  h1 {
    padding-top: 2rem;
    margin: 0;
    overflow-y: hidden;
    font-size: 3rem;
    text-align: center;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto;
    padding: 2.5rem;
    height: 77rem;
    .content-box {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .img{
        width: 45%;
        text-align: center;
        img {
          width: 30rem;
          height: 30rem;
        }
      }
      .title {
        width:45%;
        height: 25rem;
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
              font-size: 1.2rem;
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
              font-size: 1.2rem;
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
