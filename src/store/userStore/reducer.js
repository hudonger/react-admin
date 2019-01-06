/*
 * @Author: donger
 * @Description: 用户 reducer 模块
 */

import clone                        from 'clonedeep'
import { getStorage, setStorage, delStorage }   from '../../utils/util';

const userState = {
  userInfo: getStorage('userInfo')
}

export default (state = userState, action) => {
  const newState = clone(state)
  if (action.type === 'save_userInfo') {
    newState.userInfo = action.userInfo
    setStorage('userInfo', newState.userInfo)
    return newState
  }
  if (action.type === 'remove_userInfo') {
    newState.userInfo = null
    delStorage('userInfo')
    return newState
  }
  return state
}
