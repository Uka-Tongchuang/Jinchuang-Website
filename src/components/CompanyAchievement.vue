<template>
  <div class="content">
    <div class="headline">
        <span >今创人力</span>
        <div class="radius">
            <p></p>
        </div>
        <span>专注全国省内人力资源服务</span>
    </div>
   
    <div class="manpower" ref="statisticRef">
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
import {ref,onMounted} from 'vue'
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
 

    const startCounting = () => {
      let count = 0;
      const totalSteps1 = 4600; 
      const duration = 1500; // 3秒
      const step1 = totalSteps1 / (duration / 50); // 每50毫秒增加的步数 

      const interval = setInterval(() => {
        if (count <= totalSteps1) {
          source1.value = count;
          count += step1;
        } else {
          source1.value = totalSteps1; // 确保最终显示为100
          clearInterval(interval);
        }
        
      }, 50);
    };
     const startCounting2 = () => {
      let count = 0; 
      const totalSteps2 = 3600; 
      const duration = 1500; // 3秒 
      const step2 = totalSteps2 / (duration / 50); // 每50毫秒增加的步数 

      const interval = setInterval(() => {
        if (count <= totalSteps2) {
          source2.value = count;
          count += step2;
        } else {
          source2.value = totalSteps2; // 确保最终显示为100
          clearInterval(interval);
        }
        
      }, 50);
    };
     const startCounting3 = () => {
      let count = 0; 
      const totalSteps3 = 50;
      const duration = 1500; // 3秒 
      const step3= totalSteps3 / (duration / 50); // 每50毫秒增加的步数

      const interval = setInterval(() => {
        if (count <= totalSteps3) {
          source3.value = count;
          count += step3;
        } else {
          source3.value = totalSteps3; // 确保最终显示为100
          clearInterval(interval);
        }
        
      }, 50);
    };

    onMounted(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startCounting();
            startCounting2();
            startCounting3();
            observer.unobserve(statisticRef.value);
          }
        });
      });
      observer.observe(statisticRef.value);
    });

    const statisticRef = ref(null);
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