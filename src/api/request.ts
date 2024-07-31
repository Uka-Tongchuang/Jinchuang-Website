type LoginType={
    identifier:string;
    password:string;
}
import instance from "@/utils/request";

export const loginApi=(paramss:LoginType)=>instance.post("/api/api/auth/local",paramss)

export const getDataApi=(index:string)=>instance.get("/api/api/news/"+index )

//热点新闻的接口
export const newsHotApi=()=>instance.post("/api/api/news/page",{
    page:0,
    size:10
})