const mongoose = require("mongoose");

const Task = mongoose.model('tasks', new mongoose.Schema({

    tile:{ type: String, required: true },
    des: String,
    deadline: Date,
    status: {type: String, default: 'doing'},
    member:String,
    role:{type: String, default: 'guest'},
}))

module.exports = Task
