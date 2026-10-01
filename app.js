const express = require('express')
const app = express()
const PORT = 4000

app.use((req, res, next)=>{
    req.user = "Guest";
    next()
})

app.get('/welcome/:username', (req, res, next)=>{
    const { username } = req.params;
    const { role } = req.query;
    res.send(`Welcome ${username}, your role is ${role}`)
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

app.post('/products', (req, res, next)=>{
    res.send(`A new product has been added.`)
})
app.get('/products', (req, res, next)=>{
    res.send(`Here is the list of all products.`)
})
app.get('/categories', (req, res, next)=>{
    res.send(`Here is the list of all categories.`)
})
app.post('/categories', (req, res, next)=>{
    res.send(`A new category has been created.`)
})
app.use('/{*splat}', (req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>')
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})