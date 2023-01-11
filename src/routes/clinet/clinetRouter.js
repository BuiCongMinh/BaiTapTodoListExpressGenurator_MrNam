const router = require('express').Router()
const Task = require("../../models/Task")
const {checkCustomerMiderwrere} = require ('../../miderwrere/customerMiderwrere')


router.get('/login',(req,res)=>{
    res.render('createPage/create')
})


router.get('/',checkCustomerMiderwrere,async (req, res) => {
    try {
        const result = await Task.find({})
        // console.log('>>>data : ', result);
        res.render('homePage/home',{result})
    } catch (error) {
        res.status(500).json(error)
    }

})




module.exports = router

