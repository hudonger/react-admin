export const login = options => {
  const { username, password } = JSON.parse(options.body)
  if (username === 'kami' && password === '2233') {
    return {
      code: 1,
      msg: '登录成功',
      data: {
        id: 10001,
        token: 'biu biu biu',
        username: 'super_admin',
        email: '2233@qq.com'
      }
    }
  } else if (username === 'admin' && password === 'admin') {
    return {
      code: 1,
      msg: '登录成功',
      data: {
        id: 10002,
        token: 'hei hei hei',
        username: 'admin',
        email: '666@qq.com'
      }
    }
  } else {
    return {
      code: 0,
      msg: '账号密码错误'
    }
  }
}

export const authRouter = options => {
  const { token } = JSON.parse(options.body)
  if (token === 'biu biu biu') {
    return {
      code: 1,
      msg: '获取成功',
      data: {
        home: true,
        exception: true,
        exception_404: true,
        exception_500: true,
        user: true,
        user_center: true,
        user_setting: true,
        permission: true
      }
    }
  } else if (token === 'hei hei hei') {
    return {
      code: 1,
      msg: '获取成功',
      data: {
        home: true,
        exception: true,
        exception_404: true,
        exception_500: true,
        user: true,
        user_center: true,
        user_setting: true,
        permission: false
      }
    }
  }
}
