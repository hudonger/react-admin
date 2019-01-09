import UserService    from '@/api/user'
import { setToken }   from '@/utils/util'

export const saveUserInfo = data => ({
  type: 'save_userInfo',
  userInfo: data
})

export const getUserInfo = (username, password, callback) => {
  return dispatch => {
    UserService.login({
      username,
      password
    }).then(res => {
      setToken(res.token)
      dispatch(saveUserInfo(res))
      callback()
    })
  }
}

export const removeUserInfo = () => ({
  type: 'remove_userInfo'
})
