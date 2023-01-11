const checkCustomerMiderwrere = (req,res,next)=>{
    console.log(">>>req.customer:", req.session);
    if(req.session.user){
        next()
    }else{
        res.redirect('/login')
    }
}

module.exports ={checkCustomerMiderwrere}