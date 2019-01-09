/*
 * @Author: donger
 * @Description: 主页
 */

import React, { Component }   from 'react'
import { Card, Icon }         from 'antd'
import CountTo                from '@/components/CountTo'
import ChartPie               from '@/components/Charts/pie'
import ChartBar               from '@/components/Charts/bar'
import ChartLine              from '@/components/Charts/line'
import HomeService            from '@/api/home'
import './index.scss'

class Home extends Component {
  state = {
    loaded: false
  }

  componentDidMount () {
    HomeService.getPageInfo().then(res => {
      this.setState({
        ...res,
        loaded: true
      })
    })
  }

  initCardInfo () {
    return this.state.cardData.map(item => {
      return (
        <Card
          key={item.id}
          className="card-item"
          title={item.title}
          extra={<Icon type="info-circle" style={{ color: '#fff', fontSize: 18 }} />}
          hoverable
          bordered={false}
          headStyle={{ color: '#fff', background: item.color, border: 'none', fontSize: 18 }}
          bodyStyle={{ fontSize: 32 }}
        >
          <div className="card-content">
            <CountTo id={'count_to_' +  item.id} end={item.count} />
            { item.up ?  <Icon type="rise" /> : <Icon type="fall" /> }
          </div>
        </Card>
      )
    })
  }

  render () {
    return this.state.loaded && (
      <div className="home-page">
        <div className="card-list">
          { this.initCardInfo() }
        </div>
        <div className="layout">
          <Card
            hoverable
            bordered={false}
            style={{ width: '32%' }}
          >
            <ChartPie style={{ height: 300 }} value={this.state.pieData} text="用户访问来源" />
          </Card>
          <Card
            hoverable
            bordered={false}
            style={{ width: '66%' }}
          >
            <ChartBar style={{ height: 300 }} value={this.state.barData} text="每周用户活跃量" />
          </Card>
        </div>
        <Card
          hoverable
          bordered={false}
        >
          <ChartLine style={{ height: 300 }} />
        </Card>
      </div>
    )
  }
}

export default Home
