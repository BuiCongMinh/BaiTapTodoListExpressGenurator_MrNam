require('dotenv').config()
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const dbState = [{
    value: 0,
    label: "Disconnected"
},
{
    value: 1,
    label: "Connected"
},
{
    value: 2,
    label: "Connecting"
},
{
    value: 3,
    label: "Disconnecting"
}];

const connection = async () => {
    try {
        const options = {
            autoIndex: false, // Don't build indexes
            serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
            socketTimeoutMS: 15000, // Close sockets after 45 seconds of inactivity
        }

        await mongoose.connect(`${process.env.DB_HOST}/TrelloAppMrNam`, options)
        const state = Number(mongoose.connection.readyState);
        console.log(dbState.find(f => f.value === state).label, "to db");

    } catch (error) {
        throw ({message: error})
    }

}


module.exports = connection
