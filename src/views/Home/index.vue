<template>
  <div class="common-layout" ref="boxs">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <template
          v-if="
            (routerPath !== 'Home' && routerPath) || routerCurrent !== 'Home'
          "
        >
          <router-view />
        </template>
        <template v-else>
          <Homes />
        </template>
      </el-main>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
    <NavBack class="backCom">
      <slot></slot>
    </NavBack>
  </div>
</template>
<script setup lang="ts">
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import Homes from "@/components/Home.vue";
import NavBack from "@/components/NavBack.vue";
//api
import { loginApi, getDataApi } from "@/api/request";

import { ref, onMounted } from "vue";
import { onBeforeRouteUpdate, useRouter } from "vue-router";

const boxs = ref();

//路由守卫 ---- 获取路由信息控制是否为主页显示主页
const routerPath = ref();
const routerCurrent = ref();
const router = useRouter();

onMounted(async () => {
  const bodyWidth=document.body.clientWidth
  const widths = window.screen.width;
  const body = document.querySelector("#app") as any;
  //基于根元素字体大小设置
  body.style.width = widths / 14 + "rem";
  routerCurrent.value = router.currentRoute.value.name;
  // console.log(routerCurrent.value);
  const token = window.localStorage.getItem("token") || "";
  if (!token) {
    const { data } = await loginApi({
      identifier: "zhangsan",
      password: "123456",
    });
    // console.log(data);
    window.localStorage.setItem("token", data.jwt);
  } else {
    const res = await getDataApi("0");
    console.log(res);
  }
});
onBeforeRouteUpdate((to, from) => {
  routerPath.value = to.name;
});
</script>
<style scoped lang="scss">
.common-layout {
  padding: 0;
  .backCom {
    position: fixed;
    right: 1%;
    top: 50%;
    transform: translateY(-50%);
  }
}
.el-header {
  width: 100%;
  height: 5rem;
  margin: 0 auto;
  padding: 0 20px;
}
.el-main {
  width: 100%;
  min-height: 80rem;
  margin: 0;
  padding: 0 20px;
  overflow-y: hidden;
}
.el-footer {
  width: 100%;
  min-height: 40rem;
  margin: 0;
  padding: 0;
  background-color: black;
}
</style>
