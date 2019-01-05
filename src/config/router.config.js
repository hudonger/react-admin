/*
 * @Author: donger
 * @Description: 路由配置文件
 */

const routes = [
  {
    title: '首页',
    path: '/home',
    icon: 'codepen'
  },
  {
    title: '图标',
    path: '/charts',
    icon: 'codepen',
    children: [
      {
        title: '柱形图',
        path: '/charts/bar'
      },
      {
        title: '饼图',
        path: '/charts/pie'
      },
      {
        title: '折线图',
        path: '/charts/line'
      },
    ]
  },
  {
    title: '新闻',
    path: '/news',
    icon: 'codepen',
    children: [
      {
        title: '体育',
        path: '/news/sports'
      },
      {
        title: '财经',
        path: '/news/money'
      },
      {
        title: '科技',
        path: '/news/science'
      },
    ]
  },
  {
    title: '权限设置',
    path: '/permission',
    icon: 'codepen'
  }
]

export default routes
