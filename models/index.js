const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username : 'string',
    password : 'string'
})

mongoose.model('User',userSchema)

// module.exports = async(dbConnector)=>{
//     const userModel = new dbConnector.Schema({
//         username:"string",
//         password:"string"
//     })
// // }
// dbConnector.model('User',userModel)
// or const mongoose = dbConnector