/* eslint-disable no-unused-vars */
import React, { useState } from 'react'; // ES5
// const React = require('react') // ES6
import {
  TextField,
  Typography,
  Button,
  Paper,
} from '@material-ui/core'
// properties
function HomePage(props) {
  // defined states
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // const res.data.data[0].username;
  
  // handle function
  function handleChangeUsername(event) {
    setUsername(event.target.value)
  }


  function handleChangePassword(event) {
    setPassword(event.target.value)
  }

  const handleSignIn = () => {
    if (password.length < 6) alert('password yếu');
    console.log(username, password)
  }
  const handleSignUp = () => {
    console.log('đây là prop params1: ', props.params1)
    console.log('đây là prop p2: ', props.params2)
    console.log('đây là prop p3: ', props.params3)
    props.setVersion(props.version + 1)
  }
  
  const buttonStyle = {
    color: 'lightcyan',
    backgroundColor: '#d32f2f',
    margin: 10,
    width: 200,
    height: 50
  }
  function handleKeyPress(event) {
    if (event.key === 'Enter') handleSignIn(); 
  }
  return <Paper style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 20,
    background: '#4fc3f7'
  }}>
    <TextField
      label="Tài khoản"
      type="text"
      onKeyPress={handleKeyPress}
      onChange={handleChangeUsername} />
    
    <TextField
      label="Mật khẩu"
      type="password"
      onKeyPress={handleKeyPress}
      onChange={handleChangePassword} />
    
    <Button onClick={handleSignIn} variant="contained" style={buttonStyle}>
      <Typography>Đăng nhập</Typography>
    </Button>

    <Button onClick={handleSignUp} variant="text" style={buttonStyle}>
      <Typography>Đăng ký</Typography>
    </Button>
  </Paper>
}

// class MyComponent extends React.Component{
  
//   constructor(props) {
//     this.state = {
//       username: 'thien',
//       age: 12,
//       password: ''
//     }
//   }
  
//   componentWillMount() {
    
//   }
//   componentWillReceiveProps() {
    
//   }
//   componentWillUpdate() {
    
//   }
//   render() {
//     return <div>
//       <input></input>
//     </div>
//   }
// }

// class DoiTuong{
//   name = 'thien';
//   age = 12;
//   id;

//   thuoctinh1 = function ham(params) {
    
//   }

// }

export default HomePage;
// module.exports = App;

// https://material-ui.com/
  // npm i @material-ui/core
  // npm i @material-ui/icons
  

  // const handleChange = () => {
  // }
  // UI 
  // material ui color tool 
  // flex react js - chơi game này: froggy flex 