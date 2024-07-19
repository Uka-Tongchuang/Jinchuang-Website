<template>
    <div class="about_compony_box">
        <h1  class="title_about animate__animated animate__bounceInRight">关于今创，了解今创</h1>
        <h3 class="title_english animate__animated animate__bounceInRight animate__slow	1s">About Our Company, Learn About Jinchuang</h3>
        <div class="about_content">
            <p>
                “今创人力”，是一家致力于全球为企业客户提供全面人力资源服务解决方案的专业公司 ，业务范围涵盖，人事管理、劳务派遣、岗位外包、灵活用工等在内的一站式人力资源综合解决方案。公司成立之初 ，主要为国内头部互联网企业提  供人力资源外包服务 ，发展至今建立了负责、高效、专业、进取的服务团队 ，赢得了客户的广泛信赖和好评 ，营业规模和企业实力处于国内人力资源服务行业先进水平。

今创人力始终秉承“客户为先 ，诚信为本 ，开放包容 ，持续改进”的企业价值观 ，严格制定标准化服务和把关服务流程的每一个环节和细节 ，不断提升服务技能与服务水平 ，为客户提供专业的人力资源解决方案。始终关注客户需求 ，持续为客户解决问题、创造价值。


目前今创已在全国一二线城市均设置自己的分支机构 ，服务范围遍及全国200多个城市及地区，自有专业管理团队近1000人 ，累计服务客户超2000家以上 ，涵盖IT、互联网、零售、金融、新能源、医药、物流运输等数十个行业 ，并凭借优质服务和雄厚实力获得了客户和业界的广泛认可。

              </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import 'animate.css';
</script>

<style scoped lang="scss">
.about_compony_box{
    width: 100%;
    height: 50rem;
    padding: 0;
    color: #fff;
    background-image: url("../assets/img/aboutBackground.png") ;
    background-size: 100% 100%;
    position: relative;
    .title_about{
        display: inline-block;
        position: absolute;
        left: 15rem;
        top: 8rem;
        font-size: 2.6rem;
    }
    .title_english{
        position: absolute;
        left: 15rem;
        top: 12rem;
        font-size: 2.2rem;
    }
    .about_content{
        position: absolute;
        width: 78%;
        height: 10rem;
        left: 20rem;
        top: 18rem;
        font-size: 1.2rem;
        p{
            width: 68rem;
            text-indent: 2rem;
            color: #fbfcfd;
            font-size: 1.6rem;
            
        }
    }
}
</style>