import React, { Component } from 'react'
import './index.scss'

const ErrorLayout = props => {
  console.log(props)
  return (
    <div className="error-page">
      <img src={ props.img }  alt="error_code" />
      <div className="info">
        <h1>{ props.code }</h1>
        <div className="tip">{ props.tip }</div>
      </div>
    </div>
  )
}

class ErrorPage extends Component {
  render () {
    const path = this.props.match.path
    if (path.indexOf('/404') !== -1) {
      return <ErrorLayout code="404" img="./assets/image/404.svg" tip="抱歉，你访问的页面不存在" />
    } else if (path.indexOf('/500') !== -1) {
      return <ErrorLayout code="500" img="./assets/image/500.svg" tip="抱歉，服务器出错了" />
    }
  }
}

export default ErrorPage
