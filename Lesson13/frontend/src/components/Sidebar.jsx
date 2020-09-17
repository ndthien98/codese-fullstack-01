import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'
export default class Sidebar extends Component {
  render() {
    return (
      <div style={{
        display: "flex",
        flexDirection:'column'
      }}>
        {
          this.props.navigation.map(e => (
            <Link to={e.link} style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <e.icon></e.icon>
              <h5>{e.name}</h5>
            </Link>
          ))
        }
      </div>
    )
  }
}
