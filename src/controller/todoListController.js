const Task = require("../models/Task")


const getTodoList = async (req, res) => {
    console.log(">>>getTodolist req.session:", req.session);
    const result = await Task.find({})
    return res.status(200).json(result)
}

const postTodolist = async (req, res) => {
    try {
        const result = await Task.create(req.body)
        res.status(200).json(result)
    } catch (error) {
        return res.status(500).json({ message: 'post error!', error })
    }
}

const pacthTodoList = async (req, res) => {
    try {
        const result = await Task.updateOne({ _id: req.body.id },req.body)
        res.status(200).json(result)
    } catch (error) {
        return res.status(500).json({ message: 'post error!', error })
    }

}

const deleteTodoList = async(req,res)=>{
    try {
        const result = await Task.deleteOne({_id: req.body.id})
        res.status(200).json(result)
    } catch (error) {
        return res.status(500).json({message: 'post error!', error })
    }
}

module.exports = { deleteTodoList ,pacthTodoList, getTodoList, postTodolist }
