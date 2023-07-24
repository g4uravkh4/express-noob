const express = require('express')
const router = express.Router()  // this router acts same like a main app

router.get('/',(req,res) => {
    res.send("user list")
})

router.get('/new',(req,res) => {
        res.send("user list new")

})

module.exports = router //exported and can be used in main app