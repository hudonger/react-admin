/*
 * @Author: donger
 * @Description: 柱状图
 */

import React, { Component }   from 'react'
import echarts                from 'echarts'
import theme                  from './theme.json'

echarts.registerTheme('theme', theme)

class Bar extends Component {
  constructor(props) {
    super(props);
    this.dom = React.createRef()
    this.el = null
  }

  initEcharts () {
    const xAxisData = Object.keys(this.props.value)
    const seriesData = Object.values(this.props.value)

    const option = {
      title: {
        text: this.props.text,
        subtext: this.props.subtext,
        x: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        type: 'category',
        data: xAxisData
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          type: 'bar',
          data: seriesData
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

export default Bar
