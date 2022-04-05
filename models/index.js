const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username : 'string',
    password : 'string'
})

mongoose.model('User',userSchema)