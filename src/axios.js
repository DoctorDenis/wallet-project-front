import axios from "axios";

const instance = axios.create({
   baseURL:' https://wallet-project.cyclic.app/api-docs/'
    
})

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem("token")
    return config;
})

export default instance;