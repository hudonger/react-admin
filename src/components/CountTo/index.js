/*
 * @Author: donger
 * @Description: 数字渐变
 */

import React, { Component }   from 'react'
import CountUp                from 'countup'

class CountTo extends Component {
  initCounter () {
    const { 
      start       = 0,  // 起始值
      end         = 0,  // 结束值
      decimals    = 0,  // 要保留的小数位
      duration    = 2,  // 动画持续时间
     } = this.props

    this.counter =  new CountUp(this.props.id, start, end, decimals, duration)
  }

  componentDidMount () {
    this.initCounter()

    setTimeout(() => {
      this.counter.start()
    }, this.props.delay)
  }

  render () {
    return (
      <span id={ this.props.id }></span>
    )
  }
}

export default CountTo
