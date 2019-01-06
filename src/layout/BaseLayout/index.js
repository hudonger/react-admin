/*
 * @Author: donger
 * @Description: 布局组件
 */

import React, { Component }   from 'react'
import { Layout }             from 'antd'
import SiderMenu              from '../SiderMenu'
import Header                 from '../Header'
import Footer                 from '../Footer'

const { Content } = Layout

class BaseLayout extends Component {
  render () {
    return (
      <Layout>
        <SiderMenu />
        <Layout>
          <Header />
          <Content style={{ margin: '24px' }}>
            {this.props.children}
          </Content>
          <Footer />
        </Layout>
      </Layout>
    )
  }
}

export default BaseLayout
