/*
 * @Author: donger
 * @Description: 布局组件 reducer 模块
 */

import clone from 'clonedeep'

const layoutState = {
  siderCollapsed: false
}

export default (state = layoutState, action) => {
  const newState = clone(state)
  if (action.type === 'change_siderMenu') {
    newState.siderCollapsed = !newState.siderCollapsed
    return newState
  }
  return state
}
