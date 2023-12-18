// 进行axios的二次封装: 使用请求与响应拦截器
import axios, { CreateAxiosDefaults } from 'axios'
import { ElMessage } from 'element-plus'

/**
 * 1.利用axios对象的create方法创建axios实例
 * 可以自定义其他配置: 如基础路径、超时时间等
 */
const config = {
  // 基础路径
  baseURL: import.meta.env.VITE_APP_BASE_API,
  // 超时时间
  timeout: 5000,
}
const request = axios.create(config as CreateAxiosDefaults)

/**
 * request实例添加请求与响应拦截器
 */
request.interceptors.request.use((config) => {
  /**
   * config配置对象, headers属性请求头, 经常给服务端携带公共参数
   */
  return config
})

request.interceptors.response.use(
  (response) => {
    /**
     * 成功的回调
     * 简化数据
     */
    return response.data
  },
  (error) => {
    /**
     * 失败的回调
     * 处理http网络错误
     */
    let message = ''
    const status = error.response.status
    switch (status) {
      case 401:
        message = 'Token过期'
        break
      case 403:
        message = '无权访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器出现问题'
        break
      default:
        message = '网络出现问题'
        break
    }
    // 提示错误信息
    ElMessage({
      type: 'error',
      message,
    })

    return Promise.reject(error)
  },
)

export default request
