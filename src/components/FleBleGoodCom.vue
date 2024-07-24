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
                可以快速帮助企业、有效地增加或减少招聘操作，以适应不断变化的业务需求。作为国内人力资源服务的早期实践者，我们积累了丰富的行业经验和成功案例。我们深知企业在不同发展阶段对人才需求的变化，因此能够灵活调整招聘策略，提供灵活、定制化的招聘解决方案。我们致力于通过高效的人才管理和招聘流程，帮助企业在竞争激烈的市场中保持人力资源优势。
              </span>
            </div>
          </div>
          <div class="flex-box">
            <p></p>
            <div class="title-box">
              <h2>合作模式多样化</h2>
              <span>
                目前可提供劳务、自然人经营所得、个体工商户等多种业务模式，适用于各种业务类型。我们的多样化合作模式能够满足不同企业的个性化需求，无论是短期项目用工、长期劳务派遣还是灵活用工，我们都能提供专业的解决方案。我们在合同管理、税务合规和员工福利等方面具有专业知识，确保每一种合作模式的合法性和高效性，帮助企业降低用工成本，提高用工灵活性。
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
                与众多知名客户合作，覆盖互联网、教育、零售、金融、房地产、餐饮等不同行业、不同岗位，有丰富的业务运营经验。我们与各行业的领先企业建立了长期合作关系，深刻理解各行业的招聘需求和岗位特点。我们的服务团队具备丰富的行业背景和专业知识，能够为客户提供精准的人才匹配和专业咨询服务。我们还定期进行行业研究和市场分析，为客户提供前瞻性的招聘建议和人力资源解决方案。
              </span>
            </div>
            <p></p>
          </div>
          <div class="flex-box">
            <div class="title-box1">
              <h2 class="right">交付能力卓越</h2>
              <span>
                遍布全国的服务网络，跨地区高效协同助力客户成功，业务体量峰值达千万人次/月，最大限度满足客户业务发展要求。我们的服务网络覆盖全国主要城市和地区，能够快速响应客户的招聘需求。我们采用先进的信息化管理系统，实现跨地区的高效协同作业。我们拥有一支经验丰富、训练有素的项目管理团队，确保每一个招聘项目的顺利实施和高效交付。无论客户的业务规模如何，我们都能提供高质量、高效率的招聘服务。
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
    font-size: 3rem;
    text-align: center;
  }
  .content {
    width: 80%;
    margin: 0 auto;
    height: 51rem;
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
