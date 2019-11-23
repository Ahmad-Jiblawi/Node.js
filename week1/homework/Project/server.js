const express = require('express')
const expHandleBare = require('express-handlebars')
const axios = require('axios')
const server = express()

server.get('/', (req,res) => {
  res.send('hello from backend to frontend!')
})

server.listen(3000, () => console.log('Server listen on port 3000'))