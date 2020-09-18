import React, { Component } from 'react'
import {createBrowserHistory} from 'history'
export default class HomePage extends Component {
  constructor(props) {
    super(props)
    this.history = createBrowserHistory();
  }
  render() {
    console.log(this.history);
    return (
      <div>
        <h4>trang chủ</h4>
      </div>
    )
  }
}
