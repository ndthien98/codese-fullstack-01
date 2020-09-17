import React, { Component } from 'react';
import {
  Button,
  Card, CardActions, CardContent, CardHeader, TextField
} from '@material-ui/core'
import Cookies from 'js-cookie'

export default class SignIn extends Component {
  
  handleSignIn = async () => {
    // const result = await api.auth.login(username, password);
    const result = {
      status: true,
      token: '123'
    }
    if (result.status) {
      Cookies.set('token', result.token);
      // window.location = '/';
      console.log(this.props.history);
      
    } else {
      alert('Đăng nhập thất bại');
    }
  }
  handleSignUp = () => {
    
  }
  render() {
    return (
      <Card>
        <CardHeader title="Đăng nhập"></CardHeader>
        <CardContent>
          <TextField
            type="email"
          ></TextField>
          <TextField
            type="password"
          ></TextField>
          <TextField
            type="number"
          ></TextField>
          <TextField
            type="date"
          ></TextField>
        </CardContent>
        <CardActions>
          <Button
            onClick={this.handleSignIn}
          >Đăng nhập</Button>
          <Button
            onClick={this.handleSignUp}
          >Đăng ký</Button>
        </CardActions>
      </Card>

    )
  }
}
