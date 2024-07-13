<template>
  <div class="footer_box"> 
    <!-- //底部信息 -->
    <div class="bottom_content_box">
      <div class="join_company">
        <div class="join_company_box">
          <h4>想了解更多</h4>
          <h4>欢迎你的加入</h4>
        </div>
        <div class="join_company_button">
          <button>立即加入</button>
        </div>
      </div>
      <!-- //公司业务模块范围 -->
      <div class="content_box">
        <!-- //业务列表 -->
        <div class="list_box">
          <div class="list_box_left">
              <div class="logo">
                <img src="../assets/logo-footer1.png" alt="">
              </div>
              <div class="logo_arr">
                <div class="logo_left" > 
                  <img src="../assets/信息.png" alt=""> 
                </div>
                <p>邮箱地址</p>
              </div>
              <div class="logo_arr">
                <div class="logo_left">
                  <img src="../assets/邮箱.png" alt="">
                </div>
                <p>公司地址</p>
              </div>
          </div>
          <div class="concent_business">
            <!-- <ul>
              <li
                class="title_li"
                style="font-weight: bold; margin-bottom: 2rem"
                @click="goAbouRoute"
              >
                了解金创
              </li>
            </ul> -->
            <ul>
              <li
                class="title_li"
                style="font-weight: bold; margin-bottom: 2rem"
              >
                产品服务
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
            <div class="server_list">
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
            </div>
            <div class="server_list">
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
                >
                  了解公司
                </li>
                
              </ul>
            </div>
         
          </div>
          <div class="list_box_right">
              <div class="logo-top">
                <img src="../assets/th.jpg" alt="">
              </div>
              <p>关注微信公众号了解更多</p>
              <div class="logo-arr">
                <img src="../assets/微信.png" alt="">
                <img src="../assets/QQ.png" alt="">
                <img src="../assets/邮箱.png" alt="">
              </div>
          </div>
        </div> 
      </div>
      <!-- 公司信息 -->
      <div class="bottom_ps_box">
        <div class="infoRecord_box">
         <div class="info_left">
            <span class="time">2024</span>
            <span class="company">今创人力有限公司</span>
         </div>
          <div class="info_right">The&emsp;company&emsp;was&emsp;established&emsp;in&emsp;2024
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
.title_li{
  font-size: 1.1rem;
}
ul li {
  list-style: none;
}
.footer_box {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  // 公司客服
  // .customer_box {
  //   width: 100%;
  //   height: 11rem;
  //   background-image: url("../assets/swpOne.jpg");
  //   background-size: 100% 100%;
  // }
  //业务范围
  .bottom_content_box {
    width: 100%;
    height: 36rem;
    background-color: black;
    // 加入公司
    .join_company{
      width: 70%;
      height: 8rem;
      display: flex;
      margin: 0 auto; 
      justify-content: space-between; 
      .join_company_box{ 
        height:100%;
        h4{
          font-size: 1.3rem;
          color: white; 
        }
      }
      .join_company_button{
        width: 7rem;
        height: 6rem;
        line-height: 8rem;
        button{
          width: 7rem;
          height: 4rem;
          background-color: #b4b4b4;
          color: white;
        }
       button:hover{
          cursor: pointer;
        }
      }
    }
    //公司模块
    .content_box {
      width: 80%;
      height: 23rem;
      margin: 0 auto;
      //业务列表
      .list_box {
        width: 100%;
        height: 19rem;
        padding: 2rem 0;
        display: flex;
        justify-content: space-evenly; 
        border-bottom: 1px solid #aaabab;
        border-top: 1px solid #aaabab; 
        .list_box_left{ 
          .logo{
            width: 17rem;
            height: 5rem; 
            img{
              display: inline-block; 
              width: 100%;
              height: 100%;
            }
          }
          .logo_arr{
            width: 10rem;
            height: 6rem;
            display: flex;
            justify-content: space-between;
            .logo_left{
              width: 2rem;
              height: 2rem;
              line-height: 5rem;
              img{
                width: 100%;
                height: 100%;
              }
            }
            p{
              color: #ccc;
            }
          }
        }
        .concent_business {
          padding: 0 2rem;
          width: 40%;
          display: flex;
          justify-content: space-between; 
          color: white; 
          .server_list{
            width: 10rem;
            height: 20rem; 
            ul{
              height: 50%;
            }
          }
          .dataListItems {
            a{
              color: #ccc !important;
            }
            line-height: 2rem;
            p {
              line-height: 1rem;
              a {
                color: #ccc !important; 
              }
            }
          }
        }
        .list_box_right{
          width: 10%;
          .logo-top{
            width: 9rem;
            height: 9rem;
            margin-left: 0.5rem;
            img{
              width: 100%;
              height: 100%;
            }
          }
          p{
            color: #ccc;
          }
          .logo-arr{
            width: 10rem;
            display: flex;
            justify-content: space-between;
            img{
              width: 20%;
              
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
      height: 5rem;
      // background-color: black;
      //备案信息
      .infoRecord_box {
        width: 90%;
        height: 4rem;
        margin: 0 auto; 
        text-align: center;
        color: #ccc;
        .info_left { 
          width: 100%;
          height: 70%; 
          line-height: 3rem; 
          .company{ 
            margin-left: 1rem;
          } 
        }
      }
    }
  }
}
</style>