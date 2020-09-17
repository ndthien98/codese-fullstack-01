import React, { Component } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import NormalLayout from './layout/NormalLayout';
import { browserRouter } from "react-router";
import UserLayout from './layout/UserLayout';
import { createBrowserHistory } from "history";
import HomePage from './views/HomePage';
import SignIn from './views/SignIn';
import User from './views/User';
import Cookies from 'js-cookie'
const history = createBrowserHistory();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routers: [
        {
          component: HomePage,
          layout: Cookies.get('token') ? UserLayout : NormalLayout,
          path: '/',
        },
        {
          component: SignIn,
          layout: NormalLayout,
          path: '/sign-in',
        },
        {
          component: User,
          layout: UserLayout,
          path: '/me',
        }
      ]
    }
  }
  render() {
    return (
      <BrowserRouter history={browserRouter}>
        <Switch>
          {
            this.state.routers.map(e => (
                <Route exact path={e.path}>
                  <e.layout>
                    <e.component></e.component>
                  </e.layout>
                </Route>
              )
            )
          }
          <Route exact path ='/not-found'>
            <h1>không tồn tại</h1>
          </Route>
          <Redirect from='/' to='/not-found'></Redirect>
        </Switch>
      </BrowserRouter>
    )
  }
}
/**
 * /
 * /1823718723
 * /place-order
 * /category/apple
 * /order
 * /order/31231
 * /user
 */
