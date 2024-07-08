import { createRouter, createWebHistory } from "vue-router"


//一级路由
import Home from "../views/Home/index.vue"
import NotFount from "../views/NotFount/index.vue"

//二级路由
//产品
import MyHome from "../pages/MyHome/index.vue"
//解决方案
import Talent from "../pages/Talent/index.vue"
//客户案例
import Special from "../pages/Special/index.vue"
//服务支持
import ServiceSupport from "../pages/ServiceSupport/index.vue"
//资源中心
import ResourceCenter from "../pages/ResourceCenter/index.vue"
//关于公司
import About from "../pages/About/index.vue"

//三级路由



//二级
export const routerChildren=[
  {
    path: "/home/index",
    name: "productsindex",
    meta:{
      title:"产品服务"
    },
    component: MyHome,
    children:[
      {
        path: "/home/index/edit",
        name: "edit",
        meta:{
          title:"编辑"
        },
        component: Home
      }
    ]
  },
  {
    path: "/home/talent",
    name: "talent",
    meta:{
      title:"解决方案"
    },
    component: Talent
  },
  {
    path:"/home/special",
    name: "special",
    meta:{
      title:"客户案例"
    },
    component: Special
  },
  // {
  //   path:"/home/ServiceSupport",
  //   name:"ServiceSupport",
  //   meta:{
  //     title:"服务支持"
  //   },
  //   component: ServiceSupport
  // },
  // {
  //   path:"/home/ResourceCenter",
  //   name:"ResourceCenter",
  //   meta:{
  //     title:"资源中心"
  //   },
  //   component: ResourceCenter
  // },
  {
    path: "/home/about",
    name: "About",
    meta:{
      title:"了解公司"
    },
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path:"/",
    redirect:"/home"
   },
   {
    path: "/home",
    name: "Home",
    component: Home,
    children: routerChildren
   },
   {
    path:"/:pathMatch(.*)*",
    name:"404",
    meta:{
      title:"页面资源未找到"
    },
    component:NotFount
   }
  ]
})

export default router
