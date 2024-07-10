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
//新闻详情模块
import newsDetails from "../pages/newsPages/newsDetails/index.vue"
// 新闻出口
import newsAut from "../pages/news/index.vue"

// 三级路由
//产品服务 
// 外包模块
import OutSource from "../threePage/productsPage/outsource/index.vue"
//托管模块
import Hosting from "../threePage/productsPage/Hosting/index.vue"
//招聘模块
import Recruitment from "../threePage/productsPage/Recruitment/index.vue" 
//产业园区
import Operate from "../threePage/productsPage/operate/index.vue"
//用工模块
import Flexible from "../threePage/productsPage/Flexible/index.vue"
// 新闻详情
import newDetailsList from "../threePage/productsPage/newDetails/index.vue"


// 四级路由 用工模块
//招聘业务
import FourRectuitments from "@/fourPages/Rectuitments/index.vue"
//新媒体带货
import FourNews from "@/fourPages/News/index.vue"
//就业街小圆桌
import FourEmployment from "@/fourPages/Employment/index.vue"



//产品服务(三级) ==> 用工模块 四级
export const fourChildrenRoute=[
  {
    path:"/home/index/flexible/fourectuitments",
    name:"fourRectuitments",
    meta:{
      title:"招聘业务"
    },
    component:FourRectuitments
  },
  {
    path:"/home/index/flexible/foruenews",
    name: "fourNews",
    meta:{
      title:"新媒体带货"
    },
    component: FourNews
  },
  {
    path:"/home/index/flexible/fouremployment",
    name: "fourEmployment",
    meta:{
      title:"就业小圆桌"
    },
    component: FourEmployment
  }
]

//产品服务 三级
export const threeChildrenRoute=[
  {
    path:"/home/index/outsource",
    name: "outsource",
    meta:{
      title:"外包模块"
    },
    component: OutSource
  },
  {
    path:"/home/index/hosting",
    name: "hosting",
    meta:{
      title:"托管模块"
    },
    component: Hosting
  },
  {
    path:"/home/index/recruitment",
    name: "recruitment",
    meta:{
      title:"招聘模块"
    },
    component: Recruitment
  },
  // {
  //   path:"/home/index/operate",
  //   name: "operate",
  //   meta:{
  //     title:"产业园区"
  //   },
  //   component: Operate
  // },
  {
    path:"/home/index/flexible",
    name: "flexible",
    meta:{
      title:"用工模块"
    },
    component: Flexible,
    children:fourChildrenRoute
  }

]

//新闻详情
export const newsDetailsList=[
  {
    path:'/home/news/newDetailsHome',
    name:"newDetailsHome",
    mete:{
      title:"新闻列表"
    },
    component: newsDetails,
  },
   {
    path:"/home/news/newDetailsList/:id",
    name: "newDetailsList",
    meta:{
      title:"新闻详情"
    },
    component: newDetailsList, 
  }
]




//二级
export const routerChildren=[
  {
    path: "/home/index",
    name: "productsindex",
    meta:{
      title:"产品服务"
    },
    component: MyHome,
    children:threeChildrenRoute
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
  {
    path:"/home/news",
    name: "newsDetails",
    component: newsAut,
     meta:{
      title:"新闻中心"
    },
    children:newsDetailsList,
   redirect: "/home/news/newDetailsHome"
    
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
