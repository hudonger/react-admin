/*
 * @Author: donger
 * @Description: 权限路由
 */

import React                              from 'react'
import { Route, Redirect, withRouter }    from 'react-router-dom'
import { getToken }                       from '@/utils/util'

const PrivateRoute = ({ component: Component, ...rest }) => {
  if (getToken()) {
    return <Route {...rest} component={Component}  />
  } else {
    return <Redirect to={{
      pathname: '/login',
      state: { from: rest.location }
    }} />
  }
}

export default withRouter(PrivateRoute)
