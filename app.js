const express = require('express')
const app = express();


app.get('/', (req, res)=>{
    res.send('Hi, from Maneesha....')
})

module.exports = app