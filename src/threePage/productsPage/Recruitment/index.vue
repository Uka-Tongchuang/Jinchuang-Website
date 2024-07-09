<template>
    <div class="main">
        <div class="applications">
            <h1>招聘业务</h1>
        </div>
        <div class="content">
            <p>
                通过就业街小圆桌系统、职播播人才直播平台，我们为企业和个人提供全方位的人力资源服务，涵盖人才招聘、人才培 训以及直播带岗等多个方面，以全流程人才解决方案帮助企业应对“人怎么来”的种种难题
            </p>
        </div>  
       <div class="card-list">
         <div v-for="item in state.arr" class="card-title">
            <el-card >
                <p class="title">{{ item.title }}</p>
                <div class="img">
                    <img :src=item.idVieo />
                </div>
            </el-card>
        </div> 
       </div>
        <div class="service">
            <h1>服务明细</h1>
            <!-- <div class="flow-path">
                 <div style="height: 300px; max-width: 600px">
                    <el-steps direction="vertical" :active="1">
                        <el-step title="Step 1" >
                            <template #content>
                                 <div class="card-top">
                                    <h2>1.前期对接工作</h2>
                                    <p>a.通过项目启动，核对用人需求、岗位职责与录用标准</p>
                                    <p>b.与客户核对并确认各岗位的面试/入职/合同签约流程</p>
                                </div>
                            </template>
                        </el-step> 
                        <el-step title="Step 2" />
                        <el-step title="Step 3" />
                    </el-steps>
                </div>
                <div >
                    <div class="axle-wire"></div>
                    <div class="card-top">
                        <h2>1.前期对接工作</h2>
                        <p>a.通过项目启动，核对用人需求、岗位职责与录用标准</p>
                        <p>b.与客户核对并确认各岗位的面试/入职/合同签约流程</p>
                    </div>
                    <div class="card-top"> 
                        <h2>2.人员寻访</h2>
                        <p>a.外部代理招聘渠道</p>
                        <p>b.通过公司内部网招渠道</p>
                        <p>c.通过校招、招聘会等渠道</p>
                        <p>d.矩阵视频，直播带岗</p>
                    </div>
                    <div class="card-top">
                        <h2>3.面试邀约及入职</h2>
                        <p>a.进行线上、线下面试及面试辅导</p>
                        <p>b.岗前培训及试岗工作、上岗通知及入职须知宣导</p>
                        <p>c.整理与沟通、共享招聘数据和台账，做相关分析</p>
                    </div>
                    <div class="card-top">
                        <h2>4.交付、个保温及离补</h2>
                        <p>a.确保员工稳定性，及时答疑化解工作中问题</p>
                        <p>b.做好离职补招工作，避免用人压力</p>
                    </div>
                </div>
            </div> -->
            <div>
                <el-steps :active="activeStep" finish-status="success" direction="vertical">
                    <el-step v-for="item in steps" :key="item.title" :title="item.title" >
                        <template #title>
                            <i class="el-icon-s-check"></i>
                            {{ item.title }}
                        </template>
                        <template #description>
                            <div class="card">
                            <h3>{{ item.cardTitle }}</h3>
                            <p>{{ item.cardContent }}</p>
                            </div>
                        </template>
                    </el-step>
                </el-steps>
            </div>
        </div> 
    </div>
</template>

<script setup lang="ts">
import swpOne from "../../../assets/th.jpg"; 
import { ref, reactive } from "vue";   
const imgRef = ref();
const state = reactive({
  getNewsData: [],
  arr: [
    {
      id: 1,
      title:'社招',
      idVieo: swpOne,
    },
    {
      id: 2,
      title:'网招',
      idVieo: swpOne,
    },
     {
      id: 3,
      title:'校招',
      idVieo: swpOne,
    },
       {
      id: 4,
      title:'新媒体带岗',
      idVieo: swpOne,
    },
       {
      id: 5,
      title:'猎头',
      idVieo: swpOne,
    },
  ],
});
const activeStep = ref(0);
const steps = ref([
  { title: '1.前期对接工作', cardTitle: 'a.通过项目启动，核对用人需求、岗位职责与录用标准', cardContent: 'b.与客户核对并确认各岗位的面试/入职/合同签约流程' },
  { title: '2.人员寻访', cardTitle: 'a.外部代理招聘渠道', cardContent: 'b.通过公司内部网招渠道' },
  { title: '3.面试邀约及入职', cardTitle: 'a.进行线上、线下面试及面试辅导', cardContent: 'b.岗前培训及试岗工作、上岗通知及入职须知宣导' },
  { title: '4.交付、个保温及离补', cardTitle: 'a.确保员工稳定性，及时答疑化解工作中问题', cardContent: 'b.做好离职补招工作，避免用人压力' },
]);
</script>

<style scoped lang="scss">
    .main{
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        .applications{
            width: 100%;
            height: 30rem;
            background-color: red;
            h1{
                font-size: 5rem;
                text-align: center;
                line-height: 30rem;
                margin: 0;
                padding: 0;
            }
        }
        .content{
            width: 70%;
            height: 5rem;
            margin: 0 auto;
            p{
                font-size: 1.5rem;
            }
        }
        .card-list{
            width: 90%;
            height: 13rem;
            margin: 1rem auto;
            display: flex;
            justify-content: space-between;
            .card-title{
                width: 15rem;
                text-align: center;
                margin: 0 auto; 
                .img{
                    width: 5rem;
                    height: 5rem;
                    margin: 1rem auto;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
        .service{
            width: 80%;
            margin: 2rem auto;
            text-align: center;
            h1{
                font-size: 2rem;
                color: red;
            }
            .flow-path{
                width: 100%;
                height: 50rem; 
                .axle-wire{ 
                    margin: 0 auto;
                    position: absolute;
                    width: 10px;
                    height: 40rem;
                    background-color: red;
                }
                .card-top{
                    position: relative;
                    top: 1rem;
                    left: 2rem;
                }
            }
        }
    } 
</style>