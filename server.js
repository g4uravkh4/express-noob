const express = require('express')
const app = express()

// to use ejs as view engine
app.set('view engine', 'ejs')

// can use methods like get, post, delete, patch etc 
app.get("/",(req, res) => {

// res.send("not hello world")
// res.status(500).json({ message: "Errrr"})
// res.status(500).send("hi")
// res.download('server.js')

res.render("index", {text:"-hello"})
})

const userRouter = require('./routes/users') //imported here
app.use('/users', userRouter) //using this to link router

app.listen(3000)