import instance from "@/utils/request";

export const loginApi=(paramss:LoginType)=>instance.post("/api/api/auth/local",paramss)

export const getDataApi=()=>instance.get("/api/api/news/1")

//热点新闻的接口
export const newsHotApi=()=>instance.post("/api/api/news/page",{
    page:0,
    size:10
})