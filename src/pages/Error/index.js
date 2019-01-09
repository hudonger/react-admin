import React, { Component } from 'react'

class ErrorPage extends Component {
  render () {
    const path = this.props.match.path
    if (path.indexOf('/404') !== -1) {
      return <div>404</div>
    } else if (path.indexOf('/500') !== -1) {
      return <div>500</div>
    }
  }
}

export default ErrorPage
