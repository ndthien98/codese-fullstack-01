

import React, { Component } from 'react'
import axios from 'axios'
import Cookie from 'js-cookie'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      token: Cookie.get('token'),
      log: '',
      ten: ['thien','tiep tuc la thien']
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleChange2 = (index) => (event) => {
    this.setState({
      [name]: event.target.value
    })
  }

  handleLogin = async () => {
    // cross origin resource sharing 
    // const result = await axios.post('http://localhost:9999/api/auth/login',
    //   {
    //     username: this.state.username,
    //     password: this.state.password
    //   },
    // )

    axios.get('/', {})
      .then(data => {
      
    }).catch(err => {
      
    })

    try {
      await axios.get()
    } catch (err) {
      
    }
    const result = {
      data: {
        token: '123123'
      }
    }
    //1 localStorage.setItem('token', result.data.token)
    //2 dùng cookie
  
    Cookie.set('token', result.data.token, {
      expires: 365
    });
  }
  handleChangeName = (index) => (event) => {
    // treat state as immutable / mutable
    const newTen = { ...this.state.ten };
    newTen[index] = event.target.value
    this.setState({
      ten: newTen
    });
  }
  render() {
    return (
      <div>
        <h1> đăng nhập </h1>
        <input
          name="username"
          onChange={this.handleChange}
          type="text"
          value={this.state.username}
        >
        </input>
        <input
          name="password"
          onChange={this.handleChange}
          type="password"
          value={this.state.username}
        >
        </input>
        <button
        onClick={this.handleLogin}>
          đăng nhập
        </button>
        <h3>{this.state.username}</h3>
        <h3>{this.state.password}</h3>
        <h3>token {this.state.token}</h3>
        <h3>{this.state.log}</h3>
        {
          this.state.ten.map((value, index) => <div>
            <input
              value={value}
              onChange={this.handleChangeName(index)}
            >
            </input>
          </div>)
        }
      </div>
    )
  }
}

