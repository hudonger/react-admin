/*
 * @Author: donger
 * @Description: 路由配置文件
 */

const routes = [
  {
    title: '首页',
    path: '/home',
    icon: 'home'
  },
  {
    title: '异常页',
    path: '/exception',
    icon: 'warning',
    children: [
      {
        title: '404',
        path: '/exception/404'
      },
      {
        title: '500',
        path: '/exception/500'
      },
    ]
  },
  {
    title: '个人页',
    path: '/user',
    icon: 'user',
    children: [
      {
        title: '个人中心',
        path: '/user/center'
      },
      {
        title: '个人设置',
        path: '/user/setting'
      },
    ]
  },
  {
    title: '权限设置',
    path: '/permission',
    icon: 'lock'
  }
]

export default routes
