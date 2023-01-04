const router = require('express').Router()

router.get('/',(req,res)=>{
    res.send('heeloo')
})

module.exports = router
