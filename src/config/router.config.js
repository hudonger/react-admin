/*
 * @Author: donger
 * @Description: 路由配置文件
 */

const routes = [
  {
    title: '首页',
    name: 'home',
    path: '/home',
    icon: 'home'
  },
  {
    title: '异常页',
    name: 'exception',
    path: '/exception',
    icon: 'warning',
    children: [
      {
        title: '404',
        name: 'exception_404',
        path: '/exception/404'
      },
      {
        title: '500',
        name: 'exception_500',
        path: '/exception/500'
      },
    ]
  },
  {
    title: '个人页',
    name: 'user',
    path: '/user',
    icon: 'user',
    children: [
      {
        title: '个人中心',
        name: 'user_center',
        path: '/user/center'
      },
      {
        title: '个人设置',
        name: 'user_setting',
        path: '/user/setting'
      },
    ]
  },
  {
    title: '权限设置',
    name: 'permission',
    path: '/permission',
    icon: 'lock'
  }
]

export default routes
