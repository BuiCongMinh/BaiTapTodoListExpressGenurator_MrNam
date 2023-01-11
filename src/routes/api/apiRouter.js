const router = require('express').Router()
const {deleteTodoList,pacthTodoList,getTodoList,postTodolist} = require('../../controller/todoListController')
const {logoutCustomer,createCustomer, loginCustomer} = require('../../controller/customerController')


router.get('/todolist',getTodoList)
router.post('/todolist',postTodolist)
router.patch('/todolist',pacthTodoList)
router.delete('/todolist',deleteTodoList)

// config Customer 
router.post('/customer', createCustomer)
router.post('/login-customer',loginCustomer)
router.post('/logout-customer',logoutCustomer)

module.exports = router
