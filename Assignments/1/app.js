const express = require('express');
app = express()

app.use('/',(req,res,next)=>{
    console.log("This is slash route with nothing");
    next()
})

app.use('/',(req,res,next)=>{
    res.send('Welcome Express Framework ')
})
app.use('/users',(req,res,next)=>{
    res.send('Users calling from framework')
})

app.listen(3000,()=>{
    console.log('running on 3000')
})