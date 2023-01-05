const router = require('express').Router()
const Task = require("../../models/Task")



router.get('/', async (req, res) => {
    try {
        const result = await Task.find({})
        // console.log('>>>data : ', result);
        res.render('homePage/home',{result})
    } catch (error) {
        res.status(500).json(error)
    }

})

router.get('/create-user',(req,res)=>{
    res.render('createPage/create')
})

module.exports = router

