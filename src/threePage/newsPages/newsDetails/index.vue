<template>
    <div class="main">
      <div class="content">
       <h1>新闻标题</h1>
      </div>
    <div>
       <p style="text-align: center;">时间</p>
       <p style="text-align: center;">作者</p>
    </div>
    <div>
       <p>文章内容</p>
       <p>哈哈哈哈哈哈很快就撒给对方空间撒感到恐惧撒谎的空间户籍限制科技孵化的升值空间发哈数据库和看见这些接口返回这些会计法户籍科户籍科很快就后就会看见很快就很快就和客家话健康和客家话框架何苦环境开会客家话1健康和框架很快就后即可和客家话客家话客家话框架，7月8日周一《新闻联播》要闻17条】财联社7月8日电，今天《新闻联播》主要内容有： 1、习近平会见匈牙利总理； 2、习近平向上海合作组织国家绿色发展论坛致贺信； 3、央视快评：携手构建更加紧密的上海合作组织命运共同体； 4、习近平向所罗门群岛新任总督致贺电； 5、应习近平邀请 几内亚比绍总统将访华； 6、【新思想引领新时代改革开放】全面深化改革 谱写中国经济高质量发展崭新篇章； 7、王沪宁出席畅通国内大循环调研协商座谈会； 8、洞庭湖决口抢险加紧推进 鲁豫川等地积极应对强降雨； 9、黑龙江特色文旅火爆背后的干部作风之变； 10、上半年我国期货市场运行平稳； 11、2024年上半年全国机动车保有量达4.4亿辆； 12、空客中国总装第700架A320系列飞机交付； 13、以军称摧毁巴武装组织基础设施 巴武装组织称打击以军坦克等装备 黎以边境附近交火持续； 14、俄称打击乌“爱国者”防空系统 乌称基辅等地遭俄导弹袭击； 15、法国左翼联盟在议会选举中获多数议席； 16、研究显示今年6月为有记录以来最热6月； 17、全面深化改革 中国式现代化万千气象。很快就很快就和客家话健康和客家话框架很快就很快就会健康和接口就很快就和客家话空军航空</p>
    </div>
      </div>
</template>

<script setup lang="ts">
import { getDataApi } from '@/api/request';
import { reactive } from 'vue';

const state=reactive({
    content:'',
    title:"",
    time:"",
    author:""
})
const respose=getDataApi();
console.log(respose,"kskdsj");

</script>

<style lang="scss" scoped>
.main{
       width: 100%;
       height: 100%;
       margin: 0;
       padding: 0;
       overflow-y: hidden;
       .content{
           background-color: red;
           width: 100%;
           height: 20rem;
           margin: 0 auto; 
           h1{
               font-size: 5rem;
               text-align: center;
               line-height: 20rem;
               margin: 0;
               padding: 0;
           } 
       } }
</style>