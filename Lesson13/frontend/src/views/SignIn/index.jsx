import React, { Component } from 'react';
import {
  Button,
  Card, CardActions, CardContent, CardHeader, TextField
} from '@material-ui/core'
import Cookies from 'js-cookie'
import api from '../../api';
import { createBrowserHistory } from "history";
export default class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.history = createBrowserHistory({forceRefresh: true});
  }
  handleSignIn = async () => {
    const result = await api.auth.login(this.state.username, this.state.password);
    result.status = true;
    if (result.status) {
      Cookies.set('token', result.token);
      this.history.push('/')
      console.log(this.props.history);
    } else {
      alert(result.message);
    }
  }
  handleSignUp = () => {
    this.history.push('/sign-up')
  }
  render() {
    return (
      <Card style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
        <CardHeader title="Đăng nhập"></CardHeader>
        <CardContent style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
          <TextField
            label="Tài khoản"
            onChange={(event)=>this.setState({username: event.target.value})}
          ></TextField>
          <TextField
            label="Mật khẩu"
            onChange={(event)=>this.setState({password: event.target.value})}
            type="password"
          ></TextField>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleSignIn}
          >Đăng nhập</Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={this.handleSignUp}
          >Đăng ký</Button>
        </CardActions>
      </Card>

    )
  }
}
