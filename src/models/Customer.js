const mongoose = require('mongoose');
// const mongoose_delete = require('mongoose-delete'); 
// thư viện giúp chỉ xoá data một cách tạm thời được thôi !

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    phone: Number,
    email: String,
    image: String,
    description: String

},
    {
        timestamps: true,// tạo thêm các trường {createAt:(hiện thị thời gian tạo data),updateAt:(hiện thị thời gian update data)}
    },
    { collection: 'customer' }
);

const Customer = mongoose.model('customer', customerSchema);

module.exports = Customer;
