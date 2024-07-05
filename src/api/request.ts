import instance from "@/utils/request";

export const loginApi=(paramss:LoginType)=>instance.post("http://192.168.101.17:1337/api/auth/local",paramss)

export const getDataApi=()=>instance.get("http://192.168.101.17:1337/api/news")