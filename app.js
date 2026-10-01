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

app.post('/orders', (req, res, next)=>{
    res.send(`A new order has been created.`)
})

app.get('/orders', (req, res, next)=>{
    res.send(`Here is the list of all orders`)
})
app.post('/users', (req, res, next)=>{
    res.send(`A new user has been added.`)
})
app.get('/users', (req, res, next)=>{
    res.send(`Here is the list of all users.`)
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})