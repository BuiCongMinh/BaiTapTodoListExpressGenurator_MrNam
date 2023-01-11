const {createCustomerService,findCustomer} = require('../service/customerService')

const createCustomer = async(req, res)=>{
    let customer =  await createCustomerService(req.body)
    if(customer.EC === -1){
        return res.status(500).json(customer)
    }
    
    return res.status(200).json(customer)
}

const loginCustomer = async(req,res)=>{
    // console.log(">>>req.body:", req.body);

    let customer = await findCustomer(req.body)
    // console.log(customer);
    if(customer.EC === -1){
        return res.status(500).json(customer)
    }
    if(customer.status === 400){
        return res.status(400).json(customer.messenge)
    }

    req.session.user = customer
    console.log(">>>Controller req.session:", customer);
    return res.status(200).json(customer)
}


const logoutCustomer = async (req,res)=>{
    req.session.destroy()
    console.log(">>>LogOut req.session:", req.session);
    res.status(200).json('destroy success!')
}

module.exports =  {logoutCustomer,createCustomer, loginCustomer}
