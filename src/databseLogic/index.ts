import mongoose from "mongoose";

export default class userFunctions {

    async getByUserName (username: string) {
        return await mongoose.model('User').findOne({username})
    }

    async create(username:string, hashedPassword:string){
        try {
            const User =  mongoose.model('User');
            const user = new User({
                username,
                password : hashedPassword
            })
            await user.save()
            return user;
        } catch (error) {
            throw error
        }
    }

}