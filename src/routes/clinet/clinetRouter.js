const router = require ('express').Router()

router.get('/',(req,res)=>{
    res.render('homePage/home')
})

module.exports = router
