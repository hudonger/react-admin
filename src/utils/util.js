/*
 * @Author: donger
 * @Description: 工具函数
 */

import Cookies from 'js-cookie'
import config from '../config'

const TOKEN_KEY = 'token'

// 设置 cookie
export const setToken = token => {
  Cookies.set(TOKEN_KEY, token, {
    expires: config.cookieExpires || 1
  })
}

// 获取 cookie
export const getToken = () => {
  const token = Cookies.get(TOKEN_KEY)
  return token ? token : false
}

// 获取url参数
export const getUrlParam = name => {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  let result = window.location.search.substr(1).match(reg)
  return result ? decodeURIComponent(result[2]) : null
}

 // 格式化时间戳
export const formateDate = time => {
  if (!time) return ''
  const date = new Date(time)
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${Number(date.getSeconds()) < 10 ? "0" + date.getSeconds() : date.getSeconds()}`
}

// 设置本地存储
export const setStorage = (key, data) => {
  if (data == null || data === '') {
    alert('请存入有效值')
    return
  }
  localStorage.setItem(key, JSON.stringify(data))
}

// 获取本地存储
export const getStorage = key => {
  const data = localStorage.getItem(key)
  if (data !== null) return JSON.parse(data)
}

// 删除本地存储
export const delStorage = key => {
  localStorage.removeItem(key)
}
