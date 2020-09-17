import React, { Component } from 'react'
import Sidebar from '../components/Sidebar';
import {
  AccessAlarm as HomePageIcon,
  AccountCircle
} from '@material-ui/icons'

export default class NormalLayout extends Component {
  constructor(props) {
    super(props);
 this.navigation = [
        {
          name: 'Trang chủ',
          icon: HomePageIcon,
          link: '/'
        },
        {
          name: 'Hãng laptop',
          icon: AccountCircle,
          link: '/category'
        },
        {
          name: 'Đơn hàng',
          icon: AccountCircle,
          link: '/order'
        }
      ]  }
  render() {
    return (
      <div>
        <main style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
          <div style={{
            height: '100',
            backgroundColor: 'orange'
          }}>
            <h2>Chào mừng bạn đến với Shopese!</h2>
            <button>Đăng nhập</button>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'row',

          }}>
            <div style={{
              display: 'flex',
              flex: 1,
              backgroundColor: 'red',
            }}>
              <div>
                <Sidebar navigation={this.navigation}/>
              </div>
            </div>
            <div style={{
              display: 'flex',
              flex: 4,
              backgroundColor: 'green'
            }}>
              {this.props.children}
            </div>
          </div>
        </main>
      </div>
    )
  }
}
