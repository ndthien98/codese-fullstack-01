/* eslint-disable no-unused-vars */
import React from 'react'; 
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
} from '@material-ui/core'
import api from '../../api'

import { withSnackbar } from 'notistack';
import Product from './Product';


class HomePage extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      listProduct: [],
      total: 0,
      page: 1,
      size: 10
    }
  }
   fetchData = async() => {
    const res = await api.product.getAllProduct({
      page: this.state.page,
      size: this.state.size,
    })
    console.log(res);
    if (res.status) {
      this.setState({
        listProduct: res.data.data,
        total: res.data.metadata.total
      })
    } else {
      console.log(res.message);
      this.props.enqueueSnackbar(res.message,
      {variant: 'error'})
    }
  }
  async componentDidMount() {
    await this.fetchData();
  }

  async prevPage() {
    console.log(this.state);
    await this.setState({
      page: this.state.page - 1
    })
    console.log(this.state);
    await this.fetchData(); 
  }
  nextPage = async () => {
     await this.setState({
       page: this.state.page + 1
     });
     await this.fetchData()
  }

  render() {
    return (
      <div>
        <Typography>Total: {this.state.total}</Typography> 
        <Typography>Page: {this.state.page}</Typography>
        <Typography>Size: {this.state.size}</Typography>
        <Typography>paging: {this.state.page} - {Math.ceil(this.state.total/this.state.size)} </Typography>
        <Button onClick={this.prevPage.bind(this)}>prev</Button>
        <Button onClick={this.nextPage}>next</Button>
        {this.state.listProduct.map(
        (product) => <Product product={product}></Product>
        )}
    </div>
    )
  }

}

export default withSnackbar(HomePage);