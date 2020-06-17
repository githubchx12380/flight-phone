import axios from 'axios'
import { Toast } from 'vant'

const request = axios.create({
    baseURL: 'http://192.168.1.107:1337/api'
})

request.defaults.baseURL + 

request.interceptors.request.use(function (config) {
    if(localStorage.getItem('token')&&localStorage.getItem('userId')) {
        config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
 

// 响应拦截器
request.interceptors.response.use(res => {
    const { msg, code } = res.data
    const errerrRegExp = /^3\d{2}$/;
    if (msg && errerrRegExp.test(code)) {
        Toast.fail(msg)
    }
    return res
})

export default request