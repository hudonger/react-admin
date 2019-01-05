/*
 * @Author: donger
 * @Description: axios 封装
 */

import axios          from 'axios'
import { message }    from 'antd'
import config         from '../config'

class Http {
  constructor (baseUrl = config.baseURL) {
    this.baseUrl = baseUrl
  }

  getConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }
    return config
  }
  interceptors (instance) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      return config
    }, err => {
      return Promise.reject(err)
    })

    // 响应拦截
    instance.interceptors.response.use(response => {
      const { data } = response
      if (data.code === 0) {
        return data.data
      } else {
        message.error('数据请求失败')
      }
    }, err => {
      return Promise.reject(err)
    })
  }
  request (options) {
    const instance = axios.create()

    options = Object.assign(this.getConfig(), options)

    this.interceptors(instance)

    return instance(options)
  }
}

export default Http
