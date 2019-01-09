/*
 * @Author: donger
 * @Description: 饼图
 */

import React, { Component }   from 'react'
import echarts                from 'echarts'
import theme                  from './theme.json'

echarts.registerTheme('theme', theme)

class Bar extends Component {
  constructor(props) {
    super(props)
    this.dom = React.createRef()
    this.el = null
  }

  initEcharts () {
    const legend = this.props.value.map(v => v.name)

    const option = {
      title: {
        text: this.props.text,
        subtext: this.props.subtext,
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: legend
      },
      series: [
        {
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: this.props.value,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
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
    return <div id="pie" ref={this.dom} style={this.props.style}></div>
  }
}

export default Bar
