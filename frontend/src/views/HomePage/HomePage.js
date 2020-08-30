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
// const axios = require('axios');
import axios from 'axios';

class HomePage extends React.Component{
  
  constructor(props) {
    super(props)
    this.state = {
      listProduct: [],
      total: 0,
      page: 2,
      size: 20
    }
  }
  async componentDidMount() {
    const linkApi = 'http://192.168.1.62:5000/api/v1/product/'
    const res = await axios.get(linkApi, {
      params: {
        page: this.state.page,
        size: this.state.size,
      }
    });
    console.log(res.data);
    this.setState({
      listProduct: res.data.data,
      total: res.data.metadata.total
    })
  };

  hamRenderProduct(product) {
    return (
      <Card>
        <CardHeader title={product["display"]} style={{backgroundColor:'#456456'}}/>
      <Divider></Divider>
      <CardContent>
        <Typography>{product.description}</Typography>
      </CardContent>
      <Divider></Divider>
      <CardActions>
        <Button>Chi tiết</Button>
      </CardActions>
    </Card>
    );
  };

  prevPage(){
    this.setState({
      ...this.state,
      page: this.state.page - 1
    })
  }

  nextPage = () => {
   this.setState({
      ...this.state,
      page: this.state.page + 1
    })
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
        (product) => this.hamRenderProduct(product)
        )}
    </div>
    )
  }

}

export default HomePage;