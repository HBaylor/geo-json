
/**
 * 返回公共的请求方法并挂载到vue实例上面   统一管理错误请求
 *
 * @param {any} url 请求的地址
 * @param {any} params 请求的参数
 * @param {any} type 请求的类型  默认为 POST
 */

import Axios from 'axios'
import { url } from './urls'
import ElementUI from 'element-ui'

Axios.interceptors.request.use(function (config) {
  // 在请求发送之前做一些事
  console.log('-------------')
  return config
}, function (error) {
  // 当出现请求错误是做一些事
  return Promise.reject(error)
})

Axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if (response.data.success) {
    console.log('成功')
  }
  return response
}, function (error) {
  // 对响应错误做点什么
  ElementUI.$message({
    message: error,
    type: 'error'
  })
  return Promise.reject(error)
})

export default {
  install (Vue, options) {
    Vue.prototype.axios = function (name, params, type = 'POST') {
      if (type === 'POST') {
        return Axios.post(url[name], params)
      }
      if (type === 'GET') {
        return Axios.get(url[name], {
          params: params
        })
      }
    }
  }
}
