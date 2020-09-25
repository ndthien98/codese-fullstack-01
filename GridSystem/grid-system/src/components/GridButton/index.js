import { Button, Grid, Typography } from '@material-ui/core'
import React, { Component } from 'react'

export default class GridButton extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Grid item
        xs={this.props.xs || 12 }
        sm={this.props.sm || 12}
        md={this.props.md || 12}
        style={{backgroundColor: 'cyan'}}
      >
        <div style={{padding: 8}}>
          <Button
            color="primary"
            variant="outlined"
            {...this.props}
          >
            {this.props.children}
            
          </Button>
        </div>
      </Grid>
    )
  }
}
