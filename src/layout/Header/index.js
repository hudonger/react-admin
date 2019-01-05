/*
 * @Author: donger
 * @Description: Header组件
 */

import React, { Component }     from 'react'
import { Layout, Icon }         from 'antd'
import { connect }              from 'react-redux'
import { changeMenuState }      from '../../store/layoutStore/actions'
import './index.scss'

const { Header } = Layout

class HeaderView extends Component {
  render () {
    return (
      <Header className="header" style={{ background: '#fff', padding: '0 24px' }}>
        <Icon
          className="trigger"
          type={ this.props.collapsed ? 'menu-unfold' : 'menu-fold' }
          onClick={ this.props.changeSiderMenu }
        />
      </Header>
    )
  }
}

const mapState = state => ({
  collapsed: state.layout.siderCollapsed,
  userInfo: state.user.userInfo
})

const mapDispatch = dispatch => ({
  changeSiderMenu () {
    dispatch(changeMenuState())
  }
})

export default connect(mapState, mapDispatch)(HeaderView)
