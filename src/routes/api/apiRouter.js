const router = require('express').Router()
const {deleteTodoList,pacthTodoList,getTodoList,postTodolist} = require('../../controller/todoListController')

router.get('/todolist',getTodoList)

router.post('/todolist',postTodolist)

router.patch('/todolist',pacthTodoList)

router.delete('/todolist',deleteTodoList)

module.exports = router
