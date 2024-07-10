<template>
  <div class="footer_box">
    <div class="customer_box">这里是客服模块</div>
    <!-- //底部信息 -->
    <div class="bottom_content_box">
      <!-- //公司业务模块范围 -->
      <div class="content_box">
        <!-- //业务列表 -->
        <div class="list_box">
          <div class="concent_business">
            <ul>
              <li
                class="title_li"
                style="font-weight: bold; margin-bottom: 2rem"
                @click="goAbouRoute"
              >
                了解金创
              </li>
            </ul>
            <ul>
              <li
                class="title_li"
                style="font-weight: bold; margin-bottom: 2rem"
              >
                产品
              </li>
              <li
                v-for="(item, index) in threeChildrenRoute"
                :key="index"
                class="dataListItems"
              >
              
                <router-link :to="item.path" v-if="!item.children">
                  {{ item.meta?.title }}
                </router-link>
                <span  v-else>{{ item.meta?.title }}</span>
                <p
                  v-show="item.children && item.children.length > 0"
                  v-for="(v, i) in item.children"
                  :key="i"
                >
                  <router-link :to="v.path">
                    {{ v.meta?.title }}
                  </router-link>
                </p>
              </li>
            </ul>
            <ul>
              <li
                class="title_li"
                style="font-weight: bold; margin-bottom: 2rem"
                @click="goSpecialRoute"
              >
                客户案例
              </li>
            </ul>
            <ul>
              <li
                class="title_li"
                style="font-weight: bold; margin-bottom: 2rem"
                @click="goTalentRoute"
              >
                解决方案
              </li>
            </ul>
            <ul>
              <li
                class="title_li"
                style="font-weight: bold; margin-bottom: 2rem"
                @click="goNewsRoute"
              >
                新闻中心
              </li>
            </ul>
            <ul>
              <li
                class="title_li"
                style="font-weight: bold; margin-bottom: 2rem"
              >
                资源中心
              </li>
              
            </ul>
          </div>
          <div class="hot_list">
            <div class="hot_spot_top">
              <h4>热点内容</h4>
              <ul class="hot_content_ui">
                <li v-for="(item,index) in hotNewsData" :key="index">
                    {{ item.title }}
               </li>
              </ul>
            </div>
            <div class="qrcode">
              <div>
                <h1>图一</h1>
              </div>
              <div>
                <h1>图二</h1>
              </div>
            </div>
          </div>
        </div>
        <!-- //公司售前后服务 -->
        <div class="sell_service">
          <h3>
            市场商务合作:internalmarketing@beisen.com
            友情链接合作:wangxiaorui@beisen.com
          </h3>
        </div>
      </div>
      <!-- 公司信息 -->
      <div class="bottom_ps_box">
        <div class="infoRecord_box">
          <div class="info_left">
            ©2024-2024
            成都今创人力资源有限公司版权所有&emsp;&emsp;川ICP备05051632号-23川公网安备
            11010802020454号
          </div>
          <div class="info_right">
            <a href="#">网站地图</a>
            <a href="#">隐私政策</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import {ref,onMounted} from "vue"
import {newsHotApi} from "@/api/request"
const hotNewsData=ref()
onMounted(async()=>{
    const {data}=await newsHotApi()
    // console.log(data);
    hotNewsData.value=data.content
})

//产品下的数据
import { threeChildrenRoute } from "@/router";
const router = useRouter();
//了解公司
const goAbouRoute = () => {
  router.push("/home/about");
};
// 客户案例/home/special
const goSpecialRoute = () => {
  router.push("/home/special");
};
//解决方案
const goTalentRoute = () => {
  router.push("/home/talent");
};
//新闻中心
const goNewsRoute = () => {
  router.push("/home/news");
};
//
</script>

<style scoped lang="scss">
ul li {
  list-style: none;
}
.footer_box {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  // 公司客服
  .customer_box {
    width: 100%;
    height: 11rem;
    background-image: url("../assets/swpOne.jpg");
    background-size: 100% 100%;
  }
  //业务范围
  .bottom_content_box {
    width: 100%;
    height: 29rem;
    //公司模块
    .content_box {
      width: 80%;
      height: 25rem;
      margin: 0 auto;
      //业务列表
      .list_box {
        width: 100%;
        height: 19rem;
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid #ccc;
        .concent_business {
          padding: 0 2rem;
          width: 60%;
          display: flex;
          justify-content: space-between;
          border-right: 1px solid #ccc;
          li {
            cursor: pointer;
          }
          .dataListItems {
            line-height: 2rem;
            p {
              line-height: 1rem;
              a {
                color: #ccc !important;
              }
            }
          }
        }
        .hot_list {
          width: calc(30% - 10rem);
          padding: 0 5rem;
          .hot_spot_top {
            .hot_content_ui {
              width: 100%;
              height: 3rem;
              overflow: auto;
            }
          }
          .qrcode {
            display: flex;
            justify-content: space-around;
          }
        }
      }
      //公司售前后服务
      .sell_service {
        width: 100%;
        height: 6rem;
        text-align: center;
      }
    }
    //公司信息
    .bottom_ps_box {
      width: 100%;
      height: 4rem;
      background-color: #ccc;
      //备案信息
      .infoRecord_box {
        width: 90%;
        height: 4rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .info_left {
          width: 80%;
        }
        .info_right {
          width: 10%;
          display: flex;
          justify-content: space-around;
        }
      }
    }
  }
}
</style>