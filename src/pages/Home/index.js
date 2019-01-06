/*
 * @Author: donger
 * @Description: 主页
 */

import React, { Component }   from 'react'
import { Card, Icon }         from 'antd'
import CountTo                from '@/components/CountTo';
import ChartPie               from '@/components/Charts/pie'
import ChartBar               from '@/components/Charts/bar'
import ChartLine              from '@/components/Charts/line'
import './index.scss'

class Home extends Component {
  state = {
    pieData: [
      {value: 335, name: '直接访问'},
      {value: 310, name: '邮件营销'},
      {value: 234, name: '联盟广告'},
      {value: 135, name: '视频广告'},
      {value: 1548, name: '搜索引擎'}
    ],
    barData: {
      Mon: 13253,
      Tue: 34235,
      Wed: 26321,
      Thu: 12340,
      Fri: 24643,
      Sat: 1322,
      Sun: 1324
    },
    cardData: [
      { id: 10001,title: '总销售额', count: 126560, color: '#2d8cf0', up: true },
      { id: 10002,title: '支付笔数', count: 6560, color: '#9a66e4', up: true },
      { id: 10003,title: '访问量', count: 8080, color: '#19be6b', up: true },
      { id: 10004,title: '新增用户', count: 602, color: '#e46cbb', up: false }
    ]
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
    return (
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
