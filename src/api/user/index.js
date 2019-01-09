/*
 * @Author: donger 
 * @Description: 用户相关接口
 */

import Http from '../index'

class UserService {
  // 用户登录
  static login = data => {
    return Http.request({
      url: '/login',
      method: 'post',
      data
    })
  }
  
  // 获取路由权限
  static authRouter = data => {
    return Http.request({
      url: '/authRouter',
      method: 'post',
      data
    })
  }
}

export default UserService
