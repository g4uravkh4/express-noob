const express = require('express')
const router = express.Router()  // this router acts same like a main app

router.get('/',(req,res) => {
    res.send("user list")
})

router.get('/new',(req,res) => {
        res.send("user list new")
})

router.post('/',(req,res) => {
    res.send("create user")
})


// instead of doing this multiple time we can do it in another way

// router.get('/:id',(req,res) => {
   
//     res.send('create user with id ${req.params.id}')
// })

// router.put('/:id',(req,res) => {
//     res.send('create user with id ${req.params.id}')
// })

// router.delete('/:id',(req,res) => {
//     res.send('create user with id ${req.params.id}')
// })

// by this way we define one route and code is clean
router.route("/:id")
.get((req,res) => {
    console.log(req.users)
    res.send(`create user with id ${req.params.id}`)
})
.put((req,res) => {
     res.send(`create user with id ${req.params.id}`)
})
.delete((req,res) => {
     res.send(`create user with id ${req.params.id}`)
})

const users = [{name: "Bimo"},{name:"suman"}]

router.param("id", (req,res,next, id) => {
    // console.log(id)
    req.users = users[id]
    next()
})

module.exports = router //exported and can be used in main app