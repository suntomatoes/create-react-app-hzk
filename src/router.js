//路由模块
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import Login from './component/login/login.js'
import Home from './component/home/home.js'

const AppRouter = () => {
  return (
    <Router>
      {/* <Link to="/login">denglu</Link>
      <Link to="/home">home</Link> */}

      <Switch>
        <Route ecact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  )
}

export default AppRouter
