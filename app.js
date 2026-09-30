const express = require('express')
const app = express()
const PORT = 3000

app.use((req, res, next)=>{
    req.user = "Guest";
    next()
})

app.get('/welcome', (req, res, next)=>{
    res.send(`Welcome ${req.user}`)
})

app.listen(PORT, ()=>{
    console.log(`Server start on port ${PORT}`)
})