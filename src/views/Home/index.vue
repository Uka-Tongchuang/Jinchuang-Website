<template>
    <div class="common-layout">
        <el-container>
            <el-header>
               <Header />
            </el-header>
            <el-main>
                <template v-if="routerPath!=='Home'&&routerCurrent!=='Home'">
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

import {ref,onMounted} from "vue"
import { onBeforeRouteUpdate,useRouter } from 'vue-router';


const routerPath=ref("12")
const routerCurrent=ref()
const router=useRouter()
onMounted(()=>{
    routerCurrent.value=router.currentRoute.value.name
    console.log(routerCurrent.value);
})
onBeforeRouteUpdate((to, from) => {
  // 在当前路由改变，但是该组件被复用时调用
  // 举例来说，对于一个带有动态参数的路径 `/users/:id`，在 `/users/1` 和 `/users/2` 之间跳转的时候，
  // 由于会渲染同样的 `UserDetails` 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  // 因为在这种情况发生的时候，组件已经挂载好了，导航守卫可以访问组件实例 `this`
  routerPath.value=to.name;
//   console.log(routerPath.value);
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