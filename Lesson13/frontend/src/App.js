import React, { Component } from 'react'
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter
} from 'react-router-dom';

// Layout
import NormalLayout from './layout/NormalLayout';
import UserLayout from './layout/UserLayout';
// Routers
import HomePage from './views/HomePage';
import SignIn from './views/SignIn';
import User from './views/User';
import Cookies from 'js-cookie'

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
          layout: 'div',
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
      <BrowserRouter>
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
 * Các route cần làm
 * /                        - trang chủ, hiển thị danh sách sản phẩm
 * /:productId              - hiển thị chi tiết sản phẩm
 * /order                   - hiển thị tất cả các order
 * /order/new               - tạo mới order
 * /category                - danh sách các loại mặt hàng
 * /category/:categoryId    - hiển thị các sản phẩm thuộc categoryId
 * /me                      - thông tin cá nhân
 * /sign-in                 - trang đăng nhập
 */