const express = require('express');
const dbConnect = require('./src/config/db');
const cors = require('cors');

const server = express()
server.use(cors());
server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.get('/',(req,res)=>res.send('<h1>welcome</h1>'))

server.listen(8080, async() =>{ 
     await dbConnect();
     console.log('http://localhost:8080')
    })