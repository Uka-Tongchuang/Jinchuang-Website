<template>
    <div class="common-layout">
        <el-container>
            <el-header>
               <Header />
            </el-header>
            <el-main>
                <template v-if="routerPath!=='Home'&&routerPath||routerCurrent!=='Home'">
                   <router-view/>
                </template>
                <template v-else>
                   <Home/>
                </template>
            </el-main>
            <el-footer>
                <Footer/>
            </el-footer>
        </el-container>
    </div>
</template>
<script setup >
import Header from  "../../components/Header.vue"
import Footer from "../../components/Footer.vue"
import Home from "@/components/Home.vue"

//api
import {loginApi} from "@/api/request"

import {ref,onMounted} from "vue"
import { onBeforeRouteUpdate,useRouter } from 'vue-router';

//路由守卫 ---- 获取路由信息控制是否为主页显示主页
const routerPath=ref()
const routerCurrent=ref()
const router=useRouter()
onMounted(async ()=>{
    routerCurrent.value=router.currentRoute.value.name
    console.log(routerCurrent.value);
    const {data} =await loginApi({
        identifier:"zhangsan",
        password:"123456"
    })
    console.log(data);
})
onBeforeRouteUpdate((to, from) => {
  routerPath.value=to.name;
});

</script>
<style scoped lang="scss">
.el-header,.el-footer{
    padding: 0;
}
.el-footer{
    width: 100%;
    height: 40rem;
}
</style>