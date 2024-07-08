<template>
  <div class="content">
    <div class="headline">
        <span >今创人力</span>
        <div class="radius">
            <p></p>
        </div>
        <span>专注全国省内人力资源服务</span>
    </div>
   
    <div class="manpower">
        <div>
            <el-statistic  :value="outputValue1"  :value-style="{ color: 'red'}" class="my-custom-statistic">
                <template #suffix>
                    <p class="plus-sign">+</p>
                </template>
            </el-statistic>
            <p class="introduce">省内外企事业单位</p>
        </div>
        <div>
             <el-statistic  :value="outputValue2"  :value-style="{ color: 'red' }" class="my-custom-statistic">
                <template #suffix>
                    <p class="plus-sign">+</p>
                </template>
            </el-statistic>
            <p class="introduce">各类中小微企业</p>
        </div>
        <div>
             <el-statistic  :value="outputValue3"  :value-style="{ color: 'red' }" class="my-custom-statistic">
                 <template #suffix>
                     <div style="position: relative;">
                        <p class="plus-sign" style="font-size: 4rem; position: absolute; bottom: -5rem; color: red;">W</p>
                        <p class="plus-sign" style="position: absolute; right: -6rem; bottom: -2.5rem;">+</p>
                    </div>
                </template>
            </el-statistic>
            <p class="introduce" style="line-height: 5rem;">行业涉岗对口人群</p>
        </div>
    </div> 
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import { useTransition } from '@vueuse/core'
const source1 = ref(0)
const source2 = ref(0)
const source3 = ref(0)
const outputValue1 = useTransition(source1, {
  duration: 1500,
})
const outputValue2 = useTransition(source2, {
  duration: 1500,
})
const outputValue3 = useTransition(source3, {
  duration: 1500,
})
source1.value = 4600
source2.value = 3600
source3.value = 50
</script>

<style lang="scss" scoped>
    .content{
        width: 100%;
        height: 60%;
        .headline{
            width: 100%;
            height: 75%; 
            font-size: 4rem;
            font-weight: 700;
            color: red;
            display: flex;
            justify-content: center;
            .radius{
                width: 4rem;
                height: 4rem;
                line-height: 4rem; 
                p{  
                    position: relative;
                    left: 1.5rem;
                    top: -1.5rem;
                    width: 1rem;
                    height: 1rem;
                    color: red;
                    background-color: red;
                    border-radius: 50%; 
                }
            }
          
        }
        .manpower{
            display: flex;
            justify-content: space-between;
           .my-custom-statistic::v-deep(.el-statistic__content) {  
                font-weight: 700;
                font-size: 4rem; /* 设置 Statistic 组件内部数字的字体大小 */  
            }
            .plus-sign{
                font-weight: 700;
                font-size: 2rem;
            } 
            .introduce{
                letter-spacing: 5px;
                font-weight: 700;
                font-size: 1.2rem;
            }
        }

    }
</style>