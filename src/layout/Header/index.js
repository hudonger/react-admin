/*
 * @Author: donger
 * @Description: Header组件
 */

import React, { Component }     from 'react'
import { Layout, Icon }         from 'antd'
import { connect }              from 'react-redux'
import { withRouter }           from 'react-router-dom'
import { changeMenuState }      from '@/store/layoutStore/actions'
import { removeUserInfo }       from '@/store/userStore/actions'
import { setToken }             from '@/utils/util'
import User                     from './components/user';
import './index.scss'

const { Header } = Layout

class HeaderView extends Component {
  render () {
    const { collapsed, changeSiderMenu, userInfo, handleLogout } = this.props
    return (
      <Header className="header" style={{ background: '#fff', padding: '0 24px' }}>
        <Icon
          className="trigger"
          type={ collapsed ? 'menu-unfold' : 'menu-fold' }
          onClick={ changeSiderMenu }
        />
        <div className="control-bar">
          <User name={ userInfo ? userInfo.username : '' } logout={ handleLogout } />
        </div>
      </Header>
    )
  }
}

const mapState = state => ({
  collapsed: state.layout.siderCollapsed,
  userInfo: state.user.userInfo
})

const mapDispatch = (dispatch, props) => ({
  // 控制侧边栏
  changeSiderMenu () {
    dispatch(changeMenuState())
  },

  // 退出登录
  handleLogout () {
    setToken('')
    dispatch(removeUserInfo())
    props.history.push('/login')
  }
})

export default withRouter(connect(mapState, mapDispatch)(HeaderView))
