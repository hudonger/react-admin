/*
 * @Author: donger
 * @Description: 顶部用户菜单
 */

import React, { Component }               from 'react'
import { Avatar, Icon, Dropdown, Menu }   from 'antd'

class User extends Component {
  renderMenu () {
    return (
      <Menu>
        <Menu.Item>
          <Icon type="user" />
          <span>个人中心</span>
        </Menu.Item>
        <Menu.Item onClick={ this.props.logout }>
          <Icon type="logout" />
          <span>退出登录</span>
        </Menu.Item>
      </Menu>
    )
  }

  render () {
    return (
      <Dropdown overlay={ this.renderMenu() }>
        <div className="user-wrap">
          <Avatar icon="user" src="/assets/image/avatar.png" />
          <span className="username">{ this.props.name }</span>
        </div>
      </Dropdown>
    )
  }
}


export default User
