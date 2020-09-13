import axios from 'axios'

const APIAuth = axios.create({
  baseURL: 'localhost:9999'
});

APIAuth.interceptors.request.use(
  req => {
    console.log(req);
    req.headers.authorization = `Bearer ${Cookies.get('token')}`;
    return req;
  },
  err => {
    console.log(err);
    return Promise.reject(err);
  }
);
APIAuth.interceptors.response.use(
  res => {
    console.log(res.data);
  },
  err => {
  
  }
);


export default APIAuth