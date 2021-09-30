require('dotenv').config() //this pulls in enviro vairalebles and puts them in config


console.log(process.argv[2]) 
console.log(process.argv[3]) 
console.log(process.env.USER) 
console.log(process.env.FOO) 

const express = require('express')

const server = express()

server.use(express.json())

server.get('/', (req,res)=>{
    res.json({
        message:"YO!"
    })
})

server.get('/hello', (req, res) => {
  res.send('<h1>HELLO THERE!</h1>')
})

const port = process.env.PORT || 3000

server.listen(port, () => {
  console.log(`listening on ${port}`)
})