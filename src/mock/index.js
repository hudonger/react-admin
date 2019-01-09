import Mock from 'mockjs'
import { login, authRouter } from './response/user'
import { getHomeInfo } from './response/home'

// 用户相关
Mock.mock(/\/api\/login/, 'post', login)
Mock.mock(/\/api\/authRouter/, 'post', authRouter)

// home
Mock.mock(/\/api\/getHome/, 'get', getHomeInfo)

export default Mock
