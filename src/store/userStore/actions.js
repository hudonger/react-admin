export const saveUserInfo = data => ({
  type: 'save_userInfo',
  userInfo: data
})

export const removeUserInfo = () => ({
  type: 'remove_userInfo'
})
