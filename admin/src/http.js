import axios from 'axios'
// 写成单独的模块 可以供外部使用 到main.js中引用
const http = axios.create({
  
  baseURL: 'http://localhost:3000/admin/api'
})

export default http