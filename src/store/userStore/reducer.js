/*
 * @Author: donger
 * @Description: 用户 reducer 模块
 */

import clone from 'clonedeep'

const userState = {
  userInfo: null
}

export default (state = userState, action) => {
  const newState = clone(state)
  if (action.type === 'save_userInfo') {
    newState.userInfo = action.userInfo
    return newState
  }
  return state
}
