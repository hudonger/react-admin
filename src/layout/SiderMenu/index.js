/*
 * @Author: donger
 * @Description: 侧边栏组件
 */

import React, { Component }     from 'react'
import { withRouter, Link }     from 'react-router-dom'
import { connect }              from 'react-redux'
import { Layout, Menu, Icon }   from 'antd'
import clone                    from 'clonedeep'
import UserService              from '@/api/user'
import { getToken }             from '@/utils/util'
import './index.scss'

const { Sider }   = Layout
const SubMenu     = Menu.SubMenu

const getAccessRouter = (router, rules) => {
  return router.filter(item => {
    if (rules[item.name]) {
      if (item.children) item.children = getAccessRouter(item.children, rules)
      return true
    } else {
      return false
    }
  })
}

class SiderMenu extends Component {
  state = {
    openKeys: []
  }
  
  rootSubmenuKeys = this.props.routerConfig.map(item => item.path)
  
  // 切换submenu
  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1)
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys })
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      })
    }
  }

  // 初始化菜单
  renderMenu = (list) => {
    return list.map(item => {
      if (item.children) {
        return (
          <SubMenu title={ <span>{item.icon && <Icon type={item.icon} />}<span>{item.title}</span></span> } key={item.path}>
            { this.renderMenu(item.children) }
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.path}>
          <Link to={item.path}>
            { item.icon && <Icon type={item.icon} /> }
            <span>{item.title}</span>
          </Link>
        </Menu.Item>
      )
    })
  }

  // 校验菜单
  authMenu () {
    UserService.authRouter({ token: getToken() }).then(rules => {
      if (Object.entries(rules).every(item => item[1])) {
        this.initMenu(this.props.routerConfig)
      } else {
        const routerList = getAccessRouter(clone(this.props.routerConfig), rules)
        this.initMenu(routerList)
      }
    })
  }

  // 初始化菜单
  initMenu (router) {
    const menuTree = this.renderMenu(router)
    this.setState({
      menuTree
    })
  }

  // 初始展开的 SubMenu 菜单项
  initOpenMenu () {
    const pathname = this.props.location.pathname
    const index = pathname.lastIndexOf('/')
    this.setState({
      openKeys: [pathname.slice(0, index)]
    })
  }

  componentWillMount () {
    this.authMenu()
    this.initOpenMenu()
  }

  render () {
    return (
      <Sider
        className="sider-container"
        trigger={null}
        collapsible
        width={256}
        collapsed={this.props.collapsed}
      >
        <div className="logo">
          <img src="./assets/image/react.svg" alt="logo" />
          <h1>kami admin</h1>
        </div>
        <Menu
          className="sider-menu"
          mode="inline"
          defaultSelectedKeys={ [this.props.location.pathname] }
          defaultOpenKeys={ this.state.openKeys }
          // openKeys={ this.state.openKeys }
          // onOpenChange={ this.onOpenChange }
          theme="dark"
        >
          {this.state.menuTree}
        </Menu>
      </Sider>
    )
  }
}

const mapState = state => ({
  collapsed: state.layout.siderCollapsed,
  routerConfig: state.layout.routerConfig
})

export default connect(mapState)(withRouter(SiderMenu))
