/*
 * @Author: donger
 * @Description: 折线图
 */

import React, { Component }   from 'react'
import echarts                from 'echarts'
import theme                  from './theme.json'

echarts.registerTheme('theme', theme)

class Line extends Component {
  constructor(props) {
    super(props)
    this.dom = React.createRef()
    this.el = null
  }

  initEcharts () {
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      grid: {
        top: '3%',
        left: '1.2%',
        right: '1%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '运营商/网络服务',
          type: 'line',
          stack: '总量',
          areaStyle: {normal: {
            color: '#2d8cf0'
          }},
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '银行/证券',
          type: 'line',
          stack: '总量',
          areaStyle: {normal: {
            color: '#10A6FF'
          }},
          data: [257, 358, 278, 234, 290, 330, 310]
        },
        {
          name: '游戏/视频',
          type: 'line',
          stack: '总量',
          areaStyle: {normal: {
            color: '#0C17A6'
          }},
          data: [379, 268, 354, 269, 310, 478, 358]
        },
        {
          name: '餐饮/外卖',
          type: 'line',
          stack: '总量',
          areaStyle: {normal: {
            color: '#4608A6'
          }},
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: '快递/电商',
          type: 'line',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          areaStyle: {normal: {
            color: '#398DBF'
          }},
          data: [820, 645, 546, 745, 872, 624, 258]
        }
      ]
    }

    this.el = echarts.init(this.dom.current, 'theme')
    this.el.setOption(option)
  }

  resize = () => {
    this.el.resize()
  }

  componentDidMount() {
    setTimeout(() => {
      this.initEcharts()
    }, 20)
    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.resize)
  }

  render() {
    return <div ref={this.dom} style={this.props.style}></div>
  }
}

export default Line
