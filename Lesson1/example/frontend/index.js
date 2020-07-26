const express = require('express')
const axios = require('axios')
const app = express()



app.get('/', (req, res) => {
  axios.get('http://localhost:6000/')
    .then(result => {
      res.send(`name: ${result.data.name} \n id:  ${result.data.id}`)
    })
    .catch(err => {
      res.send(`<h1>Lỗi</h1>`)
      console.log(err);
    })
})

app.listen(5000)
