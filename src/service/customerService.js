const Customer = require('../models/Customer')

const createCustomerService = async (body)=>{
    try {
        // console.log(body);
        let result =  await Customer.insertMany(body.Customer)
        return result
    } catch (error) {
        return {
            EC:-1,
            error
        }
    }
    
}
const findCustomer = async(body)=>{
    try {
        // console.log(body);
        let result = await Customer.findOne(body)
        if(!result){
            return result = {status: 400, messenge: 'sai tài khoản hoặc mật khẩu!'}
        }
        return result

    } catch (error) {
        return {
            EC:-1,
            error
        }
    }
}


module.exports = {createCustomerService,findCustomer}
