/*
 * @Author: donger 
 */

import React, { Component }                       from 'react'
import { HashRouter, Route, Switch, Redirect }    from 'react-router-dom'
import PrivateRoute                               from './components/PrivateRoute'
import { Provider }                               from 'react-redux'
import store                                      from './store'
import BaseLayout                                 from './layout/BaseLayout'
import Login                                      from './pages/Login'
import Home                                       from './pages/Home'
import ErrorPage                                  from './pages/Error'
import UserCenter                                 from './pages/User/center'
import UserSetting                                from './pages/User/setting'
import Permission                                 from './pages/Permission'
import './style/base.scss'

const Layout = () => (
  <BaseLayout>
    <Switch>
      <Route path="/home" component={ Home } />
      <Route path="/exception/404" component={ ErrorPage } />
      <Route path="/exception/500" component={ ErrorPage } />
      <Route path="/user/center" component={ UserCenter } />
      <Route path="/user/setting" component={ UserSetting } />
      <Route path="/permission" component={ Permission } />
      <Redirect to="/exception/404" />
    </Switch>
  </BaseLayout>
)

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route path="/login" component={ Login } />
            <PrivateRoute path="/" component={ Layout } />
          </Switch>
        </HashRouter>
      </Provider>
    )
  }
}

export default App
