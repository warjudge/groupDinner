/**
 * 
 * http配置
 */

import axios from 'axios'
import router from '../router'

// axios 配置

axios.defaults.timeout = 50000


// http request 拦截器
// axios.interceptors.request.use(
//   config => {
//     if (localStorage.getItem('token')) {
//       config.headers.token = `${sessionStorage.getItem('token')}`
//     }
//     return config
//   },
//   err => {
//     return Promise.reject(err)
//   },
// )

// http response 拦截器
// axios.interceptors.response.use(
//   response => {
//     // console.log(2);
//     if(response.data.code=='505'){
//       // console.log(0);
//       router.replace({
//         path: '/',
//       });
//       localStorage.clear();
//     }
//     return response
//   },
//   error => {
   
//   },
// )

export default axios;

