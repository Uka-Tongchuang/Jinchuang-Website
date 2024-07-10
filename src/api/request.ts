import instance from "@/utils/request";

export const loginApi=(paramss:LoginType)=>instance.post("/api/api/auth/local",paramss)

export const getDataApi=()=>instance.get("/api/news/1")