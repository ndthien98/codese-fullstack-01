import React, { Component } from 'react'
import Sidebar from '../components/Sidebar';
import Cookies from 'js-cookie'
import {
  AccessAlarm as HomePageIcon,
  AccountCircle
} from '@material-ui/icons'

export default class NormalLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
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
        },
        {
          name: 'Trang cá nhân',
          icon: AccountCircle,
          link: '/me'
        },
      ]
  }
  fetchData = async () => {
    this.setState({
      user: {
        name: 'Thiên'
      }
    })
  }
  async componentDidMount() {
    const token = Cookies.get('token');
    if (!token) {
      window.location = '/';
      return;
    };
    await this.fetchData();
  }
  logout = () => {
    Cookies.remove('token');
    window.location = '/';
  }
  render() {
    return (
      <div>
        <main style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            height: '100',
            backgroundColor: 'orange',
            padding: 16
          }}>
            <h2 style={{width: '80%'}}>Chào mừng {this.state.user.name} đến với Shopese!</h2>
            <button style={{ width: '20%' }} onClick={this.logout}>Đăng xuất</button>
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
