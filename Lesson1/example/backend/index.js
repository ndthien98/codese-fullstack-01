const express = require('express')

const app = express()


app.get('/', (req, res) => {
  const data = {
    name: "Thien",
    id: 123
  }
  console.log('request');
  res.json(data)
})


app.listen(6000)