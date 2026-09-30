const express = require('express')
const app = express()
const PORT = 3000

app.use((req, res, next)=>{
    res.setHeader('Content-Type', 'text/html')
    res.send("<h1>Hello World</h1>")
})

app.listen(PORT, ()=>{
    console.log(`Server start on port ${PORT}`)
})