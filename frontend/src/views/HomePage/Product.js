import React, { Component } from 'react'
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
} from '@material-ui/core'
export default class Product extends Component {
  render() {
   
       return (
      <Card>
        <CardHeader title={this.props.product["display"]} style={{backgroundColor:'#456456'}}/>
      <Divider></Divider>
      <CardContent>
        <Typography>{this.props.product.description}</Typography>
      </CardContent>
      <Divider></Divider>
      <CardActions>
        <Button>Chi tiết</Button>
      </CardActions>
    </Card>
    );
  }
}
