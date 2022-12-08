import axios from "axios";
// let token;
// if (window.localStorage.getItem('persist:token')) {
//      token = JSON.parse(JSON.parse(window.localStorage.getItem('persist:token')).accesToken)
//   console.log(token)
//   console.log(JSON.stringify(window.localStorage.getItem('persist:token').accesToken))
//     console.log(`Bearer ${token}`)
    
// }
  


const instance = axios.create({
   baseURL:' https://wallet-project.cyclic.app/'
    
})

instance.interceptors.request.use((config) => {
    // config.headers.Authorization = JSON.parse(JSON.parse(window.localStorage.getItem('persist:token')).accesToken)
     config.headers.Authorization = `Bearer ${JSON.parse(JSON.parse(window.localStorage.getItem('persist:token')).accesToken)}`
    return config;
})

export default instance;