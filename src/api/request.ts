import instance from "@/utils/request";

export const loginApi=(paramss:LoginType)=>instance.post("/api/api/auth/local",paramss)

export const getDataApi=(index)=>instance.get("/api/api/news/"+index )

//热点新闻的接口
export const newsHotApi=()=>instance.post("/api/api/news/page",{
    page:0,
    size:10
})