/*
 * @Author: donger 
 */

import React, { Component }             from 'react'
import { HashRouter, Route, Switch, Redirect }    from 'react-router-dom'
import PrivateRoute                     from './components/PrivateRoute'
import { Provider }                     from 'react-redux'
import store                            from './store'
import BaseLayout                       from './layout/BaseLayout'
import Login                            from './pages/Login'
import Home                             from './pages/Home'
import './style/base.scss'

class App extends Component {
  render () {
    const Layout = (
      <BaseLayout>
        <Switch>
          <PrivateRoute path="/home" component={Home}/>
          {/* <Route path="/Permission" component={Permission}/> */}
          <Redirect to="/home" />
        </Switch>
      </BaseLayout>
    )
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/" render={() => Layout}/>
          </Switch>
        </HashRouter>
      </Provider>
    )
  }
}

export default App
