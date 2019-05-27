import axios from 'axios'
import Vue from 'vue'

const http = axios.create({
  baseURL: 'http://localhost:3000/admin/api'
})

// 给http请求加一个拦截器 通用的错误处理方法。
http.interceptors.response.use(res => {
  return res
}, err => {
  // 捕获异常，当服务端发来错误代码并返回信息，就在前端el ui上弹出错误信息。
  if (err.response.data.message) {
    Vue.prototype.$message({
      type: 'error',
      message: err.response.data.message
    })
  }
  
  return Promise.reject(err)
})

export default http
