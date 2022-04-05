import express from "express";
import mongoose from 'mongoose'
import expressCallback from "./expressCallback/index";
import signUpController from "./controllers/signUpController/index"


const app = express()
app.use(express.urlencoded({ extended : true}));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/clean-code-auth')
.then(() => {console.log('database is connected')},
err => {console.log('can not connect to database')})

app.post(
    '/signup',
    expressCallback(signUpController)
)
app.listen(5000, ()=>{
    console.log('app is running on port 5000')
})