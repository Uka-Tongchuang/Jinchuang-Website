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
//人事管理
import Personnel from "../threePage/productsPage/operate/index.vue"
//劳务派遣
import Labor from "../threePage/productsPage/Labor/index.vue"
// 岗位外包
import OutSource from "../threePage/productsPage/outsource/index.vue"
// 业务外包
import Hosting from "../threePage/productsPage/Hosting/index.vue"
//招聘流程外包
import Recruitment from "../threePage/productsPage/Recruitment/index.vue" 
//灵活用工用工模块
import Flexible from "../threePage/productsPage/Flexible/index.vue"


// 新闻详情
import newDetailsList from "../threePage/productsPage/newDetails/index.vue"

//三级路由 
// 客户案例 首页
import specialHome from "../threePage/pecialPage/homeList/index.vue"
//案例一
import specialFirstPage from "../threePage/pecialPage/centerSpecial/index.vue"
//案例二
import specialSecondPage from "../threePage/pecialPage/detailSpecial/index.vue"
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
    path:"/home/index/operate",
    name:"personnel",
    meta:{
      title:"人事管理"
    },
    component:Personnel
  },
  {
    path:"/home/index/labor",
    name:"labor",
    meta:{
      title:"劳务派遣"
    },
    component:Labor
  },
  {
    path:"/home/index/outsource",
    name: "outsource",
    meta:{
      title:"岗位外包"
    },
    component: OutSource
  },
  {
    path:"/home/index/hosting",
    name: "hosting",
    meta:{
      title:"业务外包"
    },
    component: Hosting
  },
  {
    path:"/home/index/recruitment",
    name: "recruitment",
    meta:{
      title:"招聘流程外包"
    },
    component: Recruitment
  },
  {
    path:"/home/index/flexible",
    name: "flexible",
    meta:{
      title:"灵活用工解决方案"
    },
    component: Flexible,
    children:fourChildrenRoute
  }

]

//客户中心 ==> 三级  ==> 客户详情加列表
export const specialList=[
  {
    path:"/home/special",
    redirect: "/home/special/specialHome"
  },
  {
    path:'/home/special/specialHome',
    name:"specialHome",
    mete:{
      title:"客户列表"
    },
    component: specialHome,
  },
   {
    path:"/home/special/specialfirst",
    name: "specialfirst",
    meta:{
      title:"客户案例First"
    },
    component: specialFirstPage, 
  },
  {
    path:"/home/special/specialsecond",
    name: "specialsecond",
    meta:{
      title:"客户案例Second"
    },
    component: specialSecondPage, 
  }
]
//新闻中心 ==> 三级  ==> 新闻详情加列表
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
    children:specialList,
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
