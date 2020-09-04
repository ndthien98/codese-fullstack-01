import React from 'react';
import {
  Paper,
  Button
} from '@material-ui/core'
import {
  Switch,
  Route,
  BrowserRouter,
  Link
} from 'react-router-dom'
import HomePage from './views/HomePage';
import SignIn from './views/SignIn';
import NotFound from './views/NotFound';

function App(props) {
  return <BrowserRouter>
    <div
      style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'stretch',
      flex: 1
    }}>
      <Paper style={{padding: 24, display:'flex', flexDirection: 'column'}}>
        <Link to="/" >
          <Button>Trang chủ</Button>
        </Link>
        <Link to="/sign-in">
          <Button>Đăng nhập</Button>
        </Link>
      </Paper>
      <Switch>
        <Route
          component={HomePage}
          exact path="/"
        />
        <Route
          component={SignIn}
          exact path="/sign-in"
          />
        <Route
          component={NotFound}
          path="/"
        />
    </Switch>
    </div>
  </BrowserRouter>
}

export default App;