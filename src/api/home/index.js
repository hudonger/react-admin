/*
 * @Author: donger 
 * @Description: 主页相关接口
 */

import Http from '../index'

class HomeService {
  // 用户登录
  static getPageInfo = () => {
    return Http.request({
      url: '/getHomeInfo'
    })
  }
}

export default HomeService
